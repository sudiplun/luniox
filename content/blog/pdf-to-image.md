---
title: "How to convert pdf to image to pdf on linux"
description: "convert pdf to image.jpg or all jpf to pdf on any linux with command line tool."
date: 2023-06-13
tags: Linux
---

## Table of contents

## Installation `pdftoppm`

To use the `pdftoppm` command-line tool, you need to first install `pdftoppm` which is a part of the **poppler / poppler-utils / poppler-tools** package. Install this package as follows depending on your Linux distribution

#### On Debian

```
sudo apt install poppler-utils
```

#### On RHEL/CentOS & Fedora

```
sudo dnf install poppler-utils
```

#### On Arch Linux

```
sudo pacman -S poppler
```

### Convert

#### PDF Document to Image

`pdftoppm -<image_format> <pdf_filename> <image_name>`

[more detials](https://www.tecmint.com/convert-pdf-to-image-in-linux-commandline/)

## Installation `Imagemagick` (image to pdf)

#### On Debian

```
sudo apt install imagemagick
```

#### On RHEL/CentOS & Fedora

```
sudo dnf install imagemagick
```

### Read/Write Issue

In that case, all you need is to edit the **policy.xml** file using an editor like vim.

`sudo vim /etc/ImageMagick-6/policy.xml`

Look for the line in the following example:

```bash
<policy domain="coder" rights="none" pattern="PDF" />
```

To fix the error, replace the rights from **_“none” to “read|write”_**

### Convert

#### To jpg to pdf

`convert *.jpg all.pdf`
