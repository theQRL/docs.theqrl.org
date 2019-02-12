---
title: Slaves.json
categories: wallet
description: The QRL Wallet documentation
tags: wallet
---


The QRL wallet is an XMSS Merkle tree constructed using the private key to generate leaves of this tree. Each "leaf" can also generate a tree of OTS Slave keys that can be used to sign transactions. This allows further expansion of a QRL wallet extending the number of transactions you can process before needing to regenerate a new wallet.

> To create a slaves.json file you will need a QRL wallet.json file and a working installation of QRL. See the guide for creating a [QRL Wallet CLI](/wallet/wallet-cli)
{: .info}

Currently the only way to generate a slaves.json file is by using the command line utility `qrl`. This can be installed by following the [QRL Node Guide](/node/QRLnode).  You will need to have shell access and be logged into the computer running qrl.



## Create a Slaves.json

To generate a slaves.json file you will need to be connected to an active and synced node. This can be a local node, as well any of the peers shown in your nodes peer list. You also need a wallet to use for the slaves file.

Assuming you have a synced node running on the local computer and a wallet.json file in the local directory you can simply enter:

```bash
qrl slave_tx_generate
```

You will be asked a few questions. You can generate a maximum 100 slaves with a single master OTS key, which is used to sign the slaves.json file onto the network validating the keys.  

```bash
Src []: 0 # Which address to use in the wallet file. 0 is the first address.
Master []: # Master Address
Number of slaves [0]: # thisNumber*OTS_key_height For tree height 10 (this*1024)
Access type [0]: # enter 0 to allow transactions 1 for secure mining only
Fee [0.0]: # how much fee to pay to broadcast this across network.
```

#### Number of Slaves 

|  Tree Height | Available Keys | With Slaves.json |
|: ---------|:----------|:-----|
| 8  | 256 | 6,553,600 |
| 10 |  1,024 | 104,857,600 | 
| 12 |  4,096 | 1,677,721,600 |
| 14 |  16,384 | 26,843,545,600 |
| 16 |  65,536 | 429,496,729,600 |
| 18 |  262,144 | 6.871947674×10¹² |
