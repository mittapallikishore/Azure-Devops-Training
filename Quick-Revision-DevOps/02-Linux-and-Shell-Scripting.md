# 02 – Linux and Shell Scripting

## Linux essentials
Linux is an operating system widely used for servers, containers and cloud workloads. Important directories:
- `/` – filesystem root
- `/home` – user home directories
- `/etc` – configuration
- `/var/log` – logs
- `/var` – variable application/system data
- `/tmp` – temporary files
- `/usr/bin` – common executable programs

## Common commands
```bash
pwd
ls -lah
cd /path
mkdir demo
touch app.log
cp source destination
mv old-name new-name
rm file
find . -name "*.log"
grep -n "ERROR" app.log
cat file
less file
tail -f app.log
```

## Permissions
- `r` = read, `w` = write, `x` = execute.
- `chmod 755 script.sh` gives owner full access and others read/execute.
- `chown user:group file` changes ownership.
- Use `sudo` only when elevated privileges are required.

## Processes and services
```bash
ps aux
top
kill <PID>
systemctl status nginx
sudo systemctl restart nginx
journalctl -u nginx
```
Use graceful service management before terminating processes.

## Networking and troubleshooting
```bash
ip addr
ip route
ping example.com
curl -I https://example.com
ss -tulnp
nslookup example.com
```

## Package and log management
Use the package manager for the distribution (for example `apt` or `dnf`). Inspect service logs with `journalctl` and application logs under the configured log directory.

## Bash scripting
```bash
#!/usr/bin/env bash
set -euo pipefail

URL="http://localhost:3000/health"
if curl --fail --silent "$URL" >/dev/null; then
  echo "Application is healthy"
else
  echo "Application health check failed" >&2
  exit 1
fi
```
- Variables: `NAME=value`
- Conditions: `if ...; then ...; fi`
- Loops: `for item in ...; do ...; done`
- Functions: reusable named blocks.
- `set -euo pipefail` helps scripts fail safely; understand its effects before using it.

## Interview check
**How do you troubleshoot a Linux service?** Check `systemctl status`, inspect `journalctl`, verify configuration, ports, permissions, dependencies and resource usage.
