---
title: tlp of conf for power-saving
description: TLP is a feature-rich command line utility for Linux, saving laptop battery power without the need to delve deeper into technical details.
date: 2024-01-15
tags: Linux
---

#### Long battery conf

This greatly works on Dell Vostro series laptop without GPU.

```bash
TLP_ENABLE=1
TLP_PERSISTENT_DEFAULT=0

#CPU_DRIVER_OPMODE_ON_AC=active
#CPU_DRIVER_OPMODE_ON_BAT=passive

CPU_SCALING_GOVERNOR_ON_AC=powersave
CPU_SCALING_GOVERNOR_ON_BAT=powersave

#CPU_ENERGY_PERF_POLICY_ON_AC=balance_performance
#CPU_ENERGY_PERF_POLICY_ON_BAT=balance_power

#PLATFORM_PROFILE_ON_AC=balanced
#PLATFORM_PROFILE_ON_BAT=balanced

RUNTIME_PM_ON_AC=auto
RUNTIME_PM_ON_BAT=auto

DISK_DEVICES="nvme0n1 sda"
DISK_APM_LEVEL_ON_AC="254 128"
DISK_APM_LEVEL_ON_BAT="254 128"
DISK_SPINDOWN_TIMEOUT_ON_AC="0 200"
DISK_SPINDOWN_TIMEOUT_ON_BAT="0 180"

#SOUND_POWER_SAVE_ON_AC=0
#SOUND_POWER_SAVE_ON_BAT=1

USB_AUTOSUSPEND=1

WIFI_PWR_ON_AC=on
WIFI_PWR_ON_BAT=on
```

[See tlp Documentation](https://linrunner.de/tlp/introduction.html)
