---
title: Create Wallet From CLI
categories: wallet
tags: wallet
---

{::comment}

- need details for sending and receiving QRL via cli
- move slaves.json info to its own guide
- Add pictures when the CI updates are out
{:/comment}


The QRL wallet can be generated via the command line using the qrl python3 package. It's actually quite easy once you have QRL installed to create and manage your wallet. 

Follow the [Running a Full Node](/mining/full-node) instructions if you have not installed qrl yet. You will need QRL installed to proceed with this guide.

##### Using the QRL command line utility we will show you how to:
* Create a new wallet 
* Print your Mnemonic phrase and Hexseed
* Recover wallet from hexseed/mnemonic
* Generate a slaves.json file

{::comment}


* Check our balance
* Send QRL 

FIXME add a link to the guide for slaves.json? or write here duplicated?

* Generate a slaves.json file 
* Using the slaves.jason file
{:/comment}

### New Wallet

To create a new wallet we need to open a terminal and connect to the computer with qrl installed. 


Once you are connected simply enter the following command to create a new wallet:

```bash
qrl wallet_gen
```

{::comment}
![QRL CLI Wallet](/assets/mining/walletGen.png)
{:/comment}

This will create a wallet file in your current working directory called `wallet.qrl`. Protect this file with your life. This is an unprotected wallet file. Anyone can use this to open your funds.

{::comment}
![QRL Wallet_gen Output](/assets/mining/walletGenOut.png)
{:/comment}

 You will see the address that was created. All QRL addresses begin with a "Q".

** Note**
 
 *The following instructions assume you are in the same directory as the wallet file you generated.* 

 You can add the "--wallet_dir {Path to wallet}" to any of the commands below if you get the error:

```bash
Wallet index not found
```


### Add an Address

You can add new addresses to the wallet after the wallet file is created.


```bash
# Adds an address or generates a new wallet (working directory)

qrl wallet_add
```

This will increment the wallet_idx by one every time you enter this command. 

To view all available addresses in the wallet index use:

```bash
qrl wallet_ls
```


The wallet_idx is the number to the left in the output of the terminal.


### Print HexSeed & Mnemonic 

Once you have created a new wallet you will need a way to open and recover the wallet later. We can print the mnemonic and hexseed to the terminal with:

```bash
Usage: qrl wallet_secret [OPTIONS]

  Provides the mnemonic/hexseed of the given address index

Options:
  --wallet-idx INTEGER
  --help                Show this message and exit.
```

Enter the following to view the private details of the wallet file with `wallet-idx 0`

```bash
qrl wallet_secret --wallet-idx 0
``` 

This will print the sensitive information to the terminal.
```bash
the@QRL:~$ qrl wallet_secret --wallet-idx 0
Wallet Address  : Q0106000a58f626f8c124fb64732cfa33377bf1a369e9abdb5a18177a93e78d3fb1e34b2dbf93e8
Mnemonic        : absorb grape rhyme twist sure ruby goal anglo leash piano beet naval legend fluent damage dust fish spot tissue youth pence binary calmly pose mortal even imply differ choux envoy joke sour pitch adverb
Hexseed         : 010600b72ecedb7bb75e808a7c1a2e14293c7ca53736a428510d2fe60ff3a1716e22ba8e8fc4946ea3c8299479749d08a4b031
```

Save this information somewhere safe, this is how you will recover and open your wallet later.


### Recover Wallet

Some recovery information is needed in order to recover or open a QRL wallet. You will use either your mnemonic phrase or hexseed.

```bash
Usage: qrl wallet_recover [OPTIONS]

  Recovers a wallet from a hexseed or mnemonic (32 words)

Options:
  --seed-type [hexseed|mnemonic]
  --help                          Show this message and exit.
```

To recover a wallet enter:

```bash
qrl wallet_recover --seed-type 
```

A hexseed is expected. Specify other options if you're using anything else.

Enter the seed and recover the wallet. You will be prompted to save the wallet once it has been recovered.

{::comment}
In order to protect the wallet we can generate a slaves.json file and give mining only permissions.

{:/comment}



### Check Wallet Balance


Browse to the [QRL explorer](https://explorer.theqrl.org) and enter your wallet address to check your balance.


{::comment}

### Transfer Coins

To transfer QRL via the CLI we will ues the "tx_transfer" command

```bash
Usage: qrl tx_transfer [OPTIONS]

  Transfer coins from src to dst

Options:
  --src TEXT               source QRL address
  --dst TEXT               destination QRL address
  --amount FLOAT           amount to transfer in Quanta
  --fee FLOAT              fee in Quanta
  --ots_key_index INTEGER  OTS key Index
  --help                   Show this message and exit.
```

FIXME With some details!

{:/comment}

