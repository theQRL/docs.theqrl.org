---
title: QRL Token Migration
categories: Token Swap
description: The QRL Token Migration documentation
tags: Token Swap
---
![QRL Token Migration Flowchart](/assets/tokenswap/swap/migration_flowchart_improved.png)

Token Migration marks the first step in launching our main QRL network. The token migration process will run through Mainnet allowing everyone the chance to migrate their tokens. 

Those with unclaimed ERC20 tokens from the pre-sale will be contacted separately with specific instructions for claiming their Mainnet QRL. You will be contacted at the email you used during pre-sale. 

Check your spam folder to verify info@theqrl.org is not blacklisted.

In this guide, we will show you how to create a personally unique burn address which you will use to send all of your ERC20 tokens to. 

> DO NOT use addresses you find elsewhere on the internet
{: .danger}

There will be **NO** single official universal burn address.  Anyone posting a burn address is trying to steal your coins - if you see this publicly, point it out, and immediately contact a team member so we can contact the relevant authorities.

If you have any questions, we are available for support on Discord in the TokenMigration channel, as well as our dedicated support email address: support@theqrl.org

The token migration takes place in 3 steps.

|     |     |
|:---:|:-----|
|Step 1| Create and save a new QRL address|
|Step 2| Using the new QRL address, create an ERC20 burn address|
|Step 3| Send QRL ERC20 tokens to the newly created burn address|

QRL ERC20 tokens sent to the unique burn address will be exchanged 1:1 for Quanta and deposited at Genesis (which is block 0 of mainnet).

We have a video of this entire process also found in the [video guide](/tokenmigration/video)

## Step 1 — Create & Save a QRL Wallet

![QRLWeb Wallet](/assets/wallet/web/qrlWallet2.png)

Create a new QRL Wallet using the web application found at <a href="https://wallet.theqrl.org" target="_blank">https://wallet.theqrl.org</a>

Enter a passphrase and click create wallet. This will generate a new QRL wallet for you. 

At the wallet details screen, save one of the recovery options using your favourite method. 

Options are Mnemonic Phrase, Hexseed, Wallet file, or Secure wallet file. For demonstration purposes we are saving a secure wallet file.

Now, open your wallet using the method you chose by clicking on “Open Wallet”.

This rather benign step is important to ensure you can open your wallet later and access funds within it.

Once you have your wallet opened, copy your QRL address, you will need this in the next step.

Next we will cover part 2 of the token migration: Generating the burn address

> &#10071; Make certain your private key is valid and will open the wallet. 
{: .danger}

It is your responsibility to verify your wallet backup method works *BEFORE* transferring any QRL to the address.

There are a few other ways to create a wallet as well:
* **Full QRL Node** This is an advanced setup. Follow our [Guide](/mining/full-node)
* **QRL Wallet App** Download the QRL wallet software from [GitHub](https://github.com/theQRL/qrl-wallet). See the guide here: [QRL Wallet App](/developers/QRLwallet-app)


## Step 2 — Generating an ERC20 Burn Address



Go to [https://migration.theqrl.org/](https://migration.theqrl.org/). From there you will want to enter in our QRL address you copied from step 1.

![QRL Token Swap Page](/assets/tokenswap/swap/migrationPage.png)

> Optionally you may enter an email address to receive periodic notifications confirming your cumulative transactions.
{: .info}


After hitting submit you will get an Ethereum ERC20 burn address. Save it! This is the address you will send your QRL tokens to.

![ETH address](/assets/tokenswap/swap/migrationPageAddress.png)

We want to reiterate both the burn address and the qrl address are **unique** to you. Do not share this information, or use someone else's burn address posted online. 

You can come back to this page at anytime to create another burn address using a new QRL address from step 1, or to check your pending migration balance.

If you lose your burn address, simply follow the same steps previously mentioned using the address from step 1 to create another burn address. 

The migration app will take the newly created QRL address you enter to generate a new ERC20 address. This ERC20 address is cryptographically connected to the QRL address you just created. 

We call this the **burn** address. Any ERC20 QRL sent to the ETH address the migration app spits out will be automatically converted into QRL upon genesis block and the beginning of the QRL network.

## Step 3 — Burning QRL ERC20 Tokens

![Sending to burn address](/assets/tokenswap/swap/tokenSwap.png)

You will need your ERC20 Burn address from Step 2.

Send a few tokens to the newly created burn address from step 2. You can do this from anywhere such as an exchange, or a wallet like myetherwallet. The process works just like any other Ethereum token transaction. 

Anytime you send QRL ERC20 tokens from anywhere to the unique, reusable ERC20 burn address, it is converted 1 for 1 and held until Genesis

You will want to test the burn address with a small amount of QRL to ensure you have entered the correct information.

You can verify your test transaction and check on the pending migration balance by clicking on the check burn address and entering in your QRL ERC20 burn address

![Check Burn Address](/assets/tokenswap/swap/BurnAddressCheck.png)

## Support

If you need help with this process, feel free to hop into our Discord channel #TokenMigration, ask on our [subreddit QRL](https://www.reddit.com/r/QRL/), or email support@theqrl.org - we have support waiting to help.

That’s it! We hope you had a smooth token migration. 

Thank you for supporting the QRL
