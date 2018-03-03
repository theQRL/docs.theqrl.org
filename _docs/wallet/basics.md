---
title: Wallet Basics
categories: wallet
tags: wallet
---

The QRL wallet is your portal into the provably secure quantum store that makes QRL what it is. This wallet will store your coins safely, while allowing you to mine without the risk of loosing private keys. (FIXME add details here about XMSS and QTS/trees etc...)

There are two ways you can create a wallet for QRL. 

* The online wallet served up at [wallet.theqrl.org.](https://wallet.theqrl.org)
* Using the QRL CLI in a Linux environment. 
	* You will need to first install the qrl package following this guide [Linux install guide location](/docs/mining/linux)

If you are going to mine QRLneed to generate a `slaves.json` file to mine with, use the `qrl` package in a Linux environment. *There will be the ability to create this file in the web wallet at a later date.*

* * *

## Online Wallet

By far the easiest way to generate a wallet is by using the online wallet. Browse over to [wallet.theqrl.org](https://wallet.theqrl.org) to get started.

![QRL Web Wallet](/assets/qrlWallet.jpg)

We will begin on the left side of the main page with the following options:
* New Wallet
* Open Wallet
* Verify Transaction
* Explorer

By default you start in the "New Wallet" option to generate a QRL address and private keys for you to interface with the QRL blockchain.

### Password for wallet

> **FIXME add details of wallet encryption file**

Enter a secure password into the wallet. This pass-phrase encrypts the sensitive information that can unlock your wallet file, including your address, hexseed and mnemonic phrase. You will need this pass-phrase, and wallet file to unlock your wallet file in future. 

> The pass-phrase must be at least 8 characters in length, and contains at least 1 number and 1 letter.

**Tree Height**

> FIXME add screen shot for tree height selections

This option allows you to create a wallet with varying tree size. In other words this controls the amount of signatures your wallet can use for transactions safely on the blockchain. 

By default an XMSS Tree height of 10 provides 1024 One Time Signatures. Larger XMSS Tree heights will take longer to generate, please be patient

You must unlock your wallet with the same tree size in the settings. 

Click the create wallet button and the wallet will be generated

![QRL Web Wallet](/assets/qrlWallet-newWallet.jpg)

This will produce a sensitive screen once the wallet is created. Be sure to record the relitive details for the new wallet. Most importantly **Record your private keys** these are in the form of both a mnemonic and a hexseed. These will not be shown again, **do not lose these**

Also record the QRL address somewhere convient. This is the address you will have others send coins to. If you are mining with this wallet your mined coins will go here as well.

There is an option to "save unencrypted wallet file" "save secure wallet file" or "open wallet"

> FIXME add screen shot for each selection "unencrypted" "encrypted" and "open wallet"

If you choose to save the unencrypted file it will print the mnemonic and hexseed in plain text and send this file to you via https

The file will look something like this:

```json
[{"address":"Q0102003afb60338e6ee1ff67cb8acb61f3b83c877251e2ff950bd186f5ef3665f83a122743d68d","pk":{},"hexseed":"01020036448757abd8e8c766dfaaf47804863a32a9882c576af49ef5b44baac1e6b3b64603f5c39ba93aa4439141bc2346fb9b","mnemonic":"absorb bunny dagger errant fridge sage trail kedge tavern racism knew erotic demure clammy match sheen hold exceed walker eerie prison bruise region hamlet again gentry orient nature pink deeply due seeing engine rocky","height":4,"hashFunction":"SHAKE128","signatureType":"XMSS","index":0,"encrypted":false}]
```

You will be able to use this file to reconstruct the wallet later, if needed. Also this will allow anyone the ability to rebuild you wallet later.

If you choose the encrypted 




## Sending Coins

## Receiving coins

## Tokens