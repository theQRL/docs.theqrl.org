---
title: TEST-Token Migration
categories: Token Swap
tags: Token Swap
---


The QRL Team put out a call to participate in a test token swap happening on the ROPSTEN Ethereum network.

These instructions are meant for the participants of the #Test-Migration group from the [Discord Chat](). 

If you were not specifically told to follow these instructions, **DON'T**

**THIS TEST IS JUST A TEST. NO REAL QUANTA WILL BE BURNED OR TRANSFERRED DURING THIS TEST. THIS IS FOR TESTING PURPOSES ONLY.**




## Test-Token Swap Instructions

Here are the three easy steps to participate in the test-token migration:

## Step 1

Generate \*TEST\* Ethereum Burn Address

We will use My Ether Wallet to setup a test ether address. Once this address is setup the team will send you test-QRL to Play with in the Test-Token swap process. You will need to grab some test-Ethereum to use for gas to process the transactions.

Go to <a href="https://myetherwallet.com" target="_blank" >https://myetherwallet.com </a> and create a new wallet using the **ROPSTEN** test network.

![QRL Test-Token ETH Wallet](/assets/tokenswap/test/MEW-Testnet.png)

Make sure you select the correct network in the top right.

You will be asked to save a `.json` file, you can skip if you want and simply save the private key that is printed on the following screen.


![QRL Test-Token ETH](/assets/tokenswap/test/MEW-KEY.png)


With the new private key, unlock the test wallet. Select the private key option and enter your key in the box.


![QRL Test-Token ETH unlock](/assets/tokenswap/test/MEW-unlock.png)

With the wallet unlocked you can see your new testnet address. 

![QRL Test-Token ETH unlock](/assets/tokenswap/test/MEW-unlock.png)


#### PASTE THIS ADDRESS INTO DISCORD:

```bash
My ROPSTEN ADDRESS: {0x3cad8671b32bD14aCE060E12859Ce91D190dBa0B}
```

Please use your own address, not the one I generated...

#### Test QRL

When the team is ready to start the test they will send you TEST-QRL to this address. This will pretend to be your hard earned QRL-ERC-20 tokens that you have stashed for real. 

The amount won't really matter and the team will divvy up the tokens as fit.


## Step 2 

We will make the new ("Real" Test-QRL) address

Make Your QRL Wallet and QRL Address (from our web wallet, or your node via CLI)

Browse to [https://wallet.theqrl.org](https://wallet.theqrl.org) and create a new QRL wallet. You will be required to enter a password.

Record all of the details for your new QRL wallet somewhere you wont lose them.



## Step 3

Go to The QRL Token Migration Page and put in your fresh, backed up QRL address into the QRL address field

You can enter an email address here as well *\*optional*

This will generate a personal burn address for you to use. Anytime you send QRL ERC20 to the reusable Ethereum Burn Address, QRL Coins are deposited 1:1 into the QRL Wallet from Step 2.

![QRL Test-Token ETH Wallet](/assets/tokenswap/test/tokenSwap.png)


## Test Requirements

There are a few things you should know about:

* You will need some test-eth to use as gas, enter your address into the [ROPSTEN faucet](https://faucet.bitfwd.xyz)
* This is only a test. **DO NOT SEND REAL QRL HERE!**
*If you have any issues Please use the discord chat to communicate. 


 ## Checking Test-Token balance

 Using an unlocked MyEtherWallet we will add QRL token to the wallet and check the address.

 Get the QRL details and enter them in the "Add Custom Token" FIeld.

 #### Details to enter in the test eth wallet 
 * **ERC-20 contract:**  0xcee7820f25bd1852b65d6d7fd8b28f3fe6794dbc
 * **Token Name:** QRL
 * **Token Decimals:** 8

![QRL Test-Token Token Balance Check](/assets/tokenswap/test/MEW-AddToken.png)


After you enter the details and click the "save" button. You will see the ammount of ERC-20 Test-QRL you have in your wallet.

![QRL Test-Token Token Balance Check](/assets/tokenswap/test/MEW-QRL.png)

