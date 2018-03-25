---
title: OTS Key Index
categories: developers
tags: developers
---


When you create a new wallet you create an XMSS tree, which is comprised of many public-private keypairs below a merkle tree to make a signature scheme. Every signature is referenced as your OTS index or *One Time Signature* key index. 

> One-time signatures (OTS) are called one-time, because the accom-
panying security reductions only guarantee security under single-message attacks.
{: .info}

The first post-quantum signature schemes considered for standardization are hash-based Merkle Signature Schemes [13,9]. These schemes form the most confidence-inspiring post-quantum solution for digital signatures as their security only relies on some mild assumptions about properties of cryptographic hash-functions.

The QRL blockchain will reject any duplicated OTS key use automaticlaly. This is done by design. *The OTS key index is limited.* Once this index is used you will no longer be able to sign transactions. This can not be stressed enough! 




> IF you use all of your OTS Key Index's with funds in the wallet, these funds will be lost.
{: .danger}

The OTS index or the **One Time Signature** index is used when you sign a transaction onto the network. 

You are required to specify which OTS index to use from the wallet file you have created. Depending on the tree height you selected when setting up the wallet you will start with anywhere from 16 to 262,144 OTS indexes. Yo may not re-use any OTS key index. The transaction will be rejected. 

### Important OTS Info

This can not be stressed enough, The OTS key index is limited. Once this index is used you will no longer be able to sign transactions.

What this means:
* If all OTS index's are used
	* Funds that are in a wallet with no available OTS index left will not be able to transfer out of the wallet, and will be **lost**. 
	* There is nothing to do if all of the OTS indexes are used, you cannot sign a transaction.



## Merkle tree signature schemes
Whilst one-time signatures provide satisfactory cryptographic security for signing and verifying transactions they have a major drawback that they may only be used once safely. If a ledger address is based upon some transformation of the public key of a single OTS keypair then this would lead to an extremely restrictive blockchain ledger where all funds from a sending address would need to move with every single transaction performed - or those funds would be at risk of theft. A solution is to extend the signature scheme to incorporate more than one valid OTS signature for each ledger address allowing as many signatures as OTS keypairs are pre-generated. A binary hash tree known as a merkle tree is a logical way to achieve this.

![Merkle Tree Signature Scheme](/assets/developers/merkleTreeSig.png)

The general idea behind a merkle tree is an inverted tree composed of parent nodes computed by hashing the concatenation of child sibling nodes upwards in layers to the root. The existence of any node or leaf can be cryptographically proven by computing the root. A merkle tree is formed from n base leaves and has height to merkle root, h (n = 2h) - starting from the leaf hashes (layer 0) and counting upwards with each layer of nodes. Each leaf node is created in our hypothetical ledger use-case by hashing a randomly pre-generated OTS public key. From the tree below it can be seen that the node above each pair of leaf hashes is itself formed by hashing a concatenation of the child hashes.



This continues upwards through layers of the tree until confluence into the root hash of the tree, known as
the merkle root.

From the example tree in the diagram, taking the merkle root as the public key, four pre-computed OTS keypairs can be used to generate four cryptographically secure valid one-time signatures. The merkle root of the binary hash tree can be transformed into a ledger address (possibly by iterative hashing with an appended checksum). 

![XMSS Construction](/assets/developers/XMSSconstruction.png)


A full signature, S, of a message, M, for a given OTS keypair includes: the signature, s, the ots key number, n, and the merkle authentication path. i.e. for OTS keypair 0 (thus n = 0): S = s, n, OT S public key 0, H1, H2, H5, H6, root Given the OTS public key and leaf hash can be deduced from s, and parent nodes can be computed from their children in fact this may be shortened to: S = s, n, H2, H6, root Where S is valid by verifying the OTS public key from s and M, then checking the hashes from the merkle authentication path recreate a matching merkle root (public key).


#### XMSS

The extended merkle signature scheme (XMSS) was first reported by Buchmann et al. in 2011 and was
published as an IETF draft last year[4][7]. It is provably forward secure and existentially unforgeable under
chosen message attacks with minimal security requirements: a PRF and a second pre-image resistant hash
function. The scheme allows extension of one-time signatures via a merkle tree with a major difference being
the use of bitmask XOR of the child nodes prior to concatenation of the hashes into the parent node. The
use of the bitmask XOR allows the collision resistant hash function family to be replaced.

![XMSS Tree Construction](/assets/developers/XMSStreeConstruction.png)

The leaves of the tree are also not OTS keypair hashes but the root of child L-trees which hold the OTS
public keys with, l pieces forming the base leaves. Winternitz OTS+ is used for the one-time signatures
(though 2011 variant was first described).



> **References**
- [Oops, I did it again – Security of One-Time Signatures under Two-Message Attacks](https://eprint.iacr.org/2016/1042.pdf) 
	- Leon Groot Bruinderink and Andreas Hülsing 

- [QRL Whitepaper (PDF)](https://github.com/theQRL/Whitepaper/blob/master/QRL_whitepaper.pdf)
{: .info}