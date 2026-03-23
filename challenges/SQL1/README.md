# Defend the Flag - SQL Injection Lab

This is a local training lab that starts intentionally vulnerable.

## Goal

The user must secure `app/login.php` by:
- removing unsafe SQL concatenation
- adding backend validation
- using prepared statements

When the file is secured properly, the checker reveals the flag.

## Start

```bash
docker compose up -d

