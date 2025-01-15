---
title: Basic on pacman
date: 2023-12-03
description: most basic pacman command that fulfill for bigenner in Arch Linux
tags:
   ["bash",
   "archLinux",
   "Linux"]
---

## Table of contents

## Pacman Commands Cheat Sheet

Pacman is the package manager for Arch Linux and its derivatives. It is used for package management, installation, and removal.

## Update Package Lists

```bash
sudo pacman -Sy
```

`-Sy`: Synchronizes the package databases.

## Upgrade All Packages

```bash

sudo pacman -Syu
```

`-Syu` :Synchronizes databases and upgrades all installed packages to their latest versions.

## A Package

### Install

```bash
sudo pacman -S package_name
```

`-S ` : install a package

### Remove

#### a Package

```bash
sudo pacman -R package_name
```

`-R`: Remove a package_name

#### its Dependencies

```bash
sudo pacman -Rn package_name
```

#### its Dependencies, and Configuration Files

```bash
sudo pacman -Rns package_name
```

## Search for a Package

```bash
pacman -Ss search_term
```

## Display Information about a Package

```bash
pacman -Qi package_name
```

## List installed Packages

```bash
pacman -Q
pacman -Qn
pacman -Qm
```

## Orphaned Packages

**List:**

```bash
pacman -Qdtq
```

**Remove**

```bash
sudo pacman -Rns $(pacman -Qdtq)
```

## Clean

### Package cache

```bash
sudo pacman -Sc
```

`-SC`: Removes old package versions from the cache.

### All Package Cache

```bash
sudo pacman -Scc
```
