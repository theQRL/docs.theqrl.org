---
title: Ledger Nano S Usage
categories: wallet
description: The QRL Ledger Nano-S Wallet documentation
tags: [wallet, ledger, nano]
---

##### This guide will walk you through

* Installing the QRL App on your Ledger Nano S
* Initialising the QRL App after installation on your Ledger Nano S
* Accessing your QRL Wallet with the Ledger Nano S
* Receiving a transaction over the network - *(Receive QRL)*
* Sending a transaction over the network - *(Send QRL)*
* Checking transaction details on the QRL Explorer, including your current wallet balance
* Manually setting the OTS Key Index on your Ledger Nano S device.

Being Quantum Resistant comes with some inherent challenges. Before using the QRL Ledger Nano S app for your wallet, there are a few quirks worth noting about QRL. 
 
### OTS Key Index

When you create a new wallet you create an XMSS tree, which is comprised of many one time use signatures. Every signature is referenced as your OTS index or [One Time Signature](/developers/ots) key index. 

**The OTS key index is limited.** 

You can only use each key **ONCE**. When you've used your _last_ key, you will no longer be able to sign transactions. This cannot be stressed enough! 

> **NOTE** With your last key you must empty your wallet. If you use all of your OTS Key Indexes with funds in the wallet, these funds will be **lost FOREVER**
{: .info}

The [QRL Web Wallet](https://wallet.theqrl.org/) will provide ample warnings you are running low on OTS Keys (<=50) to ensure you have plenty of time to move your coins to a new address.

### Ledger Nano S Specific Quirks
* Track all OTS Keys used in a spreadsheet
> **NOTE** Your Ledger Nano S will keep track of OTS keys for you, however if you ever lose the device and need to reinstall on a new device, you will have to reset your XMSS index inside the [QRL Web Wallet](https://wallet.theqrl.org/). You can rely on the state of the node you're communicating with; however this will not keep track of failed transactions where a signature was broadcast to the network and subsequently failed. It is best to track all OTS key usage elsewhere to ensure you never reuse the same OTS key.
* Store your Ledger Device seed (mnemonic) somewhere safe, in an encrypted manner if possible
* Currently the QRL Ledger Nano S app does not support the creation and sending of QR Tokens on the QRL Network. Only native Quanta (QRL) transfers and Message Transaction types and derivatives of are currently supported. A future release of the QRL Ledger Nano S app will support token creation, sending and slave transaction functionality.

## Installing the QRL Ledger Nano S Application

> **NOTE** As the QRL Ledger Nano S application is currently in the process of being reviewed, you will not be able to find it on the Ledger Live Manager App Catalog as described below. If you would like to experiment with the QRL Ledger Nano S app, you can find our source code available on Github in the [ledger-qrl](https://github.com/theQRL/ledger-qrl) and [ledger-qrl-app](https://github.com/theQRL/ledger-qrl-app) repositories.
{: .info}

Using the [Ledger Live](https://www.ledger.com/pages/ledger-live) application, follow these instructions:

1. Open the **Manager** in Ledger Live
2. Connect and unlock your Ledger Nano S
3. Allow the Manager on your Ledger Nano S device by pressing the right button if asked
4. Search the App catalog for **QRL**, and click the **Install** button next to the QRL app.
	- An installation window will appear, and your device will display **Processing...**
	- The QRL App installation has completed on your Ledger Nano S

## Initialising the QRL App

Before you can use the QRL Ledger Nano S App, it must first be initialised. The initialisation process will generate an XMSS tree on your Ledger Nano S device, which is a unique aspect of the QRL Network's signature scheme. This process only has to be completed once on your Ledger Nano S device. Please allow up to 45 minutes for this process to complete.

To initialise your Ledger Nano S device for use with the QRL App, follow these instructions:

1. Make sure your Ledger Nano S device is powered on and unlocked.
2. Open the **QRL** app on your Ledger Nano S
3. Your Ledger Nano S device will show **QRL not ready**. Scroll down and press both buttons on the **Init Device** menu option.
4. Your Ledger Nano S device will show **keygen: 001/256**. This will slowly progress until all 256 keys have been generated.
5. When this process has completed, your Ledger Nano S device will show **QRL READY rem:256** - indicating your device is ready, and you have 256 OTS Keys remaining.
6. Your Ledger Nano S device has been initialised for the QRL app.

## Accessing your QRL Wallet with the Ledger Nano S

> **NOTE** If you are a Firefox user, ensure you have enabled **u2f** before proceeding. [Enabling U2F support in Mozilla Firefox](https://support.yubico.com/support/solutions/articles/15000017511-enabling-u2f-support-in-mozilla-firefox)
{: .info}

1. Make sure your Ledger Nano S device is powered on, unlocked and the QRL App is open.
2. Visit [https://wallet.theqrl.org/](https://wallet.theqrl.org/) in your browser.
3. Click **Open Wallet** on the left hand menu.
4. On the right hand side, select **Ledger Nano S** in the drop down menu.
5. Click the **Open Ledger Nano S** button.

![Open QRL Ledger Nano S Wallet](/assets/wallet/web/ledger-nano-s/open.png)

![Opened QRL Ledger Nano S Wallet](/assets/wallet/web/ledger-nano-s/opened.png)

## Receive QRL

You should **always** verify the address shown in the [QRL Web Wallet](https://wallet.theqrl.org/) matches the address shown on your Ledger Nano S device. To confirm your address, click the **Click to Verify** button on the receive tab of the wallet. Your QRL address will appear on your computer, and on your Ledger Nano S device.

Once you've confirmed your address on both devices, you can send your QRL address to whomever you are receiving coins from.

> **NOTE** In the event you find the addresses do not match, you should immediately reach out to the QRL Team to report the issue. This could occur in the event a malicious actor has taken control of the QRL Web Wallet.
{: .info}

![QRL Receive](/assets/wallet/web/ledger-nano-s/receive.png)

## Send QRL

With the wallet unlocked, you can now send QRL.

![QRL Send](/assets/wallet/web/ledger-nano-s/send.png)

To send QRL there are four fields you need to fill in:

| Field |  Description  |
|:-----|:--| 
| **Recipient Address** | A valid QRL address |
| **Amount** | How much QRL to send |
| **Fee** | How much you are paying to make this transaction |
| **OTS Key Index** | Enter an unused OTS Key |

Make sure everything is correct and click the confirm button. You will another confirmation of your transaction details.

![QRL Confirm Transaction](/assets/wallet/web/ledger-nano-s/confirm-txn.png)

If you are happy with the transaction details, click the **Sign with Ledger** Button.

A window will appear prompting you to confirm the transaction details on your Ledger Nano S device.

![QRL Ledger Nano Confirm Transaction](/assets/wallet/web/ledger-nano-s/ledger-confirm-txn.png)

On your Ledger Nano S device, you can press **View transaction** to verify the From and To addresses, Amount(s) and Fee.

![QRL Ledger Nano View Transaction](/assets/wallet/web/ledger-nano-s/ledger-nano-view-txn.png)

When you've confirmed these details, proceed to press **Sign transaction**.

![QRL Ledger Nano Sign Transaction](/assets/wallet/web/ledger-nano-s/ledger-nano-sign-txn.png)

Your Ledger Nano S device will now display **SIGNING**

![QRL Ledger Nano Signing](/assets/wallet/web/ledger-nano-s/ledger-nano-signing.png)

Signing will take a few seconds to complete. When complete, you will see the following back on the QRL Wallet.

![QRL Ledger Send Transaction](/assets/wallet/web/ledger-nano-s/ledger-send-txn.png)

To complete the transaction into the QRL Network, click the **Send transaction** button.

You will see a progress tracker while your transaction is mined into a block.

![QRL Ledger Awaiting Block](/assets/wallet/web/ledger-nano-s/ledger-await-block.png)

When the transaction is confirmed in the network, your Transaction History will automatically update to reflect your transaction.

![QRL Ledger Transaction Complete](/assets/wallet/web/ledger-nano-s/ledger-txn-complete.png)


## Check Wallet Balance

With the wallet opened you can see the balance in the main screen of the web wallet. You can also check your wallet balance without opening the wallet by browsing to the [QRL Explorer](https://explorer.theqrl.org) and entering your address into the search field.

![QRL Explorer](/assets/explorer/explorerFull.png)

You will see all of the transactions the address has as well as the balance of quanta and any tokens held by the wallet.

## Manually Set the XMSS Index on your Ledger Nano S device

In the event you lose your Ledger Nano S device, or simply need to initialise or maintain the state of a second Ledger Nano S device, you can manually set the XMSS Index state on your Ledger Nano S device.

> **NOTE** If you are a Firefox user, ensure you have enabled **u2f** before proceeding. [Enabling U2F support in Mozilla Firefox](https://support.yubico.com/support/solutions/articles/15000017511-enabling-u2f-support-in-mozilla-firefox)
{: .info}

1. Make sure your Ledger Nano S device is powered on, unlocked and the QRL App is open.
2. Visit [https://wallet.theqrl.org/](https://wallet.theqrl.org/) in your browser.
3. Click **Open Wallet** on the left hand menu.
4. On the right hand side, select **Ledger Nano S** in the drop down menu.
5. Click the **Open Ledger Nano S** button.
6. Click **Tools** on the left hand menu.
7. Click **Set XMSS Index**.
8. Carefully read the on screen instructions and completely the form accordingly.
9. Click **Save New XMSS Index**. A confirmation window will appear, and your Ledger Nano S will ask you for confirmation.
10. Your Ledger Nano S device will show **WARNING Set XMSS Index New Value XX** where _XX_ is the XMSS Index you entered.
11. Press the right button on your Ledger Nano S to confirm, or left button to reject the update.

## QRL Ledger Nano S Video Demonstration

> Click the image below to watch the video demonstration.
{: .info}

[![The QRL - Ledger Nano Release Candidate Demo
](http://img.youtube.com/vi/NL_u9biLy1g/0.jpg)](http://www.youtube.com/watch?v=NL_u9biLy1g)
