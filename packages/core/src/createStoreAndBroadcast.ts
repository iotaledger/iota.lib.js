import * as Promise from 'bluebird'
import { createBroadcastTransactions, createStoreTransactions } from './'
import { Callback, Provider, Trytes } from '../../types'

/**
 * @method createStoreAndBroadcast
 *
 * @param {Provider} provider
 *
 * @return {@link storeAndBroadcast} 
 */
export const createStoreAndBroadcast = (provider: Provider) => {
    const storeTransactions = createStoreTransactions(provider)
    const broadcastTransactions = createBroadcastTransactions(provider)

    /** 
     * Stores and broadcasts a list of _attached_ transaction trytes by calling `{@link storeTransactions}` and
     * `{@link broadcastTransactions}`.
     *
     * Note: Persist the transaction trytes in local storage **before** calling this command, to ensure
     * that reattachment is possible, until your bundle has been included.
     *
     * Any transactions stored with this command will eventaully be erased, as a result of a snapshot.
     *
     * @method storeAndBroadcast
     *
     * @param {Array<Trytes>} trytes - Attached transaction trytes
     * @param {Callback} [callback] - Optional callback
     *
     * @return {Promise<Trytes[]>} 
     * @fulfil {Trytes[]} Attached transaction trytes
     * @reject {Error}
     * - `INVALID_ATTACHED_TRYTES`: Invalid array of attached trytes
     * - Fetch error
     */
    return (
        trytes: ReadonlyArray<Trytes>,
        callback?: Callback<ReadonlyArray<Trytes>>
    ): Promise<ReadonlyArray<Trytes>> =>
        storeTransactions(trytes)
            .then(broadcastTransactions)
            .asCallback(callback)
}