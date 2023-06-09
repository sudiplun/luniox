---
author: Sudip Lun
pubDatetime: 2023-06-13T15:22:00Z
title: "How to convert pdf to image to pdf on linux"
postSlug: pdf-to-image-to-pdf-linux
featured: false
draft: false
tags:
  - Linux
ogImage: ""
description: "convert pdf to image.jpg or all jpf to pdf on any linux with command line tool."
---

## Install command line tool pdftoppm

To use the `pdftoppm` command-line tool, you need to first install `pdftoppm` which is a part of the poppler / poppler-utils / poppler-tools package. Install this package as follows depending on your Linux distribution

`sudo apt install poppler-utils` [On Debian/Ubuntu & Mint]
`sudo dnf install poppler-utils ` [On RHEL/CentOS & Fedora]
`sudo zypper install poppler-tools ` [On OpenSUSE]
`sudo pacman -S poppler  ` [On Arch Linux]

### Convert PDF Document to Image

`pdftoppm -<image_format> <pdf_filename> <image_name>`

[more detials](https://www.tecmint.com/convert-pdf-to-image-in-linux-commandline/)

### Imagemagick for image to pdf

`sudo apt install imagemagick` [On Debian]

`sudo dnf install imagemagick` [On RHEL/CentOS & Fedora]

In that case, all you need is to edit the **policy.xml** file using an editor like vim.
`sudo vim /etc/ImageMagick-6/policy.xml`

Look for the line in the following example:
<policy domain="coder" rights="none" pattern="PDF" />
To fix the error, replace the rights from “none” to “read|write”

### To jpg to pdf

`convert *.jpg all.pdf`
