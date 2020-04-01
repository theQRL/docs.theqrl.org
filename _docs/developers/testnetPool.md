---
title: QRL Testnet Pool Setup
categories: mining, pool, developers, testnet
description: The QRL Testnet Pool Setup
tags: mining, pool setup, developers
---

QRL uses the RandomX protocol and can be mined collectively using a centralized pool server and a collection of computers running mining software. 

This guide will walk through the steps required to get a **Testnet** pool up and running using [Our GithHub Fork](https://github.com/cyyber/cryptonote-nodejs-pool/) of the popular cryptonote-nodejs-pool software. This fork has been modified to run the QRL blockchain. You can use this as a basis for integrating QRL into your Pool or hosting your own private pool. 

It is assumed that the appropriate security measures have been taken to secure the server hosting this pool software. Please follow best practice and keep software up to date.

> Running a mining pool is not something that should be taken lightly. You need to have a good understanding of multiple complex administration and security practices. 
{: .info}

## Requirements

#### Hardware

* minimum 4GB RAM 
* 2 Core CPU
* Support for AES-NI 
* Support for avx2 
* 64 bit Processor 
* high bandwidth network connection
* Dedicated IP address

#### Software and OS

* This guide uses Ubuntu 18.04LTS
* python 3.6
* All required dependencies specified in the [Pool software](https://github.com/cyyber/cryptonote-nodejs-pool/) repo

## QRL Install

Follow the instructions found [docs.theqrl.org/node/QRLnode/](https://docs.theqrl.org/node/testnetNode/) to get the testnet node started. 

> Make sure to issue the `{{ layout.v.qrlCommands.startTestNetQRL }}` to start the testnet node. 
{: .info}

### Start QRL and Sync

Edit or create the configuration file to give the QRL testnet node instructions on how to run. By default the node will look in `{{ layout.v.qrlConf.qrlTestNetDir }}` 

You may need to create this directory if you have not started the testnet node previously. 

The active qrl testnet configuration will be found at `{{ layout.v.qrlConf.testnetConfLocation }}`

Ensure these minimum configuration settings are set along with the rest of the testnet configuration.

```yml
mining_enabled: False
enable_peer_discovery: True
mining_api_enabled: True
public_api_enabled: True
```

In the end your configuration file should read something close to this. *The peer details and heasderhash will change over time as the network is reset*:

```yml
peer_list: [ "18.130.83.207", "35.176.41.49", "18.130.187.220", "35.176.33.242" ]
genesis_prev_headerhash: 'The Testnet Genesis'
genesis_timestamp: 1530004179
genesis_difficulty: 5000
db_name: 'testnet-state'
mining_enabled: False
enable_peer_discovery: True
mining_api_enabled: True
public_api_enabled: True
```

Make sure to restart the node to pickup the changes.

```bash
{{ layout.v.qrlCommands.startTestNetQRL }}
```

Check the state of the qrl node with 

```bash
{{ layout.v.qrlCommands.qrlState }}
```

Verify the local node blockheight matches the [testnet block explorer](https://testnet-explorer.theqrl.org). This may take some time to sync fully.

## grpcProxy

The QRL requires a bridge between the RPC and gRPC that QRL utilizes. The proxy handles the communication between the pool and the QRL node.

To use the proxy you must have a slaves.json file named `payment.slaves.json` in your `{{ layout.v.qrlConf.qrlTestnetDir }}`. To generate this file first you need a QRL wallet.

### QRL CLI Wallet

Generate a new QRL wallet using the QRL node CLI. With the node running enter:

```bash
# Creates a QRL wallet
qrl wallet_gen --height 12 --hash_function shake128 --encrypt
```

The cli will ask for an encryption password to encrypt the file. This password will be required every time this wallet is needed, typically to generate a new slave tree in the distant future. **DO not lose this password**

There now is a `wallet.json` file in the local directory the command was issued in. Backup this file to a secure location for future use if needed. This is the new pool wallet. Now generate slave trees to use for sending payments through the pools automated system. 

### QRL payment.slaves.json

With the encrypted QRL Wallet.json file can create a slave tree file. This file contains a new set of [One Time Signatures *(OTS)*](https://docs.theqrl.org/developers/ots/) generated from the main address that the pool will use to send transactions. See more on the XMSS slave trees in our [Documentation](https://docs.theqrl.org/wallet/slaves.json/)

To generate a slave file from the wallet we just created, run the following command. This will create the slaves tree and broadcast a transaction onto the QRL network, allowing the set of slaves to be used.

```bash
qrl slave_tx_generate --src 0 --master 0 --number_of_slaves 100 --access_type 0 --fee .001
```

This will create a new file called slaves.json in the same directory you are in, sign the message and send onto the network. This transaction will require a small fee to broadcast to the network. Make sure you have enough funds to cover the fee. If needed visit the [testnet faucet](https://testnet-faucet.qrl.tips/) for funds to make this transaction.

Move the `slaves.json` file to the `{{ layout.v.qrlConf.qrlTestnetDir }}` directory and rename to `payment.slaves.json`

### Start the QRL_gRPC_Proxy

Run the proxy with the following:

```bash
{{ layout.v.qrlCommands.grpcTestnetProxy }}
```

> Note: This wll use the default testnet directory `{{ layout.v.qrlConf.qrlTestnetDir }} `.

#### Ports 

Check to see that you have open ports for the pool to communicate on using `netstat`

```bash 
netstat -tulnp
```

This will print all of the open ports on the server. Ensure ports `18090, 19007, 19009` are open and available for the pool.


## Pool Install

To install the pool follow the instructions in the [GitHub Repository](https://github.com/cyyber/cryptonote-nodejs-pool/#cryptonote-nodejs-pool). This will guide you through the dependencies and various steps to getting the pool software installed. 

Please use the configuration found at the end of these docs to connect to the QRL node and wallet. this file lives at the root of the pool directory as `config.json`


## Install Web Server

You will need a web server setup somewhere pointed at the pool API port. See the README.md in the pool Github for instructions on setting up the web front end. There is an additional configuration file needed to host the web server. 

Most importantly, ensure the port is available to the web server and you can reach the address or IP externally. 

* `var api = "http://pool.FQDN_OR_IP:8117";`

## Pool Config File

Copy the `/config_examples/qrl.json` file found in the repository to `/config.json` and overview each option. Change any to match your preferred setup however pay attention to the following few configurations, as they are important. 

* "poolAddress": "Q01060019b0f4ce8ea82e71a5fc60851541db7e515d2585247c70533487cc89c50f6dddb8a4f386",
* "daemon": { "host": "127.0.0.1", "port": 18090 },
* "wallet": { "host": "127.0.0.1", "port": 18090 },

## Start The Pool

With the QRL node fully synced and running, slaves.json file in the correct place, {{ layout.v.qrlConf.confLocation }} file correctly filled out, and the qrl_grpc_proxy running, you can start the pool.

from the root pool directory, run

```bash
node init.js
```

Enjoy.

## Example Pool Config File

```json
{
    "poolHost": "pool.FQDN_or_IPADDRESS",
    "coin": "quantum_resistant_ledger",
    "symbol": "QRL",
    "hardForkHeight": 942375,
    "coinUnits": 1000000000,
    "coinDecimalPlaces": 9,
    "coinDifficultyTarget": 60,

    "daemonType": "default",
    "cnAlgorithm": "randomx",
    "cnVariant": 0,
    "cnBlobType": 0,
    "includeHeight": true,
    "isRandomX": true,

    "logging": {
        "files": {
            "level": "info",
            "directory": "logs",
            "flushInterval": 5
        },
        "console": {
            "level": "info",
            "colors": true
        }
    },

    "poolServer": {
        "enabled": true,
        "clusterForks": "auto",
        "poolAddress": "Q01060019b0f4ce8ea82e71a5fc60851541db7e515d2585247c70533487cc89c50f6dddb8a4f386",
        "intAddressPrefix": null,
        "blockRefreshInterval": 1000,
        "minerTimeout": 900,
        "sslCert": "./cert.pem",
        "sslKey": "./privkey.pem",
        "sslCA": "./chain.pem",
        "ports": [
            {
                "port": 3333,
                "difficulty": 5000,
                "desc": "Low end hardware"
            },
            {
                "port": 4444,
                "difficulty": 15000,
                "desc": "Mid range hardware"
            },
            {
                "port": 5555,
                "difficulty": 25000,
                "desc": "High end hardware"
            },
            {
                "port": 7777,
                "difficulty": 500000,
                "desc": "Cloud-mining / NiceHash"
            },
            {
                "port": 8888,
                "difficulty": 25000,
                "desc": "Hidden port",
                "hidden": true
            },
            {
                "port": 9999,
                "difficulty": 20000,
                "desc": "SSL connection",
                "ssl": true
            }
        ],
        "varDiff": {
            "minDiff": 100,
            "maxDiff": 100000000,
            "targetTime": 120,
            "retargetTime": 60,
            "variancePercent": 30,
            "maxJump": 100
        },
        "paymentId": {
            "addressSeparator": "+"
        },
        "fixedDiff": {
            "enabled": true,
            "addressSeparator": "."
        },
        "shareTrust": {
            "enabled": true,
            "min": 10,
            "stepDown": 3,
            "threshold": 10,
            "penalty": 30
        },
        "banning": {
            "enabled": true,
            "time": 600,
            "invalidPercent": 25,
            "checkThreshold": 30
        },
        "slushMining": {
            "enabled": false,
            "weight": 300,
            "blockTime": 60,
            "lastBlockCheckRate": 1
         }
    },

    "payments": {
        "enabled": true,
        "interval": 1800,
        "maxAddresses": 50,
        "mixin": 7,
        "priority": 0,
        "transferFee": 1000000,
        "dynamicTransferFee": true,
        "minerPayFee" : true,
        "minPayment": 1000000000,
        "maxPayment": null,
        "maxTransactionAmount": 0,
        "denomination": 10000000000
    },

    "blockUnlocker": {
        "enabled": true,
        "interval": 30,
        "depth": 60,
        "poolFee": 0.8,
        "devDonation": 0.2,
        "networkFee": 0.0
    },

    "api": {
        "enabled": true,
        "hashrateWindow": 600,
        "updateInterval": 5,
        "bindIp": "0.0.0.0",
        "port": 8117,
        "blocks": 30,
        "payments": 30,
        "password": "j$73Mds&ABUELID*$Fir7Tz!!0TllGt",
        "ssl": false,
        "sslPort": 8119,
        "sslCert": "./cert.pem",
        "sslKey": "./privkey.pem",
        "sslCA": "./chain.pem",
        "trustProxyIP": true
    },

    "daemon": {
        "host": "127.0.0.1",
        "port": 18090
    },

    "wallet": {
        "host": "127.0.0.1",
        "port": 18090
    },

    "redis": {
        "host": "127.0.0.1",
        "port": 6379,
        "auth": null,
        "db": 0,
        "cleanupInterval": 15
    },

    "notifications": {
        "emailTemplate": "email_templates/default.txt",
        "emailSubject": {
            "emailAdded": "Your email was registered",
            "workerConnected": "Worker %WORKER_NAME% connected",
            "workerTimeout": "Worker %WORKER_NAME% stopped hashing",
            "workerBanned": "Worker %WORKER_NAME% banned",
            "blockFound": "Block %HEIGHT% found !",
            "blockUnlocked": "Block %HEIGHT% unlocked !",
            "blockOrphaned": "Block %HEIGHT% orphaned !",
            "payment": "We sent you a payment !"
        },
        "emailMessage": {
            "emailAdded": "Your email has been registered to receive pool notifications.",
            "workerConnected": "Your worker %WORKER_NAME% for address %MINER% is now connected from ip %IP%.",
            "workerTimeout": "Your worker %WORKER_NAME% for address %MINER% has stopped submitting hashes on %LAST_HASH%.",
            "workerBanned": "Your worker %WORKER_NAME% for address %MINER% has been banned.",
            "blockFound": "Block found at height %HEIGHT% by miner %MINER% on %TIME%. Waiting maturity.",
            "blockUnlocked": "Block mined at height %HEIGHT% with %REWARD% and %EFFORT% effort on %TIME%.",
            "blockOrphaned": "Block orphaned at height %HEIGHT% :(",
            "payment": "A payment of %AMOUNT% has been sent to %ADDRESS% wallet."
        },
        "telegramMessage": {
            "workerConnected": "Your worker _%WORKER_NAME%_ for address _%MINER%_ is now connected from ip _%IP%_.",
            "workerTimeout": "Your worker _%WORKER_NAME%_ for address _%MINER%_ has stopped submitting hashes on _%LAST_HASH%_.",
            "workerBanned": "Your worker _%WORKER_NAME%_ for address _%MINER%_ has been banned.",
            "blockFound": "*Block found at height* _%HEIGHT%_ *by miner* _%MINER%_*! Waiting maturity.*",
            "blockUnlocked": "*Block mined at height* _%HEIGHT%_ *with* _%REWARD%_ *and* _%EFFORT%_ *effort on* _%TIME%_*.*",
            "blockOrphaned": "*Block orphaned at height* _%HEIGHT%_ *:(*",
            "payment": "A payment of _%AMOUNT%_ has been sent."
        }
    },

    "email": {
        "enabled": false,
        "fromAddress": "your@email.com",
        "transport": "sendmail",
        "sendmail": {
            "path": "/usr/sbin/sendmail"
        },
        "smtp": {
            "host": "smtp.example.com",
            "port": 587,
            "secure": false,
            "auth": {
                "user": "username",
                "pass": "password"
            },
            "tls": {
                "rejectUnauthorized": false
            }
        },
        "mailgun": {
            "key": "your-private-key",
            "domain": "mg.yourdomain"
        }
    },

    "telegram": {
        "enabled": false,
        "botName": "",
        "token": "",
        "channel": "",
        "channelStats": {
            "enabled": false,
            "interval": 30
        },
        "botCommands": {
            "stats": "/stats",
            "report": "/report",
            "notify": "/notify",
            "blocks": "/blocks"
        }
    },
    "charts": {
        "pool": {
            "hashrate": {
                "enabled": true,
                "updateInterval": 60,
                "stepInterval": 1800,
                "maximumPeriod": 86400
            },
            "miners": {
                "enabled": true,
                "updateInterval": 60,
                "stepInterval": 1800,
                "maximumPeriod": 86400
            },
            "workers": {
                "enabled": true,
                "updateInterval": 60,
                "stepInterval": 1800,
                "maximumPeriod": 86400
            },
            "difficulty": {
                "enabled": true,
                "updateInterval": 1800,
                "stepInterval": 10800,
                "maximumPeriod": 604800
            },
            "price": {
                "enabled": true,
                "updateInterval": 1800,
                "stepInterval": 10800,
                "maximumPeriod": 604800
            },
            "profit": {
                "enabled": true,
                "updateInterval": 1800,
                "stepInterval": 10800,
                "maximumPeriod": 604800
            }
        },
        "user": {
            "hashrate": {
                "enabled": true,
                "updateInterval": 180,
                "stepInterval": 1800,
                "maximumPeriod": 86400
            },
            "worker_hashrate": {
                "enabled": true,
                "updateInterval": 60,
                "stepInterval": 60,
                "maximumPeriod": 86400
            },
            "payments": {
                "enabled": true
            }
        },
        "blocks": {
            "enabled": true,
            "days": 30
        }
    }
}
```
