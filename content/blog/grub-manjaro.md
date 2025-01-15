---
title: Directly boot on Manjaro while on dual boot machine?
description: Example of grub config for directly boot on Default os
date: 2023-12-14T19:26:23Z
---

## Navigation to file

```bash
sudo vim /etc/default/grub
```

## journey

on Manjaro, if you make `GRUB_TIMEOUT=0` or `GRUB_DISTRIBUTOR="Manjaro"` it doesn't boot to default OS.instead set timeout for `10s` It's simple you have to make `GRUB_TIMEOUT=0` 😐 huh..! It did not work.
so think about it...Actually by stop looking for OS by `GRUB_DISABLE_OS_PROBER=true` this line on your grub.
Manjora did an excellent job by writing everything out already; all that remains is to uncomment it.
