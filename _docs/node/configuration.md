---
title: QRL Node Configuration
categories: node
description: The QRL Node Configuration documentation
tags: node
---

The QRL node can be configured in multiple ways to utilize various features in different ways. You may have some specific requirements for running behind a firewall or other edge cases. 

To accommodate this, QRL uses a configuration file found in the root qrl directory `~/.qrl/config.yml` this file contains all of the directives available to the user. You will find these configuration options as the default settings, commented out. 

> For a great guide on .yml file layouts see this [YAML to JSON Cheat sheet](https://medium.com/@kenichishibata/yaml-to-json-cheatsheet-c3ac3ef519b8)
{: .info}

Grab a copy of the file here [https://docs.theqrl.org/node/config.yml](https://docs.theqrl.org/node/config.yml). Also shown at the bottom of this page.

## Configuration Directives

Below are all of the options, with explanations. You will find the config file has some comments, we explain in more detail here.


### Mining Configuration

This section covers all of the required settings needed to setup and mine QRL on a local node.

#### Mining

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| mining_enabled | {{ layout.v.qrlConf.mining_enabled }} | Allows the QRL node to mine blocks on the network |
| mining_address | {{ layout.v.qrlConf.mining_address }} | Address of the wallet to mine to (where mined coins wil go)
| mining_thread_count | {{ layout.v.qrlConf.mining_thread_count }} | 0 to auto detect thread count based on CPU/GPU number of processors |


###  Ephemeral Configuration

Ephemeral messaging configuration details are shown below.

#### Ephemeral

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| accept_ephemeral | {{ layout.v.qrlConf.accept_ephemeral }} |  |
| outgoing_message_expiry | {{ layout.v.qrlConf.outgoing_message_expiry }}  |  |


#### Cache Size

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| lru_state_cache_size | {{ layout.v.qrlConf.lru_state_cache_size }} |  |
| max_state_limit | {{ layout.v.qrlConf.max_state_limit }} |  |



###  P2P Configuration


|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
|  enable_peer_discovery | {{ layout.v.qrlConf.enable_peer_discovery }} | Allows to discover new peers from the connected peers
 |
| p2p_local_port | {{ layout.v.qrlConf.p2p_local_port }} | Locally binded port at which node will listen for connection |
| p2p_public_port | {{ layout.v.qrlConf.p2p_public_port }} | Public port forwarding connections to server |
| peer_rate_limit | {{ layout.v.qrlConf.peer_rate_limit }} | Max Number of messages per minute per peer |
| ban_minutes | {{ layout.v.qrlConf.ban_minutes }} | Allows to ban a peer's IP who is breaking protocol |
| monitor_connections_interval | {{ layout.v.qrlConf.monitor_connections_interval }} | Monitor connection every 30 seconds |
| max_peers_limit | {{ layout.v.qrlConf.max_peers_limit }} | Number of allowed peers |
| chain_state_timeout | {{ layout.v.qrlConf.chain_state_timeout }} | |
| chain_state_broadcast_period | {{ layout.v.qrlConf.chain_state_timeout }} | must be less than ping_timeout |
| transaction_pool_size | {{ layout.v.qrlConf.transaction_pool_size }} |  |
| pending_transaction_pool_size | {{ layout.v.qrlConf.pending_transaction_pool_size }} | 1% of the pending_transaction_pool will be reserved for moving stale txn |
| stale_transaction_threshold | {{ layout.v.qrlConf.stale_transaction_threshold }} | 15 blocks |


##### peer_list:

List of available peers with open public API ports

- 35.178.79.137
- 35.177.182.85
- 18.130.119.29
- 18.130.25.64

##### ntp_servers:

List of NTP servers for the node to use

- pool.ntp.org
- ntp.ubuntu.com



### ADMIN API CONFIGURATION


|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| admin_api_enabled | {{ layout.v.qrlConf.admin_api_enabled }} |  |
| admin_api_host | {{ layout.v.qrlConf.admin_api_host }} |  |
| admin_api_port | {{ layout.v.qrlConf.admin_api_port }} |  |
| admin_api_threads | {{ layout.v.qrlConf.admin_api_threads }} |  |
| admin_api_max_concurrent_rpc | {{ layout.v.qrlConf.admin_max_concurrent_rpc }} |  |



### PUBLIC API CONFIGURATION

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| public_api_enabled | {{ layout.v.qrlConf.public_api_enabled }} |  |
| public_api_host | {{ layout.v.qrlConf.public_api_host }} |  |
| public_api_port | {{ layout.v.qrlConf.public_api_port }} |  |
| public_api_threads | {{ layout.v.qrlConf.public_api_threads }} |  |
| public_api_max_concurrent_rpc | {{ layout.v.qrlConf.public_api_concurrent_rpc }} |  |



### MINING API CONFIGURATION

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| mining_api_enabled | {{ layout.v.qrlConf.mining_api_enabled }} |  |
| mining_api_host | {{ layout.v.qrlConf.mining_api_host }} |  |
| mining_api_port | {{ layout.v.qrlConf.mining_api_port }} |  |
| mining_api_threads | {{ layout.v.qrlConf.mining_api_threads }} |  |
| mining_api_max_concurrent_rpc | {{ layout.v.qrlConf.mining_api_max_concurrent_rpc }} |  |


### DEBUG API CONFIGURATION

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| debug_api_enabled | {{ layout.v.qrlConf.debug_api_enabled }} | |
| debug_api_host | {{ layout.v.qrlConf.debug_api_host }} | |
| debug_api_port | {{ layout.v.qrlConf.debug_api_port }} | |
| debug_api_threads | {{ layout.v.qrlConf.debug_api_threads }} | |
| debug_api_max_concurrent_rpc | {{ layout.v.qrlConf.debug_api_max_concurrent_rpc }} | |


###  GRPC PROXY CONFIGURATION

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| grpc_proxy_host | {{ layout.v.qrlConf.grpc_proxy_host }} |  |
| grpc_proxy_port | {{ layout.v.qrlConf.grpc_proxy_port }} |  |
| p2p_q_size | {{ layout.v.qrlConf.p2p_q_size }} |  |
| outgoing_message_expiry | {{ layout.v.qrlConf.outgoing_message_expiry }} | Outgoing message expires after 90 seconds |


### WALLET DAEMON CONFIGURATION

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| public_api_server | {{ layout.v.qrlConf.public_api_server }} | |
| wallet_daemon_host | {{ layout.v.qrlConf.wallet_daemon_host }} | |
| wallet_daemon_port | {{ layout.v.qrlConf.wallet_daemon_port }} | |

### WALLET API CONFIGURATION

|  Directive  |  Default Value  |  Description  |
|:------------|:---------------:|:--------------|
| wallet_api_host | {{ layout.v.qrlConf.wallet_api_host }} | |
| wallet_api_port | {{ layout.v.qrlConf.wallet_api_port }} | |
| wallet_api_threads | {{ layout.v.qrlConf.wallet_api_threads }}| |
| wallet_api_max_concurrent_rpc | {{ layout.v.qrlConf.wallet_api_max_concurrent_rpc }} | |


## Config.yml

```yaml
## qrl conf.yml file
##
## This is the configuration file for qrl. 
## It is typically found in the ~/.qrl/ directory
## Default settings are shown below. 
## All commands begin with single(#) 
## Uncomment and adjust to suit your needs
##
##======================================
##   Mining Configuration
##======================================
# mining_enabled: False
# mining_address: ''
# mining_thread_count: 0  # 0 to auto detect thread count based on CPU/GPU number of processors
#
##======================================
##   Ephemeral Configuration
##======================================
# accept_ephemeral: True
# Cache Size
# lru_state_cache_size: 10
# max_state_limit: 10
#
##======================================
##   PEER Configuration
##======================================
# max_redundant_connections: 5  # Number of connections allowed from nodes having same IP
# enable_peer_discovery: True  # Allows to discover new peers from the connected peers
# peer_list: 
#  - 35.178.79.137
#  - 35.177.182.85
#  - 18.130.119.29
#  - 18.130.25.64
# p2p_local_port: 19000
# p2p_public_port: 19000
# peer_rate_limit: 500  # Max Number of messages per minute per peer
# p2p_q_size: 10000
# outgoing_message_expiry: 90  # Outgoing message expires after 90 seconds
# ntp_servers:
#   - pool.ntp.org
#   - ntp.ubuntu.com
# ntp_refresh: 12 * 60 * 60  # 12 hours
# ntp_request_timeout: 10  # 10 seconds ntp timeout
# ban_minutes: 20              # Allows to ban a peer's IP who is breaking protocol
# monitor_connections_interval: 30
# max_peers_limit: 100  # Number of allowed peers
# chain_state_timeout: 180
# chain_state_broadcast_period: 30    # must be less than ping_timeout
# transaction_minimum_fee: 1000000000
# transaction_pool_size: 25000
# pending_transaction_pool_size: 75000
# pending_transaction_pool_reserve: 75
# stale_transaction_threshold: 15   # 15 Blocks
# _qrl_dir: "~/.qrl"
#
##======================================
##       ADMIN API CONFIGURATION
##======================================
# admin_api_enabled: False
# admin_api_host: "127.0.0.1"
# admin_api_port: 19008
# admin_api_threads: 1
# admin_api_max_concurrent_rpc: 100
#
##======================================
##       PUBLIC API CONFIGURATION
##======================================
# public_api_enabled: True
# public_api_host: "127.0.0.1"
# public_api_port: 19009
# public_api_threads: 1
# public_api_max_concurrent_rpc: 100
#
##======================================
##       MINING API CONFIGURATION
##======================================
# mining_api_enabled: False
# mining_api_host: "127.0.0.1"
# mining_api_port: 19007
# mining_api_threads: 1
# mining_api_max_concurrent_rpc: 100
#
##======================================
##        DEBUG API CONFIGURATION
##======================================
# debug_api_enabled: False
# debug_api_host: "127.0.0.1"
# debug_api_port: 52134
# debug_api_threads: 1
# debug_api_max_concurrent_rpc: 100
#
##======================================
##       GRPC PROXY CONFIGURATION
##======================================
# grpc_proxy_host: "127.0.0.1"
# grpc_proxy_port: 18090
#
##======================================
##      WALLET DAEMON CONFIGURATION
##======================================
# public_api_server: "127.0.0.1:19009"
# wallet_daemon_host: "127.0.0.1"
# wallet_daemon_port: 18091
# number_of_slaves: 3
#
##======================================
##        WALLET API CONFIGURATION
##======================================
# wallet_api_host: "127.0.0.1"
# wallet_api_port: 19010
# wallet_api_threads: 1
# wallet_api_max_concurrent_rpc: 100
#
#


```
