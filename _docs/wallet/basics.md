---
title: Wallet Basics
categories: wallet
tags: wallet
---

The QRL wallet is your portal into the provably secure quantum store that makes QRL what it is. This wallet will store your coins safely, while allowing you to mine without the risk of loosing private keys. 

## OTS Key Usage

The OTS index or the **One Time Signature** index is used when you sign a transaction onto the network. 

You are required to specify which OTS index to use from the wallet file you have created. Depending on the tree height you selected when setting up the wallet you will start with anywhere from 1024 to 4096 OTS indexes. Yo may not re-use any OTS index. The transaction will be rejected. 

#### Important OTS Info

This can not be stressed enough, The OTS key index is limited. Once this index is used you will no longer be able to sign transactions.

What this means:
* If all OTS index's are used
	* Funds that are in a wallet with no available OTS index left will not be able to transfer out of the wallet, and will be lost. 
	* There is nothing to do if all of the QTS indexes are used, you cannot sign a transaction.

#### Best Wallet Practices 

* Do not use all of your OTS index's
	* Keep track of the index's used in a spreadsheet or ledger
* Generate a `slaves.json` file to use for signing, do not use the main wallet
	* This file is generated from your wallet and is approved and authorized by the network.
	* Depending on how many slaves you have authorized will change the available amount of transactions this slave can preform on the main wallets behalf
* Generate a slaves.json file and save it as a backup to use when the OTS index is close to being exhausted. 
	* This will allow you to transfer the remaining Quanta to a new wallet with available OTS index's

#### Slaves.json Explained

When you create a wallet you create a Quantum resistant store based on the way the OTS and trees work together **FIXME - Help explain this** Since the available amount of these index's are limited the slaves.json was created. This allows you to create a slave to the main wallet who, depending on how the slaves.json was set up allows for full signing on the blockchain. 

The main wallet is used to generate the amount of slaves we want and created a magnitude more transactions the main wallet can preform.

Lets work through some math. Assuming the default settings are used throughout. We create a new wallet with a tree height of **10** or **1,024** Signatures. With this wallet alone we can sign 1,024 transactions on the network.

In order to increase that amount we generate a slaves.json file with 10 slaves. this file will then have 10 slaves with 1,24 signatures available or `10 x 1024 = 10240` and will only have used one OTS from the main wallet.

If we create a wallet with tree height of **18** or **262,144** Signatures and generate a slaves.json file with 100 slaves in it i would have 26,214,400 signatures available with this one file, that I can generate 262,143 more times from the main wallet before it runs out of signatures.


----------------------------------------------
each with say 12 xmss tree height. 
	* Which means each slave will have 4096 keys and so 100 slaves will have total 100*4096 = 409,600. 
	* So the pool can still use 409,600 to sign blocks. or to make transaction on behalf of master wallet.
--------------------------


There are two ways you can create a wallet for QRL. 

* The online wallet served up at [wallet.theqrl.org.](https://wallet.theqrl.org)
* Using the QRL CLI in a Linux environment. 
	* You will need to first install the qrl package following this guide [Linux install guide location](/docs/mining/linux)

If you are going to mine QRLneed to generate a `slaves.json` file to mine with, use the `qrl` package in a Linux environment. *There will be the ability to create this file in the web wallet at a later date.*

* * *

## Online Wallet

By far the easiest way to generate a wallet is by using the online wallet. Browse over to [wallet.theqrl.org](https://wallet.theqrl.org) to get started.


![QRL Web Wallet](/assets/wallet/qrlWallet.png)


We will begin on the left side of the main page with the following options:
* New Wallet
* Open Wallet
* Verify Transaction
* Explorer

By default you start in the "New Wallet" option to generate a QRL address and private keys for you to interface with the QRL blockchain.

#### Password for wallet

> **FIXME add details of wallet encryption file**

Enter a secure password into the wallet. 

The pass-phrase uses **AES-256** encryption to lock up your `wallet.json` file. This adds another layer of protection to your Quanta by requiring the recovery key "Password" every time you load this. I recommend saving this somewhere very safe, along with your hexseed and private keys. If these are compromised you lose everything.

**The pass-phrase must be at least 8 characters in length, and contains at least 1 number and 1 letter.**

#### Tree Height

> FIXME add screen shot for tree height selections

This option allows you to create a wallet with varying tree size. In other words this controls the amount of signatures your wallet can use for transactions safely on the blockchain. 

By default an XMSS Tree height of 10 provides 1024 One Time Signatures. Larger XMSS Tree heights will take longer to generate, please be patient

You must unlock your wallet with the same tree size in the settings. 

Click the create wallet button and the wallet will be generated


![QRL New Wallet](/assets/wallet/qrlWallet.png)

This will produce a sensitive screen once the wallet is created. Be sure to record the relitive details for the new wallet. Most importantly **Record your private keys** these are in the form of both a mnemonic and a hexseed. These will not be shown again, **do not lose these**

Also record the QRL address somewhere convient. This is the address you will have others send coins to. If you are mining with this wallet your mined coins will go here as well.

There is an option to "save unencrypted wallet file" "save secure wallet file" or "open wallet"

> FIXME add screen shot for each selection "unencrypted" "encrypted" and "open wallet"

If you choose to save the unencrypted file it will print the mnemonic and hexseed in plain text. 

**Be careful with an unencrypted file**

You will be able to use this file to reconstruct the wallet later, if needed. Also this will allow anyone the ability to rebuild you wallet later.

If you choose the encrypted 


## Sending Coins

![QRL New Wallet](/assets/wallet/qrlWallet-open.png)

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