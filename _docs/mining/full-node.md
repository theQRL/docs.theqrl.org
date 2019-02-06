---
title: Mining with a QRL Node
categories: mining
description: The QRL Mining documentation
tags: mining
---


You can setup a QRL mining node on a PC or server. This will allow you to mine QRL while also running a node on the QRL network. You simply need to enable mining on the QRL node in a config file to begin mining QRL.

__Requirements__

- QRL installed and fully synced
- QRL Wallet to send rewards to
- A little time to set it up
- Local or remote shell connection (ssh)

> This write-up assumes that you have a fully functioning QRL node running and fully synced with the blockchain. If you need to, see the guide at [docs.theqrl.org/node/QRLnode](/node/QRLnode)


While connected to the computer running qrl you can see the state of the node by entering `qrl state` into the command line. This will print out the blockheight of the local node as well as some other information. Check that this is the same height as the [QRL explorer](https://explorer.theqrl.org) shows. 


Once fully synced you can start mining by editing the config file found in `{{ layout.v.qrlConf.confLocation }}` enabling mining. 


## Configuration

To begin mining you will need to create and edit a file located in the default QRL directory `{{ layout.v.qrlConf.confLocation }}`. There are a ton of configurations and settings you can tweak, however for this guide we are only concerned with the mining settings. 

> For a complete guide of the configuration settings, please see the [QRL Node Configurations](/node/configuration) guide.
{: .info}

Create the config file and add these settings to the file if not already created.

```bash
nano {{ layout.v.qrlConf.confLocation }} 
```

```bash
# ======================================
#    Mining Configuration
# ======================================
# mining_enabled: False
# mining_address: ‘’
# mining_thread_count: 0  # 0 auto detect thread count based on number of processors
#
```

These are the default settings the node is currently using. Change the values and remove the \# to begin mining. 

> You need to enter a valid QRL address, change the `False` value to a `True` value, and set the thread count if you want to adjust. 
{: .info}

Once you have made your changes the file will look something like this. 

> Note the QRL address shown needs to be replaced, unless you want to donate some quanta!
{: .info}

```bash
# ======================================
#    Mining Configuration
# ======================================
 mining_enabled: True
 mining_address: ‘Q02090081f7e33cc535ca6ca54305f7d34cf2cd9620b1efcae657a76ca4c072902dfc4ed0f23a4a’
 mining_thread_count: 0  # 0 to auto detect thread count based on CPU/GPU number of processors
#
```

## Restart QRL

Restart the qrl node to begin mining with the new changes.

```bash
{{ layout.v.qrlCommands.startQRL }} 
```

Once the node re-syncs with the network and catches up it will begin mining the current blocks on the chain You will see the rewards in the wallet you have specified in the configuration file.

You can also enter the following to print the state of the node

```bash
{{ layout.v.qrlCommands.qrlState }} 
```
