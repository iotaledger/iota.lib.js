[@iota/iota.js](../README.md) / highLevel/sendData

# Module: highLevel/sendData

## Table of contents

### Functions

- [sendData](highLevel_sendData.md#senddata)

## Functions

### sendData

▸ **sendData**(`client`, `indexationKey`, `indexationData?`): `Promise`<`Object`\>

Send a data message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`IClient`](../interfaces/models_IClient.IClient.md) \| `string` | The client or node endpoint to send the data with. |
| `indexationKey` | `Uint8Array` \| `string` | The index name. |
| `indexationData?` | `Uint8Array` \| `string` | The index data as either UTF8 text or Uint8Array bytes. |

#### Returns

`Promise`<`Object`\>

The id of the message created and the message.
