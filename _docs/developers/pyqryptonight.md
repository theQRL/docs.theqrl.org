---
title: Qryptonight
categories: developers
description: The QRL technical documentation.
tags: developers
---

[![PyPI version](https://badge.fury.io/py/pyqryptonight.svg)](https://badge.fury.io/py/pyqryptonight)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4b34f51616d94362b3447bb2f4df765a)](https://www.codacy.com/app/jleni/qryptonight_QRL?utm_source=github.com&utm_medium=referral&utm_content=theQRL/qryptonight&utm_campaign=badger)
[![Build Status](https://travis-ci.org/theQRL/qryptonight.svg?branch=master)](https://travis-ci.org/theQRL/qryptonight)
[![GPL3 licensed](https://img.shields.io/badge/license-GPL3-blue.svg)](https://raw.githubusercontent.com/theQRL/qryptonight/master/LICENSE)


> WARNING: This is work in progress, changes might not be backward compatible.
{: .warning}

This library (derived from xmr-stak) currently exposes the following functionality:  

- Python Wrapper for Cryptonight hash
- Mining thread and hybrid callback 

**Platform support**

|           | Linux |     OSX<br>10.12     |  Windows<br>10 | Raspbian<br>? | 
|-----------|:------------:|:-----------:|:--------:|:--------:|
|Python 3   | &#10004 | &#10004 |    &#10004     |     &#63    |
|Webassembly (JS) |      &#63       |     &#63       |    &#63     |     &#63    |
|Golang     | - |     -       |    -     |     -    |

## Installing

### Ubuntu
```bash
# Install Dependencies
sudo apt -y install swig3.0 python3-dev build-essential cmake libhwloc-dev libboost-dev

# Install pyqryptonight
pip3 install pyqryptonight
````

### OSX

If you don't have brew yet, we think you should :) Install brew:

```bash
# Install brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
```

This will prompt you through a few questions while it installs. You can also follow these instructions here: [https://brew.sh/](https://brew.sh/)

Now install some dependencies

```bash
brew install cmake python3 swig hwloc boost
pip3 install pyqryptonight
```

#### Windows
```bash
TBD
```

## Building from Source

### Windows
For the purposes of these instructions the following were used:

* Build Tools for Visual Studio 2017
* CMake 3.10.2
* Ninja 1.8.2
* Python 3.6 
* SWIG 3.0.12 

Also `c:\src` was used for source files and `c:\opt` for other dependencies, adjust accordingly if choosing differently.

**Note:** You can use Microsoft MSBuild instead of Ninja Build by setting environment variable 
{: .info}

```bash
CMAKE_VS_GENERATOR=Visual Studio 15 2017 Win64
```

However if you choose to install the `pyqrllib` package Python setuptools currently will not install it correctly.

#### Prerequisites


|  	Package		|	Required	|	Notes	|
|-----------|:------------:|:-----------:|
| Visual Studio |  [Build Tools for Visual Studio](https://www.visualstudio.com/downloads/#build-tools-for-visual-studio-2017) | select the *'Visual C++ build tools'*	option |	
|	|	[Visual Studio Community Edition](https://www.visualstudio.com/vs/community/)	| select the *'Desktop Development for C++ workload'*	|
|	Git	|	[Git for Windows](https://gitforwindows.org/)	|	keep the default option to use git from the command prompt	|
|	CMake	|	[CMake x64 for Windows](https://cmake.org/download/)	|	Make sure to add CMake to system or user PATH	|
|	Python 3	|	[Python 3 Windows x86-64](https://www.python.org/downloads/)	|	Add Python 3.x to PATH Optionally change the install location to `c:\python36`, install the debugging symbols/binaries, Disable the path length limit.	| 
|	SWIG 	|	[SWIG](http://swig.org/)	|	*(download swigwin)* and extract archive to `c:\opt`	|
|	Ninja Build 	| [Ninja Build](https://github.com/ninja-build/ninja/releases)	|	extract `ninja.exe` to `c:\opt\bin`	|


#### Install vcpkg:

From the start menu run the *x64 Native Tools Command Prompt for VS 2017* and issue these commands:

```bash
git clone https://github.com/Microsoft/vcpkg.git c:\opt\vcpkg
cd c:\opt\vcpkg
bootstrap-vcpkg.bat
vcpkg.exe install hwloc:x64-windows boost-multiprecision:x64-windows
```

#### Build Qrytonight:
```bash
git clone --recursive https://github.com/theQRL/qryptonight.git c:\src\qryptonight
cd \src\qryptonight
set PATH=c:\opt\bin;c:\opt\swigwin-3.0.12;%PATH%
set CMAKE_PREFIX_PATH=C:/opt/vcpkg/installed/x64-windows
set CC=cl.exe
set CXX=cl.exe

python setup.py build
```

If the build succeeded you can perform further steps, issue the command 
```bash
python setup.py --help-commands

# to see other options, e.g.:
python setup.py test
python setup.py install
```

## License

*This library is distributed under the GPL3 software license*

Some of the code is based on the xmr-stak implementation. Most of third party code has been included as git submodules for future reference.