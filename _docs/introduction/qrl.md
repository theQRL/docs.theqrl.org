---
title: QRL Details
categories: introduction
tags: introduction
---

The Quantum Resistant Ledger (QRL) is a future-proof post-quantum value store and decentralized communication layer that tackles the threat Quantum Computing will pose to cryptocurrencies. 

QRL accomplishes this by focusing on the cryptographic security of the signature scheme and by keeping it secure against classical and quantum computing attack both in the present day and also future decades. 

##  Quantum Computing Attack Vectors

Cryptocurrency is based on the same basic principles; using cryptography as a means to validate and secure transactions, providing an immutable means of exchange, and control the creation of new units. This is the base of all valid cryptocurrency in the market today

[Rivest–Shamir–Adleman (RSA)](https://en.wikipedia.org/wiki/RSA_(cryptosystem)), [Digital Signature Algorithm (DSA)](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm), and [Elliptic Curve Digital Signature Algorithm (ECDSA)](https://en.bitcoin.it/wiki/Elliptic_Curve_Digital_Signature_Algorithm) are the main methods of cryptography used today and these remain secure based upon the computational difficulty of factorization of large integers, the discrete logarithm problem and the elliptic-curve discrete logarithm problem. 

Shor’s quantum algorithm (1994) however, solves factorization of large integers and discrete logarithms in polynomial time. Up until recent the limitation to proving Shor's algorithm has been at the processor and the basic way a CPU processes information. A Quantum Computer works in a different manner than typical CPU's at a much more efficient rate. 

A quantum computer could theoretically reconstitute the private key given an ECDSA public key (Bitcoin Private Key). It is thought ECDSA is more vulnerable to quantum attack than RSA due to the use of smaller key sizes, with a 1300 and 1600 qubit quantum computer able to solve 228 bit ECDSA.

> In August 2015 the NSA deprecated elliptic curve cryptography ostensibly based upon quantum computing concerns. 
{: .info}

It is unclear how advanced quantum computing may be presently or that any breakthroughs in this field will be publicized to allow cryptographic protocols in common usage in the Internet to be made post-quantum secure. There are changes to this field almost daily and at last told the known working quantum computer was around 71 Qubit.




## Quantum-resistant signatures

There are several important cryptographic systems which are believed to be quantum-resistant:

* Hash-based cryptography
* Code-based cryptography
* Lattice-based cryptography
* Multivariate-quadratic-equations cryptography 
* Secret-key cryptography. 

All these schemes are thought to resist both classical and quantum computing attack given sufficiently long key sizes

Forward secure hash-based digital signature schemes exist with minimal security requirements that rely only upon the collision-resistance of a cryptographic hash function. 

Changing the chosen hash function produces a new hash-based digital signature scheme. Hash-based digital signatures are well studied and represent the primary candidate for post-quantum signatures in the future. As such they are the chosen class of post-quantum signature for the QRL.


## Merkle tree signature schemes

Whilst one-time signatures provide satisfactory cryptographic security for signing and verifying transactions they have a major drawback that they may only be used once safely. If a ledger address is based upon some transformation of the public key of a single OTS key pair then this would lead to an extremely restrictive blockchain ledger where all funds from a sending address would need to move with every single transaction performed - or those funds would be at risk of theft. 

A solution is to extend the signature scheme to incorporate more than one valid OTS signature for each ledger address allowing as many signatures as OTS key pairs are pre-generated. A binary hash tree known as a merkle tree is a logical way to achieve this.


### Binary hash tree

The general idea behind a [merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) is an inverted tree composed of parent nodes computed by hashing the concatenation of child sibling nodes upwards in layers to the root. The existence of any node or leaf can be cryptographically proven by computing the root.

A merkle tree is formed from *n* base leaves and has height to merkle root, *h (n = 2<sup>h</sup>)* - starting from the leaf hashes (layer 0) and counting upwards with each layer of nodes. Each leaf node is created in our hypothetical ledger use-case by hashing a randomly pre-generated OTS public key. From the tree below it can be seen that the node above each pair of leaf hashes is itself formed by hashing a concatenation of the
child hashes.

![Merkle Tree](assets/introduction/merkleTree.png)

This continues upwards through layers of the tree until confluence into the root hash of the tree, known as the merkle root. From the example tree in the diagram, taking the merkle root as the public key, four pre-computed OTS keypairs can be used to generate four cryptographically secure valid one-time signatures. The merkle root of the binary hash tree can be transformed into a ledger address (possibly by iterative hashing with an appended checksum).


## XMSS

The extended merkle signature scheme (XMSS) was first reported by Buchmann et al. in 2011 and was published as an IETF draft last year[4][7]. It is provably forward secure and existentially unforgeable under chosen message attacks with minimal security requirements: a PRF and a second pre-image resistant hash
function. The scheme allows extension of one-time signatures via a merkle tree with a major difference being the use of bitmask XOR of the child nodes prior to concatenation of the hashes into the parent node. The use of the bitmask XOR allows the collision resistant hash function family to be replaced. 

<sup></sup>