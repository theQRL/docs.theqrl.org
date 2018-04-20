---
title: Setup a QRL Pool
categories: mining
tags: mining
---

To fully utilize the benefits of multiple devices or GPU mining rigs, one can setup a stratum pool and use multiple machines to mine as the same device, effectively raising the hashrate of the mining efforts and increasing the odds of finding blocks. 

Running a pool will also increase the redundancy and decentralization of the blockchain. A mining pool is required to run a full QRL node, syncing and verifying transactions on the network by default.

Anyone can run a pool with some basic Linux knowledge and a will to google for the answers. You can have a pool setup in a matter of a few hours. If you need help, reach out to the community in the discord chat or Reddit.

## Requirements

Here are the basic requirements for the pool. Depending on the amount of miners connected you may need to upgrade the servers to handle the load. 

#### Hardware Requirements
You will need a server to host the Pool, QRL Node, and Wallet files. you will also need to serve up some web files for miners to interact with the pool.The Web Front end server can be the same server *This guide will use a separate server for web serving.*

**Node Server**
* 4GB RAM 
* 2 Core 
* Support for AES-NI
* HDD large enough to support the blockchain over time ( > 120GB )

This guide is using [Linode's 4GB](https://www.linode.com/pricing) server to run the pool and node on. There's also a 120GB drive mounted as the user `qrl` /home/qrl/ dir.
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
    - c.) Install Apache2 and configure web server





## QRL Install
Follow the instructions found [here]](https://docs.theqrl.org/mining/full-node/) to get the node started.

An abridged version can be found below

```bash
# update
sudo apt update && sudo apt upgrade -y

# Dependencies
sudo apt-get -y install swig3.0 python3-dev python3-pip build-essential cmake pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev

# Install the qrl Package.
pip3 install -U qrl
```

This will install qrl and create the ~/.qrl directory.

### Start QRL and Sync

Now that you have qrl installed go ahead and start the node up, and sync the blockchain. Create a ~/.qrl/config.yml file and add any configuration settings you may need. Make sure the node is not trying to mine while you sync.

```bash
start_qrl --miningCreditWallet Q010900978071f5817ece4164123a5b83f80af957a9935876329bb1f015410e4542ed291ee7022f
```






## Pool Install

Before you get the pool software, you can install all of the required packages and dependencies. You will need a synced qrl node before the pool will run correctly.  

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


## Node-Cryptonote-Pool

Grab the slightly modified software found in [This Repository](https://github.com/cyyber/node-cryptonote-pool.git). 

This is a fork form the popular *zone117x node-cryptonote-pool*. Some changes have been made to the source to allow for QRL mining. Please use Cyybers modified version.

```bash
git clone https://github.com/cyyber/node-cryptonote-pool.git QRL_Pool
```

```bash
cd qrlPool
npm update
```

This will take awhile to run. Grab a coffee.


### Config files

Copy the config_example.json file to config.json then overview each options and change any to match your preferred setup. 

> *Do not copy the file shown below, use the one in your local directory*
{: .warning}


Here is a sample config file with comments:

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


## grpcProxy

You need to run a grpcProxy via python in order to connect the pool to the node. This is required since the QRL node uses [gRPC](https://grpc.io/) and runs on port 9000, the pool software runs [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) and is expecting to find the node at port 18081.


To run the proxy you will need to get the sources from the github repo. You will find this piece of code in the repository at */src/qrl/grpcProxy.py*. Get the files [here](https://github.com/theQRL/QRL.git)

#### Slaves.json File

in order to run the proxy you will need to generate a slaves.json file. Give the file authority to make transactions with enough OTS keys to last awhile.  

To generate a slaves.json file you will need to be connected to an active and synced node. This can be a local node, as well as most of the peers shown in the peer list. You also need a wallet to use for the slaves file.


You can see all of the options for generating the file using 

```bash
qrl -r slave_tx_generate --help
```

Assuming you have a synced node running on the local computer and a wallet.json file in the local directory you can simply enter:

```bash
qrl slave_tx_generate

Usage: qrl slave_tx_generate [OPTIONS]

  Generates Slave Transaction for the wallet

Options:
  --src TEXT                  source address or index
  --master TEXT               master QRL address
  --number_of_slaves INTEGER  Number of slaves addresses
  --access_type INTEGER       0 - All Permission, 1 - Only Mining Permission
  --fee FLOAT                 fee (Quanta)
  --pk INTEGER                public key (when local wallet is missing)
  --otsidx INTEGER            OTS index (when local wallet is missing)
  --help                      Show this message and exit.

```

To connect to a remote node, find an IP address of a peer and enter the following;

```bash
qrl -r --host {ActiveNode Open To Port:9009}  --wallet_dir {Location of wallet.json} --otsidx {UNUSED OTS key} slave_tx_generate
```

This will ask you a few questions. 

```bash
Src []: 0 # Which address to use in the wallet file. 0 is the first address.
Master []: 
Number of slaves [0]: # this*OTS_key_height For tree height 10 (this*1024)
Access type [0]: # enter 0 to allow transactions 1 for secure mining only
Fee [0.0]: # how much fee to pay to broadcast this across network.
```

Once the slaves.json file is created, move it to the ~/.qrl folder and rename to payments.slaves.json file

```bash
sudo mv slaves.json /home/$USER/.qrl/payment_slaves.json
```

This will allow the pool the ability to send the payments out to miners and won't use all of the available OTS keys for the wallet. Generate a slaves file with 100 slaves, which will take awhile. This will give a factor of 1024\*100 signatures before the need to generate another slaves.json file and set it in the ~/.qrl directory.

Run the proxy with the following:

```bash
screen -R proxy
python3.5 ~/qrl/qrl/grpcProxy.py
```

You may want to daemonize this, or run this in a screen session. This will connect the gRPC QRL functions with the RPC functions the pool is looking for. The proxy will look for connections at 127.0.0.1:18081

## Install Web Server

You can serve the web site up on any typical web server. This guide is using the apache2 web server for the pool site.

You should have a Domain name to point to the server and have setup the relative DNS entries. This is outside of the scope of this document. Once you have your DNS pointing at the correct place change the hostname of the server.

The web server dose not have to be the pool server. In fact it is recommended to host these devices on separate PC's so you lessen the attack vector on the pool. A small VPS should work to host the static web files.

```bash
sudo nano /etc/hostname
```

Enter your hostname without the FQDN part;
```bash
pool
```

Now edit the /etc/hosts file;
```bash
sudo nano /etc/hosts
``` 

here you will find a few lines, change the file from this;

```bash
127.0.0.1 localhost

# The following lines are desirable for IPv6 capable hosts
::1     localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters

```

To this, replacing the xxx.xxx.xxx.xxx part with the public IP address of the web server; 
```bash
127.0.0.1       localhost
xxx.xxx.xxx.xxx   pool.theqrl.org  pool

# The following lines are desirable for IPv6 capable hosts
::1     localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters


```

Find your IP by
```bash
curl -4 icanhazip.com
```

This will spit put your public IP address.

#### apache2

```bash
sudo apt install apache2
```

This will install apache2 and creates a few interesting directories

You will find config files in */etc/apache2/*

```console
qrl@qrlpool:~/qrl$ ls -al /etc/apache2/
total 88
drwxr-xr-x  8 root root  4096 Mar 25 05:54 .
drwxr-xr-x 94 root root  4096 Mar 25 05:54 ..
-rw-r--r--  1 root root  7115 Mar 19  2016 apache2.conf
drwxr-xr-x  2 root root  4096 Mar 25 05:54 conf-available
drwxr-xr-x  2 root root  4096 Mar 25 05:54 conf-enabled
-rw-r--r--  1 root root  1782 Mar 19  2016 envvars
-rw-r--r--  1 root root 31063 Mar 19  2016 magic
drwxr-xr-x  2 root root 12288 Mar 25 05:54 mods-available
drwxr-xr-x  2 root root  4096 Mar 25 05:54 mods-enabled
-rw-r--r--  1 root root   320 Mar 19  2016 ports.conf
drwxr-xr-x  2 root root  4096 Mar 25 05:54 sites-available
drwxr-xr-x  2 root root  4096 Mar 25 05:54 sites-enabled
```

The Web Root is in /var/www/html/

```console
qrl@qrlpool:~/qrl$ ls -al /var/www/html/
total 20
drwxr-xr-x 2 root root  4096 Mar 25 05:54 .
drwxr-xr-x 3 root root  4096 Mar 25 05:54 ..
-rw-r--r-- 1 root root 11321 Mar 25 05:54 index.html
```


#### Configure apache2

Edit the default apache2 config;
```bash
sudo nano /etc/apache2/apache2.conf
```

Add the ServerName directive into the file somewhere;
```
ServerName {YOUR-FQDN or IP address}
```

Exit and edit the default sites config;
```
nano /etc/apache2/sites-available/000-default.conf
```


Add ServerAlias and change the ServerName;
```bash
ServerName {FQDN or IP}
ServerAlias *.{FQDN}
```


Restart apache2 to pickup changes;
```
sudo service apache2 restart
```

If you see errors check the log files and Google for help.

#### Create Website

Copy the files found in the pool directory into the web root. 

> This is assuming you are not hosting any other sites on the server you are using for the web front end. This will destroy any current web files.
{: .info}

```bash
# remove the web root contents
sudo rm -r /var/www/html/*

# Copy the web file into the Web Root
sudo cp -r ~/QRL_pool/* /var/www/html/ 
```

Change permissions to the web server user;

```bash
sudo chown www-data:www-data -R /var/www/html/
```

Now edit the config.js file found in the web root

```bash
sudo nano /var/www/html/config.js
```

Change the details to meet your needs.



## Secure The Server

Being that this is running a mining pool and handling coins, we need to ensure the up-most security is used. Follow the latest industry standards for securing your server.

> Do not use clear text passwords and ensure that ssh is as locked down as possible.
{: .info}

There are great guides and recomendations on the web. Please make this a priority!

#### SSH Connections

Ensure you have ssh key files inplace to connect without a password to the server. You should create a new key for each server you connect to, and never share the same key.

On a local linux computer generate a key file with `ssh_keygen`

Once you have a local priate and public key, copy over the public key to the server. This should go into the users `.ssh/authorized_keys` file. If this file is not there create it.

```bash
nano ~/.ssh/authorized_keys
```

Paste the public key into the terminal and save the file.


##### Edit the ssh config file

```bash
sudo nano /etc/ssh/sshd.conf
```

Change the following parameters;

```bash
# What ports, IPs and protocols we listen for
Port 22 # change if you want ssh on a different port

PermitRootLogin no # disable root login

PubkeyAuthentication yes # enable Pubkey auth

PasswordAuthentication no # Disable password login
```


##### Restart SSH

now that we ghave made changes to the file, restart sshd to pickup the changes.

```bash
sudo ssh restart
```

Now confirm you can still access the server by opening another ssh session to the server. This time you will have to use the key file you created.

```bash
ssh $USER@IPADDRESS -i /DIRECTORY/OF/KEYFILE.pem # use the private keyfile here
```
If you can connect, you are good to continue. If not troubleshoot why you cannot connect before you disconnect from the initial session.

##### Firewall

Using `ufw` enable openssh, Apache2, pool ports, API port, and disable any access to redis ports. 

> **Note** You need to make sure and enable OpenSSH or the port you have configured for SSH connections so you don't lose connection.
{: .info}

```bash
# First, don't lock your self out.
sudo ufw enable openssh

# Now block external redis connections
sudo ufw deny 6379
sudo ufw deny 16379
sudo ufw deny 26379

# Enable mining ports in the firewall
sudo ufw allow 3333
sudo ufw allow 5555
sudo ufw allow 7777
sudo ufw allow 8888

# Open the API port for web front end if hosting remotely
sudo ufw allow 8117

# enable apache2 port 80 and 443
sudo ufw allow "Apache Full"

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


#### Pool Payouts

Make sure you create a slaves.json file large enough to continue to payout. Once you run out you will have to create another slave.json file and move/rename it into the `/home/.qrl/` dir.

If your pool is not paying out, it is probably an issue with the slaves.json file, or a mismatch in the address used in the settings. Go through all of the configurations again, and if you still have issues drop into the Discord chat for help.



## To-Do

* Configure to run forever - CRON jobs and daemons
* Harden server
* 