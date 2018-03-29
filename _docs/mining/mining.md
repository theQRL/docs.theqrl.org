---
title: Mining QRL Quick Start
categories: mining
tags: mining
---


So you want to mine QRL? This is the place to start. This guide will cover the basics to mining while staying out of the weeds as they say.

Anyone can get started mining, seriously it's way too easy to set this up and make some coins with your existing hardware. You can mine QRL on most modern PC's, servers, NAS devices, web browsers, heck even cell phones (Not very good ROI). 


## Basic Principles

There are a few key things to know before you get started. Nothing too complicated. Let's start with a few definitions.


ASIC (Application Specific Integrated Circuit)
: An integrated circuit customized for a specific task, in our case hashing cryptographic signatures.


Blockchain
: The public ledger of all transactions stored in a cryptographic way.


CPU Mining
: Using the CPU of a computer to mine with.


Fork
: A piece of code that, at some point in the code history, made significant changes or changed direction and a new project is born from the first.


Full Node
: The main project software running on a PC fully synced with a local copy of the blockchain. This helps to support the network.


GPU Mining
: Using a Graphic Processing Unit(s) to mine with.


Hash Rate (HR/s)
: The amount of computational hashes a processor can process in a second.


Mining
: The process that verifies transactions on the ledger or Blockchain, also the process in which new QRL are made and distributed into the world.


Mining Software
: Software that is run on a local computer. Used to process hashes on the blockchain and stay in sync with current work.


Pool Software
: Software that shares the work, and rewards from mining between all workers in the pool.


Pool Worker
: The address or user name associated with the computer running the mining software.	


PoS (Proof of Stake)
: Proof Of Stake.


PoW (Proof of Work)
: Proof Of Work.


Stratum Server
: Server using the stratum mining protocol to allow multiple miners to join together and increase hashrate.


#### Requirements

There are not too many requirements for mining QRL. Most current processors will run some form of mining software. There are lots of choices for every operating system. Keep in mind that the power (energy) consumption makes most devices impractical to mine with, costing more to power than the rewards earned.

* PC that is turned on 24/7, or close to it
* Network connection
* Mining software for your PC's operating system

> **Note:** It is not recommended to mine on a laptop. They are not made to run full capacity 100% of the time. There is not enough cooling and damage may occur.
{: .info}

#### QRL Mining basics

QRL uses the Monero fork of [CryptoNight](http://cryptonite.info), a fork of the [CryptoNote](https://cryptonote.org/) protocol as the backbone to the mining process.  

By using this algorithm allows QRL to take advantage of the ASIC resistant features and benefits of CryptoNight and Monero. Since we are using the Monero fork, we can share in the same ASIC resistant benefits that Monero promotes. (*Privacy features of Monero are specific to that project, and do not carry over to QRL.*)

The QRL mining period will last until a stable PoS chain is ready and fully tested. After this happens a hard fork will occur switching the QRL blockchain over to a proof of stake model

Any software that pool mines for XMR will work with QRL. You can find something that is compatible with your OS and setup following the guide found with the project you choose. There are too many potential configurations to list here. Please ask for help in the QRL Discord or in the Reddit forum if you need help. 

> When configuring your software, set everything up to mine Monero, *instead* of using a Monero address, enter your *QRL* address into the "Worker" or "Address" field in the mining software.
{: .info}

QRL uses PQ secure cryptography. No joke this stuff is the best there is right now. If you follow instructions, and don't compromise your private keys in any way your funds are safe from current processors as well as general-purpose error-corrected quantum computers that are on the horizon.

## Mining Software

| Software      | GUI or CLI | Arch | Windows     | Linux |  OSX   |  Links | Notes	|
|:-------------:|:--:|:-----:|:-----------:|:-----:|:------:|:------:|:-------:|
|   XMR-stak    | CLI	|	CPU, GPU (Nvidia & AMD) |  YES     |  YES     |  YES      | [Github](https://github.com/fireice-uk/xmr-stak/releases) | guided start, Open Source, TLS support, HTML statistics page, JSON API	|
|   Cast XMR    | CLI 	|	GPU (Nvidia & AMD) |    YES  |  NO   |  NO    | [gandalph3000.com](http://www.gandalph3000.com/cast_xmr/cast-xmr-optimized-cryptonight-miner-for-rx-vega/) | 	|
|   CPUMiner | CLI |	CPU  |    YES     |  YES   |  YES   | [GitHub](https://github.com/tpruvot/cpuminer-multi) | 	|
|   ccminer (forked by tsiv)   | 	|	CUDA (Nvidia) |  YES       |  YES   |   YES   | [Github](https://github.com/tsiv/ccminer-cryptonight) | 	|



> **Note** This list is not exhaustive, and is not a promotion or endorsement for a project. Any cryptonight mining software \*should work. *YMMV*
{: .info}

## CPU Mining

Fixme with content for CPU mining

CPU mining utilizes a users PC CPU(s) to calculate the cryptographic equation and compute a valid block. Unlike Bitcoin and other cryptocurrencies, QRL and it's upstream cousin Monero are ASIC resistant


## GPU Mining

Mining QRL using GPU's is possible utilizing a community run pool server working with other miners to pool the hashrate submitted to find solutions. 


#### CPU and GPU

Being that QRL is mineable on both GPU and CPU there is nothing stopping you from running 2 instances of software for your system. One running instance will mine using the GPU(s) attached to the PCIE slot, another instance can be setup to mine using the CPU only. This gives more HR towards finding a block and squeezes the last drops of usage from the power already spent.

This is a bit more advanced and may require editing some of the software configuration files to connect on different/separate ports. Reference the user manual for the software for information, or drop into our Discord chat or Reddit for help.

## Examples
Here are some basic examples to get started. These are found in the config files or used to issue the mining software command in the command line.

| Software      | Command |
| :------------:|:-------:|
|   XMR-stak | minerd -a cryptonight -o stratum+tcp://mineqrl.com:3333 -u YOUR_WALLET_ADDRESS -p x |
|   Cast XMR | minerd -a cryptonight -o stratum+tcp://mineqrl.com:3333 -u YOUR_WALLET_ADDRESS -p x  |
|   CPUMiner | minerd -a cryptonight -o stratum+tcp://mineqrl.com:3333 -u YOUR_WALLET_ADDRESS -p x  |
|   ccminer  | ccminer -o stratum+tcp://strat.qrlmining.com:3333 -u YOUR_WALLET_ADDRESS -p x |
