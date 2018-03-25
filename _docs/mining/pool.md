---
title: Setup a QRL Pool
categories: mining
tags: mining
---

To fully utilize the benefits of multiple devices or GPU mining rigs one can setup a stratum pool and use multiple machines to mine as the same device, effectively raising the hashrate of the mining efforts and increasing the odds of finding blocks. 

Running a pool will also increase the redundancy and decentralization of the blockchain. A mining pool is required to run a full QRL node, syncing and verifying transactions on the network by default.

Anyone can run a pool with some basic Linux knowledge and a will to google for the answers. You can have a pool setup in a matter of a few hours. If you need help, reach out to the community in the discord chat or Reddit.

## Requirements

Here are the basic requirements for the pool. Depending on the amount of miners connected you may need to upgrade the servers to handle the load. 

#### Hardware Requirements
You will need a server to host the Pool, QRL Node and Wallet files. you will also need to serve up some web files for miners to interact with the pool.The Web Front end server can be the same server *This guide will use a separate server for web serving.*

**Node Server**
* 4GB RAM 
* 2 Core 
* Support for AES-NI
* HDD large enough to support the blockchain over time ( > 120GB )

This guide is using {Linode's 4GB}(https://www.linode.com/pricing) server to run the pool and node on. There's also a 120GB drive mounted as the user `qrl` /home/qrl/ dir.
For a guide on how to do this see [here](https://linode.com/docs/platform/how-to-use-block-storage-with-your-linode/)

Feel free to use any hosting provider as long as the server meets the above requirements you should be OK.

#### Software and OS

* This guide uses Ubuntu 16.04, it's recommended
* python3.5 or greater is required
* node 0.10.48

## Overview

The basics of setting up a pool.

- 0.) Setup, connect, update, and upgrade your server.
- 1.) Install qrl on the server.
- 2.) Install Pool
	- a.) Dependencies, including node v0.10.48 using nvm
	- b.) Install Redis-server and configure
	- c.)

## QRL Install
Follow the instructions found at [docs.theqrl.org/mining/full-node/](https://docs.theqrl.org/mining/full-node/) to get the node started.

#### From Sources
If you want to get the latest changes and run from cli get the latest files here. *!Advanced!*

```bash
git clone https://github.com/theqrl/qrl --branch v0.62
cd ~/qrl
pip3 install -r requirements.txt # didn’t work, permission issues...
sudo -H pip3 install -r requirements.txt
pip3 install -e . # didn’t work, permission issues...
sudo -H pip3 install -e .
# Now I can see all options when I run
~/qrl/start_qrl --help
# and 
~/qrl/qrl/cli.py --help
```


## Pool Install

Pool Configuration Instructions for QRL. most of this comes from the source repo found at [Node-JS-Pool Link FIXME](#). Some changes have been made to the source to allow for QRL mining. 

#### Dependencies
```bash
sudo apt-get install libssl-dev libboost-all-dev git screen 
```


#### NodeJS

Following [this](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) guide to install nodeJS via `nvm`

```bash
sudo apt-get update
sudo apt-get install build-essential libssl-dev
```

#### nvm

```bash
# Grab nvm
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh -o install_nvm.sh
# Install nvm
bash install_nvm.sh
```

This will install the software into a subdirectory of your home directory at ~/.nvm. It will also add the necessary lines to your ~/.profile file to use the file.

To use log out or run
```bash
source ~/.profile
```

#### Install Node

```bash
nvm install 0.10.48

nvm use 0.10.48
nvm alias default 0.10.48
nvm use default
```

#### Redis

Install redis-server to handle keeping track of everything.

```bash
wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
make install
```

#### Install Redis properly

Create a directory where to store your Redis config files and your data:

```bash
sudo mkdir /etc/redis
sudo mkdir /var/redis
```

Copy the init script

```bash
sudo cp utils/redis_init_script /etc/init.d/redis_6379
```

Edit the script

```bash
sudo nano /etc/init.d/redis_6379
```

> Make sure to modify *REDISPORT* accordingly to the port you are using. Both the pid file path and the configuration file name depend on the port number.
{: .info}


## Pool Config

Clone the repo found at [Github](https://github.com/cyyber/node-cryptonote-pool.git)

```bash
git clone https://github.com/cyyber/node-cryptonote-pool.git QRL_Pool

cd qrlPool
npm update
```

This will take awhile to run. Grab a coffee.


### Config files

Copy the config_example.json file to config.json then overview each options and change any to match your preferred setup. 

> *Do not copy the file shown below, use the one in your local directory*
{: .info}


Here is the config file with comments:

```json
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

 /* Module that monitors the submitted block maturities and manages rounds. Confirmed blocks mark the end of a round where workers' balances are increased in proportion to their shares. */
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
        "port": 18081
    },
/* Wallet daemon connection details. */
    "wallet": {
        "host": "127.0.0.1",
        "port": 18081
    },
/* Redis connection into. */
    "redis": {
        "host": "127.0.0.1",
        "port": 6379,
        "auth": null //If set, client will run redis auth command on connect. Use for remote db
    }
}
```

#### Interesting config.json Sections

**Pool Wallet**
```json
        "poolAddress": "Q01060036ea9340ab68df7f8a3c4c4e9a1d3fd30c3dcd0492f1ae2eb07fc2b15ef4c72216d9c5a5",
```        

Edit the *poolAddress* field. Change to the address you want to mine with. This is where you will pool the rewards and pay out the the other miners.

**Ports**
```json
        "ports": [
            {
                "port": 3333,
                "difficulty": 100,
                "desc": "Low end hardware"
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

```

Change the ports above if you are running another pool on the same server, or if you need to adjust your configuration. Make sure to enable the firewall for these ports as well.


**Payments**
```json
 "payments": {
        "enabled": true,
        "interval": 600,
        "maxAddresses": 50,
        "mixin": 3,
        "transferFee": 500000000,
        "minPayment": 100000000000,
        "denomination": 100000000000
    },

```

This section will allow you to adjust the amount where the pool pays out. Change this to allow lower threshold payments or larger depending on your needs. More often TX may equal more TX fees. 

**api**
```json
"api": {
        "enabled": true,
        "hashrateWindow": 600,
        "updateInterval": 5,
        "port": 8117,
        "blocks": 30,
        "payments": 30,
        "password": "your_password"
```

You can adjust what port the pool api runs on, as well as setting a password. Please set a password.


All of the connection details are found at the bottom of the config file. 
port 18081 is where the qrl proxy will be running.


```json
    "daemon": {
        "host": "127.0.0.1",
        "port": 18081
    },

    "wallet": {
        "host": "127.0.0.1",
        "port": 18081
    },

    "redis": {
        "host": "127.0.0.1",
        "port": 6379,
        "auth": null
    }
```



## grpcProxy

You need to run a grpcProxy via python in order to connect the pool to the node. they run on separate ports and use different you will find this piece of code


in order to run the proxy you will need to generate a slaves.json file. Use the cli tools and generate a file with 

```bash
./cli.py -r --host {ActiveNode Open To Port:9009} --port_pub 9000 --port_adm 9000 --wallet_dir . slave_tx_generate
```
This will ask you a few questions. Make sure you run this in a directory with a valid wallet file. You may need to restore the wallet first.


Once the slaves.json file is created, move it to the ~/.qrl folder and rename to payments.slaves.json file

```bash
sudo mkdir /home/.qrl
mv slaves.json /home/.qrl/payments.slaves.json
```

This will allow the pool the ability to send the payments out to miners and won't use all of the available OTS keys for the wallet. I generated a slaves file with 100 slaves, which took awhile. this will give me a factor of 1024\*100 signatures before I need to generate another slaves.json file and set it in the ~/.qrl directory.

run the proxy with the following:

```bash
screen -R proxy
python3.5 ~/qrl/qrl/grpcProxy.py
```

You may want to daemonize this, or run this in a screen session. This will connect the grpc QRL functions with the rpc functions the pool is looking for. the proxy will look for connections at 127.0.0.1:18081


## Secure Firewall

Using ufw enable openssh and disable any access to redis ports. 

> **Note** You need to make sure and enable OpenSSH or the port you have configured for SSH connections.
{: .info}

```bash
# first, dont lock your self out
sudo ufw enable openssh

# now block external redis connections
sudo ufw deny 6379, 16379, 26379

# enable mining ports in the firewall
sudo ufw allow 3333, 5555, 7777

# Open the API port for web front end
sudo ufw allow 8117

# Enable UFW
sudo ufw enable 

# Check UFW
sudo ufw status
```



## Start The Pool

With the node running, slaves.json file in place and the proxy running, we can start the node.

```bash
# start another screen session
screen -R Pool

# Start the pool in screen
cd ~/QRL_pool
node init.js
```

You should see the pool connect, and when miners connect you will see addresses and details streaming across this screen.

## Troubleshooting

Make sure you create a slaves.json file large enough to continue to payout. Once you run out you will have to create another slave.json file and move/rename it into the `/home/.qrl/` dir.