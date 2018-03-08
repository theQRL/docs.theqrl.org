---
title: Wallet Basics
categories: wallet
tags: wallet
---

The QRL wallet is your portal into the provably secure quantum store that makes QRL what it is. This wallet will store your coins safely, while allowing you to mine without the risk of losing private keys. 



##### This guide will walk you through

* Setting up a new wallet
* Sending a transaction over the network *(Send Coins)*
* Receiving a transaction over the network *(Get Coins)*
* Checking transaction details on the [Block Explorer](https://explorer.theqrl.org) *\*including your current wallet balance*


Being Quantum Resistant comes with some inherent challenges. Before creating your new wallet, there are a few things you need to know.  

##### OTS Key Index

When you create a new wallet you create an XMSS tree, which is comprised of many signatures to make a signature scheme. Every signature is referenced as your OTS index or *One Time Signature* key index. 

*The OTS key index is limited.* Once this index is used you will no longer be able to sign transactions. This can not be stressed enough! 

> **IF you use all of your OTS Key Index's with funds in the wallet, these funds will be lost.**


**FIXME** - create a spreadsheet for users to fill in with key index and TX number and give as a download link here?...

#### Best Wallet Practices 
* Track OTS Keys Used in a spreadsheet or ledger
* Store your private keys somewhere safe
	* Write them on a thick piece of paper with water proof ink
	* Stamp them into a piece of stainless steel  
* Create a slaves.json file to use for transactions or mining QRL 


{::comment}
FIXME - move this into it's own write-ups. Oe for each topic, OTS key index, Slaves.json 


### Slaves.json Explained

* Generate a `slaves.json` file to use for signing, do not use the main wallet
	* This file is generated from your main wallet keys and must be approved and authorized by the network.
	* Depending on the number of slaves you have authorized changes the available amount of transactions this slave can preform on the main wallets behalf.
	* `{TreeHeight}x{SlavesNumber}={Slaves.json-OTS-index}`
* Generate a slaves.json file and save it as a backup to use when the OTS index is close to being exhausted. 
	* This will allow you to transfer the remaining Quanta to a new wallet with available OTS index's
	* This file can be stored on a USB flash drive in a safe place

When you create a new wallet you create an XMSS tree, which is comprised of many signatures to make a signature scheme. Every signature is referenced as your OTS index. 

Since the available amount of these index's are limited the slaves.json file was created. This allows you to create a slave to the main wallet who, depending on how the slaves.json was set up allows for full signing on the blockchain. 

The main wallet is used to generate the amount of slaves we want and creates a magnitude more transactions the main wallet can preform.

Lets work through some math. Assuming the default settings are used throughout. We create a new wallet with a tree height of 10 xmss or 1,024 Signatures. With this wallet alone we can sign 1,024 transactions on the network.

In order to increase that amount we generate a slaves.json file with 10 slaves. this file will then have 10 slaves with 1,24 signatures available or `10 x 1024 = 10240` and will only have used one OTS from the main wallet.

If we create a wallet with tree height of 18 xmss or 262,144 Signatures and generate a slaves.json file with 100 slaves in it i would have 26,214,400 signatures available with this one file, that I can generate 262,143 more times from the main wallet before it runs out of signatures.

{:/comment}

## Create an Online Wallet

By far the easiest way to generate a wallet is by using the online wallet. All secure XMSS operations are run in a web assembly compiled version of qrllib locally in your browser or desktop application. Keys stay in the memory space of the XMSS object, which is destroyed the moment you close the wallet, browser window or desktop application.

Browse over to [wallet.theqrl.org](https://wallet.theqrl.org) to get started.


By default you start in the "New Wallet" option to generate a QRL address and private keys for you to interface with the QRL blockchain.

![QRL Web Wallet](/assets/wallet/qrlWallet.png)

The left side of the main page shows us the following options:
* New Wallet
* Open Wallet
* Verify Transaction
* Explorer


###  New Wallet

#### Password

The pass-phrase uses **AES-256** encryption to lock up your `wallet.json` file. This adds another layer of protection to your Quanta by requiring the recovery key "Password" every time you load the wallet. 

It is recommend to save this somewhere very safe, along with your hexseed and private keys. If any of these are compromised you lose everything.

![QRL Web Wallet](/assets/wallet/CreateWallet.png)

**The pass-phrase must be at least 8 characters in length, and contains at least 1 number and 1 letter.** *(Recommended over 15 characters mixed case)*

#### Tree Height

![QRL Web Wallet](/assets/wallet/treeHeight.png)

This option allows you to create a wallet with varying tree size. In other words this controls the amount of signatures your wallet can use for transactions safely on the blockchain. 

By default an XMSS Tree height of 10 provides 1024 One Time Signatures. Larger XMSS Tree heights will take longer to generate, please be patient

**You must unlock your wallet with the same tree size used to generate when you unlock your wallet again**

Click the create wallet button and the wallet will be generated

This will produce a sensitive screen once the wallet is created. Be sure to record the relative details for the new wallet. Most importantly **Record your private keys** these are in the form of both a mnemonic and a hexseed. These will not be shown again, **do not lose these**

![QRL New Wallet](/assets/wallet/qrlWallet-details.png)

Record the QRL address somewhere convenient. This is the address you will have others send coins to. If you are mining with this wallet your mined coins will go here as well. All QRL addresses start with a "Q"

There is an option to "save unencrypted wallet file" "save secure wallet file" or "open wallet". 

It is recommended to save the file in the AES-256 encrypted file version. This will require your password to unlock.

If you choose to save the unencrypted file it will print the mnemonic and hexseed in plain text. **Be careful with an unencrypted file, You can lose your stack**

You will be able to use this file to reconstruct the wallet later, if needed. Also this will allow anyone the ability to rebuild you wallet later.

You now have a QRL wallet that can receive coins, send coins, create `slaves.json` files and begin mining. Welcome to the Quantum Resistance! Click "open Wallet" and enter your recovery information. 

## Sending Coins

In order to send coins we will need to unlock our wallet. You can use a wallet file, Hexseed, or Mnemonic phrase to unlock your wallet.

![QRL New Wallet](/assets/wallet/qrlWallet-opened.png)

The drop down on the right allows you to change the type of recovery medium you want to use. 

Once the wallet is opened you will be in the **Send** tab in your open wallet. There are four fields we need to fill in. 
* Recipient Address - Valid QRL address we are sending to
* Amount - How much Quanta? 0.00000001 is the smallest
* Fee - How much fee are we paying to make this transaction
* OTS Key Index - Enter an unused OTS Key Index. **Keep track of used OTS Keys!**

Once you have these details entered, click the Confirm button. You will be shown the details of the transaction before they are broadcast across the QRL network. Make sure everything is correct and click 

**FIXME Finish this!**

## Receiving coins

Click the receive tab in the wallet and you will see your wallet address and QR code. Use this to send to where ever you are receiving coins from..

## Receiving coins

![QRL New Wallet](/assets/wallet/qrlWallet-transfer.png)

## Tokens

![QRL New Wallet](/assets/wallet/qrlWallet.png)

Creating a new token is easy. Once you have all of the details figured out and the fee paid the network takes care of the rest. 

FIXME add details here for what the tokens can be used for, and the basic tech behind the token

#### Token Creation

Enter the token creation owners QRL address into the form, The Token symbol, the Token name, The amount of Decimals for your token. You need to enter at least one QRL address into the **Initial Token Holders** address fields. You can add as many other addresses as you see fit. Below this we have our QRL fee for processing ths transaction and the OTS key Index we intend to use. Ensure you have not already used this OTS key index.

![QRL New Wallet](/assets/wallet/qrlWallet-tokenCreate.png)

Once you have filled in all of the necessary details, click the create token button at the bottom of the form. THis will broadcast the creation of your token aross the QRL network and send the newly minted tokens to the addresses specified.

![QRL New Wallet](/assets/wallet/qrlWallet-tokenCreateSuccess.png)

## Checking Token Balance

Open your wallet with the mnemonic hexseed or wallet.json file and click on the 