---
title: Known Issues
categories: developers
description: The QRL Known issues.
tags: developers
---

There are a few known issues we have come across due to the software upstream of QRL. While we strive to overcome programmatically any issues, sometimes there are situations where limitations exist outside of the QRL scope. This document is intended to clear up any issues seen when installing and running The QRL software. 

It should be made clear that these are not "Bugs" and there is very little we can do to mitigate these limitations. We strive to work through and provide secure, audited code in all of the official channels we operate.

## Ledger Nano

The QRL has developed and integrated QRL's XMSS address scheme into the Ledger Nano S and have successfully launched an app with the oversight of the Ledger developers. There are a few small bugs related to the browsers and the interaction that happens with the ledger and the browser.

> If you come across something not working as you would expect please report it to the team in a github issue. [theQRL Ledger GitHub](https://github.com/theQRL/ledger-qrl/issues)
{: .info}

### Known Issues

| Github Issue Number | Issue Name | Description | Impact |
|--------------|------------|-------------|--------| 
| NONE | U2F Timeout  |  The browser will timeout with a "U2F Timeout" warning when attempting to transfer QRL from a Ledger, showing a consumed OTS key on the device. | Sending funds will not succeed as expected, and the OTS counter on the Ledger will become out of sync |

#### U2F Timeout

Ledger devices have been using the U2F protocol for easy and cryptographically secure second factor mechanism with the web browser since 2016. Lately, U2F timeouts have been enforced by browser applications more aggressively — which you may have noticed if you’ve ever experienced a “U2F timeout” warning. 

**The Error -**

While attempting to transfer or sign a TX on the network, the browser will attempt unsuccessfully to sent the signed TX to the blockchain. This will eventually fail and show a failed message in the wallet screen. 

Additionally there will be an error message shown in the developer tools of the browser. indicating a "U2F Timeout" has occurred.

**Mitigation -**

Previously, we’ve recommended using another browser or playing browser bingo, switching to a browser that will still function with the U2F requirements of the Ledger. 

The new current recommended action is to use our desktop wallets, which can be found on the [front page of our website](https://theqrl.org/) and our [github releases page](https://github.com/theQRL/qrl-wallet/releases/latest).

You can read more about the development of U2F tunnel transport for Ledger devices in their blog [Windows 10 Update: Sunsetting U2F tunnel transport for Ledger devices](https://www.ledger.com/2019/05/17/windows-10-update-sunsetting-u2f-tunnel-transport-for-ledger-devices/).

> If you have attempted to send a TX with your ledger device connected to a Chrome, Brave, Opera, or Firefox browser and are showing and erroneous OTS key, you can reset the ledger device OTS key count. See the tools section of your opened wallet using the desktop application. **Make Sure you have not used any keys successfully prior to resetting the ledger** 
{: .info}


## QRL Node - Python

There are a few known issues that have been found in the QRL python node, mostly related to twisted.

The chart below lists all of the known issues that have been reported to date.

> If you have come across something not working as you would expect please report it to the team in a github issue. [theQRL GitHub](https://github.com/theqrl/qrl/issues)
{: .info}

### Known Issues

| Github Issue Number | Issue Name | Description | Impact |
|--------------|------------|-------------|--------|
| [750](https://github.com/theQRL/QRL/issues/750) | Segmentation fault | Upon updating the QRL node issuing the `pip3 install -U qrl` command will throw a Segmentation Fault (Core Dumped) error | None, the node continues to operate as expected, and does infact update to the latest code. |
| [1611](https://github.com/theQRL/QRL/issues/1611) | Too many open files | When the known_peers file grows too large, Linux throws an issue | Minor - The node will continue through the issues keeping to the limits set and will take a bit longer to startup. |


#### Segmentation Fault

Updating a QRL node, sometimes you run into this error upon  python completing the command `pip3 install -U qrl`. The node does in fact update, however due to the Twisted module used throws this error. 

**The Error -**

```bash
Segmentation fault (core dumped)
```

You can immediately run `start_qrl` and you will find that the node has in fact been updated to the latest code.



#### Too Many Open Files


This issue comes up when the `~/.qrl/data/known_peers.json` file contains too many peers. This limitation comes from the default Linux kernel configuration. If you increase the `ulimit` open file size you will no longer see the issue. There are security implications to allowing additional open files and the default is recommended. 


```
2019-01-04 14:30:32,796|1.1.11 python|unsynced|MainThread | CRITICAL : [TWISTED] Unhandled Error
Traceback (most recent call last):
  File "/home/ubuntu/.local/lib/python3.6/site-packages/twisted/internet/base.py", line 428, in fireEvent
    
  File "/home/ubuntu/.local/lib/python3.6/site-packages/twisted/internet/defer.py", line 321, in addCallback
    
  File "/home/ubuntu/.local/lib/python3.6/site-packages/twisted/internet/defer.py", line 310, in addCallbacks
    
  File "/home/ubuntu/.local/lib/python3.6/site-packages/twisted/internet/defer.py", line 653, in _runCallbacks
    
--- <exception caught here> ---
  File "/home/ubuntu/.local/lib/python3.6/site-packages/twisted/internet/base.py", line 441, in _continueFiring
    
  File "/home/ubuntu/.local/lib/python3.6/site-packages/twisted/internet/base.py", line 1238, in _reallyStartRunning
    
  File "/home/ubuntu/.local/lib/python3.6/site-packages/twisted/internet/posixbase.py", line 298, in _handleSignals
    
  File "/home/ubuntu/.local/lib/python3.6/site-packages/twisted/internet/posixbase.py", line 200, in __init__
    
  File "/home/ubuntu/.local/lib/python3.6/site-packages/twisted/internet/posixbase.py", line 133, in __init__
    
builtins.OSError: [Errno 24] Too many open files

```

This issue is not prohibitive of the node running, and sounds much worse than it is. A few commands to check the limits on your system.

```bash
#Check the number of known peers with 'qrl state'

ubuntu@qrl:~$ qrl state

info {
  version: "1.1.11 python"
  state: SYNCED
  num_connections: 1
  num_known_peers: 5399
  uptime: 8
  block_height: 279131
  block_last_hash: "y`\342\362d\314\032u\210#08%>\232\363\005(\350\325\257.GzYhFg\001\000\000\000"
  network_id: "The sleeper must awaken"
}

```

You can see the node is reaching out to 5399 nodes. Now lets check the `ulimit` of the server to see what is allowed.

```bash
# Check the limits currently set

ubuntu@qrl:~$ qulimit -a
core file size          (blocks, -c) 0
data seg size           (kbytes, -d) unlimited
scheduling priority             (-e) 0
file size               (blocks, -f) unlimited
pending signals                 (-i) 3841
max locked memory       (kbytes, -l) 16384
max memory size         (kbytes, -m) unlimited
open files                      (-n) 1024
pipe size            (512 bytes, -p) 8
POSIX message queues     (bytes, -q) 819200
real-time priority              (-r) 0
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) 3841
virtual memory          (kbytes, -v) unlimited
file locks                      (-x) unlimited


```

You see the line `open files  (-n) 1024` has a hard limit on the number of open files, and it is drastically lower than what we are trying to open. This issue is not critical, the node will continue through, however it will complain.

To remove this warning you can increase the limit larger than your known_peers list. Additionally you can remove the file, and let your node re-learn peers as they come.

```bash
# First edit /etc/security/limits.conf for persistent changes

ubuntu@qrl:~$ sudo nano /etc/security/limits.conf
```

Add the following to the file replacing $USER with your user name:

```
$USER  soft  nofile 9000
$USER  hard  nofile 65000
```

Double check that the file located at `/etc/pam.d/common-session` includes:

```
session required        pam_limits.so
```

Now reboot the server and you should see changes reflected when you enter `ulimit -a`.
