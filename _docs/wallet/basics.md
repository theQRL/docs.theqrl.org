---
title: Wallet Basics
categories: wallet
tags: wallet
---


The QRL wallet is your portal into the provably secure quantum store that makes QRL what it is. This wallet will store your QRL safely, while allowing you to mine without the risk of losing private keys. 

##### This guide will walk you through


* Setting up a new wallet
* Sending a transaction over the network - *(Send QRL)*
* Receiving a transaction over the network - *(Get QRL)*
* Checking transaction details on the QRL Explorer, including your current wallet balance

Being Quantum Resistant comes with some inherent challenges. Before creating your new wallet, there are a few quirks worth noting about QRL.  

#### OTS Key Index

When you create a new wallet you create an XMSS tree, which is comprised of many signatures to make a signature scheme. Every signature is referenced as your OTS index or *One Time Signature* key index. 

*The OTS key index is limited.* You can only use each key once. When you've used your last key, you will no longer be able to sign transactions. This can not be stressed enough! 

> Your last key **MUST EITHER** empty your wallet **OR** activate a slave.json file that holds more keys. If you use all of your OTS Key Indexes with funds in the wallet, these funds will be lost **FOREVER**
{: .danger}

#### Best Wallet Practices 
* Track all OTS Keys used in a spreadsheet *(ledger)*
* Store your private keys somewhere safe  
* Create a slaves.json file to use for transactions or mining QRL 

## Create a QRL Wallet

By far the easiest way to generate a QRL wallet is by using the online wallet. All secure XMSS operations are run in a web assembly compiled version of *qrllib* locally in your browser or desktop application. Keys stay in the memory space of the XMSS object, which is destroyed the moment you close the wallet, browser window, or desktop application.

Browse over to [https://wallet.theqrl.org](https://wallet.theqrl.org) to get started.


By default you start in the "New Wallet" option to generate a QRL address and private keys for you to interface with the QRL blockchain.

![QRL Web Wallet](/assets/wallet/web/qrlWallet.png)

The left side of the main page shows the following options:
* New Wallet
* Open Wallet
* Verify Transaction
* Explorer


#### Password

The pass-phrase uses **AES-256** encryption to lock up your *wallet.json* file. This adds another layer of protection to your Quanta by requiring the recovery key "Password" every time you load the wallet. 

![Create Wallet](/assets/wallet/web/CreateWallet.png)

It is recommend to save this somewhere very safe, along with your hexseed and private keys. If any of these are compromised you lose everything.

**Note!**

*The pass-phrase must be at least 8 characters in length, and must contain at least 1 number and 1 letter.*

#### Tree Height

This option allows you to create a wallet with varying tree size. In other words this controls the amount of signatures your wallet can use for transactions safely on the blockchain. 

![QRL Tree Height](/assets/wallet/web/treeHeight.png)

By default an XMSS Tree height of 10 provides 1024 One Time Signatures. Larger XMSS Tree heights will take longer to generate, please be patient.

**You must unlock your wallet with the same tree size you used to generate when you unlock your wallet again.**

#### Create Wallet

Click the create wallet button and the wallet will be generated.

![QRL New Address](/assets/wallet/web/yourNewAddressDetails.png)

This will produce a sensitive screen once the wallet is created. 

![QRL New address](/assets/wallet/web/yourNewAddressDetails-options.png)

There are a few options to save your wallet file. Record the QRL address somewhere convenient. This is the address where you will send QRL. If you are mining with this wallet, your mined QRL will go here as well. All QRL addresses start with a "Q".

**Important: Record Your Private Keys!** 

You can save the private key in the form of a mnemonic phrase, hexseed, and a wallet file. The keys will not be shown again and you need them to open your wallet every time. 

**Do Not Lose These Keys!** 

It's recommended to Save a Secure file in the AES-256 encrypted version. You will need your password to unlock this file anytime it is loaded into the wallet **Don't Forget This Password!**

Also please don't save your wallet and your password in the same place. That would be like leaving your house key in the door lock...

You now have a QRL wallet that can receive QRL, send QRL, create a [slaves.json file](/wallet/Slaves-json) without sending permissions, and begin securely mining QRL. 

Welcome to the Quantum Resistance! Click "Open Wallet" and enter your recovery information. 

## Open QRL Wallet

By using the recovery method you have created, you can access your wallet to send or receive QRL.

![QRL open Wallet](/assets/wallet/web/qrlWallet.png)

Enter your information into the "Wallet Seed / File" field. Make sure the drop down on the right matches the data you chose (Mnemonic, Hexphrase, or wallet file).

## Sending QRL

With the wallet unlocked, you can now send QRL to another QRL address.

![QRL opened Wallet](/assets/wallet/web/qrlWallet-opened.png)

Once the wallet is opened you will be in the **Send** tab in your open wallet. There are four fields you need to fill in: 
* Recipient Address - A valid QRL address
* Amount - How much QRL
* Fee - How much you are paying to make this transaction
* OTS Key Index - Enter an unused OTS Key. 
**Keep track of used OTS Keys!**
	*The webwallet will keep track of your OTS key index for you from the blockchain, but it is good practice to write this number down after each use.



![QRL Send](/assets/wallet/web/send-sm.png)

Once you have these details entered, click the Confirm button. You will be shown the details of the transaction before they are broadcast across the QRL network. 

![QRL Send](/assets/wallet/web/clickToSend-sm.png)

Make sure everything is correct and click the send button. The transaction will be propagated across the QRL network and deposited into the address you entered. Your screen will show the confirmation details as the transaction is sent. 

Once the transaction has been confirmed you will get a screen similar to this:

![QRL Send](/assets/wallet/web/sent-sm.png)

You can verify the transaction in the QRL Explorer. Copy the transaction number in the "Transaction Status" box and enter it into the search field in the [QRL Explorer](https://explorer.theqrl.org).
 
## Receiving coins

Click the receive tab in the wallet and you will see your wallet address and QR code. Send this to whoever you are receiving coins from.

![QRL Receive](/assets/wallet/web/recieve.png)

Use this address to receive QRL.

## Check Wallet Balance

To check the balance of a wallet browse to the [QRL Explorer](https://explorer.theqrl.org)

![QRL Explorer](/assets/explorer/explorerFull.png)

#### Search By Address

Enter the QRL address into the search bar in the top right of the Explorer.

![QRL Explorer search](/assets/explorer/explorerSearch.png)

You can enter QRL addresses, transaction hashes, or block indexes into this field.

This will show you the current balance and all transactions that have happened with this wallet.

![QRL Wallet Balance](/assets/explorer/explorerBalance.png)

At the bottom left there is a **meta** button. This will give fine grain details for the current wallet.

![QRL Wallet meta](/assets/explorer/explorerMeta.png)


## QRT Tokens

The QRL supports QRT or Quantum Resistant Ledger Tokens. These tokens share the same encryption and QC resistance as the main QRL blockchain.

![QRL New Token](/assets/wallet/web/createToken-Blank.png)

Creating a new token is easy. Once you have all of the pertinent details entered and the fee paid, the network takes care of the rest. 


### Token Creation

To create a token you will need to provide the following information:
* The token creation owners QRL address
* The token symbol
* the token name
* The amount of decimals for your token
* Initial Token Holder Address
	* Enter at least one QRL address and the amount of tokens to create and send to this address

The "Initial Token Holders" field allows you to select the addresses that will receive the initial tokens. You can add as many addresses as you see fit. Below is an example showing the QRL fee for processing the transaction and the OTS key index we intend to use. Ensure this is an unused OTS Key.

![QRL token Create](/assets/wallet/web/createToken.png)

Once you have filled in all of the necessary details, click the create token button at the bottom of the form. This will broadcast the creation of your token across the QRL network and send the newly minted tokens to the addresses specified.

You will get a confirmation page that shows the details of the transaction. Verify the information is correct and press "Confirm Token Creation"

![QRL Token Success](/assets/wallet/web/createToken-Confirm.png)

The confirmation screen will print the details of the transaction.


![QRL Token Success](/assets/wallet/web/createToken-Result.png)

### Checking Token Balance

You can check the balance of any tokens you have in your wallet by selecting the tokens tab in the top bar of the "Send and Receive" tab in the web wallet.

![QRL Token Success](/assets/wallet/web/tokenBal.png)

You can also see the recent transactions on the right of the balance screen.

You can receive tokens at your main QRL address, no need for anything special to receive.

### Sending Tokens




Using the web wallet we can send tokens to another QRL address. From the "Send and Receive" screen, select the drop down to the right of the "Amount" field.

![QRL Token Success](/assets/wallet/web/tokenSendDropdown.png)


Enter the details to send the tokens, and select "Confirm". Progress through the following screens and wait for the confirmation.


![QRL Token Success](/assets/wallet/web/tokenSend-sm.png)