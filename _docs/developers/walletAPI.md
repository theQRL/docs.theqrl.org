---
title: QRL Wallet API
categories: developers
tags: developers
---



Interfacing with the qrlWalletAPI is simple and straight forward. Follow the steps below to get started. This instruction set assumes you are installing on Ubuntu. 

1. Install the QRL Node and sync
  - This allows a secure connection to the network running on the local server
  - Find information at [https://docs.theqrl.org/node/QRLnode/](https://docs.theqrl.org/node/QRLnode/)
2. Run the QRL wallet daemon
  - `qrl_walletd`
3. Install [golang-go v1.8](https://golang.org/doc/install#tarball) or greater
3. Clone walletd-rest-proxy from the repo hosted at [https://github.com/theQRL/walletd-rest-proxy](https://github.com/theQRL/walletd-rest-proxy)
  - `go get github.com/theQRL/walletd-rest-proxy`
5. Start the wallet-rest-proxy 
  - This allows connection to the WalletDaemon
6. Send commands using cURL and begin using the QRL!


```bash
# Install qrl node Ubuntu
apt update && apt upgrade -y
apt-get -y install swig3.0 python3-dev python3-pip build-essential cmake pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev

pip3 install -U setuptools
pip3 install -U qrl


# Run the wallet daemon
qrl_walletd


#Clone walletd-rest-proxy
git clone https://github.com/theQRL/walletd-rest-proxy 

# go get the walletd-rest-proxy
go get github.com/theQRL/walletd-rest-proxy
cd $GOPATH/src/github.com/theQRL/walletd-rest-proxy
go build

# Run the wallet-rest-proxy
./walletd-rest-proxy -serverIPPort 127.0.0.1:5359 -walletServiceEndpoint 127.0.0.1:19010`


# Alternate paramaters may be passed to the API
curl -XPOST http://127.0.0.1:5359/api/{METHOD} -d '{"{PARAMATER1}":"{SETTING1}","{PARAMATER2}":"{SETTING2}"}'


# Example adding an address to a wallet with height 18 and hash_function sha_256
curl -XPOST http://127.0.0.1:5359/api/AddNewAddress -d '{"height":"18","hash_function":"sha2_256"}'
```



`serverIPPort` indicates the `IP:Port` at which REST API service will be provided. 

`walletServiceEndpoint` indicates the `IP:Port` at which the WalletAPIService is running.

If you have not changed the host and port at config.yml of QRL Node, then the above command should work fine.

Alternative parameters may be entered by calling the `-d` flag and using the syntax shown. You may call multiple parameters separated by `,`



## AddNewAddress

Adds new randomly generated address to the wallet.

#### Request

```
curl -XPOST http://127.0.0.1:5359/api/AddNewAddress
```

#### Response

```
{"address":"Q010500063bcadecc409dd914eec179e3a3cec6cbb7f4e35c7a6af274aa14b3b4349f55a3c2cc25"}
```

#### Request

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| height | UInt64 | Height of the newly generated XMSS tree |
| hash_function | String | Hash function for XMSS. Possible values are shake128, shake256, sha2_256. |

#### Response

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| address | String | Return the newly added QRL address |



## AddAddressFromSeed

Recovers address using seed (hexseed or mnemonic) and adds it to the wallet.

#### Request

```
curl -XPOST http://127.0.0.1:5359/api/AddAddressFromSeed -d '
{
  "seed": "01050089eb4fc690f1cae55c1e082ae92f2fd39d7b08001162a98c429f14421b50daafb59f5f65dbd21d7bc3f2c7004e4ba53b"
}'
```

#### Response

```
{"address":"Q0105005e6f4e2e95e77fde716e5defb23c4b7cb23124ab6966c9af5adc0ea9f26a12ce67f8c4ed"}
```

#### Request

```
curl -XPOST http://127.0.0.1:5359/api/AddAddressFromSeed -d '
{
  "seed": "absorb grape glance virtue consul aerial total saudi patron mobile whole poppy baron memo react chord string rock agony corps rely fig frock figure scalp girl cup stage holy monkey starve area fiddle warm"
}'
```

#### Response

```
{"address":"Q0106009f1a88d2f4a2af059c54a4f0fe4fa9d9d6debf6113ce002416e123b7775ce693da09c3da"}
```

#### Request

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| seed | String | Seed could be either hexseed or mnemonic. |



#### Response

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| address | String | Return the newly added QRL address |



## ListAddresses
List all addresses into the wallet.

#### Request

```
curl -XPOST http://127.0.0.1:5359/api/ListAddresses
```

#### Response

```
{"addresses":["Q010500063bcadecc409dd914eec179e3a3cec6cbb7f4e35c7a6af274aa14b3b4349f55a3c2cc25",”Q0105005e6f4e2e95e77fde716e5defb23c4b7cb23124ab6966c9af5adc0ea9f26a12ce67f8c4ed”]}
```


#### Response

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| addresses | String[] | Return list of addresses added into your wallet |



## RemoveAddress

Removes the address from the wallet.

#### Request

```
curl -XPOST http://127.0.0.1:5359/api/RemoveAddress -d '
{
  "address": "Q010500063bcadecc409dd914eec179e3a3cec6cbb7f4e35c7a6af274aa14b3b4349f55a3c2cc25"
}'
```

#### Response

```
{}
```

#### Request

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| address | String | QRL address to be removed from the wallet |



#### Response

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |



## GetRecoverySeeds

Get hexseeds and mnemonic seeds for an address exist into wallet.

#### Request

```
curl -XPOST http://127.0.0.1:5359/api/GetRecoverySeeds -d '
{
  "address": "Q010500063bcadecc409dd914eec179e3a3cec6cbb7f4e35c7a6af274aa14b3b4349f55a3c2cc25"
}'
```

#### Response

```
{"hexseed":"010500f215b136baaeb8e089bf002cdd7df9969ee284981058c8a0dd0ab1eeb6579b370bba299726de70593a26eddf65336f71","mnemonic":"absorb filled verge gather damp prize river angle sash admire syrup taut nor unite lyric locus fulfil memory sword prompt update has orange insane roman ohio chalky took furry petrol unfair warn cried way"}
```

#### Request

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| address | String | QRL Address |



#### Response

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| hexseed | String | Hexseed for the given address |
| mnemonic | String | Mnemonic words for the given address |



## GetWalletInfo

Get wallet information.

#### Request

```
curl -XPOST http://127.0.0.1:5359/api/GetWalletInfo
```

#### Response

```
{"version":1,"address_count":"4","is_encrypted":true}
```

#### Response

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| version | Uint32 | Wallet version number |
| address\_count | Uint64 | Number of addresses into the wallet |
| is\_encrypted | Boolean | True if wallet is already encryptedFalse if wallet is not encrypted |



## RelayTransferTxn
Creates the signed transfer transaction and relay it to the network. Signer address is used to sign the transaction and the signer address must exist into the wallet. 

#### Request

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

#### Response

```
{"tx":{"fee":"1000000000","public_key":"AQYAJzRXnlAooje/Lu1OdDBeu6rpnB+UEhLJDF7PeHSvt67ZXYLIseGL1opchZhJ8XTPsbPEMGijWnvaxsl3p9nLTg==","signature":"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","transaction_hash":"z2spXF0pDeqJ6P87xUJmO7+4D2Wd05IiQUKWSf0lX1Y=","transfer":{"addrs_to":["AQUAZbbKo18xWuWV06O9T2GbGJBdU1S4fsltBLuL7K+CaQQ3FJDN","AQUAOjXqDTCx3BLrwnvXWqiCP5fGIcNuXvb2FQUFc+sK+23aeiV1"],"amounts":["1000000000","10000000000"]}}}
```

#### Request

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| addresses\_to | String[] | List of receiver&#39;s address |
| amounts | UInt64[] | List of amounts in Shor to be received by receiver. Must be in same order as of addresses\_to |
| fee | UInt64 | Transaction Fee in Shor |
| master\_address | String | This is an optional field, only need to be filled with QRL address, if the transaction is signed from slave address. |
| signer\_address | String | QRL Address signing the transaction. QRL Address must be already added into wallet. |
| ots\_index | UInt64 | One Time Signature Index to be used to sign the transaction. |

#### Response

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| tx | Transaction | Return the transaction that has been relayed to the network. |



## RelayMessageTxn
Creates the signed message transaction and relay it to the network. Signer address is used to sign the transaction and the signer address must exist into the wallet.

#### Request

```
curl -XPOST http://127.0.0.1:5359/api/RelayMessageTxn -d '
{
  "message": "Hello World!!!",
  "fee": 1000000000,
  "signer_address": "Q01060091aabafdc9569f4ddec95cbfbc5f10f871187777aabe375f16384dbfd7d3ba6922e566c9",
  "ots_index": 1
}'
```

#### Response

```
{"tx":{"fee":"1000000000","public_key":"AQYAsC7E7aJaW3s25HiWKA1dHgzz8Bf6S9x+2brotoLN+SXmdYyXDNZMAQq0st5IFxD4D/XOx6xtjYuB0JbPueC7bw==","signature":"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","transaction_hash":"mO92szwvYUxEVPUK6K9kLE1etG787CRPYHYRmPw6FtI=","message":{"message_hash":"SGVsbG8gV29ybGQhISE="}}}
```

#### Request

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| message | String | String Message of maximum 80 bytes. |
| fee | UInt64 | Transaction Fee in Shor |
| master\_address | String | This is an optional field, only need to be filled with QRL address, if the transaction is signed from slave address. |
| signer\_address | String | QRL Address signing the transaction. QRL Address must be already added into wallet. |
| ots\_index | UInt64 | One Time Signature Index to be used to sign the transaction. |



#### Response

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| tx | Transaction | Return the transaction that has been relayed to the network. |



## RelayTokenTxn

Creates the signed token transaction and relay it to the network. Signer address is used to sign the transaction and the signer address must exist into the wallet.

#### Request

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

#### Response

```
{"tx":{"fee":"1000000000","public_key":"AQUATX4LUzqKmuUWSTjE3aIvqq8fQBKKW+Qa0b9Fs0SXdgzJ9LXET0WDo2cmJIp/oRflIco9mMhsAh8nY9VVQ41hzg==","signature":"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","transaction_hash":"uDyC9xtE07CA4vURrnCXxnuagDAEFKi9HYsGwBzehSI=","token":{"symbol":"VEVTVA==","name":"VEVTVCBUT0tFTg==","owner":"AQUARbPrztB2gBeEuviNm3EMpe8DXyjKJ0lONwn1UP/9hA+eosGN","decimals":"5","initial_balances":[{"address":"AQUARbPrztB2gBeEuviNm3EMpe8DXyjKJ0lONwn1UP/9hA+eosGN","amount":"100000"},{"address":"AQYAkaq6/clWn03eyVy/vF8Q+HEYd3eqvjdfFjhNv9fTumki5WbJ","amount":"100000"}]}}}
```

#### Request

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



#### Response

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| tx | Transaction | Return the transaction that has been relayed to the network. |



## RelayTransferTokenTxn
Creates the signed transfer token transaction and relay it to the network. Signer address is used to sign the transaction and the signer address must exist into the wallet.

#### Request

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

#### Response

```
{"tx":{"fee":"100000","public_key":"AQUATX4LUzqKmuUWSTjE3aIvqq8fQBKKW+Qa0b9Fs0SXdgzJ9LXET0WDo2cmJIp/oRflIco9mMhsAh8nY9VVQ41hzg==","signature":"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