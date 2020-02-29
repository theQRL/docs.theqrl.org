---
title: "Bromine hardfork: What you need to do"
categories: developers
description: What you need to know about the upcoming bromine hardfork
tags: developers
---

> This document pertains to **the upcoming bromine hardfork** which is currently in *testnet*.
>
> 
> If you're looking to get involved with testnet, head over to [our testnet node documentation page](/node/testnetNode/).
{: .warning}

**There's nothing you need to do** unless you are

- A node operator
- Someone who's interested in running a node
- A pool miner, or
- An exchange

To clarify, if you're someone who's holding QRL in a wallet, whether that's a hardware wallet, one of our desktop wallets, or otherwise, there's no action needed on your part. The *exception* to that is if you want to take advantage of new features like multisignature addresses and transactions.

## For those already running a node

If you're running your own node, you'll want to perform an update when we do a release of the next hardfork but before the next hardfork date. 

There's no need to download the whole blockchain again during this process.

**Update: Using pip**

Most people already running a node will have done so through the pip install which can be found in our documentation at docs.theqrl.org/node/QRLnode/.

To update, you'll first want to stop your node, then run the command:

```bash
pip3 install qrl --upgrade
```

Then start the node and check the state which contains the version

```bash
start_qrl
qrl state
```

## For those who would like to run a node

There's two ways to run a node now. You can run a python node or a docker node.

> Tip: Regardless of what node you choose to run, syncing the state can take a while, so you'll want to install as soon as we do a release before the final hard fork date if you're mining the moment the fork happens. There will be a note to prompt people to do so when we release.
{: .info}

Docker has a few benefits:
- The environment is all defined in a Dockerfile, so there's higher reliability.
- As it's a containerized environment, it can be run on Windows.
- It's faster to setup and run an instance. This is great for getting started on development using our many [API's](https://api.theqrl.org/).

The main downside of qrl-docker is when it comes to mining, you're going to be seeing a loss in hashrate.

To start a docker node, you'll want to follow our [docker node instructions](https://docs.theqrl.org/node/docker/)

To start a python node, you'll want to follow [python node instructions here](https://docs.theqrl.org/node/QRLnode/)

## Pool Miners

You'll need to get acquainted with the Hardware required to mine randomX and select a pool to mine from.

You can find more information on this at [pool mining](/mining/pool-mining).

## Exchange operators / nodes

The instructions for exchanges are the same for those running a node! See the section for those running a node.

## For those with Quanta who want to take advantage of multisignature transactions

To take advantage of multisignature transactions, you'll need to update to the latest QRL wallet which will be released after the hardfork takes place.