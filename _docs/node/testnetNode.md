---
title: QRL Testnet Node
categories: node
tags: node
---

Interacting with the QRL network while developing can present complications. There are situations where having a testnet is beneficial. This guide explains how to setup a testnet node, running the latest QRL code. 

The only difference here is the blockchain that is used, as defined in the configuration files of the testnet node. This ensures full development and testing of the QRL network without fear of incompatibility.

These instructions are identical to the full node setup, until the configuration section. Refer to the [QRL Node Install Doc](/node/QRLnode)


### tl;dr

Abridged instructions for installing QRL on Ubuntu:

```bash
# Update and Upgrade packages
sudo apt update && sudo apt upgrade -y

# Install Required dependencies
{{ layout.v.qrlCommands.qrlRequirementsUbuntu }}

# Make sure setuptools is the latest
pip3 install -U setuptools

# Install QRL
{{ layout.v.qrlCommands.qrlInstall }}
```

## Config.yml


## Genesis.yml



## Start QRL Node

Now that we have QRL installed we can `start_qrl` and begin syncing the node. This will begin the node in the foreground of the shell. If you would like to continue using the shell you can either pass the `--quiet` flag or run the command in a `screen` session ( you will need screen installed ).


```bash
{{ layout.v.qrlCommands.startQRL }}
```

This will print out the details of the running QRL processes. For a more verbose output you can pass the `-l` option with `DEBUG, INFO,WARNING,ERROR,CRITICAL` depending on the level of information you need.

```bash 
{{ layout.v.qrlCommands.startQRL }} -l DEBUG
```

The node will sync the entire blockchain to your computer, make sure you have enough space. after syncing the chain you will begin seeing blocks added. Congrats, your QRL node is working. 


#### Help

If you would like to see all of the options you can pass along the command line simply add `--help` to the end of the command above.

```bash
{{ layout.v.qrlCommands.startQRL }} --help
```

This will print all of the various options available. 

## Configuration 

By default when the node is started it will **NOT** mine any coins. You will have to enable using a configuration file in the `{{ layout.v.qrlConf.qrlDir }}` directory. 

The configuration file is where you will change any options you want QRL to observe. You can grab a copy of the file and details about all of the settings in our [Configuration Guide](/node/configuration/)

The defaults can be used to run a QRL node, though you may need to change some of the directives for your use.


## Mining QRL

> If you want to mine using a QRL node, see the guide for [Mining QRL Solo](/mining/full-node) or the [pool guide](/mining/pool-mining) to get started.
{: .info}