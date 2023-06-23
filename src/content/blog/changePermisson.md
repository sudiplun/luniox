---
author: Sudip Lun
pubDatetime: 2023-06-13T15:22:00Z
title: "Change file folder permission ownership in Linux"
postSlug: ownership-permission
featured: false
draft: false
tags:
  - Linux
ogImage: ""
description: "change file and folder permission & ownership on linux file system by using `chown` && `chmod`, when you are have to access regularly on root directory."
---

## Change Directory Permission

How to change file/folder ownership?

```bash
sudo chown -R owner /
```

How to change file/folder permission like read/write/execute?

```bash
sudo chmod owner /
```

tips

- `-R` used for recursvely used for sub-directory
- owner like `root/$USER`
- / => your file location.
