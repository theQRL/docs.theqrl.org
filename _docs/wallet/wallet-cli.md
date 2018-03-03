---
title: Create Wallet From CLI
categories: wallet
tags: wallet
---

The QRL wallet can be generated from a full node. 

Using the QRL command line utility we will show you how to:

* Create a new wallet 
* Check our balance
* Transfer coins
* Generate Mnemonic phrase
* Generate hexseed
* Recover wallet from hexseed/mnemonic
* Generate a slaves.json file 

* * *

## Create New Wallet

Depending on how you have setup your QRL install you have some options for generating the wallet. 

Create a new wallet with:  

**Python Install**

```bash
qrl wallet_gen
```

This creates a wallet file in your `~/.qrl/` folder called `wallet.qrl`

* * *
## Check Wallet Balance

FIXME With some details!

* * * 
## Transfer Coins

FIXME With some details!

* * * 

## Get Mnemonic and hexseed

In order to recover our wallet later or use this wallet in web wallet, you will need our private keys. You can get these keys in two ways, a hexseed, and a mnemonic phrase. The mnemonic is easier for humans to read, however each will work.

**YOU HAVE TO SAVE THIS SOMEWHERE SAFE**

To find your hexseed and recovery information for your wallet you will need to run:

```bash
# Get mnemonic phrase pip3 package

qrl wallet_secret
```  
This will respond with a question 

```
# Which Wallet to use [0 os default]

Wallet idx [0]:
``` 
 
**Enter** will select the default wallet shown, if you have more than one wallet select the index that reflects the wallet you are using.

*   This will show you the address and secret mnemonic for the wallet you created, stored in `~/.qrl/` FIXME This is wrong
*   Save it somewhere safe! Anyone with this info can recover your wallet and steal your coins.

* * *
## Generate hexseed

FIXME With some details!

* * * 

## Recover Wallet

FIXME With some details!

* * * 
## slaves.json

FIXME With some details!

* * *