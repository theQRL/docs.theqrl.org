---
title: QRL Node Configuration
categories: node
tags: node
---

The QRL node can be configured in multiple ways to utilize various features in different ways. You may have some specific requirements for running behind a firewall or other edge cases. 

To accommodate this, QRL uses a configuration file found in the root qrl directory `~/.qrl/config.yml` this file contains all of the directives available to the user. You will find these configuration options as the default settings, commented out. 

> For a great guide on .yml file layouts see this [YAML to JSON Cheat sheet](https://medium.com/@kenichishibata/yaml-to-json-cheatsheet-c3ac3ef519b8)
{: .info}


## Configuration Directives
Below are all of the options, with explanations. You will find the config file has some comments, we explain in more detail here.


### Mining Configuration

This section covers all of the required settings needed to setup and mine QRL on a local node.

#### Mining

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| mining_enabled | False | Allows the QRL node to mine blocks on the network |
| mining_address | '' | Address of the wallet to mine to (where mined coins wil go)
| mining_thread_count | 0 | 0 to auto detect thread count based on CPU/GPU number of processors |


###  Ephemeral Configuration

Ephemeral messaging configuration details are shown below.

#### Ephemeral

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| accept_ephemeral | True |  |
| outgoing_message_expiry | 90  |  |
|  |  |  |


#### Cache Size

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| lru_state_cache_size | 10 |  |
| max_state_limit | 10 |  |



###  P2P Configuration


|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
|  enable_peer_discovery | True | Allows to discover new peers from the connected peers
 |
| p2p_local_port | 19000 | Locally binded port at which node will listen for connection |
| p2p_public_port | 19000 | Public port forwarding connections to server |
| peer_rate_limit | 500 | Max Number of messages per minute per peer |
| ban_minutes | 20 | Allows to ban a peer's IP who is breaking protocol |
| monitor_connections_interval | 30 | Monitor connection every 30 seconds |
| max_peers_limi | 100 | Number of allowed peers |
| chain_state_timeout | 180 | |
| chain_state_broadcast_period | 30 | must be less than ping_timeout |
| transaction_pool_size | 25000 |  |
| pending_transaction_pool_size | 75000 | 1% of the pending_transaction_pool will be reserved for moving stale txn |
| stale_transaction_threshold | 15 | 15 blocks |


##### peer_list:
- 104.251.219.215
- 104.251.219.145
- 104.251.219.40
- 104.237.3.185
- 35.177.60.137

##### ntp_servers:
- pool.ntp.org
- ntp.ubuntu.com



### ADMIN API CONFIGURATION


|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| admin_api_enabled | False |  |
| admin_api_host | "127.0.0.1" |  |
| admin_api_port | 19008 |  |
| admin_api_threads | 1 |  |
| admin_api_max_concurrent_rpc | 100 |  |



### PUBLIC API CONFIGURATION

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| public_api_enabled | True |  |
| public_api_host | "0.0.0.0" |  |
| public_api_port | 19009 |  |
| public_api_threads | 1 |  |
| public_api_max_concurrent_rpc | 100 |  |



### MINING API CONFIGURATION

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| mining_api_enabled | False |  |
| mining_api_host | "127.0.0.1" |  |
| mining_api_port | 19007 |  |
| mining_api_threads | 1 |  |
| mining_api_max_concurrent_rpc | 100 |  |



###  GRPC PROXY CONFIGURATION

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| grpc_proxy_host | "127.0.0.1" |  |
| grpc_proxy_port | 18090 |  |
| p2p_q_size | 1000 |  |
| outgoing_message_expiry | 90 | Outgoing message expires after 90 seconds |




## Config.yml

```yaml

# ======================================
#    Mining Configuration
# ======================================
# mining_enabled: False
# mining_address: ''
# mining_thread_count: 0  # 0 to auto detect thread count based on CPU/GPU number of processors
#
# ======================================
#    Ephemeral Configuration
# ======================================
# accept_ephemeral: True
# outgoing_message_expiry: 90 
# Cache Size
# lru_state_cache_size: 10
# max_state_limit: 10

# ======================================
#    P2P Configuration
# ======================================
# enable_peer_discovery: True  # Allows to discover new peers from the connected peers
# p2p_local_port: 19000
# p2p_public_port: 19000
# peer_rate_limit: 500  # Max Number of messages per minute per peer
# ban_minutes: 20              # Allows to ban a peer's IP who is breaking protocol
# monitor_connections_interval: 30
# max_peers_limit: 100  # Number of allowed peers
# chain_state_timeout: 180
# chain_state_broadcast_period: 30		# must be less than ping_timeout
# transaction_pool_size: 25000
# pending_transaction_pool_size: 75000
# stale_transaction_threshold: 15		# 15 Blocks
#
# peer_list: 
#  - 35.178.79.137
#  - 35.177.182.85
#  - 18.130.119.29
#  - 18.130.25.64
#
# ntp_servers:
#   - pool.ntp.org
#   - ntp.ubuntu.com
#
# ======================================
#        ADMIN API CONFIGURATION
# ======================================
# admin_api_enabled: False
# admin_api_host: "127.0.0.1"
# admin_api_port: 19008
# admin_api_threads: 1
# admin_api_max_concurrent_rpc: 100
#
# ======================================
#        PUBLIC API CONFIGURATION
# ======================================
# public_api_enabled: True
# public_api_host: "0.0.0.0"
# public_api_port: 19009
# public_api_threads: 1
# public_api_max_concurrent_rpc: 100
#
# ======================================
#        MINING API CONFIGURATION
# ======================================
# mining_api_enabled: False
# mining_api_host: "127.0.0.1"
# mining_api_port: 19007
# mining_api_threads: 1
# mining_api_max_concurrent_rpc: 100
#
# ======================================
#        GRPC PROXY CONFIGURATION
# ======================================
# grpc_proxy_host: "127.0.0.1"
# grpc_proxy_port: 18090
# p2p_q_size: 1000
# outgoing_message_expiry: 90  # Outgoing message expires after 90 seconds

```
