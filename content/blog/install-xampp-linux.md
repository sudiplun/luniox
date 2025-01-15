---
title: Install xampp on Any Linux distro
description: campact version of lamp
date: 2023-05-05
tags: ["Web","development","php","Linux"]
---
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
