---
title: Rescue Linux os from grub rescue mode
description: recover os from dual or more boot
date: 2024-03-29
tags: Linux
---

## prerequisite

you have to know basic of basic about partition for where your os system lies. most of modern desktop or laptop has ssd and may used gpt partition system.

## command

`ls` to see all the partition. <br>

`set boot=(hdX,gptX)` select correct partition that has to rescue form, also if you have to check partition FS type `ls (hdX,gtpX)` <br>
`set prefix=(hdX,gptX)/boot/grub` <br>
`insmod normal` <br>
`normal`

after this command you type you boot to your os
make sure after load to os run `sudo update-grub` depends on distro.
