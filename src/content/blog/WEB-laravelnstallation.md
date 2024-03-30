---
title: setup Laravel on linux?
author: Sudip Lun
pubDatetime: 2023-10-04T14:12:23Z
postSlug: install-laravel-on-linux
ogImage: https://laravel.com/img/logotype.min.svg
featured: false
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
- A web server, such as Apache
- A database server, such as MySQL or PostgreSQL

### Installation

_composer_

#### Follows for offical [Guide](https://getcomposer.org/download/)

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

##### Gobal install

```bash
sudo mv composer.phar /usr/local/bin/composer
```

##### on fedora

```bash
sudo dnf install composer
```

##### on Arch Linux

```bash
sudo pacman -Syu composer
```

#### Create new Laravel Project

After you have installed PHP and Composer, you may create a new Laravel project via Composer's create-project command:

```bash
composer create-project laravel/laravel example-app
```

for follow up on [documentation](https://laravel.com/docs/10.x/installation)
