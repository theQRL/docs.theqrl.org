---
title: QRL Core Library
categories: developers
description: The QRL technical documentation.
tags: developers
---

[![PyPI version](https://badge.fury.io/py/pyqrllib.svg)](https://badge.fury.io/py/pyqrllib)
[![npm version](https://badge.fury.io/js/qrllib.svg)](https://badge.fury.io/js/qrllib)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4b34f51616d94362b3447bb2f4df765a)](https://www.codacy.com/app/jleni/qrllib_QRL?utm_source=github.com&utm_medium=referral&utm_content=theQRL/qrllib&utm_campaign=badger)
[![Build Status](https://travis-ci.org/theQRL/qrllib.svg?branch=master)](https://travis-ci.org/theQRL/qrllib)
<!--[![Build status](https://ci.appveyor.com/api/projects/status/mrpo1u5cw2f5d0eb?svg=true)](https://ci.appveyor.com/project/jleni/qrllib-oy5qa)-->
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/theQRL/qrllib/master/LICENSE)



This library currently exposes the following functionality:  

* XMSS, XMSS_fast
* Shake128, Shake256, SHA2_256
* Hashchain seeds, etc.
* Helpers: seed generation, address generation, mnemonics

**Platform support**

|           | Linux |     OSX 10.12     |  Windows 10 |
|-----------|:------------:|:-----------:|:--------:|
|Python 3   | &#10004; | &#10004; |    &#10004;     | 
|Webassembly (JS) | &#10004; |  &#10004;  | &#10004; 
| Golang	|	&#127793;	|	-	|	-	|


## Installing

### Ubuntu
```bash
# Install Dependencies
sudo apt -y install swig3.0 python3-dev build-essential cmake ninja-build pkg-config

# Install pyqrllib
pip3 install pyqrllib
```

### OSX

OSX requires some additional dependencies. These are much easier to get by installing brew.

```bash
# Install brew with
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
```

This will prompt you through a few questions while it installs. You can also follow these instructions here: [https://brew.sh/](https://brew.sh/)

Now install some dependencies

```bash
brew install cmake python3 swig
pip3 install pyqrllib
```

Golang and Java wrappers are currently experimental (By default they are disabled in cmake)

```bash
brew install go --cross-compile-common
```


#### Miscellaneous

Golang and Java wrappers are currently experimental (By default they are disabled in cmake)

```
brew install go --cross-compile-common
```

## Building from Source

#### Ubuntu


#### Windows
For the purposes of these instructions the following were used:

* Build Tools for Visual Studio 2017
* CMake 3.10.2
* Ninja 1.8.2
* Python 3.6 
* SWIG 3.0.12 

Also `c:\src` was used for source files and `c:\opt` for other dependencies, adjust accordingly if choosing differently.

> **Note:** You can use Microsoft MSBuild instead of Ninja Build by setting environment variable 


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


**Build Qrllib:**

```bash
git clone https://github.com/theQRL/qrllib.git c:\src\qrllib
cd \src\qrllib
set PATH=c:\opt\bin;c:\opt\swigwin-3.0.12;%PATH%
set CC=cl.exe
set CXX=cl.exe

python setup.py build
```

If the build succeeded you can perform further steps, issue the command ```python setup.py --help-commands``` to see other options, e.g.:
```bash
python setup.py test
python setup.py install
```
