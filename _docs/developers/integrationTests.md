---
title: QRL Integration Tests
categories: developers
description: The QRL technical documentation.
tags: developers
---


[![Build Status](https://img.shields.io/travis/theQRL/integration_tests/master.svg?label=Integration_Tests)](https://travis-ci.org/theQRL/integration_tests)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/theQRL/qrllib/master/LICENSE)


This project periodically runs integration tests on a 6 node testnet

## How to run integration tests

Clone this repo

You will need at least python 3.5

#### Installing Docker CE / Docker compose

Follow the corresponding instructions:

| OS  | 	Link	|
|---|---|
|Windows | [Docker for Windows](https://docs.docker.com/docker-for-windows/install/)   |
|Linux   | https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/ |
|OSX     | https://docs.docker.com/docker-for-mac/install/ |
|||


```bash
# Install docker compose
bashpip3 install docker-compose
```

#### Start Integration Tests

> **INFO:** Make sure you have `PYTHONPATH` set (e.g. `export PYTHONPATH=$(pwd)`), otherwise you could receive `ModuleNotFoundError`
{: .info}


```bash
# Run pytest
pytest
```

```bash
# To run a specific scenario use -m flag
pytest -s -m "runfor10minutes"
```

```bash
# To avoid running a scenario
pytest -s  -m "not runfor10minutes"`
```

#### How it works (short explanation)

##### qrlnet

The qrlnet directory contains all the scripts to start a qrl network from scratch.

*qrlnet/start_net.sh* is the main script. There are a few arguments that are particularly useful:
```bash
REPO_XXX # allow for launching this local testnet using source code from a different repo/branch
LOCAL_NET_ONLY # option indicates that nodes should be isolated and should not connect outside the integration test.
INTEGRATION_TESTINPLACE # Indicates that source code should not be retrieved. This is used to run the integration tests locally. In particular as a submodule as it is done in https://github.com/theQRL/QRL
```

When the script is executed, it will launch several docker-compose nodes/containers. 

Each node will run 

```bash
qrlnet/node_scripts/start.sh
```

This scripts prepares the container to run a qrl node (user permissions, etc.)

Finally, each node will switch to *testuser* and [start a node](https://github.com/theQRL/integration_tests/blob/1e152ac16b2904cb571b37e9d299385c49ade4f0/qrlnet/nodes_scripts/run_user.sh#L40)

This local network could be used for any purposes.

#### pytest

At the moment, a few example tests derive from **TestLogParser**. This base class starts a network and allows for monitoring 
the logfiles of the running nodes. A few very simple tests like checking that nodes sync or throw exceptions can be done.

However, this is not ideal and are just examples as a proof of concept. 

We expect to extend test to go through the grpc API, use direct CLI, interact directly with the network configuration, etc.

Example: Use something similar to 
```bash
qrlnet/nodes_scripts/docker_helper.py
```

Using the Docker SDK, it is possible to determine 
each node IP address based on their name and run commands or scripts directly inside the corresponding containers using 
```bash
exec_run
``` 
https://docker-py.readthedocs.io/en/stable/containers.html

This way it would be possible to test the CLI or node.js apps (wallet/explorer) from inside the container. More complex tests could confirm transfers by running CLI on more than one node.

The Docker SDK could be also use to model network issues/errors. etc.

## Limitations

The integration tests have been designed to run primarily in Travis/Ubuntu. We would like to move to CircleCI in near future.

Docker for Mac has some limitations that result in problems when trying to connect from the host to the containers.
https://docs.docker.com/docker-for-mac/networking/#known-limitations-use-cases-and-workarounds

Typically in Linux, you can route traffic between your host and each of the containers without trouble using a Bridge.
This is unfortunately not possible in OSX.

