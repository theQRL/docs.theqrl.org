---
title: Setup a QRL Pool
categories: mining
description: The QRL Mining documentation
tags: mining
---



To fully utilize the benefits of multiple devices or GPU mining rigs, one can setup a stratum pool and use multiple machines to mine as the same device, effectively raising the hashrate of the mining efforts and increasing the odds of finding blocks. 

Running a pool will also increase the redundancy and decentralization of the blockchain. A mining pool is required to run a full QRL node, syncing and verifying transactions on the network by default.

Running a mining pool is not something that should be taken lightly. You need to have a good understanding of multiple complex administration and security practices. This is not something that an amateur should attempt or be run from a home.

 If you need help, reach out to the community in the discord chat or on Reddit.

## Requirements

#### Hardware

* minimum 4GB RAM 
* 2 Core 
* Support for AES-NI 
* HDD large enough to support the blockchain over time ( > 120GB )
* 64 bit Processor 
* high bandwidth network connection
* Dedicated IP address

#### Software and OS

* This guide uses Ubuntu 16.04
* python 3.5 or greater is required
* node 0.10.48
* [node-cryptonote-pool fork](https://github.com/theQRL/node-cryptonote-pool.git)

## QRL Install

Follow the instructions found [docs.theqrl.org/node/QRLnode/](https://docs.theqrl.org/node/QRLnode/) to get the node started.

An abridged version can be found below

```bash
# update
sudo apt-get update && sudo apt-get upgrade -y

# Dependencies
{{ layout.v.qrlCommands.qrlRequirementsUbuntu }}

# Install the qrl Package.
{{ layout.v.qrlCommands.qrlInstall }}
```

This will install qrl and create  `{{ layout.v.qrlConf.qrlDir }}
`

### Start QRL and Sync

Before you start the node you need to create a configuration file to give the QRL node instructions on how to run.

Create a `{{ layout.v.qrlConf.confLocation }}` file and add any configuration settings you may need. 

At minimum you must have:

```yml
mining_enabled: False
enable_peer_discovery: True
mining_api_enabled: True
public_api_enabled: True
```

Then you can start the node and begin syncing the blockchain.

```bash
{{ layout.v.qrlCommands.startQRL }}
```

Check the state of the qrl node with 

```bash
{{ layout.v.qrlCommands.qrlState }}
```

Verify the local node blockheight matches the [block explorer](https://explorer.theqrl.org)

## Pool Install


To install the pool follow the instruction in the [GitHub Repository](https://github.com/theQRL/node-cryptonote-pool.git)


#### Dependencies

* NodeJS
* nvm
* Node V 0.10.48
* Redis-server
* Node-Cryptonote-Pool Found [Here](https://github.com/theQRL/node-cryptonote-pool.git)
   * This is a fork form the popular *zone117x node-cryptonote-pool*


## grpcProxy


Run the `{{ layout.v.qrlCommands.grpcProxy }}` to bridge the gap between RPC to gRPC. 

This is required since the QRL node uses [gRPC](https://grpc.io/) and runs on port 19000, the pool software runs [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) and is expecting to find the node at port 18090. This needs to run for hte pool to connect to the node and function.


#### Slaves.json File

In order to run the `{{ layout.v.qrlCommands.grpcProxy }}` you will need to generate a `slaves.json` file renamed as `payment_slaves.json`   

Follow the guide found [Here](/wallet/slaves.json) to generate a slaves.json file

This will allow the pool the ability to send the payments out to miners and allows more OTS keys to be used for the wallet. 

Generate a slaves file with 100 slaves, which will take awhile. This will give a factor of 1024\*100 signatures before the need to generate another slaves.json file and set it in the `{{ layout.v.qrlConf.qrlDir }}` directory.

Run the proxy with the following:

```bash
{{ layout.v.qrlCommands.grpcProxy }}
```

## Install Web Server

You will need a web server setup somewhere pointed at the pool API port. See the README.md in the pool github for instructions on setting up the web front end.



## Secure The Server

Being that this is running a mining pool and handling money, you need to ensure the up most security is used. Follow the latest industry standards for securing Ubuntu.

> Do not use clear text passwords and ensure that ssh is as locked down as possible.
{: .info}

## Start The Pool

With the QRL node fully synced and running, slaves.json file in the correct place, {{ layout.v.qrlConf.confLocation }} file correctly filled out, redis-server running,  and the qrl_grpc_proxy running, you can start the pool.


Enjoy


## Pool Config File

Copy the `config_example.json` file to `config.json` then overview each options and change any to match your preferred setup. 

> *Do not copy the file shown below, use the one in your local directory*
{: .warning}


```bash
{
/* Used for storage in redis so multiple coins can share the same redis instance. */
    "coin": "quantum resistant ledger",

/* Used for front-end display */
    "symbol": "QRL",

    "logging": {
        "files": {

/* Specifies the level of log output verbosity. This level and anything more severe will be logged. Options are: info, warn, or error. */
            "level": "info",

/* Directory where to write log files. */
            "directory": "logs",

/* How often (in seconds) to append/flush data to the log files. */      
            "flushInterval": 5
        },
        "console": {
            "level": "info",

/* Gives console output useful colors. If you direct that output to a log file then disable this feature to avoid nasty characters in the file. */
            "colors": true
        }
    },

/* Modular Pool Server */
    "poolServer": {
        "enabled": true,

/* Set to "auto" by default which will spawn one process/fork/worker for each CPU core in your system. Each of these workers will run a separate instance of your pool(s), and the kernel will load balance miners using these forks. Optionally, the 'forks' field can be a number for how many forks will be spawned. */        
        "clusterForks": "auto",

/* Address where block rewards go, and miner payments come from. */
        "poolAddress": "Q01060036ea9340ab68df7f8a3c4c4e9a1d3fd30c3dcd0492f1ae2eb07fc2b15ef4c72216d9c5a5",

        "extraNonce": false,

/* Poll RPC daemons for new blocks every this many milliseconds. */
        "blockRefreshInterval": 1000,

/* How many seconds until we consider a miner disconnected. */
       "minerTimeout": 900,

        "ports": [
            {
                "port": 3333, //Port for mining apps to connect to
                "difficulty": 100, //Initial difficulty miners are set to
                "desc": "Low end hardware" //Description of port
            },
            {
                "port": 5555,
                "difficulty": 2000,
                "desc": "Mid range hardware"
            },
            {
                "port": 7777,
                "difficulty": 10000,
                "desc": "High end hardware"
            },
            {
                "port": 8888,
                "difficulty": 10000,
                "desc": "Hidden port",
                "hidden": true
            }
        ],

/* Variable difficulty is a feature that will automatically adjust difficulty for individual miners based on their hashrate in order to lower networking and CPU
       overhead. */        
        "varDiff": {
            "minDiff": 2, //Minimum difficulty
            "maxDiff": 100000,
            "targetTime": 100, //Try to get 1 share per this many seconds
            "retargetTime": 30, //Check to see if we should retarget every this many seconds
            "variancePercent": 30, //Allow time to vary this % from target without retargeting
            "maxJump": 100 //Limit diff percent increase/decrease in a single retargetting
        },

/* Feature to trust share difficulties from miners which can significantly reduce CPU load. */
        "shareTrust": {
            "enabled": true,
            "min": 10, //Minimum percent probability for share hashing
            "stepDown": 3, //Increase trust probability % this much with each valid share
            "threshold": 10, //Amount of valid shares required before trusting begins
            "penalty": 30 //Upon breaking trust require this many valid share before trusting
        },

/* If under low-diff share attack we can ban their IP to reduce system/network load. */
        "banning": {
            "enabled": true,
            "time": 600, //How many seconds to ban worker for
            "invalidPercent": 25, //What percent of invalid shares triggers ban
            "checkThreshold": 30 //Perform check when this many shares have been submitted
        },

 /* [Warning: several reports of this feature being broken. Proposed fix needs to be tested.] Slush Mining is a reward calculation technique which disincentivizes pool hopping and rewards 'loyal' miners by valuing younger shares higher than older shares. Remember adjusting the weight! More about it here: https://mining.bitcoin.cz/help/#!/manual/rewards */        
        "slushMining": {
            "enabled": false, //Enables slush mining. Recommended for pools catering to professional miners
            "weight": 300, //Defines how fast the score assigned to a share declines in time. The value should roughly be equivalent to the average round duration in seconds divided by 8. When deviating by too much numbers may get too high for JS.
            "blockTime": 60, 
            "lastBlockCheckRate": 1 //How often the pool checks the timestamp of the last block. Lower numbers increase load but raise precision of the share value
        }
    },

/* Module that sends payments to miners according to their submitted shares. */
    "payments": {
        "enabled": true,
        "interval": 600, /how often to run in seconds
        "maxAddresses": 50, //split up payments if sending to more than this many addresses
        "mixin": 3, //number of transactions yours is indistinguishable from
        "transferFee": 500000000, //fee to pay for each transaction
        "minPayment": 100000000000, //miner balance required before sending payment
        "denomination": 100000000000 //truncate to this precision and store remainder
    },

 /* Module that monitors the submitted block maturities and manages rounds. Confirmed blocks mark the end of a round where workers balances are increased in proportion to their shares. */
    "blockUnlocker": {
        "enabled": true,
        "interval": 30, //how often to check block statuses in seconds
        "depth": 50, /* Block depth required for a block to unlocked/mature. Found in daemon source as
       the variable CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW */
        "poolFee": 0.8, //0.8% pool fee (2% total fee total including donations)
        "devDonation": 0.0,
        "coreDevDonation": 0.0
    },
/* AJAX API used for front-end website. */
    "api": {
        "enabled": true, 
        "hashrateWindow": 600, //how many second worth of shares used to estimate hash rate
        "updateInterval": 5, //gather stats and broadcast every this many seconds
        "port": 8117, 
        "blocks": 30, //amount of blocks to send at a time
        "payments": 30, //amount of payments to send at a time
        "password": "your_password" //password required for admin stats
    },
/* Coin daemon connection details. */
    "daemon": {
        "host": "127.0.0.1",
        "port": 18090
    },
/* Wallet daemon connection details. */
    "wallet": {
        "host": "127.0.0.1",
        "port": 18090
    },
/* Redis connection into. */
    "redis": {
        "host": "127.0.0.1",
        "port": 6379,
        "auth": null //If set, client will run redis auth command on connect. Use for remote db
    }
}
```
