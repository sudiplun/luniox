---
title: "copy & cut in Vim"
author: Sudip Lun
pubDatetime: 2023-06-05T19:24:23Z
postSlug: cut-and-yank-vim
featured: false
draft: false
tags:
  - vim
  - Linux
  - Text Editor
ogImage: "https://res.cloudinary.com/daewefkrz/image/upload/c_scale,w_418/v1686503575/Blog-Images/Linux/oetndc7g7bueksrwdfqz.webp"
description: "Frequently using key bindings in Vim/Neovim"
---

## Table of contents

## Basic

### Copy(yank) in vim

**yiw** - yank the current word  
**yw** \- yank from the current cursor location to start of next word  
**yb** - yank from current cursor location to the end of the previous word  
**yy** \- yank the whole line (along with the newline character)  
**4yy** - yank 4 lines (along with the newline character)  
**y$** - yank from the current cursor location to the end of the line.

### Cut in Vim

**diw** - delete (cut) current word  
**dw** \- delete (cut) from the current cursor location to the start of the next word  
**db** - delete (cut) from the current cursor location to the end of the previous word  
**dd** - delete (cut) the whole line (along with the newline character)  
**4dd** - delete (cut) 4 lines (along with the newline character)  
**d$** - delete (cut) from current cursor location to the end of the line  
**d^** - delete (cut) from the current cursor location to the start of the line  
**di"** - delete inside double quotation place your cursor inside "  "

**Paste in Vim**  
**p** text after cursor **P** text before cursor
