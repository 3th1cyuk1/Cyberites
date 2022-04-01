#!/bin/bash

waybackurls $1 | grep "=" | uro | tee test

python3 xss.py test 2>/dev/null | grep "Vulnerable" | tee -a tests
