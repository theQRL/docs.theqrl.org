---
title: OTS Key Index
categories: developers
tags: developers
---



##### OTS Key Index

When you create a new wallet you create an XMSS tree, which is comprised of many signatures to make a signature scheme. Every signature is referenced as your OTS index or *One Time Signature* key index. 

*The OTS key index is limited.* Once this index is used you will no longer be able to sign transactions. This can not be stressed enough! 

> **IF you use all of your OTS Key Index's with funds in the wallet, these funds will be lost.**


* * * 


The OTS index or the **One Time Signature** index is used when you sign a transaction onto the network. 

You are required to specify which OTS index to use from the wallet file you have created. Depending on the tree height you selected when setting up the wallet you will start with anywhere from 16 to 262,144 OTS indexes. Yo may not re-use any OTS key index. The transaction will be rejected. 

### Important OTS Info

This can not be stressed enough, The OTS key index is limited. Once this index is used you will no longer be able to sign transactions.

What this means:
* If all OTS index's are used
	* Funds that are in a wallet with no available OTS index left will not be able to transfer out of the wallet, and will be **lost**. 
	* There is nothing to do if all of the OTS indexes are used, you cannot sign a transaction.