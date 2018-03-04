---
title: Cold Wallet Setup
categories: wallet
tags: wallet
---

In order to fully secure our QRL we should follow best practice and generate our private keys off line. This will prevent anyone form viewing our private keys while we record and safely save the wallet.

 It is a bit more work to set this all up, but in the long run it is worth it. Once tails is setup you can generate cold wallets for all of your other coins that you want to hold in secure cold wallets.


This guide will use the [Tails](https://tails.boum.org/)
 operating system to create a safe environment for the generation of a new secure wallet. You will install Tails on a [Live USB drive](https://en.wikipedia.org/wiki/Live_USB) and boot from this usb to create your new QRL wallet. 

We will also use the "anonymity" features that come packaged to grab the wallet files and check their validity. Using "anonymous" tools makes it much more difficult for someone to find what you are doing or play Man-In-The-Middle and collect the private keys.

**Safety is a perception afforded to those not aware.**

* * *

## Tails


Tails is a complete operating system designed to be used from a USB stick or a DVD independently of the computer's original operating system. It is Free Software and based on Debian GNU/Linux.

![Tails Logo](/assets/wallet/tails-logo-flat-crop.png)

#### Requirements For Guide

* Pc to download tails with firefox or chrome installed
* USB thumb drive with over 8Gb of storage
* About an Hour and a half to set this up

![Tails Logo](/assets/wallet/tailsCombined-med.png)


#### Helpful Links

* [Tails Documentation](https://tails.boum.org/doc/index.en.html)
* [The TorProject.org](https://www.torproject.org/)
* [QRL GitHub for Wallet Files](https://github.com/theQRL)

#### Get Tails

You will need a USB drive to burn the OS to. Everything will be wiped from the drive so make sure you backup. I have used a 16G USB drive for Tails, anything above 8G will do. A bigger drive gives you more space to save things to on the persistent volume that we will create.

Head over to the [Tails Homepage](https://tails.boum.org/install/index.en.html) to get started. They have made he install as painless as possible. Follow the guide there and install from the OS you are using. 

**To Get started directly use a link from below based on your operating system**
*   [Install from windows](https://tails.boum.org/install/win/usb-overview/index.en.html)
*   [Install from macOS](https://tails.boum.org/install/mac/index.en.html)
*   [Install from Linux (Debian based)](https://tails.boum.org/install/debian/index.en.html)
* [Other Linux (Red Hat, Fedora, ETC.)](https://tails.boum.org/install/linux/index.en.html)

You want to setup an encrypted persistent volume on the USB to hold the wallet file generators and any other documents you may want to keep safe. I will still advise you to write the hexseed and mnemonic on a nice sheet of paper and place it somewhere safe from fire, water or other acts of nature. You can store a copy on the encrypted drive, but it is not as safe.

Once you have booted into Tails you can create a persistent volume. A persistent volume is an encrypted partition protected by a passphrase on the USB. Once the persistent volume is created, you can choose to activate it or not each time you start Tails. Once you have setup the USB with their guide you will boot into the secure OS and setup the persistent drive.

### Boot Into Tails

You need to have access to the computers BIOS system. This can be accomplished by hitting one of the `f1 - f12` keys at initial boot. Search for your computer model, laptop or motherboard for instructions on how to access your BIOS. No one is the same.

Once you have the bios pulled up look for the boot options and allow the PC to boot from a USB drive. You may need to toggle the security features. You can change back any settings that may have broken other OS's. Windows can be picky about letting another OS boot.

Boot into the USB and you should be greeted with a tails screen with 2 selections. Choose the default settings and boot.  
At the next screen you will see a bunch of options. Leave everything as a default for now and continue. **Welcome to Tails!**

#### Persistent Data

Now start the persistent volume assistant at **Applications ▸ Tails ▸ Configure persistent volume**. You need to select at minimum:

*   Personal Data

I recommend selecting a few others as well

*   GnuPG
*   GNOME Keyring
*   Network Connections
*   Bitcoin Client
*   Printers

For our use I don't recommend loading email or chat clients or installing any other software than what you need. The great people over at tails are doing the best to keep your digital life safe, no need to make it harder.

Follow along and add the remaining drive space to the encrypted volume. You must remember the password you setup here, and make it tough. This can not be recovered. I squish the words from my favorite song together and add some random punctuation. You will have to restart for the persistent changes to take effect.

### Get the Wallet Files

There are a few ways you can do this. If your ultra paranoid you can leave the persistent drive locked when you boot, connect to github through the TOR network and download to an external USB. Then reboot and unlock the persistent drive and copy the files over.

I am not that paranoid and I simply grab the offline generators from github or the official source and verify the hash matches what I downloaded. Then I simply copy this over to my unlocked persistent drive and generate the wallet offline.

I never boot with a decrypted drive and connect to the internet. One or the other. If you leave it locked there is little to no chance for someone to install nasty things there.

Links to QRL wallet files:

*   [Github Wallet File](https://github.com/theQRL/qrl-wallet)
*   [My-Ether-Wallet](https://github.com/kvhnuke/etherwallet/releases/tag/v3.11.3.2)

Once the team has the official release out I will finish this how to.

### Create the Wallet offline

Making sure the computer is not connected to the internet, open the file with your offline wallet generator in it. You will need to place them in the tor browser allowed folder in order for the browser to run the files.

Generate an address like you would normally and write the details down in a notebook. This will never be seen by another computer until you are ready to move your coins. Make sure you get everything right here, CasE mattErs!

We can look up the public address to check the balance and see if transfers are going into the wallet at [QRL Block Explorer](https://explorer.theqrl.org/). Until mainnet releases and the token burn happens you can use the ETH block explorer to check your balance.


