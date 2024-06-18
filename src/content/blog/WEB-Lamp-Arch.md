---
title: Setup LAMP stack on Arch ?
author: Sudip Lun
pubDatetime: 2024-06-18T14:12:23Z
postSlug: setup-lamp-arch-linux
ogImage: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwus5NOJT6b3oTevs05R_Up4uMvh1cfy48pA&usqp=CAU
featured: true
draft: false
tags:
  - archLinux
  - Web
  - Lamp
description: setup lamp for arch linux
---

### Table of contents

### Setup LAMP stack on arch linux

### Installing packages

```bash
sudo pacman -Syu php apache php-apache mariadb phpmyadmin
```

### Edit httpd.conf

```bash
vim /etc/httpd/conf/httpd.conf
```

### final `httpd.conf`

```bash
LoadModule unique_id_module modules/mod_unique_id.so
LoadModule mpm_event_module modules/mod_mpm_event.so
LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
LoadModule php_module modules/libphp.so
AddHandler php-script .php
Include conf/extra/php_module.conf
Include conf/extra/phpmyadmin.conf
```

#### For Apache

_Search for and comment the following line if it is not already_
`[...] LoadModule unique_id_module modules/mod_unique_id.so [...]`

#### For php

**Search and locate the following and edit to read as**
`[...] #LoadModule mpm_event_module modules/mod_mpm_event.so LoadModule mpm_prefork_module modules/mod_mpm_prefork.so [...]`

**Scroll to the bottom of the file and add for current PHP**

```bash
LoadModule php_module modules/libphp.so
AddHandler php-script .php
Include conf/extra/php_module.conf
```

#### For phpmyadmin(phpmariadb.ini)

**Create/Edit the file**
`/etc/php/conf.d/phpmariadb.ini`

`vim /etc/php/conf.d/phpmariadb.ini`

```bash
extension=bz2
extension=iconv
extension=mysqli
extension=pdo_mysql
```

Save and close the file. Verify your ini-file is loaded
`php --ini`

**Create Apache configuration**

_Then create a new Apache configuration to be able to load phpMyAdmin_

`vim /etc/httpd/conf/extra/phpmyadmin.conf`

```bash
Alias /phpmyadmin "/usr/share/webapps/phpMyAdmin"
<Directory "/usr/share/webapps/phpMyAdmin">
DirectoryIndex index.php
AllowOverride All
Options FollowSymlinks
Require all granted
</Directory>
```

Edit the Apache configuration

`vim /etc/httpd/conf/httpd.conf`

Include phpMyAdmin configuration at the very end of the file

`[...] Include conf/extra/phpmyadmin.conf`

### Additional

#### Reset the password of mariadb

```sql
sudo mariadbd-safe --skip-grant-tables --skip-networking &
mysql -u root
```

#### Changing root password

```sql
mysql> FLUSH PRIVILEGES;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```

#### Aliases

Add below alias on your `.bashrc` or `.zshrc`

```bash
alias lampst="sudo systemctl start httpd && sudo systemctl start mariadb.service"
alias lampstat="sudo systemctl status httpd && sudo systemctl status mariadb.service"
alias lampsp="sudo systemctl stop httpd && sudo systemctl stop mariadb.service"
```

External link
https://forum.manjaro.org/t/howto-install-apache-mariadb-mysql-php-lamp/13000
https://www.digitalocean.com/community/tutorials/how-to-reset-your-mysql-or-mariadb-root-password
