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

All steps in here will be performed on a fresh install of Ubuntu 16.04.4 x64.

## Step 1. Setup a QRL non-mining node

A node is should be placed on a separate machine from the rest of your API. For the purposes of this guide we will install it on the same machine that we run nodejs from.

### Install Dependencies 

As **root**, install your dependencies 

```bash
apt update && sudo apt upgrade -y
reboot
apt-get -y install swig3.0 python3-dev python3-pip build-essential cmake pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs

pip3 install --upgrade setuptools
```

#### Setup SSH Keys for new user

If your environment gave you root and only root, you'll want to stop being root and create a user to work under.

```bash
# Add user
adduser --disabled-password --gecos "" qrldemo
```

On your **local development machine**, you'll want to generate a keypair

```bash
ssh-keygen
```

Next, you want to grab your **public** key. 

```bash 
cat ~/.ssh/id_rsa.pub
```

In many cases you will have created a keypair already, and it will be tempting to use that same public key. It is recommended however to *only* create 1 keypair per machine you access and use a passphrase along with that when generating with `ssh-keygen`. Always try to work under the assumption that your machine will be compromised.

> There's a reason a public key is called a public key and a private key is called a private key. Take a moment to reflect on that.
{: .information }

On the server, as **root**, log into 'qrldemo' and create the ssh directory.

```bash
su - qrldemo
mkdir ~/.ssh; chmod 700 ~/.ssh/
```

Using the best editor, enter in your public key that you want to use to login.

```bash
vi ~/.ssh/authorized_keys
```

Exit out of root and end your session.

There shouldn't be anymore reason to use root for the remainder of this guide.

#### Logout and log into 'qrldemo'

```bash
ssh qrldemo@156.27.112.2 -i ~/.ssh/id_rsa
```

### Install QRL

```bash
pip3 install --upgrade --user pip
pip3 install --upgrade --user qrl
```

### Start the QRL node

```bash
start_qrl --miningCreditWallet Q010500ef97a9abf15e65252a22391992823bc9529f552f1fa9c555f32d9174ae050ef83290a21e
```

You should receive this

```bash
2018-03-29 05:45:06,558|0.0.post0.dev1+g887b428|unsynced| INFO : grpc public service - started !
2018-03-29 05:45:06,562|0.0.post0.dev1+g887b428|unsynced| INFO : grpc admin service - started !
2018-03-29 05:45:06,563|0.0.post0.dev1+g887b428|unsynced| INFO : [TWISTED] P2PFactory starting on 9000
```

This runs a mining node. If you want to run a non-mining node, you'll need to create and edit the `~/.qrl/config.yml` file and set `mining_enabled` to `false`. Reset your node after.

```yaml
# ======================================
#    Mining Configuration
# ======================================
mining_enabled: False
# mining_thread_count: 0  # 0 to auto detect thread count based on CPU/GPU number of processors
```

Reset your node by pressing `ctrl+c` and invoking `start_qrl` again to initialize the configuration file.

```bash
start_qrl --miningCreditWallet Q010500ef97a9abf15e65252a22391992823bc9529f552f1fa9c555f32d9174ae050ef83290a21e
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

## Step 2. Hello world

Start a new project in a fresh directory

```bash
mkdir ~/qrldemo/
cd qrldemo/
```

For this you will need a QRL proto file. Download it [here](https://github.com/theQRL/QRL/blob/master/src/qrl/protos/qrlbase.proto)

#### package.json

As we're working with nodejs it's common to have a package.json, lets define it.

```json
{
  "name": "QRL-Hello",
  "version": "0.1.0",
  "description": "NodeJS Demo Application",
  "main": "index.js",
  "author": "",
  "license": "MIT",
  "dependencies": {
    "fs-extra": "^5.0.0",
    "grpc": "^1.9.1",
    "qrllib": "^0.8.9",
    "temp": "^0.8.3",
    "validate-qrl-address":"^1.1.0"
  }
}
```

Then install it

```bash
npm install
```


#### Initialize 

```js
let grpc = require('grpc');
let temp = require('temp').track();
let fs = require("fs-extra");
let qrllib = require('./node_modules/qrllib/build/libjsqrl.js');
let qrlClient = getQRLClient('104.237.3.185:9009');

async function fetchRemoteProto(nodeAddr) {
    let protoDescriptor = grpc.load('qrlbase.proto');
    let client = new protoDescriptor.qrl.Base(nodeAddr, grpc.credentials.createInsecure());

    return new Promise( (resolve) => {
        client.getNodeInfo({}, function (err, nodeInfo) {
            if (err) {
                throw err;
            }
            let requiredFile = '/tmp/google/protobuf/timestamp.proto';
            if (!fs.existsSync(requiredFile))
            {
                fs.ensureDirSync('/tmp/google/protobuf');
                fs.copySync('timestamp.proto', requiredFile, { overwrite : true });
            }
            temp.open('proto', (err, info) => {
                if (!err) {
                    fs.write(info.fd, nodeInfo.grpcProto);
                    fs.close(info.fd, function () {
                        let remoteProtoDescriptor = grpc.load(info.path);
                        resolve(remoteProtoDescriptor);
                    });
                }
            });
        });
    });
}

async function getQRLClient(nodeAddr) {
    return new Promise(resolve => {
        const remoteProto = fetchRemoteProto(nodeAddr);
        remoteProto.then(function (remoteProto) {
            let client = new remoteProto.qrl.PublicAPI(nodeAddr, grpc.credentials.createInsecure());
            resolve(client);
        });
    });
}

console.log(qrlClient);
```


## Step 3. Creating a wallet file
## Step 4. Getting your wallet address
## Step 5. Moving funds
### 5a. One to one
### 5b. One to many

