---
title: Setup a QRL Pool
categories: mining
tags: mining
---

To fully utilize the benefits of multiple devices or GPU mining rigs, one can setup a stratum pool and use multiple machines to mine as the same device, effectively raising the hashrate of the mining efforts and increasing the odds of finding blocks. 

Running a pool will also increase the redundancy and decentralization of the blockchain. A mining pool is required to run a full QRL node, syncing and verifying transactions on the network by default.

Running a pool takes a considerable amount of know-how and time. You should have an understanding of Linux, be good with networking and up to date with the latest security practice for hardening production server architecture. This is not for novice users.


This guide will cover the high level details, and should be enough for an experienced administrator to deploy a pool. 

If you need help, reach out to the community in the discord chat or email [support@theqrl.org](mailto://support@theqrl.org)

## Requirements

Here are the basic requirements for the pool. 


#### Hardware Requirements

**Node Server**
* Support for AES-NI
* HDD large enough to support the blockchain over time ( > 120GB )
* 64 bit Processor 
* Robust network connection with public IP


#### Software and OS

* Ubuntu 16.04
* python3.5 or greater 
* node 0.10.48

## Overview

TL;DR

- 0.) Build the server
    - a.)Setup, connect, update, and upgrade the server.
- 1.) Install qrl on the server.
    - a.) Install the QRL `pip3` package
    - b.) Start the node and sync the blockchain
- 2.) Start the gRPC_proxy
- 2.) Install Pool software
    - a.) Install all pool dependencies
    - b.) Start pool
- 4.) Open any needed ports for pool to work with node
    - a.) Connect miners and hash

## QRL Install
Follow the instructions found [docs.theqrl.org/mining/full-node/](https://docs.theqrl.org/mining/full-node/) to get the node started.

An abridged version can be found below

```bash
# update
sudo apt update && sudo apt upgrade -y

# Dependencies
sudo apt-get -y install swig3.0 python3-dev python3-pip build-essential cmake pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev

# Install the qrl Package.
pip3 install -U qrl
```

This will install qrl and create the `~/.qrl` directory.


## grpcProxy

To provide compatibility with the existing mining pool software QRL developers have created the gRPC_Proxy to bridge the typical RPC calls with the gRPC calls QRL uses. 

The proxy is installed with the qrl package and called with 

```bash
qrl_grpc_proxy
```

The proxy must be running for the pool to communicate with the network.

#### Slaves.json File

in order to run the proxy you will need to generate a slaves.json file. Give the file authority to make transactions with enough OTS keys to last awhile.  

To generate a slaves.json file you will need to be connected to an active and synced node. This can be a local node, as well as most of the peers shown in the peer list. You also need a wallet to use for the slaves file.

Assuming you have a synced node running on the local computer and a wallet.json file in the local directory you can simply enter:

```bash
qrl -r slave_tx_generate
```

To connect to a remote node, find an IP address of a peer and enter the following;

```bash
qrl -r --host {ActiveNode Open To Port:9009}  --wallet_dir {Location of wallet.json} slave_tx_generate
```

This will ask you a few questions. 

```bash
Src []: 0 # Wwhich address to use in the wallet file. 0 is the first address.
Master []: 
Number of slaves [0]: # this*OTS_key_height For tree height 10 (this*1024)
Access type [0]: # enter 0 to allow transactions 1 for secure mining only
Fee [0.0]: # how much fee to pay to broadcast this across network.
```

Once the slaves.json file is created, move it to the `~/.qrl` folder and rename to `payments.slaves.json` file

```bash
sudo mv slaves.json /home/$USER/.qrl/payment_slaves.json
```

This will allow the pool the ability to send the payments out to miners and won't use all of the available OTS keys for the wallet. Generate a slaves file with 100 slaves, which will take awhile. This will give a factor of 1024\*100 signatures before the need to generate another slaves.json file and set it in the `~/.qrl` directory.

Run the proxy with the following:

```bash
screen -R proxy
python3.5 ~/qrl/qrl/grpcProxy.py
```

You may want to daemonize this, or run this in a screen session. This will connect the gRPC QRL functions with the RPC functions the pool is looking for. The proxy will look for connections at 127.0.0.1:18081



### Configuration

QRL looks at a configuration file located in the default `~/.qrl/` directory. This file is not created by default. There are lots of configurable options for QRL, however for the pool node you must set the following configuration settings.

```yaml
mining_enabled: False
enable_peer_discovery: True
mining_api_enabled: True
public_api_enabled: True
```

Start or Restart QRL for the node to pickup the configuration settings. 

## Pool Install

The developers at QRL have forked the popular cryptonote-node-pool and have configured some parameters to work accordingly with QRL. You may grab this pool and install uing the instructions found in the [Github repository](https://github.com/cyyber/node-cryptonote-pool) 

If you want to utilize another pool software, you will need to make some changes to be compatible with QRL. This is outside the scope of this document. Please drop a line in the discord chat if needed.


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
Being that this is running a mining pool and handling money, we need to ensure the up most security is used. Follow the latest industry standards for securing Ubuntu.

> Do not use clear text passwords and ensure that ssh is as locked down as possible.
{: .info}

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

Make sure you create a slaves.json file large enough to continue to payout. Once you run out you will have to create another slave.json file and move/rename it into the `/home/.qrl/` dir.

