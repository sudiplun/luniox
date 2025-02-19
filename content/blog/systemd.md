---
title: systemd useful command
description: using systemctl
date: 2025-02-19
tags:
---

## Managing Services

on sudo

```bash
systemctl start <service>        # Start a service
systemctl stop <service>         # Stop a service
systemctl restart <service>      # Restart a service
systemctl reload <service>       # Reload config without stopping service
systemctl enable <service>       # Enable service to start at boot
systemctl disable <service>      # Disable service from starting at boot
systemctl status <service>       # Check status of a service
```

## Listing & Searching Services

```bash
systemctl list-units --type=service       # List all running services
systemctl list-units --type=service --all # List all services (including inactive)
systemctl list-unit-files --type=service  # List all installed services
systemctl list-dependencies <service>     # Show dependencies of a service
systemctl show <service>                  # Show detailed service information
```

## Logs & Troubleshooting

jounralctl to see logs

```bash
journalctl -xe                      # Show detailed logs for recent errors
journalctl -u <service>              # Show logs of a specific service
journalctl -f -u <service>           # Show live logs (follow mode)
journalctl --since "1 hour ago"      # Show logs from the last hour
journalctl --disk-usage              # Check log file size
sudo journalctl --vacuum-time=7d     # Delete logs older than 7 days
sudo journalctl --vacuum-size=100M   # Limit log size to 100MB
```
