[@iota/iota.js](../README.md) / highLevel/addresses

# Module: highLevel/addresses

## Table of contents

### Functions

- [generateBip44Address](highLevel_addresses.md#generatebip44address)
- [generateBip44Path](highLevel_addresses.md#generatebip44path)

## Functions

### generateBip44Address

▸ **generateBip44Address**(`generatorState`, `isFirst`): `string`

Generate addresses based on the account indexing style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generatorState` | [`IBip44GeneratorState`](../interfaces/models_IBip44GeneratorState.IBip44GeneratorState.md) | The address state. |
| `isFirst` | `boolean` | Is this the first address we are generating. |

#### Returns

`string`

The key pair for the address.

___

### generateBip44Path

▸ **generateBip44Path**(`accountIndex`, `addressIndex`, `isInternal`): [`Bip32Path`](../classes/crypto_bip32Path.Bip32Path.md)

Generate a bip44 path based on all its parts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountIndex` | `number` | The account index. |
| `addressIndex` | `number` | The address index. |
| `isInternal` | `boolean` | Is this an internal address. |

#### Returns

[`Bip32Path`](../classes/crypto_bip32Path.Bip32Path.md)

The generated address.
