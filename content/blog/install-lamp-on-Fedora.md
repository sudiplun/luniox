---
title: To Install LAMP On Fedora or RHL
description: LAMP is an open source Web development platform that uses Linux as the operating system, Apache as the Web server, MySQL as the relational database management system and PHP As the object-oriented scripting language.
date: 2023-06-19
tags:
   ["Web",
   "development",
   "php",
   "Linux",
   "Lamp"]
---

## Install the Apache package

![lamp](https://res.cloudinary.com/daewefkrz/image/upload/c_scale,h_277/v1686503549/Blog-Images/Web_Development/jd8stxv3qwleikpl6qgr.webp)

```bash
sudo dnf install httpd
```

## Apache service

### start

```bash
sudo systemctl start httpd
```

### Enable

_if you want your `httpd` auto start on boot run below command._

```bash
sudo systemctl enable httpd
```

### status

```bash
sudo systemctl status httpd
```

---

MariaDB is a popular open-source relational database management system (RDBMS) that is compatible with MySQL.

## Install MariaDB

```bash
sudo dnf install -y mariadb-server
```

## MariaDB service

### start

```
sudo systemctl start mariadb
```

### Enable

_if you want your `mariadb` autostart on boot run below command._

```bash
sudo systemctl enable mariadb
```

### status

```bash
sudo systemctl status mariadb
```

---

## MySQL_secure_installation

```bash
sudo mysql_secure_installation
```

### Open MariaDB configuration file

```bash
sudo mysql -u root -p
```

## Install PHP & modules command

```bash
sudo dnf install php -y
```

```bash
dnf install -y php-cli php-fpm php-common php-mbstring php-curl php-gd php-mysqlnd php-json php-xml php-intl php-pecl-apcu php-opcache
```

Now open the Apache configuration file and update the PHP test file

```bash
vim /var/www/html/test.php
```

## stop service

To stop a service like `httpd` or `mariadb` using systemctl, you can use the following command:

```bash
sudo systemctl stop httpd
```

Replace `httpd` with `mariadb` to stop it.

## disable service

If you want to prevent the service from starting automatically at boot time, you can disable it using the following command:

```bash
sudo systemctl disable httpd
```

Replace `httpd` with `mariadb` for it.
