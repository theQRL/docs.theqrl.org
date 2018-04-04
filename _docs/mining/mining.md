---
title: Mining QRL Quick Start
categories: mining
tags: mining
---


So you want to mine QRL? This is the place to start. This guide will cover the basics to mining while staying out of the weeds as they say.

Anyone can get started mining, seriously it's way too easy to set this up and make some coins with your existing hardware. You can mine QRL on most modern PC's, servers, NAS devices, web browsers, heck even cell phones (Not very good ROI). 


#### Requirements

There are not too many requirements for mining QRL. Most current processors will run some form of mining software. There are lots of choices for every operating system. Keep in mind that the power (energy) consumption makes most devices impractical to mine with, costing more to power than the rewards earned.

* PC that is turned on 24/7, or close to it
* Network connection
* Mining software for your PC's operating system

> **Note:** It is not recommended to mine on a laptop. They are not made to run full capacity 100% of the time. There is not enough cooling and damage may occur.
{: .info}

#### QRL Mining basics

QRL uses the Monero fork of [CryptoNight](http://cryptonite.info), a fork of the [CryptoNote](https://cryptonote.org/) protocol as the backbone to the mining process. Forking, forking, forking... 

By using this algorithm allows QRL to take advantage of the ASIC resistant features and benefits of CryptoNight and Monero. Since we are using the Monero fork, we can share in the same ASIC resistant benefits that Monero promotes. (*Privacy features of Monero are specific to that project, and do not carry over to QRL.*)

The QRL mining period will last until a stable PoS chain is ready and fully tested. After this happens a hard fork will occur switching the QRL blockchain over to a proof of stake model

Any software that pool mines for XMR will work with QRL. You can find something that is compatible with your OS and setup following the guide found with the project you choose. There are too many potential configurations to list here. Please ask for help in the QRL Discord or in the Reddit forum if you need help. 

> When configuring your software, set everything up to mine Monero, *instead* of using a Monero address, enter your *QRL* address into the "Worker" or "Address" field in the mining software.
{: .info}

QRL uses PQ secure encryption. No joke this stuff is the best there is right now. If you follow instructions, and don't compromise your private keys in any way your funds are safe from current processors ads well as advanced quantum computers that are on the horizon.


## CPU Mining

CPU mining utilizes a users PC CPU(s) to calculate the cryptographic equation and compute a valid block. Unlike Bitcoin and other cryptocurrencies, QRL and it's upstream cousin Monero are ASIC resistant

There are two ways to get started mining on a CPU:

* Run a [Full QRL Node](/mining/full-node) on your computer
* Use cryptonight mining software and connect to a pool

As a general rule, you will have a better chance at finding blocks using a pool. Solo mining strengthens the QRL network by running a synced node, verifying transactions on the network.  Either way you decide to go, over time your block rewards should even out.


## GPU Mining

Mining QRL using GPU's is possible utilizing a community run pool server working with other miners to pool the hashrate submitted to find solutions. You will need cryptonight mining software compatible with the latest Monero fork that will use the GPU(s) of your mining rig to compute the hashing functions.

There are a ton of options to choose from out there. Make sure the software will mine Monero if you are having any issues. Use a QRL address and point the miner to a community pool.  


## Pool Mining

You can connect to a QRL Pool run by our community members. This will allow you to utilize almost any piece of hardware without the need to run a full node. 

There are lightweight binaries and scripts that use the local processor or GPU to preform work for the pool . This pooled work then gets submitted to the network and the rewards are shared between the workers.

Pool mining is possible using both CPU's and GPU's. The benefit of one over the other is debatable and outside this guides scope.

Download a mining software package for your operating system and follow the software's documentation, only changing out the address with your QRL address.



#### Pool 101

A few things to know about QRL pools:

* There is no **Official** QRL pool. The team will only run a *TestNet* pool if necessary for testing.
* Most pools charge fee to use the service. This should go towards things like server costs and power consumption for the pool systems.
* Pools can change the payout minimum amounts. Be sure to read the fine print and make sure you understand the rules.

To connect to a pool you will need a QRL address that will collect the rewards of the pool mining. You will enter this as the user for the pool. You can also search the stats of your miner by entering this into the bottom of most mining pool sites.



## Mining Software

| Software      | GUI or CLI | Arch | Windows     | Linux |  OSX   |  Links | Notes	|
|:-------------:|:--:|:-----:|:-----------:|:-----:|:------:|:------:|:-------:|
|   XMR-stak    | CLI	|	CPU, GPU (Nvidia & AMD) |  YES     |  YES     |  YES      | [Github](https://github.com/fireice-uk/xmr-stak/releases) | guided start, Open Source, TLS support, HTML statistics page, JSON API	|
|   Cast XMR    | CLI 	|	GPU (Nvidia & AMD) |    YES  |  NO   |  NO    | [gandalph3000.com](http://www.gandalph3000.com/cast_xmr/cast-xmr-optimized-cryptonight-miner-for-rx-vega/) | 	|
|   CPUMiner | CLI |	CPU  |    YES     |  YES   |  YES   | [GitHub](https://github.com/tpruvot/cpuminer-multi) | 	|
|   ccminer (forked by tsiv)   | 	|	CUDA (Nvidia) |  YES       |  YES   |   YES   | [Github](https://github.com/tsiv/ccminer-cryptonight) | 	|


> **Note** This list is not inclusive, and is not a promotion or endorsement for a project. Any cryptonight mining software \*should work. *YMMV*
{: .info}

## Examples
Here are some basic examples to get started. These are found in the config files or used to issue the mining software command in the command line.

| Software      | Command |
| :------------:|:-------:|
|   XMR-stak | minerd -a cryptonight -o stratum+tcp://mineqrl.com:3333 -u YOUR_WALLET_ADDRESS -p x |
|   Cast XMR | minerd -a cryptonight -o stratum+tcp://mineqrl.com:3333 -u YOUR_WALLET_ADDRESS -p x  |
|   CPUMiner | minerd -a cryptonight -o stratum+tcp://mineqrl.com:3333 -u YOUR_WALLET_ADDRESS -p x  |
|   ccminer  | ccminer -o stratum+tcp://strat.qrlmining.com:3333 -u YOUR_WALLET_ADDRESS -p x |



## Basic Principles

ASIC (Application Specific Integrated Circuit)
: An integrated circuit customized for a specific task, in our case hashing cryptographic signatures.
<br>
Blockchain
: The public ledger of all transactions stored in a cryptographic way.
<br>
CPU Mining
: Using the CPU of a computer to mine with.
<br>
Fork
: A piece of code that, at some point in the code history, made significant changes or changed direction and a new project is born from the first.
<br>
Full Node
: The main project software running on a PC fully synced with a local copy of the blockchain. This helps to support the network.
<br>
GPU Mining
: Using a Graphic Processing Unit(s) to mine with.
<br>
Hash Rate (HR/s)
: The amount of computational hashes a processor can process in a second.
<br>
Mining
: The process that verifies transactions on the ledger or Blockchain, also the process in which new QRL are made and distributed into the world.
<br>
Mining Software
: Software that is run on a local computer. Used to process hashes on the blockchain and stay in sync with current work.
<br>
Pool Software
: Software that shares the work, and rewards from mining between all workers in the pool.
<br>
Pool Worker
: The address or user name associated with the computer running the mining software.	
<br>
PoS (Proof of Stake)
: Proof Of Stake.
<br>
PoW (Proof of Work)
: Proof Of Work.
<br>
Stratum Server
: Server using the stratum mining protocol to allow multiple miners to join together and increase hashrate.
<br>
