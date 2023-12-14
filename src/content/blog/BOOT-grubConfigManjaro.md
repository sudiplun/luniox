---
title: Directly boot on Manjaro while on dual boot machine?
author: Sudip Lun
pubDatetime: 2023-12-14T19:26:23Z
postSlug: manjaro-grub-config
ogImage: https://forum.manjaro.org/uploads/default/original/3X/5/d/5ddc2c283c53eae8d1f9b20d4702346c13d52a7f.jpeg
featured: false
draft: false
tags:
  - archLinux
  - Linux
description: Example of grub config for directly boot on Default os
---

## Table of Contents

## Navigation to file

```bash
sudo vim /etc/default/grub
```

## journey

on Manjaro, if you make `GRUB_TIMEOUT=0` or `GRUB_DISTRIBUTOR="Manjaro"` it doesn't boot to default OS.instead set timeout for `10s` It's simple you have to make `GRUB_TIMEOUT=0` 😐 huh..! It did not work.
so think about it...Actually by stop looking for OS by `GRUB_DISABLE_OS_PROBER=true` this line on your grub.
Manjora did an excellent job by writing everything out already; all that remains is to uncomment it.
