---
title: QRL Protocol Documentation
categories: developer
description: Technical documentation for the QRLproto used in the Quantum Resistant Ledger
tags: api
---

<a name="top"/>

<a name="qrl.proto"/>
<p align="right"><a href="#top">Top</a></p>
## qrl.proto



<a name="qrl.AddressAmount"/>

### AddressAmount



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [bytes](#bytes) |  | QRL wallet address |
| amount | [uint64](#uint64) |  | QRL wallet amount |


<a name="qrl.AddressList"/>

### AddressList

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addresses | [bytes](#bytes) | repeated |  |

<a name="qrl.AddressState"/>

### AddressState

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [bytes](#bytes) |  | QRL wallet address |
| balance | [uint64](#uint64) |  | QRL wallet balance |
| nonce | [uint64](#uint64) |  | FIXME: Discuss. 32 or 64 bits? |
| ots_bitfield | [bytes](#bytes) | repeated |  |
| transaction_hashes | [bytes](#bytes) | repeated | Address transaction hashes |
| tokens | [AddressState.TokensEntry](#qrl.AddressState.TokensEntry) | repeated | Address tokens |
| latticePK_list | [LatticePK](#qrl.LatticePK) | repeated | Address Lattice PKs |
| slave_pks_access_type | [AddressState.SlavePksAccessTypeEntry](#qrl.AddressState.SlavePksAccessTypeEntry) | repeated |  |
| ots_counter | [uint64](#uint64) |  |  |






<a name="qrl.AddressState.SlavePksAccessTypeEntry"/>

### AddressState.SlavePksAccessTypeEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [uint32](#uint32) |  |  |






<a name="qrl.AddressState.TokensEntry"/>

### AddressState.TokensEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [uint64](#uint64) |  |  |






<a name="qrl.Block"/>

### Block



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [BlockHeader](#qrl.BlockHeader) |  | Block header |
| transactions | [Transaction](#qrl.Transaction) | repeated | Block transactions list |
| genesis_balance | [GenesisBalance](#qrl.GenesisBalance) | repeated | This is only applicable to genesis blocks |






<a name="qrl.BlockDataPoint"/>

### BlockDataPoint
BlockDataPoint message definition


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| number | [uint64](#uint64) |  | Block number |
| difficulty | [string](#string) |  | Difficulty at current block |
| timestamp | [uint64](#uint64) |  | Block timestamp in seconds |
| time_last | [uint64](#uint64) |  |  |
| time_movavg | [uint64](#uint64) |  |  |
| hash_power | [float](#float) |  | Hash power (hps) |
| header_hash | [bytes](#bytes) |  | Block header hash |
| header_hash_prev | [bytes](#bytes) |  | Previous block&#39;s header hash |






<a name="qrl.BlockExtended"/>

### BlockExtended



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [BlockHeader](#qrl.BlockHeader) |  |  |
| extended_transactions | [TransactionExtended](#qrl.TransactionExtended) | repeated |  |
| genesis_balance | [GenesisBalance](#qrl.GenesisBalance) | repeated | This is only applicable to genesis blocks |
| size | [uint64](#uint64) |  |  |






<a name="qrl.BlockHeader"/>

### BlockHeader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash_header | [bytes](#bytes) |  | Block&#39;s header hash |
| block_number | [uint64](#uint64) |  | Block number |
| timestamp_seconds | [uint64](#uint64) |  | Block timestamp in seconds |
| hash_header_prev | [bytes](#bytes) |  | Previous block&#39;s header hash |
| reward_block | [uint64](#uint64) |  | Block&#39;s reward in Shor |
| reward_fee | [uint64](#uint64) |  | Block reward&#39;s fee in Shor |
| merkle_root | [bytes](#bytes) |  |  |
| mining_nonce | [uint64](#uint64) |  |  |
| extra_nonce | [uint64](#uint64) |  |  |






<a name="qrl.BlockHeaderExtended"/>

### BlockHeaderExtended



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [BlockHeader](#qrl.BlockHeader) |  |  |
| transaction_count | [TransactionCount](#qrl.TransactionCount) |  |  |






<a name="qrl.BlockHeightData"/>

### BlockHeightData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_number | [uint64](#uint64) |  |  |
| block_headerhash | [bytes](#bytes) |  |  |
| cumulative_difficulty | [bytes](#bytes) |  |  |






<a name="qrl.BlockMetaData"/>

### BlockMetaData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| is_orphan | [bool](#bool) |  |  |
| block_difficulty | [bytes](#bytes) |  |  |
| cumulative_difficulty | [bytes](#bytes) |  |  |
| child_headerhashes | [bytes](#bytes) | repeated |  |
| last_N_headerhashes | [bytes](#bytes) | repeated | Keeps last N headerhashes, for measurement of timestamp difference |






<a name="qrl.BlockMetaDataList"/>

### BlockMetaDataList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_number_hashes | [BlockMetaData](#qrl.BlockMetaData) | repeated |  |






<a name="qrl.BlockNumberMapping"/>

### BlockNumberMapping



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| headerhash | [bytes](#bytes) |  |  |
| prev_headerhash | [bytes](#bytes) |  |  |






<a name="qrl.CollectEphemeralMessageReq"/>

### CollectEphemeralMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_id | [bytes](#bytes) |  |  |






<a name="qrl.CollectEphemeralMessageResp"/>

### CollectEphemeralMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ephemeral_metadata | [EphemeralMetadata](#qrl.EphemeralMetadata) |  |  |






<a name="qrl.Empty"/>

### Empty
Empty message definition






<a name="qrl.EncryptedEphemeralMessage"/>

### EncryptedEphemeralMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_id | [bytes](#bytes) |  | b&#39;NEW&#39; or PRF |
| ttl | [uint64](#uint64) |  | Expiry Timestamp in seconds |
| ttr | [uint64](#uint64) |  | Time to relay |
| channel | [EncryptedEphemeralMessage.Channel](#qrl.EncryptedEphemeralMessage.Channel) |  |  |
| nonce | [uint64](#uint64) |  | nonce |
| payload | [bytes](#bytes) |  | JSON content, encrypted by aes256_symkey |






<a name="qrl.EncryptedEphemeralMessage.Channel"/>

### EncryptedEphemeralMessage.Channel



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| enc_aes256_symkey | [bytes](#bytes) |  | aes256_symkey encrypted by kyber |






<a name="qrl.EphemeralChannelPayload"/>

### EphemeralChannelPayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| prf512_seed | [bytes](#bytes) |  | PRF512 seed used for further communication after channel established |
| dilithium_signature | [bytes](#bytes) |  | Sign hash of (msg_id, ttl, enc_aes256_symkey, prf512_seed, addr_from, |
| addr_from | [bytes](#bytes) |  | data)

Sender address |
| data | [bytes](#bytes) |  | Could be anything, plain-text, binary, JSON etc. |






<a name="qrl.EphemeralMessagePayload"/>

### EphemeralMessagePayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addr_from | [bytes](#bytes) |  | Sender address |
| data | [bytes](#bytes) |  | Could be anything, plain-text, binary, JSON etc. |






<a name="qrl.EphemeralMetadata"/>

### EphemeralMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| encrypted_ephemeral_message_list | [EncryptedEphemeralMessage](#qrl.EncryptedEphemeralMessage) | repeated |  |






<a name="qrl.GenesisBalance"/>

### GenesisBalance



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [bytes](#bytes) |  | Address is string only here to increase visibility |
| balance | [uint64](#uint64) |  |  |






<a name="qrl.GetAddressFromPKReq"/>

### GetAddressFromPKReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pk | [bytes](#bytes) |  | XMSS Public key |






<a name="qrl.GetAddressFromPKResp"/>

### GetAddressFromPKResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [bytes](#bytes) |  | QRL wallet address |






<a name="qrl.GetAddressStateReq"/>

### GetAddressStateReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [bytes](#bytes) |  |  |






<a name="qrl.GetAddressStateResp"/>

### GetAddressStateResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [AddressState](#qrl.AddressState) |  |  |






<a name="qrl.GetBlockReq"/>

### GetBlockReq
NOT USED -&gt; RM?


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint64](#uint64) |  | Indicates the index number in mainchain |
| after_hash | [bytes](#bytes) |  | request the node that comes after hash |






<a name="qrl.GetBlockResp"/>

### GetBlockResp
NOT USED -&gt; RM?


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_info | [NodeInfo](#qrl.NodeInfo) |  | NodeInfo object containing node state information |
| block | [Block](#qrl.Block) |  | Block of interest |






<a name="qrl.GetKnownPeersReq"/>

### GetKnownPeersReq
Represents a query to get known peers






<a name="qrl.GetKnownPeersResp"/>

### GetKnownPeersResp
Represents the reply message to known peers query


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_info | [NodeInfo](#qrl.NodeInfo) |  | NodeInfo object containing node state information |
| known_peers | [Peer](#qrl.Peer) | repeated | List of Peer objects containing peer nodes detailed information |






<a name="qrl.GetLatestDataReq"/>

### GetLatestDataReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filter | [GetLatestDataReq.Filter](#qrl.GetLatestDataReq.Filter) |  | Data filter one of (ALL, BLOCKHEADERS, TRANSACTIONS, TRANSACTIONS_UNCONFIRMED) |
| offset | [uint32](#uint32) |  | Offset in the result list (works backwards in this case) |
| quantity | [uint32](#uint32) |  | Number of items to retrive. Capped at 100 |






<a name="qrl.GetLatestDataResp"/>

### GetLatestDataResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| blockheaders | [BlockHeaderExtended](#qrl.BlockHeaderExtended) | repeated |  |
| transactions | [TransactionExtended](#qrl.TransactionExtended) | repeated |  |
| transactions_unconfirmed | [TransactionExtended](#qrl.TransactionExtended) | repeated |  |






<a name="qrl.GetLocalAddressesReq"/>

### GetLocalAddressesReq







<a name="qrl.GetLocalAddressesResp"/>

### GetLocalAddressesResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addresses | [bytes](#bytes) | repeated |  |






<a name="qrl.GetNodeStateReq"/>

### GetNodeStateReq
Represents a query to get node state






<a name="qrl.GetNodeStateResp"/>

### GetNodeStateResp
Represents the reply message to node state query


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [NodeInfo](#qrl.NodeInfo) |  |  |






<a name="qrl.GetObjectReq"/>

### GetObjectReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bytes](#bytes) |  |  |






<a name="qrl.GetObjectResp"/>

### GetObjectResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| found | [bool](#bool) |  |  |
| address_state | [AddressState](#qrl.AddressState) |  |  |
| transaction | [TransactionExtended](#qrl.TransactionExtended) |  |  |
| block_extended | [BlockExtended](#qrl.BlockExtended) |  |  |






<a name="qrl.GetStatsReq"/>

### GetStatsReq
Represents a query to get statistics about node


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| include_timeseries | [bool](#bool) |  | Boolean to define if block timeseries should be included in reply or not |






<a name="qrl.GetStatsResp"/>

### GetStatsResp
Represents the reply message to get statistics about node


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_info | [NodeInfo](#qrl.NodeInfo) |  | NodeInfo object containing node state information |
| epoch | [uint64](#uint64) |  | Current epoch |
| uptime_network | [uint64](#uint64) |  | Indicates uptime in seconds |
| block_last_reward | [uint64](#uint64) |  | Block reward in Shor |
| block_time_mean | [uint64](#uint64) |  | Blocktime average |
| block_time_sd | [uint64](#uint64) |  | Blocktime standard deviation |
| coins_total_supply | [uint64](#uint64) |  | Total coins supply |
| coins_emitted | [uint64](#uint64) |  | Total coins emitted |
| block_timeseries | [BlockDataPoint](#qrl.BlockDataPoint) | repeated | Blocks time series of the recent blocks |






<a name="qrl.LRUStateCache"/>

### LRUStateCache







<a name="qrl.LatticePK"/>

### LatticePK



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txhash | [bytes](#bytes) |  | Transaction hash |
| dilithium_pk | [bytes](#bytes) |  | Public Key generated from Dilithium |
| kyber_pk | [bytes](#bytes) |  | Public Key generated from Kyber |






<a name="qrl.LatticePublicKeyTxnReq"/>

### LatticePublicKeyTxnReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| master_addr | [bytes](#bytes) |  | Transaction source address |
| kyber_pk | [bytes](#bytes) |  | Public key generated from Kyber |
| dilithium_pk | [bytes](#bytes) |  | Public key generated from Dilithium |
| fee | [uint64](#uint64) |  | Transaction fee in Shor |
| xmss_pk | [bytes](#bytes) |  | XMSS public key |






<a name="qrl.LatticePublicKeys"/>

### LatticePublicKeys



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lattice_keys | [Transaction](#qrl.Transaction) | repeated |  |






<a name="qrl.NodeChainState"/>

### NodeChainState



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_number | [uint64](#uint64) |  |  |
| header_hash | [bytes](#bytes) |  |  |
| cumulative_difficulty | [bytes](#bytes) |  |  |
| timestamp | [uint64](#uint64) |  |  |






<a name="qrl.NodeHeaderHash"/>

### NodeHeaderHash



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_number | [uint64](#uint64) |  |  |
| headerhashes | [bytes](#bytes) | repeated |  |






<a name="qrl.NodeInfo"/>

### NodeInfo
NodeInfo message definition


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  | Node version |
| state | [NodeInfo.State](#qrl.NodeInfo.State) |  | Node state (one of UNKNOWN, UNSYNCED, SYNCING, SYNCED, FORKED) |
| num_connections | [uint32](#uint32) |  |  |
| num_known_peers | [uint32](#uint32) |  |  |
| uptime | [uint64](#uint64) |  | Uptime in seconds |
| block_height | [uint64](#uint64) |  | Block height |
| block_last_hash | [bytes](#bytes) |  | Block&#39;s last hash |
| network_id | [string](#string) |  |  |






<a name="qrl.P2PAcknowledgement"/>

### P2PAcknowledgement



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bytes_processed | [uint32](#uint32) |  |  |






<a name="qrl.Peer"/>

### Peer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ip | [string](#string) |  |  |






<a name="qrl.PeerInfo"/>

### PeerInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peer_ip | [bytes](#bytes) |  |  |
| port | [uint32](#uint32) |  |  |
| banned_timestamp | [uint32](#uint32) |  |  |
| credibility | [uint32](#uint32) |  |  |
| last_connections_timestamp | [uint32](#uint32) | repeated |  |






<a name="qrl.Peers"/>

### Peers



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peer_info_list | [PeerInfo](#qrl.PeerInfo) | repeated |  |






<a name="qrl.PushEphemeralMessageReq"/>

### PushEphemeralMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ephemeral_message | [EncryptedEphemeralMessage](#qrl.EncryptedEphemeralMessage) |  |  |






<a name="qrl.PushTransactionReq"/>

### PushTransactionReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction_signed | [Transaction](#qrl.Transaction) |  |  |






<a name="qrl.PushTransactionResp"/>

### PushTransactionResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error_code | [PushTransactionResp.ResponseCode](#qrl.PushTransactionResp.ResponseCode) |  | Resonse code, one of (UNKNOWN, ERROR, VALIDATION_FAILED, SUBMITTED) |
| error_description | [string](#string) |  | Detailed description of the error |
| tx_hash | [bytes](#bytes) |  | Transaction hash |






<a name="qrl.SlaveTxnReq"/>

### SlaveTxnReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| master_addr | [bytes](#bytes) |  | Transaction source address |
| slave_pks | [bytes](#bytes) | repeated | Slave nodes Public keys |
| access_types | [uint32](#uint32) | repeated | Slave nodes access types |
| fee | [uint64](#uint64) |  | Transaction fee in Shor |
| xmss_pk | [bytes](#bytes) |  | XMSS public key |






<a name="qrl.StateLoader"/>

### StateLoader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addresses | [bytes](#bytes) | repeated |  |
| token_txhash | [bytes](#bytes) | repeated |  |
| txhash | [bytes](#bytes) | repeated |  |
| total_coin_supply | [uint64](#uint64) |  |  |






<a name="qrl.StateObjects"/>

### StateObjects



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state_loaders | [bytes](#bytes) | repeated |  |






<a name="qrl.StoredPeers"/>

### StoredPeers



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peers | [Peer](#qrl.Peer) | repeated |  |






<a name="qrl.TokenDetailedList"/>

### TokenDetailedList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| extended_tokens | [TransactionExtended](#qrl.TransactionExtended) | repeated |  |






<a name="qrl.TokenList"/>

### TokenList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_txhash | [bytes](#bytes) | repeated |  |






<a name="qrl.TokenMetadata"/>

### TokenMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_txhash | [bytes](#bytes) |  |  |
| transfer_token_tx_hashes | [bytes](#bytes) | repeated |  |






<a name="qrl.TokenTxnReq"/>

### TokenTxnReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| master_addr | [bytes](#bytes) |  | Transaction source address |
| symbol | [bytes](#bytes) |  | Token symbol |
| name | [bytes](#bytes) |  | Token name |
| owner | [bytes](#bytes) |  | Token owner |
| decimals | [uint64](#uint64) |  | Token decimals |
| initial_balances | [AddressAmount](#qrl.AddressAmount) | repeated |  |
| fee | [uint64](#uint64) |  | Transaction fee |
| xmss_pk | [bytes](#bytes) |  | XMSS public key |






<a name="qrl.Transaction"/>

### Transaction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| master_addr | [bytes](#bytes) |  |  |
| fee | [uint64](#uint64) |  | Transaction fee in Shor |
| public_key | [bytes](#bytes) |  |  |
| signature | [bytes](#bytes) |  | Dilithium signature |
| nonce | [uint64](#uint64) |  | Transaction nonce |
| transaction_hash | [bytes](#bytes) |  | Transaction hash |
| transfer | [Transaction.Transfer](#qrl.Transaction.Transfer) |  |  |
| coinbase | [Transaction.CoinBase](#qrl.Transaction.CoinBase) |  |  |
| latticePK | [Transaction.LatticePublicKey](#qrl.Transaction.LatticePublicKey) |  |  |
| message | [Transaction.Message](#qrl.Transaction.Message) |  |  |
| token | [Transaction.Token](#qrl.Transaction.Token) |  |  |
| transfer_token | [Transaction.TransferToken](#qrl.Transaction.TransferToken) |  |  |
| slave | [Transaction.Slave](#qrl.Transaction.Slave) |  |  |






<a name="qrl.Transaction.CoinBase"/>

### Transaction.CoinBase



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addr_to | [bytes](#bytes) |  | Transaction destination address |
| amount | [uint64](#uint64) |  | Amount in Shor |






<a name="qrl.Transaction.LatticePublicKey"/>

### Transaction.LatticePublicKey



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| kyber_pk | [bytes](#bytes) |  | Public Key generated from Kyber |
| dilithium_pk | [bytes](#bytes) |  | Public Key generated from Dilithium |






<a name="qrl.Transaction.Message"/>

### Transaction.Message



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message_hash | [bytes](#bytes) |  | Hash of message to be transfered |






<a name="qrl.Transaction.Slave"/>

### Transaction.Slave



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| slave_pks | [bytes](#bytes) | repeated | Slave nodes public keys |
| access_types | [uint32](#uint32) | repeated | Slave node access types |






<a name="qrl.Transaction.Token"/>

### Transaction.Token



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| symbol | [bytes](#bytes) |  | Token symbol |
| name | [bytes](#bytes) |  | Token name |
| owner | [bytes](#bytes) |  | Token owner wallet address |
| decimals | [uint64](#uint64) |  | Token decimals |
| initial_balances | [AddressAmount](#qrl.AddressAmount) | repeated |  |






<a name="qrl.Transaction.Transfer"/>

### Transaction.Transfer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addrs_to | [bytes](#bytes) | repeated | Transaction destination address |
| amounts | [uint64](#uint64) | repeated | Amount in Shor |






<a name="qrl.Transaction.TransferToken"/>

### Transaction.TransferToken



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_txhash | [bytes](#bytes) |  | Token transaction hash |
| addrs_to | [bytes](#bytes) | repeated | Transaction destination address |
| amounts | [uint64](#uint64) | repeated | Transaction amount |






<a name="qrl.TransactionCount"/>

### TransactionCount



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| count | [TransactionCount.CountEntry](#qrl.TransactionCount.CountEntry) | repeated |  |






<a name="qrl.TransactionCount.CountEntry"/>

### TransactionCount.CountEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [uint32](#uint32) |  |  |
| value | [uint32](#uint32) |  |  |






<a name="qrl.TransactionExtended"/>

### TransactionExtended



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [BlockHeader](#qrl.BlockHeader) |  |  |
| tx | [Transaction](#qrl.Transaction) |  |  |
| addr_from | [bytes](#bytes) |  |  |
| size | [uint64](#uint64) |  |  |






<a name="qrl.TransferCoinsReq"/>

### TransferCoinsReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| master_addr | [bytes](#bytes) |  | Transaction source address |
| addresses_to | [bytes](#bytes) | repeated | Transaction destination address |
| amounts | [uint64](#uint64) | repeated | Amount in Shor |
| fee | [uint64](#uint64) |  | Transaction fee in Shor |
| xmss_pk | [bytes](#bytes) |  | XMSS Public key |






<a name="qrl.TransferCoinsResp"/>

### TransferCoinsResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| extended_transaction_unsigned | [TransactionExtended](#qrl.TransactionExtended) |  |  |






<a name="qrl.TransferTokenTxnReq"/>

### TransferTokenTxnReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| master_addr | [bytes](#bytes) |  | Transaction source address |
| addresses_to | [bytes](#bytes) | repeated | Transaction destination address |
| token_txhash | [bytes](#bytes) |  | Transaction hash |
| amounts | [uint64](#uint64) | repeated | Amount in Shor |
| fee | [uint64](#uint64) |  | Transaction fee in Shor |
| xmss_pk | [bytes](#bytes) |  | XMSS public key |





 


<a name="qrl.GetLatestDataReq.Filter"/>

### GetLatestDataReq.Filter


| Name | Number | Description |
| ---- | ------ | ----------- |
| ALL | 0 |  |
| BLOCKHEADERS | 1 |  |
| TRANSACTIONS | 2 |  |
| TRANSACTIONS_UNCONFIRMED | 3 |  |



<a name="qrl.NodeInfo.State"/>

### NodeInfo.State
Node state

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| UNSYNCED | 1 |  |
| SYNCING | 2 |  |
| SYNCED | 3 |  |
| FORKED | 4 |  |



<a name="qrl.PushTransactionResp.ResponseCode"/>

### PushTransactionResp.ResponseCode


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| ERROR | 1 |  |
| VALIDATION_FAILED | 2 |  |
| SUBMITTED | 3 |  |


 

 


<a name="qrl.AdminAPI"/>

### AdminAPI
This is a place holder for testing/instrumentation APIs

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|


<a name="qrl.PublicAPI"/>

### PublicAPI
This service describes the Public API used by clients (wallet/cli/etc)

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetNodeState | [GetNodeStateReq](#qrl.GetNodeStateReq) | [GetNodeStateResp](#qrl.GetNodeStateReq) |  |
| GetKnownPeers | [GetKnownPeersReq](#qrl.GetKnownPeersReq) | [GetKnownPeersResp](#qrl.GetKnownPeersReq) |  |
| GetStats | [GetStatsReq](#qrl.GetStatsReq) | [GetStatsResp](#qrl.GetStatsReq) |  |
| GetAddressState | [GetAddressStateReq](#qrl.GetAddressStateReq) | [GetAddressStateResp](#qrl.GetAddressStateReq) |  |
| GetObject | [GetObjectReq](#qrl.GetObjectReq) | [GetObjectResp](#qrl.GetObjectReq) |  |
| GetLatestData | [GetLatestDataReq](#qrl.GetLatestDataReq) | [GetLatestDataResp](#qrl.GetLatestDataReq) |  |
| TransferCoins | [TransferCoinsReq](#qrl.TransferCoinsReq) | [TransferCoinsResp](#qrl.TransferCoinsReq) |  |
| PushTransaction | [PushTransactionReq](#qrl.PushTransactionReq) | [PushTransactionResp](#qrl.PushTransactionReq) |  |
| GetTokenTxn | [TokenTxnReq](#qrl.TokenTxnReq) | [TransferCoinsResp](#qrl.TokenTxnReq) |  |
| GetTransferTokenTxn | [TransferTokenTxnReq](#qrl.TransferTokenTxnReq) | [TransferCoinsResp](#qrl.TransferTokenTxnReq) |  |
| GetSlaveTxn | [SlaveTxnReq](#qrl.SlaveTxnReq) | [TransferCoinsResp](#qrl.SlaveTxnReq) |  |
| GetLatticePublicKeyTxn | [LatticePublicKeyTxnReq](#qrl.LatticePublicKeyTxnReq) | [TransferCoinsResp](#qrl.LatticePublicKeyTxnReq) |  |
| GetAddressFromPK | [GetAddressFromPKReq](#qrl.GetAddressFromPKReq) | [GetAddressFromPKResp](#qrl.GetAddressFromPKReq) |  |
| PushEphemeralMessage | [PushEphemeralMessageReq](#qrl.PushEphemeralMessageReq) | [PushTransactionResp](#qrl.PushEphemeralMessageReq) | ------- Ephemeral API ------- |
| CollectEphemeralMessage | [CollectEphemeralMessageReq](#qrl.CollectEphemeralMessageReq) | [CollectEphemeralMessageResp](#qrl.CollectEphemeralMessageReq) | ------------------------------ |
| GetTokenDetailedList | [Empty](#qrl.Empty) | [TokenDetailedList](#qrl.Empty) |  |

 



<a name="qrlbase.proto"/>
<p align="right"><a href="#top">Top</a></p>

## qrlbase.proto



<a name="qrl.GetNodeInfoReq"/>

### GetNodeInfoReq







<a name="qrl.GetNodeInfoResp"/>

### GetNodeInfoResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |
| grpcProto | [string](#string) |  |  |





 

 

 


<a name="qrl.Base"/>

### Base


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetNodeInfo | [GetNodeInfoReq](#qrl.GetNodeInfoReq) | [GetNodeInfoResp](#qrl.GetNodeInfoReq) |  |

 



<a name="qrllegacy.proto"/>
<p align="right"><a href="#top">Top</a></p>

## qrllegacy.proto



<a name="qrl.BKData"/>

### BKData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mrData | [MRData](#qrl.MRData) |  |  |
| block | [Block](#qrl.Block) |  |  |






<a name="qrl.FBData"/>

### FBData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint64](#uint64) |  |  |






<a name="qrl.LegacyMessage"/>

### LegacyMessage
Adding old code to refactor while keeping things working


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| func_name | [LegacyMessage.FuncName](#qrl.LegacyMessage.FuncName) |  |  |
| noData | [NoData](#qrl.NoData) |  |  |
| veData | [VEData](#qrl.VEData) |  |  |
| plData | [PLData](#qrl.PLData) |  |  |
| pongData | [PONGData](#qrl.PONGData) |  |  |
| mrData | [MRData](#qrl.MRData) |  |  |
| block | [Block](#qrl.Block) |  |  |
| fbData | [FBData](#qrl.FBData) |  |  |
| pbData | [PBData](#qrl.PBData) |  |  |
| bhData | [BlockHeightData](#qrl.BlockHeightData) |  |  |
| stData | [Transaction](#qrl.Transaction) |  |  |
| dstData | [Transaction](#qrl.Transaction) |  |  |
| dtData | [Transaction](#qrl.Transaction) |  |  |
| txData | [Transaction](#qrl.Transaction) |  |  |
| vtData | [Transaction](#qrl.Transaction) |  |  |
| mtData | [Transaction](#qrl.Transaction) |  |  |
| tkData | [Transaction](#qrl.Transaction) |  |  |
| ttData | [Transaction](#qrl.Transaction) |  |  |
| ltData | [Transaction](#qrl.Transaction) |  |  |
| slData | [Transaction](#qrl.Transaction) |  |  |
| ephData | [EncryptedEphemeralMessage](#qrl.EncryptedEphemeralMessage) |  |  |
| syncData | [SYNCData](#qrl.SYNCData) |  |  |
| chainStateData | [NodeChainState](#qrl.NodeChainState) |  |  |
| nodeHeaderHash | [NodeHeaderHash](#qrl.NodeHeaderHash) |  |  |
| p2pAckData | [P2PAcknowledgement](#qrl.P2PAcknowledgement) |  |  |






<a name="qrl.MRData"/>

### MRData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | FIXME: rename this to block_headerhash |
| type | [LegacyMessage.FuncName](#qrl.LegacyMessage.FuncName) |  | FIXME: type/string what is this |
| stake_selector | [bytes](#bytes) |  |  |
| block_number | [uint64](#uint64) |  |  |
| prev_headerhash | [bytes](#bytes) |  |  |
| reveal_hash | [bytes](#bytes) |  |  |






<a name="qrl.NoData"/>

### NoData







<a name="qrl.PBData"/>

### PBData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block | [Block](#qrl.Block) |  |  |






<a name="qrl.PLData"/>

### PLData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peer_ips | [string](#string) | repeated |  |






<a name="qrl.PONGData"/>

### PONGData







<a name="qrl.SYNCData"/>

### SYNCData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [string](#string) |  |  |






<a name="qrl.VEData"/>

### VEData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |
| genesis_prev_hash | [bytes](#bytes) |  |  |
| rate_limit | [uint64](#uint64) |  |  |





 


<a name="qrl.LegacyMessage.FuncName"/>

### LegacyMessage.FuncName


| Name | Number | Description |
| ---- | ------ | ----------- |
| VE | 0 | Version |
| PL | 1 | Peers List |
| PONG | 2 | Pong TODO: Obsolete |
| MR | 3 | Message received |
| SFM | 4 | Send Full Message |
| BK | 5 | Block |
| FB | 6 | Fetch request for block |
| PB | 7 | Push Block |
| BH | 8 | Block Height |
| ST | 9 | Stake Transaction |
| DST | 10 | Destake Transaction |
| DT | 11 | Duplicate Transaction |
| TX | 12 | Transfer Transaction |
| VT | 13 | Vote |
| LT | 14 | Lattice Transaction |
| EPH | 15 | Ephemeral |
| MT | 16 | Message Transaction |
| TK | 17 | Token Transaction |
| TT | 18 | Transfer Token Transaction |
| SL | 19 | Slave Transaction |
| SYNC | 20 | Add into synced list, if the node replies |
| CHAINSTATE | 21 | Chain State |
| HEADERHASHES | 22 |  |
| P2P_ACK | 23 | P2P Acknowledgement |


 

 

 



<a name="qrlmining.proto"/>
<p align="right"><a href="#top">Top</a></p>

## qrlmining.proto



<a name="qrl.GetBlockMiningCompatibleReq"/>

### GetBlockMiningCompatibleReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [uint64](#uint64) |  | Used for getlastblockheader and getblockheaderbyheight

if height = 0, this means getlastblockheader |






<a name="qrl.GetBlockMiningCompatibleResp"/>

### GetBlockMiningCompatibleResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| blockheader | [BlockHeader](#qrl.BlockHeader) |  |  |
| blockmetadata | [BlockMetaData](#qrl.BlockMetaData) |  |  |






<a name="qrl.GetBlockToMineReq"/>

### GetBlockToMineReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wallet_address | [bytes](#bytes) |  |  |






<a name="qrl.GetBlockToMineResp"/>

### GetBlockToMineResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| blocktemplate_blob | [string](#string) |  | max length 112 bytes, otherwise xmr-stak will hiccup |
| difficulty | [uint64](#uint64) |  | difficulty that the new block should meet |
| height | [uint64](#uint64) |  |  |
| reserved_offset | [uint32](#uint32) |  |  |






<a name="qrl.GetLastBlockHeaderReq"/>

### GetLastBlockHeaderReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [uint64](#uint64) |  |  |






<a name="qrl.GetLastBlockHeaderResp"/>

### GetLastBlockHeaderResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| difficulty | [uint64](#uint64) |  |  |
| height | [uint64](#uint64) |  |  |
| timestamp | [uint64](#uint64) |  |  |
| reward | [uint64](#uint64) |  |  |
| hash | [string](#string) |  |  |
| depth | [uint64](#uint64) |  |  |






<a name="qrl.SubmitMinedBlockReq"/>

### SubmitMinedBlockReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| blob | [bytes](#bytes) |  | blocktemplate_blob with the correct nonce |






<a name="qrl.SubmitMinedBlockResp"/>

### SubmitMinedBlockResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [bool](#bool) |  | It seems there are no special fields for success/error reporting, does gRPC automatically give me something? |





 

 

 


<a name="qrl.MiningAPI"/>

### MiningAPI


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetBlockMiningCompatible | [GetBlockMiningCompatibleReq](#qrl.GetBlockMiningCompatibleReq) | [GetBlockMiningCompatibleResp](#qrl.GetBlockMiningCompatibleReq) |  |
| GetLastBlockHeader | [GetLastBlockHeaderReq](#qrl.GetLastBlockHeaderReq) | [GetLastBlockHeaderResp](#qrl.GetLastBlockHeaderReq) |  |
| GetBlockToMine | [GetBlockToMineReq](#qrl.GetBlockToMineReq) | [GetBlockToMineResp](#qrl.GetBlockToMineReq) |  |
| SubmitMinedBlock | [SubmitMinedBlockReq](#qrl.SubmitMinedBlockReq) | [SubmitMinedBlockResp](#qrl.SubmitMinedBlockReq) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |
