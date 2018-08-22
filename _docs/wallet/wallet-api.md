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
  "signer_address": "Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b",
  "ots_index": 4
}'
```
**Response**
```
{"tx":{"fee":"1000000000","public_key":"010500cdabb6ddde4aa16f776cfc10665fcf7efdd86b4197ecd7729dd3309468e819bc4b1cb8081185236cc191b0eec3ed7af1a462f7f7f2f2c7039604d9e9115ff1ac","signature":"00000004d571da0ae2a2726773881bb65901b04c643e9d3bd811bfe3965c6f65c0eeb2b0cefe77322b983ac83262a57dcab7ac822d30923c46cd4a4c01bc9a76dc5f69e133c93da01021252dda1c7cbfa1360c1e4cbc07fc2c789959b7688cc3a7bd857046994b8980ebc77f035c13e03f0b1f33bed313bb350f44f73a97c846488ce7e8f1b7080cf183a12f9c96f7fbf8b1e939ac8ea4abf4b90ffb9a2e977d46126f47791bbfc2e1b3e45b933fdf8ef993fdeb5bb64903450c46b881acbdc9d92148595a003a79163fba352f60a07c3b3bb9d9bfcce3c0f14495f81c77f8df4f667ef5e9fcc9a94ea14a09bc578fe5906d4f9e5b47496f5f34be4405f83e3ed75724cdea2d022a7219ce45cb8fddcd92663a608431e45f2be9596f39f9637ac77600375ed8ea51ed506ed56c9c7081fb4e3d89c18c1da0ac0ee71f03040ef67e55e33c6c21e35b1ce10efec1373226b6e67986117826023c4694925cd46b519726c8de4dbb5d3b9b0a7bc21430c0e71c6f56372a021b66179e5e9808e665b95028f48c187f26c8c38802faa4e9ff19df5f99a23d54370300f2862d53a089c720e5ee9e81df45d364bdc67f1d459d445e9be91e670279aeba324cdbc190fbfec44cf91b490f71ce7ee2b2340f6b3ff75a18fdeae36bf7d1d982953f9251d877b5a8eb24e2fa43cadc1add51ae2869fc55a7d2035f911f8a15dabc39e819f7179a4fc1fdd629cb4bf326e3cf4d14b9f430bf879ae9853028537152dd7a6ec6b58f9db7f80c235d2b5df51939be95f4ad0f8532f358a7e31d10305f4edc3da061647e8b57d679ac3e6e455312e900c8c600b35714bd8b06d238517e08060cbb4e178e4d63342612e4c96381e14a4c4362121ee0a38830877df18fa0a3c05a531f2417e709f1d4e150a46c2ec7e30a94bace5b1ddff19404fdede3a7c0591d451c5c9c0b5a28f8dbd9c0a63408ce94614489d3a80b3778ba2d934d3a0618a2ebfd395fd58161a409b4dada99827ae5c383c1d4cadd61aadc1c55a771e981cc815f7ea84d4af1853614859da39b2ffaea20303231cb78444aa64ed500f071ad4570667b9b70b2a3ea82fb62f49507cc82feca52716bfc79ebeaec2d81302fdef30cd23ad14967292cd8923acf11e8c7e81ae8e96d5d8cf65d99b438a9b9c11df7e31eff40f68a6c558536a5373c37b257bc89528d5361cff0a20e3f216fde1bad6ee5659f7a80d0ce6057d4789e4e19a6a0514f3f34775fb804014c3739aadc22c594a2c21922dacc7450dadaed46e15732ffd367290954203ab6ac47e4b586752f75530ba610e179ce3e75d948c3b652a001d43a2fd3cefc85247e4a638a5e53f7b85decc07c35b782bb7629970dcb7f15656b8741b3c715ac1dab604a548116ad0711ac47b3c03bf68ef05e2fd4fe6e2bd3dd0cc99cd2bf7d0b20a9e215e40c253f6c1e2f79f3275d803a3f67761d8d539dfa849be5b6752aa023358c0ce26be33171749b0e19dbbe8e7b13b1e15d52b93eb927baf9c4a0800f5b2679c222e1aad23adf404fb8e45ac8d10f6385475798ce1543cd0ee41b8f0ae0ed99bb443d13dc9d6628ba561697c747439fd7f7ecf169af03472046a8a34c5085d5ee4ecacdf986ef9cda316457d5d47b064424ed82e41e36a0081080605f53510f53589d9e277ac49b66dd6a7c91a45e5c5adaf109667bd67ad458aea1db01787bbc2b3f9fc27b00de07ac49bfaab2c889516abf9415fd9432bac7210ecb5f8a3e0f3556e931d4369d8cb713f907f5d3e2f82629300b9e94f43e3fe3f1da58e4620cd4c43f7d213b7952450bd0d747af787bc60e6c3a0ae90a9b71d743c50c63a44d5d7ee76b321cc31f4983b229756c068061c83264c1154fbc40d62f00f36ef40c80fa9f5b4560f64876dc1213aefb901068c7aa788a61ad1694daa488bdd64f396224c193f7eb2157c41755f70a71f71472574912bfc0156b24fd418d8a16f30393d7bf195f4353bb87af4d28c716ba308766fcf382eaf560fe80d9c92cbdfb2857386741fe5d531c7307b0f885ef9004c3c996dce6f3f880ea225a12f61ceeb0f7658c54733701a3a36218044e9beee9a71262816dda82af97e7e2c610e10723266d57c37541b8dae51268c1ff084facf74c7b84cf0d5654db1138ef0ac462298aa3721ce81c9e4771646d85894d69273196c8713b62a77f785f952b7ceb3b12fe8694f4193c3002f686ac840fa321b2d86c7f6d0d228819a6d810c68cdb8fbc1d6183ba8cd9910d439696f7f9b095d1979db4a415b2ced70a188ef5aee8154601f0dc5649e1f35b1d874ad189fea0ab91adf5f4bbec2e62efe59106496f85053cab5874d7d5ff02bd4c7a06fb7581149aa03ac34b7c957e130c2646cec656801fc2d9a641737bec54bb5a9148af3d815cc2c57535b2d0759ed69a9159dff122492bfa946d312893a2435ebb984aad9c49c2450819f47f4dd40123c63081cb29ead531cccd44aba6277e5d5ebc666f47f49aaed7c631244dfd26d76e323c26ef677f014cc1b97edae855c441212a7b5348fc7aa710ce7381e5cbc61b3985c3b453c9ee2b4f289d08595f816f2b2d1d3aa8596273a18836913b60d83dc517897eea020492c8e763612363fd9a9577a0f6811c41de2b11f8af2f5caaa447ce84c2e71a9e7c3dd1cb281091e8f6bb183cc48f1a3042c2a68a3079c7ae3a6184ac513b8e9c2d525d2996d4ccaf4e56d02112abf43d2fa91af112ce524e83d1939b45cbf0ef97449065851e61b56fbd70c010c5523cfd35d18b28b088eb78a8b5705c74507d4919e99608aef6e0fa2647b8a2b6c3b884fe5f2f21d1abd62ba65981ddabdb94782512487a3618e8b14b057bf4746458234fd54a596358a528b49dac1491c2ad76fbc316bb3d947007375151fa46fcd9da8d29dd85cd086f2dc19daa5a14c9fe1ad17ad81b9559edab5ed297a83e1f13e62b81b49a1db1ef857a46b6fc4aa1bb83531a70e88d32c4769154ea9ec297e4988e423d6895c95f2b0fb217f4f786ae7225ef44c88fedc8d1321ea1426a26bbb6b597480f1e7ca646a0f2b543c900fe6a4ad87798bd05203ea90859f9c731cb861c5a441e190a08c5a40c91a3663d8360f25f658e95d4e61b421dd2130dd537f204e67944e345c7455dd77660ada17d450e1cada1f0673dc4c8260ff87f3bf03b75ec43d24f17c5434efe4276e4f6f0b566832fe3582d93e4c2e8724e1298306bc1e4bf3845a712574533a83f82b415be7cc8a8d8cfbcf217ed85e418637d8277069daa4dba30d9823d6074642de7b03620677c4045845b32ec97418e1f2683d891652fc178b71a3cc0fd3e5220848daa3e9a0241acd190341c89e1e333b338a52bac42ae0282646dac719d677573eee1c3ac8316028ba96f4b4132c40a75d0311aa473d90972982b730a102e34f883218b61cd2424da52f6a4ae8e84cb7d68e2829355f362795e6b44d143d53a436e96cc065abac9b3c4c609909d527e855b3d575793dc43769da9d58f3f030a1a689e987ad6","transaction_hash":"1f5648aca9b23cf18fb6f9bbac132e976ceb76c11c2dca47fb33ccda04448c16","signer_addr":"Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b","transfer":{"addrs_to":["Q01050065b6caa35f315ae595d3a3bd4f619b18905d5354b87ec96d04bb8becaf826904371490cd","Q0105003a35ea0d30b1dc12ebc27bd75aa8823f97c621c36e5ef6f615050573eb0afb6dda7a2575"],"amounts":["1000000000","10000000000"]}}}
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
  "signer_address": "Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b",
  "ots_index": 11
}'
```

**Response**
```
{"tx":{"fee":"1000000000","public_key":"010500cdabb6ddde4aa16f776cfc10665fcf7efdd86b4197ecd7729dd3309468e819bc4b1cb8081185236cc191b0eec3ed7af1a462f7f7f2f2c7039604d9e9115ff1ac","signature":"0000000b114b22d3faca2dd6ae9cb066c102e00ca5438e19be86fca6f70c5265c8802129ffb296b519c5270481c4bf01b9f5abe61a4c2c5b9092946c12df8c6e3c525cb1d8ae15f9799ede4dbc14e5045f2b72166967cee0d03a27a6cce1e7350b7750a1c9d8af5d034325191f40d1712d01600111ab53de3907dab80cfa01af6b149d22821a5431cbabbddb338519e1562158df0dd926d7a16f359d792769358cb171051f9724e171dde49cb0553ac57a718a3f4e95e482d7bc8200b5cf6a20dfa9e6b794c578a14d47ce04991caae4be5343401777f2141b4bd8ecf57f43161e932cd5ab9d34faf68c586e605f6fb1cc5fbc22c6e3478817ca6061474030612a3a9284fd412c86c56634867280bdf32565c38a0cbfc4ce4224955bf2221cd08b09b33b521be6b668959249776fda21e8a577d6e3bd56bf8bd94cf7f58d36997c2ce14121121975476d73bb4c9dafe649f0c856436c0067b5d2609e19cbe505e09b59a61f009f4424539a63d5118208af5b93d0229f615737b83cfe3b102012dc433d919700b7516dd26025994b80f0a68d374e2bd97f2bfed7e0131d1d10ab58d3ea5bb3cfc6767a9e0d30775e33960f5f7587d7e0763724e4ad9ddd10f3b4f77183e3352ec62855c30ea4ccdb63cd62475a7bd4ad1ec6835c8099efee8ee03d493a4723878500e4e5154cb0df94f896175bf135c05551d4fdb7fe1b0e1e162a7b589997d42cd0ef7eb89bdb4b107cd59bb8c77c0cd433ab3eda893b25f8b2968c30aa7156a1f1b9f09530d4dcc0614acdc1fcdffcb3f6b3794f3921e0b2163c975a4fb7a5d7a548a3e4572d7bebea9de3c6e82b0ad1031b864c4921315a3c3be94816a4ac7852df2d23953f74d36b871d1022fe2a60de40f4e45315ebbcee94665571621f64a9f2faad887fe24a231d07eb485d83018fb94ffca8fdd72f44e3119bc0ecf1461b5b49e20ee87ee1146ecc4f15ef4b01959e8da1b63652c2ecd6c3ef78f70cec9d917f31a4f31b436b2b9f0d97b3a3beaa05035d10974a83abdcf2a170a3edd84b5455fd22346b16f7c889d82b3ea624056909f0ad97ea85e1ea3111f666b349421c7230b35a1db7a4f494bcfb73a4058aeeff964850239a968165ecf3f65a361eb660923a35a390c76e4f0a043c982b43e9e50d87a69e338aaa99db1e6a92b6c1acbc7a765f48f4a3d48bbb271492118499a9750ecc4a17146e7955e461b3dcb8734c9962b1e762ae825dcbdfd237ac849713c10b55280aef5763fc5f17fae9ed7bba0eb6da1d5a5fc54e30a8cfe92fa1dedc76b4063af091574200167d2ee659040eb89284dcae02f93b095b1411c83cb41afafb849a9bbd0552cdcf16d83203c3bc593c013b5851481c79e26f8917f1573ab47b8fce809fa4120c52ade22bd35ae3c357bce3707d4357479698662b9abb89238408a42dbe51fd11f471e12737ceaef41db485e24dd248c82c526f45bce0d56ed787a2dfa74ee3aef2d5b398c300b2952dbf263c49becbab651affc7c112eeb00d4fc1c326c89368d675ff4a4da76b4a527201e4d963d6a26a4216c147eb49c22f81f35e43eb4fe65c000669a02fbc95f070a75641373b8ff341d6260bcb10e266020d54074d8452561a52ce8c75f51c6ddd5578ce6146e491baf27252439dd95f639fe60fa7eb0aad00d3f329b6f7209efba406d6aaa9cd08170484ded0c21aecfb1267c5f7eef03bbf5fb8cc5637e7d34db2237331df8e11bc0f1faaa05365198be79e6a72e9dd4e0a3fc53b0e406ab49bfb4f02909d8b6d90a487de465f85f5aacdb8480a4ac39669334cefc2e9631a4874514301d855e7f82e0eb4a3a8b21ef626ad16ee08eb250e4f7c6f6db84300132fbb71c72cec96acd781abfba21bd4fdb82638af2495db2ab13d40c60709431df23db619286b4bb453026f2f08b03bae2f9f64516103b7a88e53e363016eea0303b317a451a49f4b0956435f841b25b9252df42ca97b3c9f873a859012eb6536876ac39525928f06fc56cbb5595fcdd589dc92b2233a33b5139770116b6093cd9ae095b74e413c75780a904d5415a445b0d6a628edcaf532c5a2498f81113575dc74940a28a37139945770f1fcdc645cfc344915306bb80cbbf5c50612dc5c227b4c26226a9948dcf072c9051906e9a1ce544aec7c33c4d58ef48b8937bcb5cb6f9836099e8398caf36be08751c615f32bfa6d2b46b5767efe7baf41fb071e095552a20baaab962b41cacd7485ba25fb9cf350f1a9df23ae9eca1378b72d58c81713077ef73b37f828262243b534fd279d76705ce3f611ec0c80db17b32182ab27c4eb14fa6bac8a905833ffbee502844d159650238d8c92a8c6a0e9f69e4ab4b66a0fa7b935307c611108282f8a2f472acb7c0b5582a0276363a22f124010b00a164a2c00ea8a4115f69d6a7a5a04953e80fc27c1fd65037ae480b9e13d20812a47a22edc8fd23ae24285be0f8af1ad168189a4b68e98d79f4e20dd74a5d835db1901a6e1e68abf624750c6655df53290d84b63a51859fcb6a01a3cff394de4543e746166c95b0773e1fdda720a46a65b3c27229631248967f542f75fd1dd1ffe30c2b5b104b99aa1a8a10312d42646e85223487cd9c61c4f5704f88589c9a3dd00ce4d8a362fa583e8671c1621769efc242415c3272f368563879b5c23e555365f817372241bc4a6e574224730d851c014c3ce06553d0e1211ddb4b3f133abb7c8a7900fa8c344a97c75035ebc2b961c47f44c3f049b3b2812dbbbf58aae33ea71f6db0240a49c3402ca09b725d13169d07f0e236c26629a137e972f5e9f0be856374508ed89ae0eed81790107e72ac7e1bda45cc85c1e5dfb1bb0de27f4cfd64f5548376dca06cf761dfd54256fdeee2275efb26e7cb0267457e61e9909a3321ea81ca2a3b2958b998639b9b7f8ff1c70b745ec70aff3c464695d8079d9dbdf68669de3778b3f1b9954d7f76d7f37b6f7844925926b625c33812600e24522ad8d01f4593db4e5660f87a8d4ae56746d3274ae4b12e80f0d767afa9871c768a1d951c0574d4bbacfc3d3f805da69838ea2b61313db42f72fd421beb75bde0db6e411267f890258ee37b28a9921cf14be5d6ab536bd93ff019970e847580a3e0dbd1dcf436163894c8e883bce4acaa8e48c0d880a948569cc003c775de42b282416e7aa93b5af5a6a9a615bcea65eea484cc6910d8e6a9edf522d397b4b199e251d66e354c31788df70c44e04310296d2a881ac8a82c3d8cfbcf217ed85e418637d8277069daa4dba30d9823d6074642de7b03620677c4045845b32ec97418e1f2683d891652fc178b71a3cc0fd3e5220848daa3e9a0241acd190341c89e1e333b338a52bac42ae0282646dac719d677573eee1c3ac8316028ba96f4b4132c40a75d0311aa473d90972982b730a102e34f883218b61cd2424da52f6a4ae8e84cb7d68e2829355f362795e6b44d143d53a436e96cc065abac9b3c4c609909d527e855b3d575793dc43769da9d58f3f030a1a689e987ad6","transaction_hash":"6153f790da13cba0422a379a10bc1f0243536906028abb1211a4a7eb8a977373","signer_addr":"Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b","message":{"message_hash":"Hello World!!!"}}}
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
  "signer_address": "Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b",
  "ots_index": 12
}'
```

**Response**
```
{"tx":{"fee":"1000000000","public_key":"010500cdabb6ddde4aa16f776cfc10665fcf7efdd86b4197ecd7729dd3309468e819bc4b1cb8081185236cc191b0eec3ed7af1a462f7f7f2f2c7039604d9e9115ff1ac","signature":"0000000c745f4c245db55a57c5c844378df4e2331b34f58337b216826ab1da5861fdadd71de44f28b8eda55eab20f1e686c1888b27ddcf622e59c1150b2fab88b845a595b1611adf36df91c87f5deef2677b4bfbc723e25252a372a28fb1f8e8ee09e77ee6755dac694dcf6e4e72f0633e0c60f9a0604331fabc853b3d80e8b59a5358ad3a8fbfdb6b8875131bb1213a60effec36facf9212abab091ec2d4de9da1ccf8735c3422d85c6833731a0a0de081408869d1364f207d01a52143d8d907c69658a9635517b05e0a9845f83588293614755f47c4e80e2f7c9327339c37ffa05f11a158a9024bd2f952ab7302ad57ce69ad7137d8ecd841fa69d59221c5c2bd510b15bc33c03db81b8c9de0d1229238ea74203f3404b854be029e132be7b4d49171f465bb5bdc771d6e7ba9d23591081b33ee4ba7908d102e475600251d5404d9be28a2c427cadc3b9208ca8b2f03980f3bdb94468439f93e4273efab70a8b68174a625858757c940ed8d1324e4be9a1bf9dc7fd705c5caf05fefe8fd4a3c1931b91c99f99e020d62ebbde25163967121b65c85c949b522dd7ab64d2cbac2e30803722b3c49f0bd4c5a281ac76095578b8f49cf363136e4022d9b44ab3d209bced12c7589bdcf23f20020a163671b7e718850e52a59eacf3d97909763720a3214fcd39d50e83f7a7fe11995ca7f24eeced74ce2c8e89e34b3a350f4a4efa3207b6efdd96d4cc89fc3ef27e540d3567d74f59c233214c3f750d44e55775089b168d69533a649398006004a2fb98b82bf01bd3652d025f2e871677b4ad2300262466b07f19c029d46d8474913c42ef2287f60bd13c472a353982ca3c5bbed915738aa8a786513b923148f74225e4eac76450dcfeb54e93532c565ee83f4b95e64b91623b16e27566e2658cd07527033afa9c7d04c1a7aa10589e3d391b2a2fd7fffd7e963c9c8bf108578f1b8509bd8d17991ec3fd89a7ee85c061fa5997df696a344c606843a37cfb9c8aa7ff17a8c57cbfd8036472f9cbd23b16cfbadc735a74950ba5d233217ce2352248e67a81db36db0e14019b4275ef8d4d83b9f701bfab9675e1a084cb44f521c3e8fa335db3a36b8471d69117147046138104128a9fe76ed5f93b883dab8384957ab5e288b311533e476ce07ee45514a730f8c292145da8b03241e5e7ae5b1be886e8ddcb1fc5ba4e5f94f38236bd42e6e5957916f1261ec3caf2be4500089deb2b17df2ad8692d9426020210314845f6ced9b02cd99afcd982c0d01061ca53763b71cb97810da51ab7ca1bbe5aebd63cdbb9e5c661db72b0d69261f31a090ef2ee9f3c3ece1598ca6a78cc84e6111c674a5a079cbfaa98e952afcb86d23871d923dfc4c210e05dae3b0e37692c50f87c47115b082e11af9f6808ffbe03d85cc26fe7a53b386030bb0ea09791b26b71f77cd006469cdecdb903bd21dcbcd9ec777f362cb785f61a2c15f5d9eed88e1ee02a4a8dfdb91d7bc88b1e64d6b17a278e5942db361ce3ed307aa0276552ac5305187a21dcc6dfb82ac88e40b8e1120961cd4a516c15b13d737fd908894fd707108b52e36adc1e41f1813954efd48fff9d8ef96966572730abb2f4cb5c412665ddbd508047345ace9b4cbda610bcbe670ed410895a21df22074a9fb575d122a1d3a084cba558160d719df51216c4ddd68b59ee066594fd5783546fcc030dd8c07ca82ea8aa7843e882d1872bfca656e226273dff6aa1ff64b167852b22255c0e37a704c68ada9783468f4cbaaf8ff6a0f81dbaea47a9dd834c004146121bdf0f4839c14f4d2bcc3ed99cab582bbdc4eec9bea84b0af724ddcb422e75acc2980915dff5f2a8a5ed3eada88eee8ea326840af6242af4eee0ed37da40894fe6a6b0d27068aae8e3d79f84af920569155f6af94684bc66ed6b3fb91afed4d3e9dc435582d341072316d05b615eb3b9d9d833f02a70748e0df6af3c20b019e8ceabfb3f629e94b68c6c7110d794ca5d052e25c1e1ae6e45bd0bddeaf782b8fb314ed0704800dfd06f33d4775ef9c2d197d89bd18d1ae1d056105b1918e9320e370d9fb42180398602a2b544402706f71537c6b2efed803aecbf027a8b612157e3b1e9bc332b9c89b6773f44751c19904bce75d0febcde3ab3330888ad5c9e6a73ba5b3d3ac16d29f76c323c8b69cb9e5f06d58b946e1a2370b116240b70df26f3e3700ad283115a64a72ff28f1a74a25f1f344ea915d82d06cf7a521908dbc45af5d4d9bdf938cc59969b2ed953962c29a0e64ce472884f5ad1aefeaecc35b7b281879639209e4bed32630287b7a6a9ffefc268c60b5be2cfa19eb7e580a56d477d2b928045f2c1086128bb33db6e2e87a115d692bd989ac392051ad79dd7565fc5a360433c9f54cdceb568030f25516272262460ded81f12130273f24fe40c5bd72fcf6e0566642b3648b35378a2ea4ed2722bf2ab3a6fd07019b1bba282ae7e749ddb83362d9b3172b4a6b07e138f66b8b58dbdf404efc001c9e822fe89dddfd9e54f4331b7cef2a5dddb0829b754d963b95266c1668d74938fac9e1cd0a33dce14bff33a5d9ab23bb7835f18cbfff28524959405b20ac723951d609730bd92f8400ff1862f1f45aba0cf5fe8eca21da749503e46482ccef03171f6c4776340d0adcb57b4692905fe379250d40273e08526609764f71bd07c051bba52671969ec7ee396d6fbdbff485cb23b86f82fffc64305bcf16a8db16e7c9881d9969a90212eb207f7cb93cd0e0f8dee2ea6dd31b8c78c5eb4574f1a8675684d97e2988379cb3164163dc718307e88d2253595f9b2748fdfaf528a5edb1b820f3a7d8fd78ba92fd0cd8301283a8bca6d35c0332bd10c9761060a2c69473b44b7d47cb77b4bf52682bb44c62e51e93a22e5deec113e1de9dedb1d74de24c10b8e7aae3a9d21d4251f4874b57e87580b0625ebc8d3493554d3684ade469a9ccb9f6d85f4905e66481972c65c1f85f0eba489b477a7ec26e74952f611ca7b205fed3e6bff0b44161e6898e58f187d96c7d8e5ea9d83fc4345633ce9a21dedb971c156a31b5aeecf72ab73cb2740d2607a05689c9ab33e8cf58f222c73048b277eb9ce1d90eee5fab1d42b72b04ed4c3e5cb81794926f348c63d70f0916971854922e9788b38e124b9afaecc895bfd93331849a49ef00877e542592a5aa12738a0edfd44dea0bdd4cd8f71c81b13f15def9edf522d397b4b199e251d66e354c31788df70c44e04310296d2a881ac8a82c3d8cfbcf217ed85e418637d8277069daa4dba30d9823d6074642de7b03620677c4045845b32ec97418e1f2683d891652fc178b71a3cc0fd3e5220848daa3e9a0241acd190341c89e1e333b338a52bac42ae0282646dac719d677573eee1c3ac8316028ba96f4b4132c40a75d0311aa473d90972982b730a102e34f883218b61cd2424da52f6a4ae8e84cb7d68e2829355f362795e6b44d143d53a436e96cc065abac9b3c4c609909d527e855b3d575793dc43769da9d58f3f030a1a689e987ad6","transaction_hash":"f4dc69594ea9046d30a39212f3d686830d34c8c19339e21cb89bd6229391ff70","signer_addr":"Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b","token":{"symbol":"TEST","name":"TEST TOKEN","owner":"Q01050045b3ebced076801784baf88d9b710ca5ef035f28ca27494e3709f550fffd840f9ea2c18d","decimals":"5","initial_balances":[{"address":"01050045b3ebced076801784baf88d9b710ca5ef035f28ca27494e3709f550fffd840f9ea2c18d","amount":"100000"},{"address":"01060091aabafdc9569f4ddec95cbfbc5f10f871187777aabe375f16384dbfd7d3ba6922e566c9","amount":"100000"}]}}}
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
  "signer_address": "Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b",
  "ots_index": 14
}'
```

**Response**
```
{"tx":{"fee":"100000","public_key":"010500cdabb6ddde4aa16f776cfc10665fcf7efdd86b4197ecd7729dd3309468e819bc4b1cb8081185236cc191b0eec3ed7af1a462f7f7f2f2c7039604d9e9115ff1ac","signature":"0000000e0242bd91fca4b09a3f29e2e335e29ac5a82f5a4591598b1e4ecc7ae45e5a86a13e6eff6ee63e450b019283c15a475aa6ae2867fe531ac566083548f65e406cf7a1212951eb2d653240170496845a3bcb9a8dced44d00eb39381491959fc25090f9ab186013c394a091b136f631d347ff74266a8f231f6067699b12a0854c876ebab3abe5e24f01e3f742f2c0ed2ad614ce027127f3c0910cd80335fabbc0233669ceb5382061073dc03cc311d77534d0ff5fdca73161e7285580ee88de9379f03a1e8a251f06e27b637376a59d24848653144552a4428d83b9b1a392b7c814b80b2a22aeb50c533bc080550f2610e1f931f1cb9b81cba44cf6c7bdeb15e1da4658a52f0c532fe18c9c4b24c5a57ee32e58c754a005029048e818e671284484ef05360b97800e27734da25a07c150e5b41f6496e335eff752904e74f890dbc9bffdf7cec52e3138d26facbfb07c56ef9084c6cb86f99e15b1882ea12aed8d418a051cff91ed398f7f598896e9423475596f6344ba72b46aeb56ffe8773f7d0b030684c8e31736732e7b81fcc8f0003685b77a2817ae4df05ba0325f87cd9ab1c1c0670a2be6b8df2e85554a8218a9b3d6f30c60a81858de82c7504ad13779a642507898819a621a7f41e52dda03f6d0ea975e3d69583790b1fea39ff5c42895b996f6d95045b43d9153bff4a3f7801d7683c23bfb4a4a0ecbd6075144085438c86fff381fbcd8cf828576fbcf114e11f5a7c9e71db4ddefc8d5f0721da97015547d5eb5cd701c41deea0b619e72ebe5778da20c49d2cf767a372169932ca8ea5924d359ff2c32102348b2ebe0ede2db37ac11d4280fea8d72c76dcbdeec94cc6b3f00bbcdd6dcfa66459ce77817926e8ab3d029b0c28673e86997af8a96c8e62beea7f1a878ad9c2b5cbd7d369f8ae1c230f591770d39e4b7b489b3129afad4b79a6fbf790e48533b3e10fbe25a23e442fbc7b471946087b75653d1fc46b338688bac3842f3582644321e304e441f2ab7e364836d43851496f199cf890e88d8a8d63436ac96f08f6ecc40773c81262efd9abb81317cd96f21c0a3528a1a1c866d384db993a532990967c20dfb9f9f2f401f8aeb846ec8ec782fdcc0468cd4811223256db756667e16dfe6f83837e21f31ebf2fb9d5942a9b21cc77a3590a5591f14490649b0cfe48b50c63271207fd1d43c68db7824ee7c732c74f35c74e9c486d2a1d3bd3e449e8c9ccea8a14792ab0bd33e0c9a206eb6455295a060b925469da5072bacc52afe9fa71397a01789970a6bbcaccf0f339583e3bf62721437ebe0594e764d5b617e763ea3d958227e2848029001ae6e1e04ffe4a6307a300e882683d1d523dca566ca9e911cf069f8838d61a7900d45917d5c53a39513b71752ff7c6aac591c406b2d6fd7133faaa68289c174324c5dc5e77bd9e2131a1d19e3e12b6380590fe6e558477b798c8200b507731eebfcc8828194866a589e050cbc7ba8bd738a95535ecb0b9fea195c9a23d44ddfc7eb05f8c41c1f11f39d150ec77915da92f683c7eb8f00250274d5053c0341cfab7c79d3470dbca5a1233d3b5b726c89f0a204575788ee49fb15557e03a671fa85d82396a913f0296d0c10d7ef08309f64ed2c2ac8dd4f4e31c27e36dae88b7848b9fe04d5dff4580f341291273d02c81977733d3b48a9b625e73421a90e9c45d819edd6bf6bce82107fedfca843f471ebc6cb8b62c39ddad4ae5717914fa5122a27f2e9d6974e9d824a1657b846eb24a94111aba778edeee65b70d6e3165dc309bc9cde097e8b6a0f60fd715ae96822922acfc0f129ef27e4ce9f067c73be893fc63f940999c114d68201c0ab3a0c9cfae5e9a27273e58257005cea0b976e60f108cf7172dde58957817987875b1be9965f2d33e1f0bf2cd20e5b88705a350a26ba25df086ea61f3db03f51a6d82086a134e9115fe1c08d345a551dcac623974b09f706a5d170d53c16457116220cfb8dfe1d352e2c61ea32bcfb9bc2071fa70ea65e8215d7d1f9caa0c07ca14f29e08b1321afb24ab4a6fc6bb18445c7c678ee16c1cdb4e82ff8402c5b9e0b4b39593214a75942600db03c2dff76ff3815cf002606d2ed51352d8e1a99f692f129151c055815228d107322faf3eddf675943d5e5bf554a545070f0c731f9ba8504b6e0e27e0a489e0d285622aab89227135c5d88c8b8f89f8bfb0dc283534f9311e19a8331b15de01efb3e3411c5ce01d7d35479123931e670855de946b4ed51bf834d6c935238d73a891430c8f11c27add888a0657d820edf5c8a46fa7a65c1358af580b5c70276b1ce1e11108c6b842c5e92816c94aa45bdcfaf0bfeb7b99b9731557d90e67fb69c5474ba4cb565a5c026a8e410395c9c0ecd23f0c2dcc5ffb5759323bd50ef92cc3870658359a3f9ae0bba83043bd8e9d5aaf45f0004b75813fd13218ec63f36ec06e4327894e67431d379579bc1c84eac5d8f3cb4bbd385b6663b764ec493be48eef77562b1a6912ae77a5576b8fd3fad2947a596c0e222ec8f403c8e0a354c4eeae90b94ac517227a9e579da5a9c33dab16364e2e2f2a4bda36f5715b98d110a88b433064c5884ade8856d4a3108c1eec6102bbd30785b9603e8e32be90cd59f3621a474e391a4b6139faaae407fe5e8cf5b7cea39bffafc55d4199cb4d251a01099ee8c7da86ee92c3c8947ea3b522df517a41019b3c95beb89f928df81f40c29781791b57162801a6e2bac829b9d66e16837a3df11412f7fd7da5b1403fcda3e27686b79712440e44700eb766e81f6652807176503d94dde7e1c847e610b5e26f7f9e4bfe2b5b85e9f8116204509a8b7346211c08fbc5269e62773bdb1cdd8bb17900ba436f4e7b47049e2402c7488d093d410df3d9f110a7a3b6c863ba4541dd5f5170b2bc24d8a02475023696d1be147f285bce41e7f803263cdcab11fd6aa40cdc73be9d4235172075c3f3d9ca6d0e9a5959deb580b094b385d866ec7588cda37031bcd7e468ae1573c652244150ea103745333f12058bea1343b165469877b8a781ebda4bd0a604e02323ffbb44120f758fce5d9aee9997ad7edb7006b517b3185ba53c589f26b1460196a5afa4af883b7529952efcfd5224bb3fa3b91669f62529c8fc8b557ddf546b02689fb673c4645e6d79e1849a49ef00877e542592a5aa12738a0edfd44dea0bdd4cd8f71c81b13f15def9edf522d397b4b199e251d66e354c31788df70c44e04310296d2a881ac8a82c3d8cfbcf217ed85e418637d8277069daa4dba30d9823d6074642de7b03620677c4045845b32ec97418e1f2683d891652fc178b71a3cc0fd3e5220848daa3e9a0241acd190341c89e1e333b338a52bac42ae0282646dac719d677573eee1c3ac8316028ba96f4b4132c40a75d0311aa473d90972982b730a102e34f883218b61cd2424da52f6a4ae8e84cb7d68e2829355f362795e6b44d143d53a436e96cc065abac9b3c4c609909d527e855b3d575793dc43769da9d58f3f030a1a689e987ad6","transaction_hash":"054d93386468571118aaa7992a76eff28feb25a486b2c47b811527a49c6b52fa","signer_addr":"Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b","transfer_token":{"token_txhash":"b83c82f71b44d3b080e2f511ae7097c67b9a80300414a8bd1d8b06c01cde8522","addrs_to":["Q01060091aabafdc9569f4ddec95cbfbc5f10f871187777aabe375f16384dbfd7d3ba6922e566c9"],"amounts":["10000"]}}}
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
  "signer_address": "Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b",
  "ots_index": 16
}'
```

**Response**
```
{"tx":{"fee":"100000","public_key":"010500cdabb6ddde4aa16f776cfc10665fcf7efdd86b4197ecd7729dd3309468e819bc4b1cb8081185236cc191b0eec3ed7af1a462f7f7f2f2c7039604d9e9115ff1ac","signature":"000000105654043347641efccd1be09db1883c92b3f0d859309b0c83d7bed26fb2ebfc4847c45c490b1f1de254f2d61c0033c35750ef76c7ea248e9e1e2a8eea680c49bb0df608bc31ddab7866e512588d77d0ec5d32df91eff581a55665668b774fb2adec7054ec6d2c6210f4ee1376c060459f0aa1a42b90d4fef2106e6edd15746b65084ddf51aecf44330a135f509fa292c3ba8a40feb1f48f4f1d95f52bdcfaf490273026e9ecbbb94925546b13905abfc276e4c9f42ba34f7b94e55ed472216cd9a3a22cf3c0bc9c1885dd01fc0dff4ebbe30258243a8ab3b94aaa54fd5bf7fcbafa8e88e18323f5416ce19fc66ff52898bb3994795a9ebd9f36985717fdbc269295feb3cd6aaf34e7e29f4cfc9e2e20cf877aa4de7104d4161a24807862996b35f45fcd4c09bd6e314e1b9ce1ef2bbe1fcf42183e28021b00590127cb0b2754c760bd31632c6beb43cfb19a92833a3bda32129b48f9e7c7d9284a25f2764ed31815d2fe465d671b842a7b10d9ebb6336a45e11473c129aecb22b24835dce21fc64e9f633c4997f0d82167598a90d5b9ad332a7e8db096cd58aa99da8d42694cabf3349def4f29c754d030f35673d626261d38d41068630ea5d1e20cbb64d5540c2232b9ec114d9db6164a786e9a52227c7793451b979a6275c88b325d6fdb0b80ae098eb26c52d361a76dd87ecfd987eb8e79643a495172b53f5941ae782f10d76a2c2514d4523e7068a5108db844e73486ffd6709ec0ae4cfb76790534fc33433546e65d7aa5a65c7257c468206d9159266234ab4518707e41ca6ec5771ba2589da595161705914e556ef6de8c64b972b24789b005eb17198a643a946f27e58d20385a3b4abc3760c0a9728e32c7f0ac313b7d24889fdbde03a4d56a7709eb1696b04b905398358ce0262beeb284bc91fc742ac264502765a781743280103e692f1a6877c15faed814cb059b916a0b5e663e1a2a06bc63eddeb7652eb6ee5f961ea98ad62da12c2d880148d1a838df36dcdd479289fc9675ad965acb222a9a90ccfd8444e2581bb84f092543073e55e31170a58f42bba86a98c35118ff9b69eaec40ea33626a59630485f4d2154c64b3d14ff9041d681650c28a87a42fec1b675f4eacb8560df5da556a63e779f4abb927d7b96e390adf9404594b285d04dada1091544e94d7de3f9f37bf394866b30db0913a0dd8bfc0ebba6d56fd73b720d9c3891e54b5bbccf97c0ce7e120edf50d9e414662817e2ec112603f2e6d82b58e0975c70c5295b32132495cca725259ed593dd8f656f5c79a592036d5d02163ac5356a528958b1a995b3ce034a6cb3bb9baadb5d4a5aaa56fa5dbb737ae33b5c01d560f90147d20b42becf17dfc84f73464bf0a6a8c6136ad10878e5df6879ac8ecf26853a0c433717c972f55924f9400626ae4e132faa16d9c3632a7deeab3272af93183d7fd879cb7c1cd60cf1efbf0eaadb408e3990403f18bb958dcd6edacb464d8472cc6e78fd37e88636e2fe3d6f6172350f88e0f849ebb64de621e1b98a7b8ffa8eb5b1a80008c0d50d14f98db202a391c7108ad694768578c8e8154112edce8df541d363bc0019206331617fe01f865f00692a37e16ac01f345e020c13b2f627efd9c995a0a56f95c99e53acb330911c242d03bb25926573346d9a60b5fe209baf6258ff4db6893e9b7d057b9f30e878dc05625ba1a73978b573fcc5b68e27a1714da4bc57850ba87aa54387d158efe25ebc1343f77a4b081d2322aac6bbf1bf68c6517c25e0b02c123e78ffe6a6fedac958822064d7ee0b2a1c26cc66aaa2f2c4f7e6efad0666eab4cffb3701b1899ab3f0aea3485518226517505a5ed95075d2fceb31568dce531edf8e26b8c28203e71d7f522119816fb024d1c4713327bcbe9d54ecc520515aa46267aa380aa01e887cd4f041d2b1c58cfe8ee4dd34a7d36e57d7f76bbadacb504a77bbb7d31055680b57716907ce0f18a37f5a62a533c901eccbe7666ba3de5cba22071d52ae4a97b454c6fc502bb32905318eff7a2eb2946785e347d107e3c759c08ea036095cc2ae2144e9a77bd439725aabfb58440d5a027053a2fe20068eede65edde58248837d0798335160cc2cd9c34540eb058d6d3b87d0cdac331629c98e4000a8e69ae86a9ccc61aa12791ded0220ba0bd3b8f77bd6b41b2f522bad18c3eb81519ebaaf5a849d2b7b9347b456435333dcb19fecb1ff358c74fba66e02d1e3201b0ad5900da8c1e3a5bcbd41bff54c3922f22c4493f3195845ea8149ff48420a929c520d2247efd08c16ee29bfa8194607e502901b3aa6a908305e38c8f0ca3c3f30d4073df919a444d65e48718bdbbd50fe55ad3ec0ee5cde561cd8d0cea31220de09200da9d256b52c3365f209a471dcbd3a97cbc177027312c1d5c058d75e45fe2ad148892f16c785cfeece83684e19b95801be048fb1a084cb4c6e99a22ecf727d2c75f532cf37743f451731dca83111c16c873157d0bf386bef3245f5fc6490434c6e17ce6989dbdc26ae9b125e4115d071813afc4b31fd40a651dcfaf6f6564049e811bc030c88ab4ee7e37a122cef8ec5c87b1f218b10ab6ea9f33e67e290506f09747e00946c79f20ff1ebf1f30ecc2399133b5626e8a7da4338f581bb01569cc6a27ce77f5dc90f0e1f87748f3d385b006920f1da22617ed533819b6927449df6a0b0ab282db81d531018ef72455ad2a6aa759f13eff4e4c8eb39c6c57906c0082493c381d28325c7ee9b01872ac41ff6115a75a0f085ef6e435f731fd0c59c3096eb19c4dbd51e019616ca774b6835cda54eec19e60b56b1cc1c268480da61f1f0799443c9ff80dfa942643b3eabf1ea224bce40e65f1c2ed7beeda9ddf6ddac9df0a982d7ac5494b111d9f0f193537aa6bae03548146dcc98348d99db755bde2ca33bcbb332abca5c3f345811ff988fb35fc675facbbbd2e1d9cecd7913985657968608f777a61690fd172bc2f3938f3e39d0810140e4d7b1f7f309a170a0da48600f921ac1b3a3dc2b00fc578a659cd56f7e82d3c04710e0148bfbd97305db5732d5d9e43e14aae7b42b935eb93b86fb8db0d722d2517df09f769a401f33d71c7695846dd846e3a50683f4984c57ad24274f97c9cc5ae0063cbebd19c66b59dbc24f81747236eb655d9b605710b854dd529d30e8847a86aaa4264035a77c311ce4a4965c9228adf5ffab81535b17cff12683879a41a3d381d5c12ac834223f48f1cf3a98003dc14feb0726f7ea5ace41343d6a01b2380ebf4682decb1fb18a4129f6b4ebf5a9ae7285d4045845b32ec97418e1f2683d891652fc178b71a3cc0fd3e5220848daa3e9a0241acd190341c89e1e333b338a52bac42ae0282646dac719d677573eee1c3ac8316028ba96f4b4132c40a75d0311aa473d90972982b730a102e34f883218b61cd2424da52f6a4ae8e84cb7d68e2829355f362795e6b44d143d53a436e96cc065abac9b3c4c609909d527e855b3d575793dc43769da9d58f3f030a1a689e987ad6","transaction_hash":"b342a5d491e5295a80c0d530f2a2795d08700c2bd0a2f0d4dad2c318da2d65dd","signer_addr":"Q01050073e3a3f64c912b63b9e89ae1e0176b5a794f6c69cec07e59fa1d4d2322b1349ade09c68b","slave":{"slave_pks":["0106003d875ecf8fd3ad598e51e71a54b9696679f56be96dadfccc3c2b509e167306d0711049a9e3f424d7df5742cd0d31172db47277252238aace574b111429b5f359"],"access_types":[0]}}}
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
  "tx_hash": "931c33d9fe1900d3f6093a951ce04e9da31380cdd7bf1f6e23c58c2c8eecdfbc"
}'
```
**Response**
```
{"tx":{"master_addr":"Q0000000000000000000000000000000000000000000000000000000000000000","nonce":"551","transaction_hash":"931c33d9fe1900d3f6093a951ce04e9da31380cdd7bf1f6e23c58c2c8eecdfbc","coinbase":{"addr_to":"Q0106001d34628da087339ddd650a843e131fa4a3f3b107e9b6222d609f6dad3860b4798cc5b361","amount":"6656741376"}},"confirmations":"167"}
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
  "header_hash": "1a57bee559af234a157b0429e2d2e3b7b3013ae5a52fd092eeeb22201c000000"
}'
```
**Response**
```
{"block":{"header":{"hash_header":"1a57bee559af234a157b0429e2d2e3b7b3013ae5a52fd092eeeb22201c000000","block_number":"550","timestamp_seconds":"1530024245","hash_header_prev":"e7203a9aef557a3d322409750c716f236104e09ffa9ddba3cfe6555d1f000000","reward_block":"6655741376","reward_fee":"1000000","merkle_root":"8a3b8d2ca74959cf3e2c6ec61e8ff23cf4d61052fb7c31a1b4bd7935427cae44","mining_nonce":672940259,"extra_nonce":"110212678400"},"transactions":[{"master_addr":"Q0000000000000000000000000000000000000000000000000000000000000000","nonce":"551","transaction_hash":"931c33d9fe1900d3f6093a951ce04e9da31380cdd7bf1f6e23c58c2c8eecdfbc","coinbase":{"addr_to":"Q0106001d34628da087339ddd650a843e131fa4a3f3b107e9b6222d609f6dad3860b4798cc5b361","amount":"6656741376"}},{"master_addr":"Q010600286a4c7bcc7f701dc7cf0389fd9be402b610894e306aad35078539599398f9681c64e56c","fee":"1000000","public_key":"0106005b94df4799061319e8f60aa4564bf4a795cf6c8eb24970a2feb34ce7219fd6f721354d7eda03d4a3b2be25febad599d5507b8aca6879c26fd32ca493713b2f01","signature":"00000001199e2094ce0ff52671bfb53032fce70109e4cec831d100e68811f0fd1a00c92d015a98c9d2f9e917564b2211668406486813c0e0fb25bcaa3f885fe04177ef1496de41154604c595f9b740b0f5e78f269d6376dec4b8063aded4aa83e4f4b5e1e5ff8d84f2c804d498537b6b68441209354662976e5d9f4d6e1bf8f01ab60092c5b80cb876b2929e7d4b26a084550502475ae25fe831bd6a5abc1cf75e2daccb5af3536041416bb5444900ca18f7c3bb8bc1c377da0b2401de85ad261405281b2e6e72e6518a4bb05113eda3fa64ffd481607183e293c454dde579ee450708efcc01b262e35c0a9bd224aa498c656161bafda6f7255f7479f3eb7ed3607eca10a9124b2f97bbacd135862a91bf15ee02e1addecc830ac6d0f4a011dddd91c7c31e10bd63534ac481af8ca2d16d6a547e6d7637ec568e8249e14605e9c9add8b16249863ee61fe047c7d3eb7c0f94d6c7574c7ccec1813c02ee3fb2a76382187d56277f8c5f2cbf7efaac37a9175d7ce125029202db587f3ec931323d7fa2e562c5b83526e954376360854db383c5d2c2b2272181f7c83820471cdc51c1b1df6471defc708f6582f955ef659d5df1edc52685c966dc99816555bac2baaedfdc7cb435fe5dc9067b191237dba0dcdcc4ab6b729d014c476091de472337301754b64250f9658cf933a2b6dbda0881ba79088034785a15c9fe9cca815e977bb4a16987704abe41467b81bf665198a9b875d3a38183d59b85f1ac8c52433083611381ab96e33792ad0b613b492e06de843f9385aa2bf201863fea0eaf80c4397c3794ed2abc571ce0ff4ed392c286d7bd9350bdebedcac3f4f8cc002a5306b44fd63b57ea01addab333bec6af05b92f05b55efb2a37831267b69fd82d788b920a671a2a9c4ee42882036157127c660eeae9dc56990b5dc58788229dca52626a40375febac7af57ee061a1f02e73f8aaab67b9e5085c74381e01a88a9eaecd1741956ff8cb6f0e4a5d7b68f7aa1377a7719355c50246446370468202be2de93643b5a0157738e03b6aa01c223a1b6760a52611c8e71457694455fc4059f122a682330e90e5128c899dadb6d2757330a9b86f5f4d75f1a7198c403747a31140d121cd39a373b48458d64dcc200734f62e71e1b455506442b043762d9f1024f5af5b72559a106f3b42b392cff70474d2bf3f6a98bfb593de31fbd5de42734196aeee6d575bfc25ddec065b1e2bf2f64d5bb342b024cca00281118ed9916ab425af88d0fef7ee67119e95472265e7a3406956b3bfbb5f0cd97b39d2fc669e4013abfac4cf648136f06bd3a02c652b21bafb4f7986d1fbac773ef0adde6119c123f65d85740e8364e48904dc1cb8d5f68b112a8f513d8f6fc302739f9060770bbe7c5544edb0128e6f9b301b9ae966b2e2be047d50afe1c3793601f0a5152800a810275a90cfd3b945d56366f77a8e8107586767e2db6a03f09bc4da848af249367cbc18be363ee553db985d37252fd317c35255427d1eb896a8789b2037adfce8b66f481ba2fc84ae479fb4a40d9ba5e7e92cbcbfe7d0d4fab57ce39337038230bef7a7181cc425119e908e6ad4dc10537a1904037c0951703fd544f45e71c6dfbe29df44c81ed0e8fa2a4a8dad859e9aca8f85f26be64e78ef317b1ab571d85dffd8a5080f37ff911558c7aed6852ba4f8ff17291f489ccd859f2cf805ee22e85032d318f0247d4da6bbe7f2a6f9b9743c4582589ab3a9c40b05b2a58a92679bf410c3f49975ebdd87bc355000fb8a3a5e5c2f6c80c83243c8ced7f67a5a56decc0c569c5d7133aebf82e5713f5eacb10ce97dd393520ff522a94744117f97cb00a1d84064edf597c9152d8688e880b996ff9965a99b72c97cd836f703994a217cbae039adb96dd5a435fa6922114f21c69b126e5267fbf9b54450277408dd5d5df1e80da12d02cbf0c6bd90c2d6fad051f79a5617b182ca5b07d8b14d6e366ceaf90d438a7fd3d8a84249e554f264c2a8e7a56e0efba689b70bfaf5d67753099e9041ddc8210415485d1afe92f743b0537e2219bbe47331565ef25f1969fc8836befa399aa6cf4f1720be2d51140225ef09859545de1a1b70b3690a998084ce9a1dbfd0b5fc75440369f11def095f26c5577fd40b52a2c11e5558fde4513b4972e1ede3f250988d7f68efc46e83f6c1a42d67b355e7579cf1817df118d41f77f8431a83eb289eebe9aad0e88aa73ad5e441e0e7d6afa98240e5965ca7717576ea7ae10f848c7003615669f7aca1a1b6dfea83f0fd1b7a334a6313e6ae783c0b190459f0dceb35f141223181f657a8c192e2b4e3121a61ce1584584cb9c1d298c9c7bddeab24e2068eae96f73578bd2ded6adaebc8af1d7a466a8f07dcd4c8cb48d9e7a39e0b922e9a6b2f6f2dfb5e84dbb9f587b1cfd0520c05ea246cbc3696b613ce165100dbfed3d27e45c2aed2638ca2f06431931288dc56011072363a3f91cf2f5e3b0e0bdc03d844ef281979cdc532693148251ce40b48bb2533e2536afc69b3bfd561a72c6b9de81d1ba6d8a27151fab6e273dba241f54316a3c7d8648521a32d3ba9a8aead1be99b04d02735760b120a3128928b46375af82ced65b8f9dc03838ae01bf5b1d6651587bd5c23f257f341fafdae18f95a487887bf46ddb7df05a6af31cb89b0af9ba9e1bfe286837ca25eceec36f6cacb0fcb8525cdf1c64bd2e92fc6169b88194b9e66b4101e6c0d9039f39f03c4c4f77420786338fa65d8dc34789f6059f5b4c3ba8f8c4c14c852e40062dee499f260221cdcd4a75c26b97c18766d833e252f20240eae8cc64872c0e4861652e2a2b7096926e30283ea0e8f11827ad2e3ee08083a1a2419a945fa92db6fdcdef3f20c4d3fe389436a992b513b4b984d710cd5a49cda86942a58d6c2025076e93ae973e0c0a77ba4f857b2b8178f9b7b8f9582f294ec9e13aff15ce7a978465d08b83c5062a308955d38ff6901507bae94ce6824c8d425b05b2d7b01d87e75035930cc2bc6297db838f9f78db9a0a7202b06a687f8691f8fbe70ffbd4b21521526ba84eb5919f3c36727977418f862975878f8dacc742123643214834330c4d7d2b8651d27ca07dc21028fd081320fd1c0ce1d1b1917a93d84243475b65bfcd0e3ce64e76fce7dcaa02eedfbc151ae49fff6f5faa4018908e4c2494820d46a82a033421d0fd1be0fa00d98b219b32021c64a4e2fd30f56baf274600ce08c6bad8c730ba6792f6f1b9d5d4cedeea1f820d8113d0f687e1cc083432b528300abfbf8a0bf8843a75ec6f11fb1bb3e15bbd7d2862d2168c60ea2889e930bd8026b9cc253fc36d8301f8bd6ae627199d3ee082db860974430c218a65c9b263ffc076415ffc180f509b24a0d181bd638fb875020e7bd0335e50478b90a01354e34df9a2062ad3c0f3484370f0baeb82401131090acb9a82a13fe241652afabde308324be8621921aa4020b8d41cb484db3cc1601c78a1b032bd24a2b0273aadf1020e4250d65265e9ccaaa9620f6e6a51bc77b94a53f92321e311aa59b428c45cd801043aa5acec50b6f2cc1008bae77afde64c392d51437dd9e54ad8c6e527e648ea385b59fb1b858d2d60fcffb7f70","nonce":"2","transaction_hash":"487f5840082a6f1c8f9f9b9ae70ef4646cc680254b6a43d51e064f71527d0cbd","signer_addr":"Q0106003c0e74139c585f6d5eb9997892a47b6dea4e563c034cce999443e7c20514d823511fcc04","transfer":{"addrs_to":["Q01050050ece4e02cc6133ec7eb015b7184347a09204416b5faf62af301bd6e43c9f5b01b296738"],"amounts":["5000000000"]}}]}}
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
  "block_number": 550
}'
```
**Response**
```
{"block":{"header":{"hash_header":"1a57bee559af234a157b0429e2d2e3b7b3013ae5a52fd092eeeb22201c000000","block_number":"550","timestamp_seconds":"1530024245","hash_header_prev":"e7203a9aef557a3d322409750c716f236104e09ffa9ddba3cfe6555d1f000000","reward_block":"6655741376","reward_fee":"1000000","merkle_root":"8a3b8d2ca74959cf3e2c6ec61e8ff23cf4d61052fb7c31a1b4bd7935427cae44","mining_nonce":672940259,"extra_nonce":"110212678400"},"transactions":[{"master_addr":"Q0000000000000000000000000000000000000000000000000000000000000000","nonce":"551","transaction_hash":"931c33d9fe1900d3f6093a951ce04e9da31380cdd7bf1f6e23c58c2c8eecdfbc","coinbase":{"addr_to":"Q0106001d34628da087339ddd650a843e131fa4a3f3b107e9b6222d609f6dad3860b4798cc5b361","amount":"6656741376"}},{"master_addr":"Q010600286a4c7bcc7f701dc7cf0389fd9be402b610894e306aad35078539599398f9681c64e56c","fee":"1000000","public_key":"0106005b94df4799061319e8f60aa4564bf4a795cf6c8eb24970a2feb34ce7219fd6f721354d7eda03d4a3b2be25febad599d5507b8aca6879c26fd32ca493713b2f01","signature":"00000001199e2094ce0ff52671bfb53032fce70109e4cec831d100e68811f0fd1a00c92d015a98c9d2f9e917564b2211668406486813c0e0fb25bcaa3f885fe04177ef1496de41154604c595f9b740b0f5e78f269d6376dec4b8063aded4aa83e4f4b5e1e5ff8d84f2c804d498537b6b68441209354662976e5d9f4d6e1bf8f01ab60092c5b80cb876b2929e7d4b26a084550502475ae25fe831bd6a5abc1cf75e2daccb5af3536041416bb5444900ca18f7c3bb8bc1c377da0b2401de85ad261405281b2e6e72e6518a4bb05113eda3fa64ffd481607183e293c454dde579ee450708efcc01b262e35c0a9bd224aa498c656161bafda6f7255f7479f3eb7ed3607eca10a9124b2f97bbacd135862a91bf15ee02e1addecc830ac6d0f4a011dddd91c7c31e10bd63534ac481af8ca2d16d6a547e6d7637ec568e8249e14605e9c9add8b16249863ee61fe047c7d3eb7c0f94d6c7574c7ccec1813c02ee3fb2a76382187d56277f8c5f2cbf7efaac37a9175d7ce125029202db587f3ec931323d7fa2e562c5b83526e954376360854db383c5d2c2b2272181f7c83820471cdc51c1b1df6471defc708f6582f955ef659d5df1edc52685c966dc99816555bac2baaedfdc7cb435fe5dc9067b191237dba0dcdcc4ab6b729d014c476091de472337301754b64250f9658cf933a2b6dbda0881ba79088034785a15c9fe9cca815e977bb4a16987704abe41467b81bf665198a9b875d3a38183d59b85f1ac8c52433083611381ab96e33792ad0b613b492e06de843f9385aa2bf201863fea0eaf80c4397c3794ed2abc571ce0ff4ed392c286d7bd9350bdebedcac3f4f8cc002a5306b44fd63b57ea01addab333bec6af05b92f05b55efb2a37831267b69fd82d788b920a671a2a9c4ee42882036157127c660eeae9dc56990b5dc58788229dca52626a40375febac7af57ee061a1f02e73f8aaab67b9e5085c74381e01a88a9eaecd1741956ff8cb6f0e4a5d7b68f7aa1377a7719355c50246446370468202be2de93643b5a0157738e03b6aa01c223a1b6760a52611c8e71457694455fc4059f122a682330e90e5128c899dadb6d2757330a9b86f5f4d75f1a7198c403747a31140d121cd39a373b48458d64dcc200734f62e71e1b455506442b043762d9f1024f5af5b72559a106f3b42b392cff70474d2bf3f6a98bfb593de31fbd5de42734196aeee6d575bfc25ddec065b1e2bf2f64d5bb342b024cca00281118ed9916ab425af88d0fef7ee67119e95472265e7a3406956b3bfbb5f0cd97b39d2fc669e4013abfac4cf648136f06bd3a02c652b21bafb4f7986d1fbac773ef0adde6119c123f65d85740e8364e48904dc1cb8d5f68b112a8f513d8f6fc302739f9060770bbe7c5544edb0128e6f9b301b9ae966b2e2be047d50afe1c3793601f0a5152800a810275a90cfd3b945d56366f77a8e8107586767e2db6a03f09bc4da848af249367cbc18be363ee553db985d37252fd317c35255427d1eb896a8789b2037adfce8b66f481ba2fc84ae479fb4a40d9ba5e7e92cbcbfe7d0d4fab57ce39337038230bef7a7181cc425119e908e6ad4dc10537a1904037c0951703fd544f45e71c6dfbe29df44c81ed0e8fa2a4a8dad859e9aca8f85f26be64e78ef317b1ab571d85dffd8a5080f37ff911558c7aed6852ba4f8ff17291f489ccd859f2cf805ee22e85032d318f0247d4da6bbe7f2a6f9b9743c4582589ab3a9c40b05b2a58a92679bf410c3f49975ebdd87bc355000fb8a3a5e5c2f6c80c83243c8ced7f67a5a56decc0c569c5d7133aebf82e5713f5eacb10ce97dd393520ff522a94744117f97cb00a1d84064edf597c9152d8688e880b996ff9965a99b72c97cd836f703994a217cbae039adb96dd5a435fa6922114f21c69b126e5267fbf9b54450277408dd5d5df1e80da12d02cbf0c6bd90c2d6fad051f79a5617b182ca5b07d8b14d6e366ceaf90d438a7fd3d8a84249e554f264c2a8e7a56e0efba689b70bfaf5d67753099e9041ddc8210415485d1afe92f743b0537e2219bbe47331565ef25f1969fc8836befa399aa6cf4f1720be2d51140225ef09859545de1a1b70b3690a998084ce9a1dbfd0b5fc75440369f11def095f26c5577fd40b52a2c11e5558fde4513b4972e1ede3f250988d7f68efc46e83f6c1a42d67b355e7579cf1817df118d41f77f8431a83eb289eebe9aad0e88aa73ad5e441e0e7d6afa98240e5965ca7717576ea7ae10f848c7003615669f7aca1a1b6dfea83f0fd1b7a334a6313e6ae783c0b190459f0dceb35f141223181f657a8c192e2b4e3121a61ce1584584cb9c1d298c9c7bddeab24e2068eae96f73578bd2ded6adaebc8af1d7a466a8f07dcd4c8cb48d9e7a39e0b922e9a6b2f6f2dfb5e84dbb9f587b1cfd0520c05ea246cbc3696b613ce165100dbfed3d27e45c2aed2638ca2f06431931288dc56011072363a3f91cf2f5e3b0e0bdc03d844ef281979cdc532693148251ce40b48bb2533e2536afc69b3bfd561a72c6b9de81d1ba6d8a27151fab6e273dba241f54316a3c7d8648521a32d3ba9a8aead1be99b04d02735760b120a3128928b46375af82ced65b8f9dc03838ae01bf5b1d6651587bd5c23f257f341fafdae18f95a487887bf46ddb7df05a6af31cb89b0af9ba9e1bfe286837ca25eceec36f6cacb0fcb8525cdf1c64bd2e92fc6169b88194b9e66b4101e6c0d9039f39f03c4c4f77420786338fa65d8dc34789f6059f5b4c3ba8f8c4c14c852e40062dee499f260221cdcd4a75c26b97c18766d833e252f20240eae8cc64872c0e4861652e2a2b7096926e30283ea0e8f11827ad2e3ee08083a1a2419a945fa92db6fdcdef3f20c4d3fe389436a992b513b4b984d710cd5a49cda86942a58d6c2025076e93ae973e0c0a77ba4f857b2b8178f9b7b8f9582f294ec9e13aff15ce7a978465d08b83c5062a308955d38ff6901507bae94ce6824c8d425b05b2d7b01d87e75035930cc2bc6297db838f9f78db9a0a7202b06a687f8691f8fbe70ffbd4b21521526ba84eb5919f3c36727977418f862975878f8dacc742123643214834330c4d7d2b8651d27ca07dc21028fd081320fd1c0ce1d1b1917a93d84243475b65bfcd0e3ce64e76fce7dcaa02eedfbc151ae49fff6f5faa4018908e4c2494820d46a82a033421d0fd1be0fa00d98b219b32021c64a4e2fd30f56baf274600ce08c6bad8c730ba6792f6f1b9d5d4cedeea1f820d8113d0f687e1cc083432b528300abfbf8a0bf8843a75ec6f11fb1bb3e15bbd7d2862d2168c60ea2889e930bd8026b9cc253fc36d8301f8bd6ae627199d3ee082db860974430c218a65c9b263ffc076415ffc180f509b24a0d181bd638fb875020e7bd0335e50478b90a01354e34df9a2062ad3c0f3484370f0baeb82401131090acb9a82a13fe241652afabde308324be8621921aa4020b8d41cb484db3cc1601c78a1b032bd24a2b0273aadf1020e4250d65265e9ccaaa9620f6e6a51bc77b94a53f92321e311aa59b428c45cd801043aa5acec50b6f2cc1008bae77afde64c392d51437dd9e54ad8c6e527e648ea385b59fb1b858d2d60fcffb7f70","nonce":"2","transaction_hash":"487f5840082a6f1c8f9f9b9ae70ef4646cc680254b6a43d51e064f71527d0cbd","signer_addr":"Q0106003c0e74139c585f6d5eb9997892a47b6dea4e563c034cce999443e7c20514d823511fcc04","transfer":{"addrs_to":["Q01050050ece4e02cc6133ec7eb015b7184347a09204416b5faf62af301bd6e43c9f5b01b296738"],"amounts":["5000000000"]}}]}}
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
  "pk": "01020016ecb9f39b9f4275d5a49e232346a15ae2fa8c50a2927daeac189b8c5f2d18bc4e3983bd564298c49ae2e7fa6e28d4b954d8cd59398f1225b08d6144854aee0e"
}'
```
**Response**
```
{"address":"Q010200670246b0026436b717f199e3ec5320ba6ab61d5eddff811ac199a9e9b871d3280178b343"}
```
**Request**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| pk | Bytes | Public key |

**Response**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| code | UInt32 | Error Code. Only appears if any exception is triggered. |
| error | String | Error Message. Only appears if any exception is triggered. |
| address | String | QRL Address |
