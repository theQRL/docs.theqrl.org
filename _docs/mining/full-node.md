---
title: Running A QRL Full Node
categories: mining
tags: mining
---

Running a full node is easy and helps strengthen the QRL network. You can run QRL on most operating systems, though Ubuntu 16.04 is recommended.

You should have a basic understanding of the CLI before attempting to set this up, it isn't really all that tough. Every answer you need is out there already, search online or drop into the QRL chat for help.

#### Plan For The Future

Make sure the computer you are using has enough power to handle the load of the mining operation. Low power computers do not run full nodes very well and are not recommended. 

You will also need enough storage to keep the chain as it grows in the future. A few hundred gig HDD/SSD to sync the chain on long term to be safe.

**Note**

*If you build on a small VPS or other light weight hardware you may run into issues building the package. Make sure you have enough *RAM* and enable *SWAP* if needed. AES-NI is required for cryptographic functions.*


## Minimum Requirements

* \*Most Linux / Unix based systems
* Any x86 or x64 based processor
* Support for AES-NI
* Enough HDD space for the blockchain growth.

## Install on Linux


#### Ubuntu 16.04

##### Update 

Update your system ensuring you have the latest packages.

```bash
# Issue the following command to update software
sudo apt update && sudo apt upgrade -y
```

#### Dependencies

```bash
# Install the required packages for QRL
sudo apt-get -y install swig3.0 python3-dev python3-pip build-essential cmake pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev
```

#### Redhat/fedora

Fedora 27 install instructions 

```bash
Update
dnf update 
```

```bash
# Install required packages
dnf install swig cmake gcc gcc-c++ redhat-rpm-config python3-devel python-devel hwloc-devel boost-devel
```

{::comment}

-----------------------------------------------------------
Add these to the guide as they come. If there is different or special instructions for installing on various distros.

#### Debian


#### BSD


#### OpenSUSE


#### ArchLinux


#### Any Other Linux
----------------------------------------------------------

{:/comment}



## Install on MacOS

To build in OSX Please install `brew` if you have not already.

```bash
# Install brew with
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
```

This will prompt you through a few questions while it installs.

Having Issues? Please follow the instructions found at the brew main page: [https://brew.sh/](https://brew.sh/)

```bash
# Update brew
brew update
brew install cmake python3 swig boost hwloc
```

#### Install QRL

The procedure to installing the QRL full node for a Mac is the exact same as it is in Linux. Once you have the Brew Packages installed proceed through the guide 


## Install on Windows 10

\*Windows support in the current version is limited. An alternative is to use an Ubuntu VM (virtualbox), or install Ubuntu using the Linux Subsystem for Windows.

#### Ubuntu on Linux Subsystem for Windows (WSL)

You can run a full node in Windows utilizing the Windows Subsystem for Linux. There are a ton of guides out there on setting this up. Here are a few links to get you going.

The Windows Subsystem for Linux (WSL) is a new Windows 10 feature that enables you to run native Linux command-line tools directly on Windows, alongside your traditional Windows desktop and modern store apps.

You can follow [these instructions](https://msdn.microsoft.com/en-us/commandline/wsl/install-win10) to install Ubuntu using Linux Subsystem, 


#### Links

##### Installing Ubuntu in Windows 10
* [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/en-us/windows/wsl/about)
* [Google Is Your Friend (install+ubuntu+in+windows+10)](https://www.google.com/search?hl=en&as_q=install+ubuntu+in+windows+10&as_epq=)
* [WSL Blog](https://blogs.msdn.microsoft.com/wsl/)
* [Run Bash on Ubuntu on Windows](https://blogs.windows.com/buildingapps/2016/03/30/run-bash-on-ubuntu-on-windows/)

#### Install QRL

The procedure to installing the QRL full node in WSL is the exact same as it is in Linux or MacOS. Once you have the WSL system setup and running Ubuntu proceed through the guide 

*A native Windows solution is in the works*

## Install QRL 

Now that we have a freshly updated system, the installation of QRL is a breeze, QRL uses python3 to install. Using the Python3 package installer *pip3* we will install QRL.

```bash
# Install the qrl Package.
pip3 install -U qrl
```
This will install the QRL package and any required dependencies. Once this is done you can create a new wallet.

## Creating a Wallet

Create a new wallet using the `qrl` command. For a full list of options run: 

```bash
qrl --help
```

#### Create New Wallet

```bash
# Create a new wallet
qrl wallet_gen
```
#### Get Mnemonic/hexseed

```bash
# Get mnemonic phrase and hexseed
qrl wallet_secret
```  



## Recover QRL Wallet

If you lose your wallet, the mining rig catches fire, or worse, you still have the ability to recover your Quanta as long as you've saved the hexseed or mnemonic phrase. 

```bash
# Options:
#   --seed-type [hexseed|mnemonic]
#   --help      Show this message and exit.

qrl wallet_recover --seed-type mnemonic
```

 
 

## Start QRL Node

Now that we have a QRL wallet address, we can `start_qrl`. This will begin the qrl node and start mining. If you have passed any command line options they will override the default settings. *you can set the mining threads etc.*

```bash
# start QRL
start_qrl
```

Check out all the options with a simple `start_qrl --help`

Using `screen` you can run in the background and reconnect later. You may need to install screen.

```bash
# run in background
screen -d -m start_qrl
```
You can see the progress in the `~/.qrl/qrl.log` file.

```bash
# watch the action with 
tail -f ~/.qrl/qrl.log
```

 

## Config File

You can alter the default settings of the node by simply adding a file to your `~/.qrl` folder 

```bash
# Create and edit the config.yml file
nano ~/.qrl/config.yml
```

Add the following to the file. These are all default settings, uncomment to edit the parameters.

```bash
# ====================================== 
## QRL Configuration File
# ====================================== 
## Format must meet the following "{VARIABLE} : {SETTING}, {Boolean} : [True] [False]"
#
## Drop into the Discord chat for help setting this up 
## https://discord.gg/RcR9WzX
#
# ====================================== 
## Mining Setup  
# ====================================== 
## Enable mining with True | Disable with False  
#mining_enabled : True 
#  
## Set to desired CPU count. [0] == auto-detect CPU/threads and use all available 
#mining_thread_count : 0 
#  
# ======================================  
# Mining Wallet Setup  
# ======================================  
## Full Path to wallet directory Defaults to ~./qrl/
#wallet_dir : /home/{USER}/.qrl/wallet  
#
# ====================================== 
## NTP Settings  
# ======================================
## Select the NTP server for the node to use. 
## This must connect and get the correct time for this node to sync the blockchain
## Here are a few good options. Select a server you can connect to from the node.
##
## time.nist.gov
## pool.ntp.org
## time.google.com
## ntp.ubuntu.com
## mycustomdns.com#
#ntp_servers: pool.ntp.org
#
# ====================================== 
## Default Locations  
# ====================================== 
## This is where the program will look for files  
## Only change these if you must! You HAVE to use full path for location.  
## Change the {USER} to your local user.  
#  
## The users ~/.qrl/ directory  
#qrl_dir : /home/{USER}/.qrl  
#  
## The users ~/.qrl/data/ directory  
#data_dir : /home/{USER}/.qrl/data  
#  
## QRL Loging location ~/.qrl/qrl.log  
#log_path : /home/{USER}/.qrl/qrl.log  
#  
## The users ~/.qrl/wallet/ directory  
#wallet_staking_dir : /home/{USER}/.qrl/wallet  
#
# ======================================  
## Ephemeral Configuration 
# ======================================  
## Change ephemeral messaging settings
# 
#accept_ephemeral : True  
#
#outgoing_message_expiry : 90 # Outgoing message expires after 90 seconds  
#
#p2p_q_size : 1000  
#  
## Cache Size  
#lru_state_cache_size : 10  
#max_state_limit : 10  
#
# ======================================  
## PEER Configuration  
# ======================================  
#
## Allows to discover new peers from the connected peers  
#enable_peer_discovery : True  
#  
## Allows to ban a peer's IP who is breaking protocol  
#ban_minutes : 20  
#  
## Number of allowed peers  
#max_peers_limit : 100  
#  
## Max Number of messages per minute per peer
#peer_rate_limit : 500  
#
#chain_state_timeout : 180  
#chain_state_broadcast_period : 30 # must be less than ping_timeout  
#
# ==================
## End Configuration
```

Please add any issues found in <a href="https://github.com/theqrl/qrl" target="_blank">GitHub</a> If you need help jump into the <a href="https://discord.gg/RcR9WzX" target="_blank"> Discord Chat </a>


### Node Commands

Some Handy Commands to query against your node. 

``` bash
screen -d -m ~/QRL/start_qrl    # This will start QRL in a screen session.
screen -r                       # To reattach the screen
ctl+a d                         # Exit the screen without quitting the program
tail -f ~/.qrl/qrl.log          # Show activity in qrl.log

# Print found blocks. If empty your node has not found anything yet.
grep Solution Found ~/.qrl/qrl.log

# Prints how many blocks you have found (count of won blocks)
grep `Solution Found` ~/.qrl/qrl.log |wc -l   
```

### QRL Help

You can get this list of help from the command line by simply entering

```bash
qrl --help
```

You can get more detail from a sub catigory by entering 

```bash
qrl wallet_seceret --help
```

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




