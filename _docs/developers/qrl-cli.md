---
title: QRL Command Line
categories: developers
description: The QRL CLI Technical Documentation
tags: developers, cli
---

QRL CLI functions

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@theqrl/cli.svg)](https://npmjs.org/package/@theqrl/cli)
[![CircleCI](https://circleci.com/gh/theQRL/qrl-cli.svg?style=svg)](https://circleci.com/gh/theQRL/qrl-cli)
[![codecov](https://codecov.io/gh/theQRL/qrl-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/theQRL/qrl-cli)
[![License](https://img.shields.io/npm/l/@theqrl/cli.svg)](https://github.com/theqrl/qrl-cli/blob/master/package.json)

![In action](/assets/developers/render1563726016790.gif)

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Install

## Requirements

Requires node and npm to be installed.

## Node Install

Install the qrl-cli via `npm`

```bash

npm install -g @theqrl/cli

```

## Build from sources


To build form sources, grab the repo at:

```bash
git clone https://github.com/theQRL/qrl-cli.git

cd qrl-cli

npm install

#./bin/run {COMMAND}
./bin/run status
```

---

# Usage

<!-- usage -->

```bash

qrl-cli COMMAND
running command...
qrl-cli (-v|--version|version)
@theqrl/cli/1.3.0 linux-x64 node-v12.3.1

qrl-cli --help [COMMAND]
USAGE
  qrl-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->

* [`qrl-cli balance ADDRESS`](#qrl-cli-balance-address)
* [`qrl-cli create-wallet`](#qrl-cli-create-wallet)
* [`qrl-cli help [COMMAND]`](#qrl-cli-help-command)
* [`qrl-cli ots ADDRESS`](#qrl-cli-ots-address)
* [`qrl-cli receive ADDRESS`](#qrl-cli-receive-address)
* [`qrl-cli status`](#qrl-cli-status)
* [`qrl-cli validate ADDRESS`](#qrl-cli-validate-address)

## `qrl-cli balance ADDRESS`

Get a wallet balance from the network

```bash
USAGE
  $ qrl-cli balance ADDRESS

ARGUMENTS
  ADDRESS  address to return balance for

OPTIONS
  -a, --api=api            api endpoint (for custom QRL network deployments)
  -p, --password=password  wallet file password
  -q, --quanta             reports the balance in Quanta
  -s, --shor               reports the balance in Shor

DESCRIPTION
  ...
  TODO
```

_See code: [src/commands/balance.js](https://github.com/theqrl/qrl-cli/blob/v1.3.0/src/commands/balance.js)_

## `qrl-cli create-wallet`

Create a QRL address

```bash
USAGE
  $ qrl-cli create-wallet

OPTIONS
  -1, --sha2256            use SHA2-256 hashing machanism
  -2, --shake128           use SHAKE-128 hashing machanism
  -3, --shake256           use SHAKE-256 hashing machanism
  -f, --file=file          create wallet to json file
  -h, --height=height      tree height (even numbers 4-18)
  -p, --password=password  password for encrypted wallet file

DESCRIPTION
  ...
  TODO
```

_See code: [src/commands/create-wallet.js](https://github.com/theqrl/qrl-cli/blob/v1.3.0/src/commands/create-wallet.js)_

## `qrl-cli help [COMMAND]`

display help for qrl-cli

```bash
USAGE
  $ qrl-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `qrl-cli ots ADDRESS`

Get a address's OTS state from the network

```bash
USAGE
  $ qrl-cli ots ADDRESS

ARGUMENTS
  ADDRESS  address to return OTS state for

OPTIONS
  -g, --grpc=grpc          advanced: grcp endpoint (for devnet/custom QRL network deployments)
  -m, --mainnet            queries mainnet for the OTS state
  -p, --password=password  wallet file password
  -t, --testnet            queries testnet for the OTS state

DESCRIPTION
  ...
  TODO
```

_See code: [src/commands/ots.js](https://github.com/theqrl/qrl-cli/blob/v1.3.0/src/commands/ots.js)_

## `qrl-cli receive ADDRESS`

Displays a QR code of the QRL address to receive a transaction

```bash
USAGE
  $ qrl-cli receive ADDRESS

ARGUMENTS
  ADDRESS  address to display QR code for

OPTIONS
  -p, --password=password  wallet file password

DESCRIPTION
  ...
  TODO
```

_See code: [src/commands/receive.js](https://github.com/theqrl/qrl-cli/blob/v1.3.0/src/commands/receive.js)_

## `qrl-cli status`

Gets the network status

```bash
USAGE
  $ qrl-cli status

OPTIONS
  -g, --grpc=grpc  advanced: grcp endpoint (for devnet/custom QRL network deployments)
  -m, --mainnet    queries mainnet for the OTS state
  -t, --testnet    queries testnet for the OTS state

DESCRIPTION
  ...
  TODO
```

_See code: [src/commands/status.js](https://github.com/theqrl/qrl-cli/blob/v1.3.0/src/commands/status.js)_

## `qrl-cli validate ADDRESS`

Validate a QRL address

```bash
USAGE
  $ qrl-cli validate ADDRESS

ARGUMENTS
  ADDRESS  address to validate

OPTIONS
  -q, --quiet  quiet mode: no address details, just return validity via exit code

DESCRIPTION
  ...
  when passed a QRL address in hexstring (preceded by 'Q'), will return details about the addresses validity.
```

_See code: [src/commands/validate.js](https://github.com/theqrl/qrl-cli/blob/v1.3.0/src/commands/validate.js)_
<!-- commandsstop -->