---
title: QRL Testnet Node
categories: node
description: The QRL Testnet Node documentation
tags: node
---

This guide will explain the installation and configuration of a TestNet node running on the latest QRL codebase.


Interacting with the QRL network while developing can present some complications, especially when dealing with live currency. There are situations where having a TestNet to interact with is beneficial.

> There is no value associated with the Testnet QRL, It's only used for testing. 
{: .info}

## Testnet Installation

The blockchain selection, MainNet or TestNet, is made through the configuration of the node. By passing a user configuration file to the node you can modify the blockchain that the node uses. 

A TestNet node runs the same core code as a MainNet node with only user configuration changes differing. This allows full development and testing of the QRL network without fear of incompatibility when switching between codebases. 


#### Requirements

The basic requirements for a QRL TestNet node, typically run on a server. 

- Support for AES-NI
- HDD with enough storage for the blockchain as it grows
- Reliable network connection
- Python3.6
- 64 bit processor



#### Install QRL

Below are abridged instructions for installing QRL on Ubuntu. These instructions are identical to the full node setup. Please refer to the [QRL Node Install Doc](/node/QRLnode) for further instructions on installing QRL.

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

> Do not start the node yet! You need to setup the configuration first
{: .warning}


#### Config.yml File

Before you start using the TestNet chain, you need to connect to other nodes running the testnet. To define this variable you need to include a config.yml file in the default QRL directory. 

Insert the following lines into `~/.qrl/config.yml` *(You may need to create this directory)*

```yml
peer_list: [ "18.130.83.207", "35.176.41.49", "18.130.187.220", "35.176.33.242" ]
genesis_prev_headerhash: 'The Testnet Genesis'
genesis_timestamp: 1530004179
genesis_difficulty: 5000
db_name: 'testnet-state'
```

#### Genesis.yml File

The QRL node needs to know some information from the genesis of the blockchain. For a MainNet node, this information is installed by default. For a TestNet node you have to pass this to the node in a properly placed `genesis.yml` file.  This file lives in the same directory as the config.yml file.

Due to the size of this file, we have included it at the [end of this document](#full-genesisyml-file). You can grab a copy of this from the  bottom of this page, from the QRL docs page at [https://docs.theqrl.org/node/genesis.yml](https://docs.theqrl.org/node/genesis.yml) or with 

```bash
wget -O ~/.qrl/genesis.yml https://docs.theqrl.org/node/testnet-genesis.yml
```

#### Start The QRL Node

Now that we have QRL installed and the appropriate configuration you can `start_qrl` and begin syncing the TestNet node. 

```bash
{{ layout.v.qrlCommands.startQRL }}
```

The TestNet node will sync the entire blockchain to your computer, make sure you have enough space. after syncing the chain you will begin seeing blocks added. If your in a hurry you can grab the full chain in github and speed the process up a bunch. See the links below.

## Using the Node

A TestNet node will operate exactly the same as the MainNstet node will, and all commands are the same. The command line interface is still accessed through calls to the `qrl` program. 

We have a ton of information on the usage of the node, wallet creation, and various API's in our main Documentation. All of this information applies to a TestNet node as well.

> Never use a QRL address on both networks! OTS keys should never be re-used.  
{: .danger}

You will need to generate a new TestNet wallet. Due to the way OTS keys work, the address has more likelihood to be compromised if the OTS key is exposed more than once on the blockchain.


## Updating TestNet Nodes

If you are running a TestNet node you will need to keep up to date as we reset testnet periodically. Each time the network is updated you will need to refresh some files and restart the node. Look for messages from the QRL team in the team chat on Discord for updates to testnet.

Updating is simple. 

1. Stop the node
2. Update QRL
3. Remove the `~/.qrl/data` directory
4. Rewrite the `~/.qrl/genesis.yml` file with new details
5. Update the `~/.qrl/config.yml` file with new instruction
6. Restart the node using `start_qrl`


This should start syncing the testnet network to your computer. Verify that the details match what you expect issuing the `qrl state` command. The blockheight and network_id should be updated with the latest details.

## Mining TestNet

We encourage people to set their nodes on TestNet to allow mining. This is a great way to earn some test QRL and helps the *small* network validate transactions and propagate blocks more efficiently. 

- Please note that most virtual private server providers dis-allow mining operations on shared resources. This may end up in a ban from the 3rd party system. 
- There is no need for mining pools and GPU mining on the testnet, save that hash power for the real network. 
- TestNet QRL is not traded, and is not worth any real value. *This is only a test...*

#### Enable Mining

To enable mining on your TestNet node, simply add the following to the `~/.qrl/config.yml` file and restart the node to pickup the changes.

```bash
mining_enabled: True
mining_address: ‘TESTNET_QRL_ADDRESS_HERE’
mining_thread_count: 0 
```

If you are in need of some QRL for testing on the TestNet, head over to the faucet and enter your TestNet address. You can find the link below. You will also find a link to the testnet wallet below, in case you need one of those too. 

## Testnet Links

Some helpful links for the TestNet network. Since this is a completely separate blockchain, we need to use the testnet wallet and block explorer.

- [testnet-wallet.theqrl.org](https://testnet-wallet.theqrl.org)
- [testnet-explorer.theqrl.org](https://testnet-explorer.theqrl.org)
- [testnet-faucet.qrl.tips](https://testnet-faucet.qrl.tips)
- [QRL-Nightly-Testnet-Chain](https://github.com/fr1t2/QRL-Nightly-Testnet-Chain)


## Full Genesis.yml File

The complete `genesis.yml` file can be found below. Copy this in its entirety and place in the `~/.qrl/` directory. *Note it's long, and not easily human read.*

```yml
genesisBalance:
- {address: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=, balance: '105000000000000000'}
header: {hashHeader: zTnPTGwZrMT+T1dxN/8mr2jArzsYatEQFFkboJJvfGg=, hashHeaderPrev: VGhlIFRlc3RuZXQgR2VuZXNpcw==,
  merkleRoot: WI9TSXvP+6mAjffoX05uprLk/ace20rIN2iyLnYYyeU=, rewardBlock: '65000000000000000',
  timestampSeconds: '1530004179'}
transactions:
- coinbase: {addrTo: AQUAP581PQiqk/bKCLX92e0qtLZSJSTIq41N4yZpPA8qK3T0VC2l, amount: '65000000000000000'}
  masterAddr: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
  nonce: '1'
  transactionHash: ySWhauTK7jCA7QT5r+kpgOIPGGavsWmTo37IuhqAAiM=
- nonce: '1'
  publicKey: AQUADQjp7dOFQYDsWzaynbDdiPcs1bypV/Bfch68FOghq9iS36U210VGizuzg0PXjojTRTksDQv/Z4t1zXOrdMBt2A==
  signature: AAAAALwB7YZL2an2Kc39uPAYRa2hnh1rAHQnhbExk5uRrA+7WVbG/7yK9s0OxJqeSSIlPaJxBhNi0ZbF7txTAzqZ/0VR2DFf3X1Khfz7RTh1zsjQKowBxyY5M1f+1TcmMD71S2bsTQ2TX+nyfITV+rH4kTHHhQ8k417RGBuZBju8kvJoWkLkDE5s0AfS+ocGqOBYc3+ECNYh/wktXgNu/nSiTuekiDxBLCSrg1zJtkwt+B4yTdc4lXU5Hle7zbozZuAZRUwyWUgHxM7JV3TwKP7NPAKcw4NftA3XMrCCCpDYqm3a7xs4wHrNNOW3nu9A5ZEHEl80meBXP8Woqvy6YLqcxAohjgDp3h8H+p3pZ9MkeB1FWT1cuDt0WxSKnpFyrIk+k6UqUW/X0s/leeppTKw9ugzBm9GqNPM+xm++pkn3AVm+ji5LO4WF2PPWQDhFT0vmJC7ZPaORYUXQkRlYHYkFXQ6t1RLm6KgWMx6sMZHOxCApIDKfIjT2df8qEtsIHpcd+hoWYvmUy+FCxtyxGCV+MgAKyjpshkFN9opmqUK5Tg2gFMpp8orPDDhpAsWVYgG+pNqZIRCUFRJJg20EKsijLEJYkzOABuJc5xjFt5QImWZvs4ju8WU6btgP4gd8cvlXcytfXr5lKJowlxQsufWRp6NF5+K/q2LyK5QlFfiPQhHKXVczdyWp9oFP63xh1oeSH225Cbcz04AohbostMjchXpEn2NJQDz8e4VO5rFWwuL7QD0jE9ZlHAhv+jPIaXoXmc/VUiWv6z+2Yu4BAzgFkOhA0sAFx17H9bk1uAhZQKu6DGE9hUgQLn2wfBHsfn9wN/d99g4EhZEqomzj9CQI8voUpMJ0uZO/y692QVgt8P7zxg0bH5dpC1SLDFKuf39c4+1PO68c6b34lwbWjfapSP//uyXUVNPm6jcBcyiszDsSE/N6vQFLGqtYzLLkorTGoKTMstFUnUN0zTtgdTyY9AUhVtA3+NeiVndNFxhnNztxzTAZTGwL/ijQ1rP0OYH0/X6mBg0S7usjLSOAMbSKDogKZsHAccyM9KPQX8InaJFeY+F67g06G8b4kOunGrExT3pkN3+SYJ1gSQ2TxA/bZtC1JWj1G4wIyvmCpvsziFYrYmP8Sb4dzPep5RHNIHM9w6NiKxpdxe8wAeB/kDmaQPPMnEugDm5zSW6M0QuEwahAJuOdDgL+EpAA0Kh+yn7cPVDPvVxLOK+APtcB+ObpOwEDe05W+RBGixs4QgdbVHTI//dSwImmyXC6Ird575jPnxkZLzz/UReVfiMaDrIuPG2hLykfbi8ZpE/St4epBB0/bIkks95NC7WNO5CzdHeS0Jst8Fj9fhwTKChJ3rbizHL2UCf05FaKpoiojrabY+glGwuGw/Ij1k5OSfBVTlzcLkPg96qSkUNv3l2lxMDs5YKMEbZCv3OGKplcP/9A380l9DeeL2q7eugfZ97ml8CJto6awQcQLGfkyJOznrDKORP8j3qlG+pfcmEG1h1+2YIp89i3ujSIbvs1cbbuv9MdHrJ54+hgA/hhQh40dmzQe529nKFbnkSbWqW4BsmuYrAMzR7UO/VhwE5ZFI97k3So0xOmZJ6FMD03ktUfJHWtTa/ydIzfnkTUSPZYpJsgFpyLNYhHnaPwSuNuLo9ut2aEHFJtvLHA93KWpELl03wKaLs1PGhJE3IJx0PwZRS//wq2ztxNXQTK1tJsGVMSwX3D05G3wGzw8yHK+mU6edHpazdiip1F76XY3gtdeDZD2JegqidYbPT5Xt1aQV5nddUqdmEFiQnsAL31fDAgatgyMjEiYPVCCgOot83EZyvaEWhau4uPF8EhC3hOW+w23t+HylTopMAPWBWJhLHOi4OTT/jfz5zP3vHCy1HDXMBFc1TVrGiWnYCDaQ+8J3q/dnAgCQYFUC3DankIs7qvX6UeyEojfd0DSE6/LaJIpm2Vmk0F5IRDjI8NohROU0oZzC3yHrVuU1ymdY/sefYSrVQbmBc71OAfaXP622cNEupfyPtI2XUAXCURVMvHrNTVS15cNmyZAynCWEjoTLuJGjOHAfrtAxUQhYpdLpwlAuVnePVzJWHWNoHIU291R94C6M5CGtsbrD5fF4okO9T5dD72iVTEFoK1fhxFpikY1zb1Gqrm+wF6zhrI39RUUrO39oiaIxGKDPTXRkO//wV2iHbOrwrHt3bMzMjR4gmkjSNHgmk+UOn/Y3i3izaPphMqeI7C/WBCHNSVhf/IYIaKWCjT7FFxDgzzgOGJQa0IOrFLcnwXo5Oyc4G+yh1vJcwbW8o6aHXhxlkdixm3dqY255gRgmkqrW3/4g8WqCXE4UrnVadWOYfiq6j+SrC15wRKHUnT/io9IxIxdNjvOS0pk9HUDBoO/40BHnp0Pa2n6+aKjo6taAOLM5IHvVf0D9qKabn4irijB/cPTZrqtLrZnX7uMy/uw6vx7GLlEJJa4tjGVQ5gQqQKOD057Rfomgs4qXbZK5H6n0SH6ghRj7/wMte20QIoGQUZHqDARcDSIg3ekZ/KLqgudX5nCYpV3c9McHmD3FjRsXGktNwIJrkyQJxCGOdMlGz2WsmCJGdNYuT5UGVdwp0PNxgdQ4A5zF/LS1X3WZC0D0sa4MtQFdz1DSdGo8fwabLQoKASYgXKXibWv7Ziuugok/RseXSsraGph8R7USwr17ofiy0G9VUggCwcWRwmwWhmN9wOQMo/xeyYKd/fZq1LMsITybRsoeMWmBywWpxm+ttDaHAtBtFvVw4PMRZ04B3rWONT1ZaXTGeDHH9dR69+8iJOCo8UKPnQVztFH++UjbVj2Mh0C1YQ+z+ZS/9u2S3i98uisUbaCZnW1sn1iZtkI7xJJgWiUo1rZoIYVbsOAyTPXUbtgzJREo9lYwLPlCTiAHRfZ8q7azTUQ+wQIUytXpKd3HTe60LWNJ0LJzj5cNx1Oeln7Ct6MEo4SLp/sGhpPSGLbVVuVvf1mpGKfrOKVDVi2zRiUPSLm+5PfXkriuz7Y3NQrXHJmTAX6jKoJHbhEpJLiNGYE2LzJTYbpndLFGVYq8mu8cf/tecpBXSsqMxQCxURkowcWe3MCzGIWRVR+TD2qfmYF6Fkb6tFmaP3cLkUuEh6Tf81XwyRnjN40bLeVrKUA01TwG1ATBoFGZ7UyFAmr6i0IV1i8GHQUowwvv1qLmulj0wovhD16byUANqpQbDYnwI5LyvDRd2n7cPU8T55+54V1/mlvNOdNb17XjZlMo5i89FcbZfhvXd3UECG9DFEpIXbyGeTnu78q8c1amHg9vFJVAi+0/zyMkQlJHUnhL+LJqbvfKMDzQ==
  transactionHash: 6IhL/ZYfWzFAnhs01yS1QfGos4kQI6LHJadNuVR6KmA=
  transfer:
    addrsTo: [AQMAmMXxlr05m0gMKMeyqzbGAScYYgnsHhkdos2btmV1N2YPRTAr, AQUAMXzlAhI8DeZxH9TqaDPqNg6Vy0CvcZRO6jjakL+12DdA0B5Q,
      AQYA6/PGyseeabX7AQ5BnzvoH88YiCchKYh/9gHfF5RzUySiw2YQ, AQUA68H8kCdZsRrEOX2EiogYVRauKfBPAZbY0mNES8fcxw/MhQJ6,
      AQUABwTFd9VXslEzMtSrzrVrouiULgw4amZLK3Wx7dTkAwGbhKo3, AQUAm7iePNiVDmIBbqElsOwidloXyYGpDL3JFLXAEojDunHZaH+r,
      AQUAf03L/rELXH5iXmQh/P+PQ7xvT3pmYmi3Rx4vCGU54nAX+vCv, AQUABc41hpjQgCfRwDMKRnVVv8A2Udjmfb2dtzsv1BkfiYpISo2j,
      AQQA6ZhwjU4fk/JcdK79OzmQojVo7es1SyQDLwS8DsZhZzv5t6ii, AQIAmLAUwLHjp9zry6yVbz3eIlHvDSp80Qby7N5SoOqhp+vpVyW/,
      AQUAnx588JeaZ/auZUfbqfNSicAu8GUTHCGhKB51+YWKgzho42LT, AQUAC7VCLVflaTMQVdzuOhvAM0pDnSmRBdKhSax1vrqVzr0F0keP,
      AQUA/oCF0pKJVfI++QoxwhVvV1vF8NUGcM4Jov87Y4HK/P/euEk+, AQUAdSDRJ+sbkEn562+2rTuRe9+oh7E40t2HTn4rM5I/HVAtDxOn,
      AQUAJ/JiAyIcmLxiArWi9Wc0ioERD9SEEaTwPWCav25pnNipIshg, AQUAIpIoocpQTt8Ya7YH7gXrO3ArM/iyWt/RbD6eSTOqBdOoMMgS,
      AQYAocRKrqQ8kKSrCY6qi1vsbCgwS9uebHQTKDeiQlWkampc+Ra6, AQUAs0fSxKHrpSdbYcN7LGakeXHVjdBsXnwNewjoYMl4ZYD74+/j,
      AQUAfoSLiyaUrVmd5paF/z4sVW0qgXwWHtB0DedpHzzzrXV2Huur, AQUAY+xDh4hbJn2SPIHUrgeshkEtsWF+Em2jp9qo62IyT+DVcEDO,
      AQUAi3RxgqQDsLccXFUPsj7NinQ8XjuX3ZcsB9fRXfibTa0tyy+W, AQUA2bjXCM0gQd406wvCbdsufuoUZ2QPG/N18IN95E2t6sXKRJ42,
      AQUAjbzLqQvcLnkRXmRxzIzfTHEwsT7vRVW1jAAPkX6kArRBv45Q, AQUAWIZsC+m0CoqS1gbF3JCb/WyABRCddDQ36t77CEiHNf4/7v+1,
      AQUAWBzM+xk/ywXCNm4FD5hP2yxTc5buOsRS0sfJL0VL2PPvGcQj, AQMA5vlJm3iJ7hX1pdU2srNNaOf9kVRzwq5Z5Qd7O0jHT5/ZkV2D,
      AQYAJoas3IkIdHkQO2mhCUsbltqRZ1rcpJUqoW9Rsy2T1uG2vRDA]
    amounts: ['70000000000000', '2000000000000', '500000000000000', '100000000000',
      '50000000000', '1000000000000', '4000000000000', '10014000000000', '1715229300000',
      '1100000000', '1000000000000', '540000000000', '5000000000', '55000000000',
      '1000000000', '10000000000000', '100000000000', '1234000000000', '200000000000',
      '1000000000000', '14804070700000', '10000000000000', '5000000000000', '1000000000',
      '1000000000000', '60000000000000', '775000000000000']
```