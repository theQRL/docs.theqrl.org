---
title: Tutorial - My first demo app
---

## Introduction

This beginner guide will take you step by step to create a full working nodejs app utilizing QRL's API's:

- Create a wallet file
- Get a wallet address
- Move funds
	- One to one
	- One to Many

All steps in here will be performed on a fresh install of Ubuntu 16.04.

## Step 1. Setup a QRL non-mining node

A node is on a separate machine from the rest of your API.

### Install Dependencies 

```bash
sudo apt update && sudo apt upgrade -y
sudo apt-get -y install swig3.0 python3-dev python3-pip build-essential cmake pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev
```

### Install QRL

```bash
pip3 install -U qrl
```

### Start QRL Node

```bash
start_qrl
```

### General Interaction

There are two main things that are installed with a QRL node that allow you to control it. One is `start_qrl` which manages the node and p2p network, while `qrl` allows you to interact with wallets and transactions. 

> For the guide, you'll be interacting with our [gRPC](https://grpc.io/docs/) API as it's more applicable to making applications.
{: .information}

```bash
qrl --help

Usage: cli.py [OPTIONS] COMMAND [ARGS]...

  QRL Command Line Interface

Options:
  -r, --remote        connect to remote node
  --host TEXT         remote host address             [127.0.0.1]
  --port_pub INTEGER  remote port number (public api) [9009]
  --port_adm INTEGER  remote port number (admin api)  [9009]* will change
  --wallet_dir TEXT   local wallet dir
  --json              output in json
  --version           Show the version and exit.
  --help              Show this message and exit.

Commands:
  collect            Collects and returns the list of encrypted...
  send_eph_message   Creates & Push Ephemeral Message :param ctx:...
  slave_tx_generate  Generates Slave Transaction for the wallet
  state              Shows Information about a Node's State
  token_list         Create Token Transaction, that results into...
  tx_inspect         Inspected a transaction blob
  tx_latticepk       Create Lattice Public Keys Transaction
  tx_prepare         Request a tx blob (unsigned) to transfer from...
  tx_push
  tx_sign            Sign a tx blob
  tx_token           Create Token Transaction, that results into...
  tx_transfer        Transfer coins from src to dst
  tx_transfertoken   Create Token Transaction, that results into...
  wallet_add         Adds an address or generates a new wallet...
  wallet_gen         Generates a new wallet with one address
  wallet_ls          Lists available wallets
  wallet_recover     Recovers a wallet from a hexseed or mnemonic...
  wallet_secret      Provides the mnemonic/hexseed of the given...

```

```bash
start_qrl --help


usage: start_qrl.py [-h] [--mining_thread_count] [--quiet]
                    [--datadir DATA_DIR] [--no-colors]
                    [-l {DEBUG,INFO,WARNING,ERROR,CRITICAL}]
                    --miningCreditWallet MINING_CREDIT_WALLET

QRL node

optional arguments:
  -h, --help            show this help message and exit
  --mining_thread_count, -m
                        Number of threads for mining
  --quiet, -q           Avoid writing data to the console
  --datadir DATA_DIR, -d DATA_DIR
                        Retrieve data from a different path
  --no-colors           Disables color output
  -l {DEBUG,INFO,WARNING,ERROR,CRITICAL}, --loglevel {DEBUG,INFO,WARNING,ERROR,CRITICAL}
                        Set the logging level
  --miningCreditWallet MINING_CREDIT_WALLET
                        QRL Wallet address on which mining reward has to be
                        credited.
```

#### Look at the config

```bash
vi ~/.qrl/config.yml
```



## Step 2. Hello world


### Package.json
As we're working with nodejs it's common to have a package.json, lets define it.

```json
{
  "name": "My Demo App",
  "version": "1.0.0",
  "description": "NodeJS Demo Application",
  "main": "index.js",
  "scripts": {
    "test": "./node_modules/.bin/mocha"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai": "^4.1.2",
    "fs-extra": "^5.0.0",
    "grpc": "^1.9.1",
    "qrllib": "^0.8.9",
    "temp": "^0.8.3"
  }
}
```

## Step 3. Creating a wallet file
## Step 4. Getting your wallet address
## Step 5. Moving funds
### 5a. One to one
### 5b. One to many