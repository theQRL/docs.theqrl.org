---
title: QRL Address Structure
categories: developers
description: The QRL Address Structue technical documentation
tags: developers
---

A QRL address is designed to be extensible and supports a wide range of formats.

The first three bytes of any address (descriptor) encode information to describe the format type, signature scheme, etc. At the moment, only one address format is supported: SHA256_2X

As an example, when using SHA256_2X, a QRL address is composed of 39 _bytes_. This is the internal format used by any API or module in the project. For representational purposes (i.e. user interface, debugging, logs), it is possible that the address is represented as a hexstring prefixed with Q (79 ascii characters). This is appropriate for user related purposes but will be rejected by the API.

A typical account address should look similar to this when exposed to users:

> Q01070050d31c7f123995f097bc98209e9231d663dc26e06085df55dc2f6afe3c2cd62e8271a6bd

The structure and address formats are explained in detail in the following sections/tables.

## Structure

QRL addresses are structured in the following way:

| Name | Bytes         | Count  |      Description      |
|------| ------------- |:------:|-----------------------| 
| DESC | 0 .. 2        |   3    | Address Descriptor    |
| DATA | 3 .. N        |  ??    | N will depend on the address format      |

## Descriptor

The address descriptor determines the address format, signature scheme, hash function, etc.

| Name | Bits           | Count  |      Description      |
|------| ------------- |:------:|-----------------------| 
| HF   | 0 .. 3        |   4    | Hash Function         |
| SIG  | 4 .. 7        |   4    | Signature Scheme      |
| P1   | 8 .. 11       |   4    | Parameters 1 (ie. height, etc.)  |
| P2   | 12 .. 15      |   4    | Address Format        |
| P3   | 16 .. 23      |   8    | Parameters 2          |

#### SIG - Signature Type

| Value | Description  |
|------| ------------- | 
| 0    | XMSS        |
| 1 .. 15    | Reserved - Future expansion        |

#### HF - Hash Function

| Value | Description  |
|------| ------------- | 
| 0    | SHA2-256      |
| 1    | SHAKE-128      |
| 2    | SHAKE-256      |
| 3 .. 15    | Reserved - Future expansion        |

#### AF - Address Format

| Value | Description  |
|------| ------------- | 
| 0    | SHA256_2X     |
| 1 .. 15    | Reserved - Future expansion        |

## Address Formats

### Format: SHA256_2X

| Name | Bytes         | Count  |        Description        |
|------| ------------- |:------:|---------------------------| 
| DESC | 0 .. 2        |   3    | Address Descriptor        |
| HASH | 3 .. 35       |  32    | SHA2-256(DESC+PK)          |
| VERH | 36 .. 40      |   4    | SHA2-256(DESC+HASH) (only last 4 bytes)       |

- `PK` (64 bytes) is public key
- `ePK` (67 bytes) is the extended public key, i.e. DESC+PK
- `SHA256(ePK)` (32 bytes) is used as described in the table

**Important**: 
- Addresses are composed by 39 _bytes_. This is the internal format used in any API or module.
- For representational purposes (i.e. user interface, debugging, logs), it is possible that the address is represented as a hexstring prefixed with Q (79 ascii characters). This is appropriate for user related purposes but will be rejected by the API.
- It is recommended that where addresses are shown to users (block explorer, web-wallet and other components) they are displayed with the Q prefix for identification purposes. 
- It is possible to determine valid addresses by checking the descriptor and VERH bytes. 

## Signature Schemes

### XMSS

In the case of using XMSS. The parameters are used as follows:

| Name | Bits           | Count  |      Description     |
|------| ------------- |:------:|-----------------------| 
| HF   | 0 .. 3        |   4    | SHA2-256, SHAKE128, SHAKE256 |
| SIG  | 4 .. 7        |   4    | XMSS                  |
| P1   | 8 .. 11       |   4    | XMSS Height / 2       |
| AF   | 12 .. 15      |   4    | Address Format        |
| P2   | 16 .. 23      |   8    | Not used              |

## Seed / Extended Seed

#### Seed (48 bytes): 
Not presented to users. Users instead have access to the _extended seed_.

> **Important:** The seed is not enough to reconstruct an address because it does not include information about the signature scheme and corresponding parameters.
{: .info}

#### Extended Seed (51 bytes): 
User typically have access to a composed seed that include the descriptor as a prefix.

#### HexSeed (102 bytes): 
Extended seed represented as a hexadecimal number in ASCII characters. This is used for representational purposes and never used in the code or API.

#### Mnemonic (34 words): 
Each word represents 12-bits. A mnemonic can be converted to an **Extended Seed**

A npm module is available to perform validation of and extract descriptive data from QRL addresses: [https://github.com/theQRL/validate-qrl-address](https://github.com/theQRL/validate-qrl-address)
