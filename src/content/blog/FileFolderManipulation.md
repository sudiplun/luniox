---
title: File and Folder manipulation via console?
author: Sudip Lun
pubDatetime: 2023-11-05T20:12:23Z
postSlug: file-folder-manipulation
ogImage:
featured: false
draft: true
tags:
  - Linux
description: command line tools for file manager
---

## How to Remove a Directory in Linux

o permanently remove a directory in Linux, use either **rmdir** or **rm** command:

- For empty directories, use **`rmdir [dirname]`** or **`rm -d [dirname]`**
- For non-empty directories, use `rm -r [dirname]`

Before you remove a directory, you need to know the name of it. To discover files and directories, use the **ls** command, and to know the current directory you are in, use the **pwd** command.

|                        |                                                                     |
| ---------------------- | ------------------------------------------------------------------- |
| **Command and Option** | **Description**                                                     |
| rm -d                  | Remove an empty directory using the **rm** command.                 |
| rm -r                  | Remove a non-empty directory and its content.                       |
| rm -f                  | Ignore any prompt when deleting a write-protected file.             |
| rm -rf                 | Ignore any prompt when deleting a write-protected non-empty folder. |
| rm -i                  | Output a prompt before deleting every file.                         |
| rm -I                  | Output a prompt only once before deleting more than three files.    |
| rm \*                  | Wildcard that represents multiple characters.                       |
| rm ?                   | Wildcard that represents a single character.                        |
| rmdir -p               | Remove an empty subdirectory and its parent directory.              |
| rmdir -v               | Print the information that the specified directory was deleted.     |
