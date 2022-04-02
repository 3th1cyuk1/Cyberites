#!/bin/bash
from flask import Flask, request, render_template
from os import system
import subprocess

app = Flask(__name__)

@app.route("/")
def welcome():
  return render_template('main.html')

@app.route("/run", methods=["POST"])
def script():
     url = request.form['url']
     system('./bash.sh {}'.format(url))
     f = open("tests", "r")
     out = f.readlines()
     f.close()
     output = ''
     for i in out:
       output = output + "<li>" + i
     return output

app.run(debug=True)
