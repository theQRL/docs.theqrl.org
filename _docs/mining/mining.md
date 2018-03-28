---
title: Mining QRL Quick Start
categories: mining
tags: mining
---


This guide will walk you through setting up a few different mining software on different operating systems. Covering as much basic information for anyone to get started mining QRL today. Seriously It is way too easy to set this up.


## Basic Principles

#### QRL Mining basics

QRL uses the [CryptoNight](#) protocol as the backbone to the mining process. This allows QRL to take advantage of the ASIC resistant features and benefits of CryptoNight. 

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
