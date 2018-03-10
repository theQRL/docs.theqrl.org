---
title: What is the Slaves.json File
categories: wallet
tags: wallet
---


{::comment}

Get better explaination here for slaves.json

{:/comment}

When you create a new wallet you create an XMSS tree, which is comprised of many signatures to make a signature scheme. Every signature is referenced as your OTS index. 

Since the available amount of these index's are limited the slaves.json file was created. This allows you to create a slave to the main wallet who, depending on how the slaves.json was set up allows for full signing on the blockchain. 

The main wallet is used to generate the amount of slaves we want and creates a magnitude more transactions the main wallet can preform.

#### Basics

* Generate a `slaves.json` file to use for signing, do not use the main wallet
	* This file is generated from your main wallet keys and must be approved and authorized by the network.
	* Depending on the number of slaves you have authorized changes the available amount of transactions this slave can preform on the main wallets behalf.
	* `{TreeHeight}x{SlavesNumber}={Slaves.json-OTS-index}`
* Generate a slaves.json file and save it as a backup to use when the OTS index is close to being exhausted. 
	* This will allow you to transfer the remaining Quanta to a new wallet with available OTS index's
	* This file can be stored on a USB flash drive in a safe place



Lets work through some math. Assuming the default settings are used throughout. We create a new wallet with a tree height of 10 xmss or 1,024 Signatures. With this wallet alone we can sign 1,024 transactions on the network.

In order to increase that amount we generate a slaves.json file with 10 slaves. this file will then have 10 slaves with 1,24 signatures available or `10 x 1024 = 10240` and will only have used one OTS from the main wallet.

If we create a wallet with tree height of 18 xmss or 262,144 Signatures and generate a slaves.json file with 100 slaves in it i would have 26,214,400 signatures available with this one file, that I can generate 262,143 more times from the main wallet before it runs out of signatures.


## Generating a slaves.json file

To create a slaves.json file we will first need a QRL wallet address. Head over to [https://wallet.theqrl.org](https://wallet.theqrl.org) to get started.

We have a great guide for setting up a new wallet via the Web Wallet [here](/wallet/basics)

