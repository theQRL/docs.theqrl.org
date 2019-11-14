---
title: QRL Document Notarization
categories: QRL TOols
description: The QRL Document Notarization Technical Documentation
tags: Notarization, Developers, Wallet, Tools
---

Using the  Message Transactions function on the QRL network, you can now notarise a document, embedding the hash forever in the chain. This function is available in the wallet and takes any document of file you load, hashes the file using sha256, signs the message containing your hash and sends it into the chain. 

Now anytime you want to verify the integrity of the document, you simply pass it through the same hashing algorithm and verify the hash matches the one you have signed using your quantum resistant secure private keys.

> This function will not load the file to the blockchain, and is not a file storage service. Simply the sha256 hash is loaded, allowing future verification of the document to occur, proving it has not been modified in any way.
{: .info}

## Notarizing a Document

The process is simple to get started notarizing documents. Using your QRL wallet, you will sign a message and broadcast the transaction onto the network.

### Create a Wallet

Browse over to [wallet.theqrl.org](https://wallet.theqrl.org) and create a new wallet. Once you have a QRL wallet established and funded, proceed to the tools section of the wallet.

![WalletToolImage](/assets/tools/notarise/toolsTab.png)

### Notarise a Document

To notarise a document you simply need to load the document into the web browser. This will not load the file into any server, instead it generates a hash of the data the file contains. This hash is then shown in the browser and inserted into the signed transaction from your wallet.

#### Load File

With the notarise tool opened you will be presented with a few fields to fill out. First, select the file you wish to notarise by selecting "Choose File" and browsing to the local file.

You may wish to enter some additional text for the message transaction, notarisation takes 32 bytes to store the SHA256 hash, with the remaining 45 bytes available for free form text.

You may tweak the rest of the settings, however typically the default is just fine. Select **Notarise Document** at the bottom of the screen to proceed.

![NotariseScreen](/assets/tools/notarise/notarize.png)

#### Confirm and Send

Next, you are presented with a confirmation screen with all of the details of the transaction you just entered.

![NotariseScreen](/assets/tools/notarise/notarizeVerify_small.png)

If everything looks good here, select **Confirm Document Notarisation** which will sign the transaction, and insert the document's sha256 into the blockchain.


#### Confirmation 

Once the transaction is broadcast to the network and mined into a block, you will receive confirmation that the hash is now signed by your wallet, and will forever contain an unchanged hash of the document exactly as it was when you uploaded.

You will see a screen with the results of the transaction, and a link to check the hash on the [QRL Explorer](https://explorer.theqrl.org). Share this link to anyone that wishes to check the file has been uploaded and verify it is exactly the same.

![NotariseScreen](/assets/tools/notarise/notarizeComplete_small.png)



### Verify a File

Once the file has been notarised, you may wish to validate the file has not been tampered with. To do this, simply browse to the transaction hash from the original transaction, upload the document and the explorer will tell you that the document is valid by comparing the hashes of the 2 files.

You can find the tx hash in the confirmation screen during the initial notarisation, or in the wallet that notarised the document under the transaction list.

Browse to the explorer and search the TX hash in the search bar. This will bring up a screen similar to below.

![Explorer Verification Screen](/assets/tools/notarise/verifyNotariseExplorer1_small.png)


#### Upload to Verify

With the TX hash pulled up, browse to the file you wish to verify and click the **"Verify Norarisation"** button in the explorer. THis will rehash the document, and verify that they match. If they are the same you will see something similar to below.

 
![Explorer Verification Screen](/assets/tools/notarise/verifyNotariseExplorer3_small.png) 

#### Example File

For the example here, you can browse to my wallet, and verify the file loaded has not been tampered with, or modified. 

Grab and upload [this file](/assets/tools/notarise/barrett.jpeg) to the [transaction used for this example](https://explorer.theqrl.org/tx/481e2cf1e35daf2c6f97ac5d7740a3c211358e62c4f67a28ed7c25e075af7e61) to verify the image is still the same.

