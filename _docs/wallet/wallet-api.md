## WalletAPI

- **AddNewAddress**
- **AddAddressFromSeed**
- **ListAddresses**
- **RemoveAddress**
- **GetRecoverySeeds**
- **GetWalletInfo**
- **RelayTransferTxn**
- **RelayMessageTxn**
- **RelayTokenTxn**
- **RelayTransferTokenTxn**
- **RelaySlaveTxn**
- **EncryptWallet**
- **LockWallet**
- **UnlockWallet**
- **ChangePassphrase**
- **GetTransactionsByAddress**
- **GetTransaction**
- **GetBalance**
- **GetOTS**
- **GetHeight**
- **GetBlock**
- **GetBlockByNumber**
- **GetAddressFromPK**

## AddNewAddress
Adds new randomly generated address to the wallet.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/AddNewAddress
```
**Response**
```
{"address":"Q010500063bcadecc409dd914eec179e3a3cec6cbb7f4e35c7a6af274aa14b3b4349f55a3c2cc25"}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| height | UInt64 | Height of the newly generated XMSS tree |
| hash_function | String | Hash function for XMSS. Possible values are shake128, shake256, sha2_256. |

**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| address | String | Return the newly added QRL address |



## AddAddressFromSeed
Recovers address using seed (hexseed or mnemonic) and adds it to the wallet.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/AddAddressFromSeed -d '
{
  "seed": "01050089eb4fc690f1cae55c1e082ae92f2fd39d7b08001162a98c429f14421b50daafb59f5f65dbd21d7bc3f2c7004e4ba53b"
}'
```
**Response**
```
{"address":"Q0105005e6f4e2e95e77fde716e5defb23c4b7cb23124ab6966c9af5adc0ea9f26a12ce67f8c4ed"}
```
**Request**
```
curl -XPOST http://127.0.0.1:5359/api/AddAddressFromSeed -d '
{
  "seed": "absorb grape glance virtue consul aerial total saudi patron mobile whole poppy baron memo react chord string rock agony corps rely fig frock figure scalp girl cup stage holy monkey starve area fiddle warm"
}'
```
**Response**
```
{"address":"Q0106009f1a88d2f4a2af059c54a4f0fe4fa9d9d6debf6113ce002416e123b7775ce693da09c3da"}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| seed | String | Seed could be either hexseed or mnemonic. |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| address | String | Return the newly added QRL address |



## ListAddresses
List all addresses into the wallet.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/ListAddresses
```
**Response**
```
{"addresses":["Q010500063bcadecc409dd914eec179e3a3cec6cbb7f4e35c7a6af274aa14b3b4349f55a3c2cc25",”Q0105005e6f4e2e95e77fde716e5defb23c4b7cb23124ab6966c9af5adc0ea9f26a12ce67f8c4ed”]}
```


**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| addresses | String[] | Return list of addresses added into your wallet |



## RemoveAddress
Removes the address from the wallet.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/RemoveAddress -d '
{
  "address": "Q010500063bcadecc409dd914eec179e3a3cec6cbb7f4e35c7a6af274aa14b3b4349f55a3c2cc25"
}'
```
**Response**
```
{}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| address | String | QRL address to be removed from the wallet |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |



## GetRecoverySeeds
Get hexseeds and mnemonic seeds for an address exist into wallet.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetRecoverySeeds -d '
{
  "address": "Q010500063bcadecc409dd914eec179e3a3cec6cbb7f4e35c7a6af274aa14b3b4349f55a3c2cc25"
}'
```
**Response**
```
{"hexseed":"010500f215b136baaeb8e089bf002cdd7df9969ee284981058c8a0dd0ab1eeb6579b370bba299726de70593a26eddf65336f71","mnemonic":"absorb filled verge gather damp prize river angle sash admire syrup taut nor unite lyric locus fulfil memory sword prompt update has orange insane roman ohio chalky took furry petrol unfair warn cried way"}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| address | String | QRL Address |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| hexseed | String | Hexseed for the given address |
| mnemonic | String | Mnemonic words for the given address |



## GetWalletInfo
Get wallet information.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetWalletInfo
```
**Response**
```
{"version":1,"address_count":"4","is_encrypted":true}
```


**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| version | Uint32 | Wallet version number |
| address\_count | Uint64 | Number of addresses into the wallet |
| is\_encrypted | Boolean | True if wallet is already encryptedFalse if wallet is not encrypted |



## RelayTransferTxn
Creates the signed transfer transaction and relay it to the network. Signer address is used to sign the transaction and the signer address must exist into the wallet. 

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/RelayTransferTxn -d '
{
  "addresses_to": ["Q01050065b6caa35f315ae595d3a3bd4f619b18905d5354b87ec96d04bb8becaf826904371490cd", "Q0105003a35ea0d30b1dc12ebc27bd75aa8823f97c621c36e5ef6f615050573eb0afb6dda7a2575"],
  "amounts": [1000000000, 10000000000],
  "fee": 1000000000,
  "signer_address": "Q0106009f1a88d2f4a2af059c54a4f0fe4fa9d9d6debf6113ce002416e123b7775ce693da09c3da",
  "ots_index": 4
}'
```
**Response**
```
{"tx":{"fee":"1000000000","public_key":"AQYAJzRXnlAooje/Lu1OdDBeu6rpnB+UEhLJDF7PeHSvt67ZXYLIseGL1opchZhJ8XTPsbPEMGijWnvaxsl3p9nLTg==","signature":"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","transaction_hash":"z2spXF0pDeqJ6P87xUJmO7+4D2Wd05IiQUKWSf0lX1Y=","transfer":{"addrs_to":["AQUAZbbKo18xWuWV06O9T2GbGJBdU1S4fsltBLuL7K+CaQQ3FJDN","AQUAOjXqDTCx3BLrwnvXWqiCP5fGIcNuXvb2FQUFc+sK+23aeiV1"],"amounts":["1000000000","10000000000"]}}}
```

**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| addresses\_to | String[] | List of receiver&#39;s address |
| amounts | UInt64[] | List of amounts in Shor to be received by receiver. Must be in same order as of addresses\_to |
| fee | UInt64 | Transaction Fee in Shor |
| master\_address | String | This is an optional field, only need to be filled with QRL address, if the transaction is signed from slave address. |
| signer\_address | String | QRL Address signing the transaction. QRL Address must be already added into wallet. |
| ots\_index | UInt64 | One Time Signature Index to be used to sign the transaction. |

**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| tx | Transaction | Return the transaction that has been relayed to the network. |



## RelayMessageTxn
Creates the signed message transaction and relay it to the network. Signer address is used to sign the transaction and the signer address must exist into the wallet.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/RelayMessageTxn -d '
{
  "message": "Hello World!!!",
  "fee": 1000000000,
  "signer_address": "Q01060091aabafdc9569f4ddec95cbfbc5f10f871187777aabe375f16384dbfd7d3ba6922e566c9",
  "ots_index": 1
}'
```

**Response**
```
{"tx":{"fee":"1000000000","public_key":"AQYAsC7E7aJaW3s25HiWKA1dHgzz8Bf6S9x+2brotoLN+SXmdYyXDNZMAQq0st5IFxD4D/XOx6xtjYuB0JbPueC7bw==","signature":"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","transaction_hash":"mO92szwvYUxEVPUK6K9kLE1etG787CRPYHYRmPw6FtI=","message":{"message_hash":"SGVsbG8gV29ybGQhISE="}}}
```

**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| message | String | String Message of maximum 80 bytes. |
| fee | UInt64 | Transaction Fee in Shor |
| master\_address | String | This is an optional field, only need to be filled with QRL address, if the transaction is signed from slave address. |
| signer\_address | String | QRL Address signing the transaction. QRL Address must be already added into wallet. |
| ots\_index | UInt64 | One Time Signature Index to be used to sign the transaction. |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| tx | Transaction | Return the transaction that has been relayed to the network. |



## RelayTokenTxn
Creates the signed token transaction and relay it to the network. Signer address is used to sign the transaction and the signer address must exist into the wallet.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/RelayTokenTxn -d '
{
  "symbol": "TEST",
  "name": "TEST TOKEN",
  "owner": "Q01050045b3ebced076801784baf88d9b710ca5ef035f28ca27494e3709f550fffd840f9ea2c18d",
  "decimals": 5,
  "addresses": ["Q01050045b3ebced076801784baf88d9b710ca5ef035f28ca27494e3709f550fffd840f9ea2c18d", "Q01060091aabafdc9569f4ddec95cbfbc5f10f871187777aabe375f16384dbfd7d3ba6922e566c9"],
  "amounts": [100000, 100000],
  "fee": 1000000000,
  "signer_address": "Q01050045b3ebced076801784baf88d9b710ca5ef035f28ca27494e3709f550fffd840f9ea2c18d",
  "ots_index": 1
}'
```

**Response**
```
{"tx":{"fee":"1000000000","public_key":"AQUATX4LUzqKmuUWSTjE3aIvqq8fQBKKW+Qa0b9Fs0SXdgzJ9LXET0WDo2cmJIp/oRflIco9mMhsAh8nY9VVQ41hzg==","signature":"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","transaction_hash":"uDyC9xtE07CA4vURrnCXxnuagDAEFKi9HYsGwBzehSI=","token":{"symbol":"VEVTVA==","name":"VEVTVCBUT0tFTg==","owner":"AQUARbPrztB2gBeEuviNm3EMpe8DXyjKJ0lONwn1UP/9hA+eosGN","decimals":"5","initial_balances":[{"address":"AQUARbPrztB2gBeEuviNm3EMpe8DXyjKJ0lONwn1UP/9hA+eosGN","amount":"100000"},{"address":"AQYAkaq6/clWn03eyVy/vF8Q+HEYd3eqvjdfFjhNv9fTumki5WbJ","amount":"100000"}]}}}
```

**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| symbol | String | Symbol of the token |
| name | String | Name of the token |
| owner | String | QRL Address of the token owner |
| decimals | UInt64 | Maximum supported decimals |
| addresses | String[] | List of address to whom initial token will be assigned |
| amounts | UInt64[] | List of amounts of token to be assigned to addresses. Must be in same order as of addresses |
| fee | UInt64 | Transaction Fee in Shor |
| master\_address | String | This is an optional field, only need to be filled with QRL address, if the transaction is signed from slave address. |
| signer\_address | String | QRL Address signing the transaction. QRL Address must be already added into wallet. |
| ots\_index | UInt64 | One Time Signature Index to be used to sign the transaction. |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| tx | Transaction | Return the transaction that has been relayed to the network. |



## RelayTransferTokenTxn
Creates the signed transfer token transaction and relay it to the network. Signer address is used to sign the transaction and the signer address must exist into the wallet.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/RelayTransferTokenTxn -d '
{
  "addresses_to": ["Q01060091aabafdc9569f4ddec95cbfbc5f10f871187777aabe375f16384dbfd7d3ba6922e566c9"],
  "amounts": [10000],
  "token_txhash": "b83c82f71b44d3b080e2f511ae7097c67b9a80300414a8bd1d8b06c01cde8522",
  "fee": 100000,
  "signer_address": "Q01050045b3ebced076801784baf88d9b710ca5ef035f28ca27494e3709f550fffd840f9ea2c18d",
  "ots_index": 4
}'
```

**Response**
```
{"tx":{"fee":"100000","public_key":"AQUATX4LUzqKmuUWSTjE3aIvqq8fQBKKW+Qa0b9Fs0SXdgzJ9LXET0WDo2cmJIp/oRflIco9mMhsAh8nY9VVQ41hzg==","signature":"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","transaction_hash":"T5xnZVy1tWMXizcT8OpUnuwVI6JSQGKQSfWgkEQLMp8=","transfer_token":{"token_txhash":"uDyC9xtE07CA4vURrnCXxnuagDAEFKi9HYsGwBzehSI=","addrs_to":["AQYAkaq6/clWn03eyVy/vF8Q+HEYd3eqvjdfFjhNv9fTumki5WbJ"],"amounts":["10000"]}}}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| token\_txhash | String | Token transaction hash is the transaction hash by which the token has been created. This is used to uniquely identify each created token in QRL network. |
| addresses\_to | String[] | List of receiver&#39;s address |
| amounts | UInt64[] | List of Amounts to be received by receiver. Must be in same order as of addresses\_to |
| fee | UInt64 | Transaction Fee in Shor |
| master\_address | String | This is an optional field, only need to be filled with QRL address, if the transaction is signed from slave address. |
| signer\_address | String | QRL Address signing the transaction. QRL Address must be already added into wallet. |
| ots\_index | UInt64 | One Time Signature Index to be used to sign the transaction. |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| tx | Transaction | Return the transaction that has been relayed to the network. |

## RelaySlaveTxn
Creates the signed slave transaction and relay it to the network. Signer address is used to sign the transaction and the signer address must exist into the wallet.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/RelaySlaveTxn -d '
{
  "slave_pks": ["AQYAPYdez4/TrVmOUecaVLlpZnn1a+ltrfzMPCtQnhZzBtBxEEmp4/Qk199XQs0NMRcttHJ3JSI4qs5XSxEUKbXzWQ=="],
  "access_types": [0],
  "fee": 100000,
  "signer_address": "Q01050045b3ebced076801784baf88d9b710ca5ef035f28ca27494e3709f550fffd840f9ea2c18d",
  "ots_index": 5
}'
```

**Response**
```
{"tx":{"fee":"100000","public_key":"AQUATX4LUzqKmuUWSTjE3aIvqq8fQBKKW+Qa0b9Fs0SXdgzJ9LXET0WDo2cmJIp/oRflIco9mMhsAh8nY9VVQ41hzg==","signature":"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","transaction_hash":"fz5t+5DOHxc18j9MkXt6FD+O7F31ovSj/rLpX+lH5io=","slave":{"slave_pks":["AQYAPYdez4/TrVmOUecaVLlpZnn1a+ltrfzMPCtQnhZzBtBxEEmp4/Qk199XQs0NMRcttHJ3JSI4qs5XSxEUKbXzWQ=="],"access_types":[0]}}}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| slave\_pks | Bytes[] | List of Base64 encoded Public Keys which are allowed to act as slave |
| access\_types | UInt64[] | Current supported access\_type is 0 |
| fee | UInt64 | Transaction Fee in Shor |
| master\_address | String | This is an optional field, only need to be filled with QRL address, if the transaction is signed from slave address. |
| signer\_address | String | QRL Address signing the transaction. QRL Address must be already added into wallet. |
| ots\_index | UInt64 | One Time Signature Index to be used to sign the transaction. |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| tx | Transaction | Return the transaction that has been relayed to the network. |

## EncryptWallet
Encrypts the wallet with the given passphrase. This API only need to called once for encrypting the wallet first time.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/EncryptWallet -d '
{
  "passphrase": "demo123"
}'
```
**Response**
```
{}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| passphrase | String | Passphrase to encrypt the wallet |

**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |

## LockWallet
Locks the wallet and removes the passphrase from the memory of wallet daemon.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/LockWallet
```
**Response**
```
{}
```

**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |



## UnlockWallet
Unlocks the wallet and the passphrase is kept into the memory of wallet daemon.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/UnlockWallet -d '
{
  "passphrase": "demo123"
}'
```
**Response**
```
{}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| passphrase | String | Passphrase to unlock the wallet |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |



## ChangePassphrase
Change the passphrase.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/ChangePassphrase -d '
{
  "oldPassphrase": "demo123", 
  "newPassphrase": "demo234"
}'
```
**Response**
```
{}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| oldPassphrase | String | Old Passphrase |
| newPassphrase | String | New Passphrase |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |



## GetTransactionsByAddress
Get transactions hash and  other details for a given address.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetTransactionsByAddress -d '
{
  "address": "Q010500c66bf9e74721c58fd76dc945ac7c35a2e290c6653cc5e4a4fba762cf1254602437bf156e"
}'
```
**Response**
```
{"mini_transactions":[{"transaction_hash":"27d27c36a85f012ec8b906fd3d38de7bc2ec0f01a1dc2cab3bea1b71868dde61","amount":"100000"},{"transaction_hash":"aad2ba0626c7f1bcf47ea19342bfb888df19e875fcf86b80279be2a9ebdaeb0b","out":true,"amount":"12"}],"balance":"99988"}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| address | String | QRL address |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| mini_transactions | MiniTransaction[] | List of MiniTransations which includes, transaction_hash, amount and out.|
| balance | Uint64 | Total balance |




## GetTransaction
Get transaction details for a given transaction hash with number of confirmations if any.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetTransaction -d '
{
  "tx_hash": "4bdf221dadedd7c4c8657ad6aea88f8a119bd9fdfe1992df0e9c268b4c583d83"
}'
```
**Response**
```
{"tx":{"fee":"10000000","public_key":"AQYA6AzHi//hrXeAjGjoAUIWfAnm3S08CdsXOpscnc8bRB46bKL2Tl1NtVpwF63EJXsJVawv/v/zwCD8BLJ5Nqnl3w==","signature":"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","nonce":"2","transaction_hash":"S98iHa3t18TIZXrWrqiPihGb2f3+GZLfDpwmi0xYPYM=","transfer":{"addrs_to":["AQUAeDCOF2biluiReTdlkN9dxDNjDQIceNK29K/h/BvWIpJcPQAW","AQUAIdHWt8N0l6wTia9ZoDoqK2AgoZmIKBBRvWDlSydI6kfxDEOs"],"amounts":["1000000000","2000000000"]}},"confirmations":"13037"}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| tx\_hash | String | Transaction hash |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| tx | Transaction | Transaction Details |
| confirmations | Uint64 | The number of confirmations if any |



## GetBalance
Get the balance of the given QRL address.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetBalance -d '
{
  "address": "Q010600a9313090b8b7c63f55b1e98eb098d2a7a844ba283a1efc34c8da9fd68378365af3213673"
}'
```
**Response**
```
{"balance":"80709233943462"}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| address | String | QRL Address |

**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| balance | UInt64 | Balance in Shor |



## GetOTS
Get OTS bitfield and next unused OTS key index for a given QRL address.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetOTS -d '
{
  "address": "Q010600a9313090b8b7c63f55b1e98eb098d2a7a844ba283a1efc34c8da9fd68378365af3213673"
}'
```
**Response**
```
{"ots_bitfield":["Aw==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA==","AA=="],"next_unused_ots_index":"2"}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| address | String | QRL Address |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| ots\_bitfield | byte[][] | Ots bitfield data. Each 0 bit represent the ots key index is unused, while 1 indicates the ots key index has been used. |
| next\_unused\_ots\_index | UInt64 | Next Unused OTS Index |



## GetHeight
Get current blockchain height.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetHeight
```
**Response**
```
{"height":"11854"}
```


**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| height | UInt64 | Current Height of the blockchain |

## GetBlock
Get block details for a given header hash.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetBlock -d '
{
  "header_hash": "bc913b7488862d2ff884c26ab3aceb7481568799ef05d98e5fa974337e0d2847"
}'
```
**Response**
```
{"block":{"header":{"hash_header":"vJE7dIiGLS/4hMJqs6zrdIFWh5nvBdmOX6l0M34NKEc=","block_number":"2","timestamp_seconds":"1531736226","hash_header_prev":"YOS1hpoUALatbNjqDs0s9Ib7Ixfwc10rPdO4vSit+wA=","reward_block":"6656348353","merkle_root":"FNolJIny7K1CwkDXmuh7GFvWv1uSmYaXwpXb9n8DQL4=","mining_nonce":1},"transactions":[{"master_addr":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","nonce":"3","transaction_hash":"FNolJIny7K1CwkDXmuh7GFvWv1uSmYaXwpXb9n8DQL4=","coinbase":{"addr_to":"AQYAqTEwkLi3xj9VsemOsJjSp6hEuig6Hvw0yNqf1oN4NlrzITZz","amount":"6656348353"}}]}}
```


**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| header\_hash | String | Block Header Hash |



**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| block | Block | Block Details |

## GetBlockByNumber
Get block details for a given block number.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetBlockByNumber -d '
{
  "block_number": 2
}'
```
**Response**
```
{"block":{"header":{"hash_header":"vJE7dIiGLS/4hMJqs6zrdIFWh5nvBdmOX6l0M34NKEc=","block_number":"2","timestamp_seconds":"1531736226","hash_header_prev":"YOS1hpoUALatbNjqDs0s9Ib7Ixfwc10rPdO4vSit+wA=","reward_block":"6656348353","merkle_root":"FNolJIny7K1CwkDXmuh7GFvWv1uSmYaXwpXb9n8DQL4=","mining_nonce":1},"transactions":[{"master_addr":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","nonce":"3","transaction_hash":"FNolJIny7K1CwkDXmuh7GFvWv1uSmYaXwpXb9n8DQL4=","coinbase":{"addr_to":"AQYAqTEwkLi3xj9VsemOsJjSp6hEuig6Hvw0yNqf1oN4NlrzITZz","amount":"6656348353"}}]}}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| block\_number | UInt64 | Block Number |

**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| block | Block | Block Details |


## GetAddressFromPK
Get QRL address for a given public key.

**Request**
```
curl -XPOST http://127.0.0.1:5359/api/GetAddressFromPK -d '
{
  "pk": "AQIAFuy585ufQnXVpJ4jI0ahWuL6jFCikn2urBibjF8tGLxOOYO9VkKYxJri5/puKNS5VNjNWTmPEiWwjWFEhUruDg=="
}'
```
**Response**
```
{"address":"Q010200670246b0026436b717f199e3ec5320ba6ab61d5eddff811ac199a9e9b871d3280178b343"}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| pk | Bytes | Base64 encoded public key |

**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| address | String | QRL Address |
