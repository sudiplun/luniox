---
title: how to install laravel on linux?
author: Sudip Lun
pubDatetime: 2023-10-04T14:12:23Z
postSlug: install-laravel-on-linux
ogImage: https://laravel.com/img/logotype.min.svg
featured: true
draft: false
tags:
  - Web
  - development
  - php
  - Linux
description: Laravel is a web application framework with expressive, elegant syntax.
---

## Table of contents

## prerequisites:

- PHP 7.4 or higher
- Composer
- A web server, such as Apache or Nginx
- A database server, such as MySQL or PostgreSQL

#### Follows [Guide](https://getcomposer.org/download/)

### Installation

_composer_

```bash
sudo dnf install composer
```

### setup

_Laravel globally_

```bash
composer global require "laravel/installer"
```

Add the Laravel bin directory to your PATH environment variable depending on shell:

```bash
source ~/.bashrc
source ~/.zshrc
```

for follow up on [documentation](https://laravel.com/docs/10.x/installation)
