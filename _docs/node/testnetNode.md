---
title: QRL Testnet Node
categories: node
tags: node
---

Interacting with the QRL network while developing can present some complications, especially when dealing with live currency. There are situations where having a testnet is beneficial and this guide intends to describe the installation and setup of a testnet node. This will explain configuring and running the latest QRL code on the testnet chain. 


> The only difference between a MainNet node and a TestNet node is the chain that is being hashed. There is no value associated with the Testnet, and coins are not valid between the two.
{: .info}




The only difference here is the blockchain that is used, as defined in the configuration files of the testnet node. This ensures full development and testing of the QRL network without fear of incompatibility.

### Installation

Below are abridged instructions for installing QRL on Ubuntu. These instructions are identical to the full node setup. Please refer to the [QRL Node Install Doc](/node/QRLnode) for further instructions to install QRL.


**Install QRL**

```bash
# Update and Upgrade packages
sudo apt update && sudo apt upgrade -y

# Install Required dependencies
{{ layout.v.qrlCommands.qrlRequirementsUbuntu }}

# Make sure setuptools is the latest
pip3 install -U setuptools

# Install QRL
{{ layout.v.qrlCommands.qrlInstall }}
```

### Config.yml

To start using the TestNet chain, you need to connect to other nodes running the testnet. To define this variable you need to include a config.yml file in the default QRL directory. 

Insert the following lines into `~/.qrl/config.yml` *(You may need to create this directory)*

```yml
peer_list: [ "18.130.83.207", "35.176.41.49", "18.130.187.220", "35.176.33.242" ]
genesis_prev_headerhash: 'Dein Name is Testnet'
genesis_timestamp: 1529321348
genesis_difficulty: 5000
```

### Genesis.yml

The QRL node needs to know some information from the genesis of the blockchain. For a MainNet node, this information is installed by default. For a TestNet node you have to pass this to the node in a properly placed `genesis.yml` file.  This file lives in the same directory as the config.yml file.

Due to the size of this file, we have included it at the end of this document. You can grab a copy of this from the QRL docs page at [https://docs.theqrl.org/node/genesis.yml](https://docs.theqrl.org/node/genesis.yml) or with `wget https://docs.theqrl.org/node/genesis.yml`


## Start QRL Node

Now that we have QRL installed and the appropriate configuration you can `start_qrl` and begin syncing the TestNet node. 

```bash
{{ layout.v.qrlCommands.startQRL }}
```

The TestNet node will sync the entire blockchain to your computer, make sure you have enough space. after syncing the chain you will begin seeing blocks added. 