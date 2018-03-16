---
title: TEST-Token Setup
categories: Token Swap
tags: Token Swap
---
The test token swap is happening on the ROPSTEN Ethereum test network. You will need to create a new wallet on the testnet and aquire some test-ETH

These instructions are meant for the participants of the #Test-Migration group from the <a href="https://discord.gg/E9PWvbG" target="_blank">Discord Chat</a>. 


> THIS TEST IS JUST A TEST. NO REAL QUANTA WILL BE BURNED OR TRANSFERRED DURING THIS TEST. THIS IS FOR TESTING PURPOSES ONLY.
{: .warning}

#### Test Requirements

Before you get started, there are a few things you should know about:

* You will need some TEST-Ethereum to use as gas. 
	* Enter your ROPSTEN address into a ROPSTEN faucet to get ETH to use for GAS
	* <a href="https://faucet.bitfwd.xyz" target="_blank">bitfwd faucet</a>
	* <a href="http://faucet.ropsten.be:3001/" target="_blank">ropsten faucet</a> 
* This is only a test. **DO NOT SEND REAL QRL HERE!**
* If you have any issues Please use the QRL Discord channel to discuss. The developers are available to answer any questions.


## Test-Token Wallet Setup

Here are the basic instructions to get you started with a test ETH wallet. 

#### Generate TEST Ethereum Burn Address.

Use "My Ether Wallet" to setup a test ether address. Once this address is setup the team will send you test-QRL to play with in the Test-Token swap process. Grab some test-Ethereum to use for gas to process the transactions.

Go to <a href="https://myetherwallet.com" target="_blank" >https://myetherwallet.com </a> and create a new wallet using the **ROPSTEN** test network.

![QRL Test-Token ETH Wallet](/assets/tokenswap/test/MEW-Testnet.png)

Make sure you select the correct network in the top right.

 On the next screen you will have the oppertunity to save a wallet
You will be asked to save a json wallet file. You can skip if you want, and simply save the private key that is printed on the following screen.


![QRL Test-Token ETH](/assets/tokenswap/test/MEW-SaveKey.png)

The following screen will ask you to save the private key. This is not required if you have saved your wallet file.


With the new wallet file, unlock the test wallet. Select the *Keystore / JSON file* option and upload your wallet file. MEW will ask you to enter your password used to setup the wallet.

![QRL Test-Token ETH unlock](/assets/tokenswap/test/MEW-UseKey.png)

With the wallet unlocked, you can see your new TestNet address in the top rightand side. 

![QRL Test-Token ETH unlock](/assets/tokenswap/test/MEW-unlocked.png)


#### PASTE YOUR ADDRESS INTO DISCORD:

```bash
My ROPSTEN ADDRESS: {0x3cad8671b32bD14aCE060E12859Ce91D190dBa0B}
```

Please use your own address, not the one I generated...

## Getting Test QRL

Tag @developer in the chat once you have posted the address and they will send you some test quanta to your new address

When the team is ready to start the test migration, they will make an announcment in discord notifying the #Migration-Testers where to generate a new burn address and get started.


## Checking Token balance

 Using an unlocked MyEtherWallet add the QRL token contract details into the "Add Custom Token" Field.

#### Details to enter in the test ETH wallet 
 * **ERC20 contract:**  0xcee7820f25bd1852b65d6d7fd8b28f3fe6794dbc
 * **Token Name:** QRL
 * **Token Decimals:** 8

![QRL Test-Token Token Balance Check](/assets/tokenswap/test/MEW-AddToken.png)


After you enter the details and click the "save" button, you will see the amount of Test QRL ERC20 you have in your wallet from the QRL team.

![QRL Test-Token Token Balance Check](/assets/tokenswap/test/MEW-QRL.png)

