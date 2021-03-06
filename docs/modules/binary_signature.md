[@iota/iota.js](../README.md) / binary/signature

# Module: binary/signature

## Table of contents

### Variables

- [MIN\_ED25519\_SIGNATURE\_LENGTH](binary_signature.md#min_ed25519_signature_length)
- [MIN\_SIGNATURE\_LENGTH](binary_signature.md#min_signature_length)

### Functions

- [deserializeEd25519Signature](binary_signature.md#deserializeed25519signature)
- [deserializeSignature](binary_signature.md#deserializesignature)
- [serializeEd25519Signature](binary_signature.md#serializeed25519signature)
- [serializeSignature](binary_signature.md#serializesignature)

## Variables

### MIN\_ED25519\_SIGNATURE\_LENGTH

• `Const` **MIN\_ED25519\_SIGNATURE\_LENGTH**: `number`

The minimum length of an ed25519 signature binary representation.

___

### MIN\_SIGNATURE\_LENGTH

• `Const` **MIN\_SIGNATURE\_LENGTH**: `number`

The minimum length of a signature binary representation.

## Functions

### deserializeEd25519Signature

▸ **deserializeEd25519Signature**(`readStream`): [`IEd25519Signature`](../interfaces/models_IEd25519Signature.IEd25519Signature.md)

Deserialize the Ed25519 signature from binary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `readStream` | [`ReadStream`](../classes/utils_readStream.ReadStream.md) | The stream to read the data from. |

#### Returns

[`IEd25519Signature`](../interfaces/models_IEd25519Signature.IEd25519Signature.md)

The deserialized object.

___

### deserializeSignature

▸ **deserializeSignature**(`readStream`): [`IEd25519Signature`](../interfaces/models_IEd25519Signature.IEd25519Signature.md)

Deserialize the signature from binary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `readStream` | [`ReadStream`](../classes/utils_readStream.ReadStream.md) | The stream to read the data from. |

#### Returns

[`IEd25519Signature`](../interfaces/models_IEd25519Signature.IEd25519Signature.md)

The deserialized object.

___

### serializeEd25519Signature

▸ **serializeEd25519Signature**(`writeStream`, `object`): `void`

Serialize the Ed25519 signature to binary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `writeStream` | [`WriteStream`](../classes/utils_writeStream.WriteStream.md) | The stream to write the data to. |
| `object` | [`IEd25519Signature`](../interfaces/models_IEd25519Signature.IEd25519Signature.md) | The object to serialize. |

#### Returns

`void`

___

### serializeSignature

▸ **serializeSignature**(`writeStream`, `object`): `void`

Serialize the signature to binary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `writeStream` | [`WriteStream`](../classes/utils_writeStream.WriteStream.md) | The stream to write the data to. |
| `object` | [`IEd25519Signature`](../interfaces/models_IEd25519Signature.IEd25519Signature.md) | The object to serialize. |

#### Returns

`void`
