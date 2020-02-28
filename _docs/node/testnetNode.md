---
title: QRL Testnet Node
categories: node
description: The QRL Testnet Node documentation
tags: node, testnet
---

This guide will explain the installation and configuration of a Testnet node running on the latest QRL code base. 

Interacting with the QRL network while developing can present some complications, especially when dealing with live currency. There are situations where having a Testnet to interact with is beneficial. The QRL testnet is exactly that.

Our testnet network includes the latest code changes, improvements and releases that are in testing and at times, may be unstable. *It is a testnet, after all.*

Testnet will restart frequently as patches are made. Official postings will be made to alert users of these resets where achievable. Please join our [Discord Server](https://discord.gg/jBT6BEp) for announcements or to get in touch with the team.

> There is no value associated with the Testnet QRL, It's only used for testing and developing with the QRL. 
{: .info}

> Never use a QRL address on both networks! OTS keys should never be re-used, even on separate networks.
{: .warning}

## Testnet Installation


With the latest updates to the code, it is even easier to run a testnet node. Simply pass a command flag when the node is started and all of the required configuration and setup happens automatically. This should lower the bar for anyone wanting to run our node.

Additionally starting a node with the `{{ layout.v.qrlCommands.startTestNetQRL }}` flag will create a new directory, placing all of the testnet chain sate files and other data into a newly created directory, `{{ layout.v.qrlConf.qrlTestnetDir }}`

This simplifies migration from testnet to a Main-Net node on the same system as there is no longer the need to clear out any contents to switch between networks.


#### Requirements

The basic requirements for a QRL Testnet node are exactly the same as [running a full node](/node/QRLnode) on Main-Net. These are requirements for the QRL node software to operate.  

- Support for AES-NI
- Support for avx2 (Used by keccak library for hashing functions)
- HDD with enough storage for the blockchain as it grows
- Reliable network connection
- Python 3.6
- 64 bit processor

#### Install QRL

Below are abridged instructions for installing QRL on Ubuntu. These instructions are identical to the full node setup. Please refer to the [QRL Node Install Doc](/node/QRLnode) for further information on installing the QRL Python Node.

```bash
# Update and Upgrade packages
sudo apt update && sudo apt upgrade -y

# Install Required dependencies
{{ layout.v.qrlCommands.qrlRequirementsUbuntu }}

## Install CMAKE version 3.10.3 manually
{{ layout.v.qrlCommands.cmakeInstall }}

# Make sure setuptools is the latest
pip3 install -U setuptools

# Install QRL
{{ layout.v.qrlCommands.qrlInstall }}
```

> Once this is complete you can check the status of the QRL install by passing the `qrl --version` command. It should print the latest version that matches the [Github Repo](https://github.com/theqrl/qrl)
{: .info}


#### Start The QRL Node

Now that we have QRL installed begin syncing the Testnet node. 

```bash
{{ layout.v.qrlCommands.startTestNetQRL }}
```

The Testnet node will sync the entire blockchain to your computer. after syncing the chain you will begin seeing blocks added. 



#### Config.yml File

This file is automatically placed in the correct directory, no longer requiring any user interaction. You will find this in the `{{ layout.v.qrlConf.qrlTestnetDir }}` directory after starting the Testnet node for the first time. 

The configuration file tells the node where to look for peers to connect to, what to expect for network settings, difficulty etc. Have a look at the [Configuration Documentation](/node/configuration) for more information on other configuration options.

Below is an example of what you will find in the configuration file after starting the Testnet node. The details may change as the node is developed and the network is reset over time.

```yml
peer_list: [ "18.130.83.207", "35.176.41.49", "18.130.187.220", "35.176.33.242" ]
genesis_prev_headerhash: 'The Testnet Genesis'
genesis_timestamp: 1530004179
genesis_difficulty: 5000
db_name: 'testnet-state'
```

#### Genesis.yml File

This file is now created automatically when you start the Testnet node. Simply start the qrl node passing the new `{{ layout.v.qrlCommands.startTestNetQRL }}`


## Updating Testnet Nodes

If you are running a Testnet node you will need to keep up to date as we reset testnet periodically. 

Each time the network is updated you will need to refresh some files and restart the node. Look for messages from the QRL team in the chat on Discord for updates to testnet.

#### Updating Is Simple

1. Stop the node
2. Update QRL `pip3 install -U qrl`
3. Remove the `~/.qrl-testnet/data` directory
4. Remove the `~/.qrl/genesis.yml` file 
5. Remove the `~/.qrl/config.yml` file 
6. Restart the node using `{{ layout.v.qrlCommands.startTestNetQRL }}`


The last command will pull down, and relocate the config.yml and genesis.yml files into the correct {{ layout.v.qrlConf.qrlTestnetDir }} directory with the latest Testnet configurations. This should start syncing the testnet network to your computer. 

Verify that the details match what you expect issuing the `qrl state` command. The blockheight and network_id should be updated with the latest details and match what is shown on the [Testnet Explorer](https://testnet-explorer.theqrl.org).

## Mining TestNet

We encourage people to set their nodes on Testnet to allow mining. This is a great way to earn some test QRL and helps the *small* network validate transactions and propagate blocks more efficiently. 

- Please note that most virtual private server providers dis-allow mining operations on shared resources. This may end up in a ban from the 3rd party system. 
- There is no need for mining pools and GPU mining on the testnet, save that hash power for the real network. 
- Testnet QRL is not traded, and is not worth any real value. *This is only a test...*

#### Enable Mining

To enable mining on your Testnet node, simply add the following to the `~/.qrl/config.yml` file and restart the node to pickup the changes.

```bash
mining_enabled: True
mining_address: ‘TESTNET_QRL_ADDRESS_HERE’
mining_thread_count: 0 
```

If you are in need of some QRL for testing on the TestNet, head over to the faucet and enter your Testnet address. You can find the link below. You will also find a link to the testnet wallet below, in case you need one of those too. 

## Testnet Links

Some helpful links for the Testnet network. Since this is a completely separate blockchain, we need to use the testnet wallet and block explorer.

- [testnet-wallet.theqrl.org](https://testnet-wallet.theqrl.org)
- [testnet-explorer.theqrl.org](https://testnet-explorer.theqrl.org)
- [testnet-faucet.qrl.tips](https://testnet-faucet.qrl.tips)

