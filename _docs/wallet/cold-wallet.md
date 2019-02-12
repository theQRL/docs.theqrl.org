---
title: Cold Wallet Setup
categories: wallet
description: The QRL Wallet documentation
tags: wallet
---

**IMPORTANT**

*This document is not complete yet!*

We are waiting for work to complete on web wallet and final code base to be released to finish this document. It \*should work as is. 

This guide will create a wallet routed through the **TOR** network which should add a level of security when generating on the web wallet. It will also remove the worry of having a virus or key-logger installed on your local computer. This guide will give you a brand new OS to run the wallet in.

In order to fully secure your QRL, follow best practices and generate your private keys off-line. This will prevent anyone from viewing your private keys while you record and safely save the wallet.

In order to fully secure your QRL, follow best practices and generate your private keys off-line. This will prevent anyone from viewing your private keys while you record and safely save the wallet.

It is a bit more work to set this all up, but in the long run it is worth it. Once "Tails" is set up, you can generate cold wallets for all of your other coins that you want to hold in secure cold wallets.

## Tails

This guide will use the **Tails** operating system to create a safe environment to generate a new secure wallet. You will install Tails on a [Live USB drive](https://en.wikipedia.org/wiki/Live_USB) and boot from this USB to create your new QRL wallet. 

You will also use the "anonymity" features that come packaged to grab the wallet files and check their validity. Using "anonymous" tools makes it much more difficult for someone to find what you are doing or play Man-In-The-Middle and collect the private keys.

<a href="https://tails.boum.org/about/index.en.html"> 
![Tails Logo](/assets/wallet/cold/tailsLogo-strech.png)
</a>

Tails is a live operating system that you can start on almost any computer from a USB stick or a DVD. It is free software based on Debian GNU/Linux. Tails aims at preserving your privacy and anonymity, and helps you to use the internet anonymously and circumvent censorship. 

All connections to the internet use the [Tor network](https://www.torproject.org/).

#### Requirements for this guide

Use the Tails website.

![Tails Logo](/assets/wallet/cold/tailsCombined.png)

Once you have the basic requirements together, follow the instructions on the Tails website. If you need help you can refer to the Tails Documentation on their main site.

Once you have the basic requirements together, follow the instructions on the Tails website. If you need help you can refer to the [Tails Documentation](https://tails.boum.org/doc/index.en.html) on the main site.

#### Basic Install Overview

1. Download and install the Tails installer onto a USB drive
2. Boot into this install USB and install Tails onto USB drive 2
3. Reboot into USB 2 with new Tails OS
4. Generate QRL wallet
5. Save your Public and Private keys offline and destroy the wallet
6. Feel good! Go plant a tree or volunteer, knowing that your Quanta is safe.

### Get Tails

You will need two USB drives - one to burn the installer to, and another for the OS to run from. Everything will be wiped from the USB drives, so make sure you backup. A 16G USB drive works for Tails, but anything above 8G will do. A bigger drive gives you more space for the persistent volume that we will create.


Go to the [Tails Homepage](https://tails.boum.org/install/index.en.html) to get started. They have made he install as painless as possible. Follow the guide there and install from the OS you are using.


#### To Get started directly use a link from below based on your operating system

*   [Install from Windows](https://tails.boum.org/install/win/usb-overview/index.en.html)
*   [Install from MacOS](https://tails.boum.org/install/mac/index.en.html)
*   [Install from Linux (Debian based)](https://tails.boum.org/install/debian/index.en.html)
* [Other Linux (Red Hat, Fedora, ETC.)](https://tails.boum.org/install/linux/index.en.html)

Set up an encrypted persistent volume on the USB to hold the wallet file generators and any other documents you want to keep safe. Best practice dictates that you write the hexseed and mnemonic on a nice sheet of paper and place it somewhere safe from fire, water, or other acts of nature. You can store a copy on the encrypted drive, but it is not as safe.

Once you have booted into Tails you can create a persistent volume. A persistent volume is an encrypted partition protected by a passphrase on the USB. Once the persistent volume is created, you can choose to activate it or not each time you start Tails. Once you have setup the USB with their guide you will boot into the secure OS and setup the persistent drive.

### Boot Into Tails

You need to have access to the computer's BIOS system. This can be accomplished by hitting one of the f1 - f12 keys at initial boot. Search for your computer model, laptop or motherboard for instructions on how to access your BIOS.


Once you have the bios pulled up, look for the boot options and allow the PC to boot from a USB drive. You may need to toggle the security features. You can change back any settings that may have broken other OSs. Windows can be picky about letting another OS boot.

Boot into the USB and you will be greeted with a Tails screen with two selections. Choose the default settings and boot. 

At the next screen you will see a list of options. Use the default settings for now and continue. **Welcome to Tails!**

### Persistent Data

Now start the persistent volume assistant at "Applications/Tails/Configure persistent volume" You need to select at minimum:

*   Personal Data

Other recommended selections are:
*   GnuPG
*   GNOME Keyring
*   Network Connections
*   Bitcoin Client
*   Printers

Don't load email or chat clients or install any other software than what you need. The great people at Tails are doing their best to keep your digital life safe, no need to make it harder.


Follow along and add the remaining drive space to the encrypted volume. You must remember the password you setup here, and make it tough. This cannot be recovered.
 
 You will have to restart for the persistent changes to take effect.

Once created you will select this persistent option and enter your password any time you want to access this data. Feel good about encrypting your files!

### Create a QRL Wallet

Connect to a network and allow Tails to run through connecting over Tor to the Onion network. Once this is done, you may browse the internet.

Open the browser and go to [https://wallet.theqrl.org](https://wallet.theqrl.org) to create a new wallet.

When prompted to save a wallet file, choose the "Save a Secure Copy" option and download it into the persistent drive you created earlier.


It's recommended to write down the mnemonic and hexseed on a piece of paper to later recover the wallet. Store this in a safe place.


{::comment}

Once there is a clean way to install from offline files continue this

### Get the Wallet Files

There are a few ways you can do this. If your ultra paranoid you can leave the persistent drive locked when you boot, connect to github through the TOR network and download to an external USB. Then reboot and unlock the persistent drive and copy the files over.

If not simply grab the offline generators from github or the official source and verify the hash matches what you downloaded. Then simply copy this over to the unlocked persistent drive and generate the wallet offline.

Never boot with a decrypted drive and connect to the internet. One or the other. If you leave it locked there is little to no chance for someone to install nasty things there.

Links to QRL wallet files:

*   [Github Wallet File](https://github.com/theQRL/qrl-wallet)
*   [My-Ether-Wallet](https://github.com/kvhnuke/etherwallet/releases/tag/v3.11.3.2)


### Create the Wallet offline

Making sure the computer is not connected to the internet, open the file with your offline wallet generator in it. You will need to place them in the tor browser allowed folder in order for the browser to run the files.

Generate an address like you would normally and write the details down in a notebook. This will never be seen by another computer until you are ready to move your coins. Make sure you get everything right here, CasE mattErs!

You can look up the public address to check the balance and see if transfers are going into the wallet at [QRL Block Explorer](https://explorer.theqrl.org/). 


{:/comment}