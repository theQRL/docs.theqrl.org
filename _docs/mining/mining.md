---
title: Mining QRL Quick Start
categories: mining
description: The QRL Mining documentation
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

QRL uses the Monero7 algorithm allowing QRL to take advantage of the ASIC resistant features and benefits of CryptoNight and Monero. Since we are using this algorithm, we can share in the same ASIC resistant benefits that Monero promotes. 

> Privacy features of Monero are specific to that project, and do not carry over to QRL.
{: .info}


Any software that pool mines for monero will work with QRL. You can find something that is compatible with your OS and setup following the guide found with the project you choose. Ask for help in the QRL Discord or in the Reddit forum if you need help. 

> When configuring your software, set everything up to mine Monero7, *instead* of using a Monero address, enter your *QRL* address into the "Worker" or "Address" field in the mining software.
{: .info}

QRL uses PQ secure encryption. No joke this stuff is the best there is right now. If you follow instructions, and don't compromise your private keys in any way your funds are safe from current processors as well as advanced quantum computers that are on the horizon.


## CPU Mining

CPU mining utilizes a users PC CPU(s) to calculate the cryptographic equation and compute a valid block. Unlike Bitcoin and other cryptocurrencies, QRL and it's upstream cousin Monero are ASIC resistant

There are two ways to get started mining on a CPU:

* Run a [Full QRL Node](/mining/full-node) on your computer
* Use cryptonight mining software and connect to a pool

As a general rule, you will have a better chance at finding blocks using a pool. Solo mining strengthens the QRL network by running a synced node, verifying transactions on the network.  Either way you decide to go, over time your block rewards should even out.


## GPU Mining

Mining QRL using GPU's is possible utilizing a community run pool server working with other miners to pool the hashrate submitted to find solutions. You will need cryptonight mining software compatible with the latest Monero fork that will use the GPU(s) of your mining rig to compute the hashing functions.

There are a ton of options to choose from out there. Make sure the software will mine Monero if you are having any issues. Use a QRL address and point the miner to a community pool.  


## Mining Software

| Software      | GUI or CLI | Arch | Windows     | Linux |  OSX   |  Links | Notes	|
|:-------------:|:--:|:-----:|:-----------:|:-----:|:------:|:------:|:-------:|
|   XMR-stak    | CLI	|	CPU, GPU (Nvidia & AMD) |  YES     |  YES     |  YES      | [Github](https://github.com/fireice-uk/xmr-stak/releases) | guided start, Open Source, TLS support, HTML statistics page, JSON API	|
|   Cast XMR    | CLI 	|	GPU (Nvidia & AMD) |    YES  |  NO   |  NO    | [gandalph3000.com](http://www.gandalph3000.com/cast_xmr/cast-xmr-optimized-cryptonight-miner-for-rx-vega/) | 	|
|   CPUMiner | CLI |	CPU  |    YES     |  YES   |  YES   | [GitHub](https://github.com/tpruvot/cpuminer-multi) | 	|
|   ccminer (forked by tsiv)   | 	|	CUDA (Nvidia) |  YES       |  YES   |   YES   | [Github](https://github.com/tsiv/ccminer-cryptonight) | 	|


> **Note** This list is not exhaustive, and is not a promotion or endorsement for a project. Any cryptonight mining software \*should work. *YMMV*
{: .info}

## Pool Mining

To get started pool mining, you will need to have an application that will utilize the processor or GPU of your computer. Then you will connect to a community run mining pool.

> For more information see our guide at [docs.theqrl.org](/mining/pool-mining)

## Basic Principles


| Term | Definition |
|:-----|:-----------|
| ASIC | (Application Specific Integrated Circuit) An integrated circuit customized for a specific task, in our case hashing cryptographic signatures. |
| Blockchain | The public ledger of all transactions stored in a cryptographic way |
| CPU Mining | Using the CPU of a computer to mine with. |
| Fork | A piece of code that, at some point in the code history, made significant changes or changed direction and a new project is born from the first. |
| Full Node | The main project software running on a PC fully synced with a local copy of the blockchain. This helps to support the network. |
| GPU Mining | Using a Graphic Processing Unit(s) to mine with |
| Hash Rate (HR/s) | The amount of computational hashes a processor can process in a second. |
| Mining | The process that verifies transactions on the ledger or Blockchain, also the process in which new QRL are made and distributed into the world. |
| Mining Software | Software that is run on a local computer. Used to process hashes on the blockchain and stay in sync with current work. |
| Pool Software | Software that shares the work, and rewards from mining between all workers in the pool. |
| Pool Worker | The address or user name associated with the computer running the mining software. |
| PoS (Proof of Stake) | Proof Of Stake. A method of validating transactions on the network. |
| PoW (Proof of Work) | Proof Of Work. A Method of validating transactions on the network. |
| Stratum Server | Server using the stratum mining protocol to allow multiple miners to join together and increase hashrate. |