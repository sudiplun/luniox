---
title: Install xampp on Any Linux distro.
author: Sudip Lun
pubDatetime: 2023-06-23T08:36:14Z
postSlug: install-xampp-linux
ogImage: https://upload.wikimedia.org/wikipedia/en/thumb/7/78/XAMPP_logo.svg/1200px-XAMPP_logo.svg.png
featured: false
draft: false
tags:
  - web
  - development
  - php
description: XAMPP is a free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages.
---

## Table of contents

## Installation

<u>Step 1: </u> [Download from here ](https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/)

<u>Step 2:</u> make download xampp-linux\*.run to **executable**

```bash
sudo chmod 755 xampp-linux*.run
```

<u>Step 3:</u> run command to install xampp handle all process.

```bash
sudo ./xampp-linux*.run
```

<u>step 4:</u> to start xampp

```bash
sudo /opt/lampp/lampp start
```

## by GUI

first navigate to

```bash
cd /opt/lampp/
```

```bash
sudo ./manager-linux-x64.run
```

<u>Step 5</u>: To Stop lampp

```bash
sudo /opt/lampp/lampp stop
```

## Tips

For sortcut used used alias
Below line to end of .zshrc or .bashrc what shell you using
&& you can customize stlampp/splampp as your wish

```bash
alias stlampp="sudo /opt/lampp/lampp start"
alias splampp="sudo /opt/lampp/lampp stop"
```
