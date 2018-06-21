import { trits, trytes } from '@iota/converter'
import Kerl from '@iota/kerl'
import {
    errors as _errors,
    isHash,
    isHashArray,
    isTrytes,
    isInteger,
} from '@iota/validators'
import { asArray, Trytes } from '../../types'

export const errors = {
    INVALID_ADDRESS: _errors.INVALID_ADDRESS,
    INVALID_CHECKSUM: _errors.INVALID_CHECKSUM,
    INVALID_TRYTES: _errors.INVALID_TRYTES,
    INVALID_CHECKSUM_LENGTH: 'Invalid checksum length'
}

const HASH_TRYTES_LENGTH = 81
const ADDRESS_CHECKSUM_TRYTES_LENGTH = 9
const MIN_CHECKSUM_TRYTES_LENGTH = 3


/**
* Generates and appends the 9-tryte checksum of the given trytes, usually an address.
*
* @method addChecksum
* 
* @param {string | string[]} input - Input trytes
* 
* @param {number} [checksumLength] - Checksum trytes length
* 
* @param {boolean} [isAddress] - default is true
*
* @returns {string | list} address (with checksum)
*/
export function addChecksum(
    input: Trytes,
    checksumLength?: number,
    isAddress?: boolean
): Trytes
export function addChecksum(
    input: ReadonlyArray<Trytes>,
    checksumLength?: number,
    isAddress?: boolean
): ReadonlyArray<Trytes>
export function addChecksum(
    input: Trytes | ReadonlyArray<Trytes>,
    checksumLength = ADDRESS_CHECKSUM_TRYTES_LENGTH,
    isAddress = true
) {
    const withChecksum: ReadonlyArray<Trytes> = asArray(input)
        .map(inputTrytes => {
            if (!isTrytes(inputTrytes)) {
                throw new Error(errors.INVALID_TRYTES)
            }

            if (isAddress && inputTrytes.length !== HASH_TRYTES_LENGTH) {
                if (inputTrytes.length == (HASH_TRYTES_LENGTH + ADDRESS_CHECKSUM_TRYTES_LENGTH)) {
                    return inputTrytes
                }

                throw new Error(errors.INVALID_ADDRESS)
            }

            if (!isInteger(checksumLength) ||
                checksumLength < MIN_CHECKSUM_TRYTES_LENGTH ||
                (isAddress && checksumLength !== ADDRESS_CHECKSUM_TRYTES_LENGTH)) {
                throw new Error(errors.INVALID_CHECKSUM_LENGTH)
            }

            let _inputTrytes = inputTrytes

            while (_inputTrytes.length % (HASH_TRYTES_LENGTH) !== 0) {
                _inputTrytes += '9'
            }

            const inputTrits = trits(_inputTrytes)
            const checksumTrits = new Int8Array(Kerl.HASH_LENGTH)

            const kerl = new Kerl()
            kerl.initialize()

            kerl.absorb(inputTrits, 0, inputTrits.length)
            kerl.squeeze(checksumTrits, 0, Kerl.HASH_LENGTH)

            return inputTrytes.concat(trytes(checksumTrits.slice(243 - checksumLength * 3, 243)))
        })

    return Array.isArray(input) ? withChecksum : withChecksum[0]
}

/**
 * Removes the 9-tryte checksum of the given input
 *
 * @method noChecksum
 * 
 * @param {string | string[]} input - Input trytes
 * 
 * @return {string | string[]} Trytes without checksum
 */
export function removeChecksum(input: Trytes): Trytes
export function removeChecksum(input: ReadonlyArray<Trytes>): ReadonlyArray<Trytes>
export function removeChecksum(input: Trytes | ReadonlyArray<Trytes>) {
    const tryteArray = asArray(input)

    if (!isHashArray(tryteArray)) {
        throw new Error(errors.INVALID_ADDRESS)
    }

    const noChecksum: ReadonlyArray<Trytes> = tryteArray.map(
        inputTrytes => inputTrytes.slice(0, HASH_TRYTES_LENGTH)
    )

    // return either string or the list
    return Array.isArray(input) ? noChecksum : noChecksum[0]
}

/**
 * @method noChecksum
 * 
 * @alias removeChecksum
 */
export const noChecksum = removeChecksum

/**
 * Validates the checksum of the given trytes
 *
 * @method isValidChecksum
 * 
 * @param {string} addressWithChecksum
 * 
 * @return {boolean}
 */
export const isValidChecksum = (addressWithChecksum: Trytes): boolean =>
    addressWithChecksum === addChecksum(removeChecksum(addressWithChecksum))