---
title: Most useful command of iwctl while installing cli based OS i.e Arch
date: 2025-02-20
description: just see the lines
tags:
  - tool
---

[iwd](https://iwd.wiki.kernel.org/) (iNet wireless daemon) is a wireless daemon for Linux written by Intel. The core goal of the project is to optimize resource utilization by not depending on any external libraries and instead utilizing features provided by the Linux Kernel to the maximum extent possible.

## get execute line by line....!
That all you need to get-started with 
```bash 
iwctl
device list 
station wlan0 scan
station wlan0 get-networks
station wlan0 connect <SSID>
station wlan0 show (for verfied)
```

#### Optionally, third-party graphical and terminal user interface front-ends can be installed:

- **impala** — A TUI (Terminal User Interface) for iwd.
- **iwdgui** — A graphical front-end for iwd.