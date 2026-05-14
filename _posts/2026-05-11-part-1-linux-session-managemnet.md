---
layout: post
title: "Introduction to linux session"
date: 2026-05-11 12:28 +0545
categories: ["linux"]
tags: ["sessions"]
author: sudiplun
excerpt:
---

# Understanding Linux Sessions: From TTYs to systemd-logind

In the Linux ecosystem, a **session** is the fundamental unit of user interaction. It represents the period between authentication and logout, encompassing every command, process, and environment variable generated during that window. While the concept sounds simple, the underlying mechanics involve a sophisticated handoff between hardware abstractions, shell environments, and modern service managers.

---

## 1. The Terminal Landscape: TTYs vs. PTYs

Before a session can begin, there must be a medium for communication. Linux distinguishes between two types of terminal interfaces:

* **TTY (Teletype):** Historically referring to physical hardware, modern TTYs are virtual consoles provided by the kernel. You can switch between these (typically `TTY1` through `TTY6`) using shortcuts like `Ctrl+Alt+F1`.
* **PTY (Pseudo-terminal):** These are software-emulated terminals. When you open a terminal emulator (like GNOME Terminal) or connect via SSH, the system allocates a PTY pair to bridge the gap between the application and the shell.

---

## 2. Defining the Session Hierarchy

Not all interactions are created equal. Linux categorizes sessions based on how they are initiated and what they manage:

### Login Sessions

A login session begins at the moment of authentication—whether via `getty` on a TTY, an SSH daemon, or a graphical display manager. This session "owns" the terminal device and establishes the primary user environment.

### Interactive vs. Non-Login Shells

* **Login Shell:** The first process started after a successful login (e.g., `bash` reading `.bash_profile`).
* **Non-Login Shell:** A sub-shell started from within an existing session (e.g., typing `bash` while already in a terminal) which usually only reads `.bashrc`.

### User Sessions

In modern systems, a **User Session** is a broader concept managed by the system. It tracks the collective lifecycle of all user activity, including background services, GUI applications, and shell processes.

---

## 3. Security and Lifecycle: The Role of PAM

**Pluggable Authentication Modules (PAM)** serve as the intermediary between the user and the system's critical infrastructure. PAM manages the session lifecycle through several phases:

1. **Authentication:** Verifying the user's identity.
2. **Account Management:** Checking if the account is valid (e.g., not expired).
3. **Session Management:** This is where **Privileged Session Management (PSM)** occurs. PAM handles the "opening" and "closing" of the session, ensuring that permissions are granted only for a defined period and that resources are cleaned up upon logout.

---

## 4. Modern Management with systemd-logind

In contemporary distributions, `systemd-logind` acts as the definitive session manager. It operates as a background service that coordinates with PAM (via `pam_systemd.so`) to monitor user activity.

### Key Responsibilities of systemd-logind:

* **Tracking:** Uses D-Bus to track active sessions and users.
* **Resource Allocation:** Automatically starts the `user@UID.service` slice to manage a user's processes as a single unit.
* **Seat Management:** Handles "seats" (collections of hardware like keyboards and GPUs) to support multi-user environments and graphical logins.
* **Power Control:** Manages system-wide inhibitors, such as preventing a shutdown if a user is still logged in or handling the laptop lid-close behavior.

By integrating these components, Linux ensures that whether you are running a single command over SSH or managing a full desktop environment, your session remains secure, isolated, and resource-managed.
