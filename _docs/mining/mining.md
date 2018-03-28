---
title: Mining QRL Quick Start
categories: mining
tags: mining
---


So you want to mine QRL? This is the place to start. This guide will cover the basics to mining while staying out of the weeds as they say.

Anyone can get started mining, seriously it's way too easy to set this up and make some coins with your existing hardware. You can mine QRL on most modern PC's, servers, NAS devices, web browsers, heck even cell phones (Not very good ROI). 


## Basic Principles

There are a few key things to know before you get started. Nothing too complicated. Let's start with a few definitions.

#### Definitions

| Term			  	| Definition 								|
|:-----------------:|:------------------------------------------|
| Blockchain 		| The public ledger of all transactions stored in a cryptographic way	|
| CPU Mining 		| Using the CPU of a computer to mine with	|
| GPU Mining 		| Using a Graphic Processing Unit(s) to mine with	|
| Hash Rate (HR/s) 	| The amount of computational hashes a processor can process in a second	|
| Mining 			|	The process that verifies transactions on the ledger or Blockchain, also the process in which new QRL are made and distributed into the world. 	|
| Mining Software	| Software that is run on a local computer. Used to process hashes on the blockchain and stay in sync with current work 	|
| Pool Software		| Software that shares the work, and rewards from mining between all workers in the pool 	|
| Pool worker 		| The address or user name associated with the computer running the mining software. (For QRL this will be your wallet address)		|
| Stratum server	| Server using the stratum mining protocol to allow multiple miners to join together and increase hashrate
| Full Node 		| The main project software running on a PC fully synced with a local copy of the blockchain. This helps support the network however is not required to mine QRL 	|
| 


#### Requirements

There are not too many requirements for mining QRL. Most current processors will run some form of mining software. There are lots of choices for every operating system. Keep in mind that the power (energy) consumption makes most devices impractical to mine with, costing more to power than the rewards earned.


#### QRL Mining basics

QRL uses the [CryptoNight](#) protocol as the backbone to the mining process. This allows QRL to take advantage of the ASIC resistant features and benefits of CryptoNight. 

Any software that pool mines for XMR will work with QRL. You can find something that is compatible with your OS and setup following the guide found with the project you choose. There are too many potential configurations to list here. Please ask for help in the QRL Discord or in the reddit forum if you need help. When configuring your software, set everything up to mine Monero, **Instead** of using a Monero address, enter your QRL address into the "Worker" or "Address" field in the mining software.

QRL uses PQ secure encryption. No joke this stuff is the best there is right now. If you follow instructions, and don't compromise your private keys in any way your funds are safe.

#### Using your processor as a working class miner. 
CryptoNight runs well on most processors. In fact there have been cases of this working on cell [phones](https://play.google.com/store/apps/details?id=com.ethics.path.tonymonero). You name it basically everything will mine cryptonight, if you work for it. 

Chances are good you have a computer around that is running and not being used, even the PC you are reading this on can be used to mine with.

Why not use the spare CPU cycles your PC has to offer

> **Note:** It is not recommended to mine on a laptop. They are not made to run full capacity 100% of the time. there is not enough cooling and damage may occur.
{: .warning}

## Mining Software

| Software      |  Arch | Windows     | Linux |  OSX   |  Links |
| :------------:|:-----:|:-----------:|:-----:|:------:|:------:|
|   XMR-stak    | CPU, GPU (Nvidia and AMD) |  YES     |  YES     |  YES      | [Download](https://github.com/fireice-uk/xmr-stak/releases) |
|   Cast XMR    |  GPU (Nvidia and AMD) |    YES  |  NO   |  NO    | [gandalph3000.com](http://www.gandalph3000.com/cast_xmr/cast-xmr-optimized-cryptonight-miner-for-rx-vega/) |
|   CPUMiner |  CPU  |    YES     |  YES   |  YES   | [GitHub](https://github.com/tpruvot/cpuminer-multi) |
|   ccminer (forked by tsiv)   | CUDA (Nvidia) |  YES       |  YES   |   YES   | [github](https://github.com/tsiv/ccminer-cryptonight) |


## Examples
Here are some basic examples to get started

| Software      | Command |
| :------------:|:-------:|
|   XMR-stak | minerd -a cryptonight -o stratum+tcp://mineqrl.com:3333 -u YOUR_WALLET_ADDRESS -p x |
|   Cast XMR | minerd -a cryptonight -o stratum+tcp://mineqrl.com:3333 -u YOUR_WALLET_ADDRESS -p x  |
|   CPUMiner | minerd -a cryptonight -o stratum+tcp://mineqrl.com:3333 -u YOUR_WALLET_ADDRESS -p x  |
|   ccminer  | ccminer -o stratum+tcp://strat.qrlmining.com:3333 -u YOUR_WALLET_ADDRESS -p x |
