---
title: Mount iPhone on your linux machine?
date: 2023-06-26
description: Mount  directories of an iOS device locally using fuse. By default the media directory is mounted, options allow to also mount the sandbox container of an app, an app's documents folder or even the root filesystem on jailbroken devices.
tags: iPhone

---

### ifuse basic command

![ifuse](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwus5NOJT6b3oTevs05R_Up4uMvh1cfy48pA&usqp=CAU)

## Mount

### whole iphone

**if want mount all your iPhone directory**

```bash
ifuse ~/iPhone/
```

### VM

view that share virtual memory by Application in your iPhone

```bash
ifuse --list-apps
```

### documents

**documents in iPhone directory**

```bash
ifuse --documents com.spotify.client ~/iPhone
```

This command mount virtual space share by install application to view what application `ifuse --list-apps` and see their package name `com.spotify.client`

## unmount

**your iphone when you have mount**

```bash
fusermount -u ~/iPhone
```

Oh,i forget you should make iPhone directory on home if you have to copy/paste

```bash
mkdir ~/iPhone
```
