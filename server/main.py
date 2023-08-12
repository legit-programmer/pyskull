from flask import Flask, request
import subprocess
import os

app = Flask(__name__)
command = "dir"

def writeTempFile(filename:str, code:str):
    with open(f'{filename}.py', 'w') as file:
        file.write(code)
        return file.name

def runTempFile(tempFile):
    command = f"python {tempFile}"
    output = subprocess.check_output(command, shell=True, text=True, stderr=subprocess.STDOUT)
    print(output)
    os.remove(tempFile)

@app.route("/")
def root():
    return "<p>Serving🔨...</p>"


@app.route("/hammer", methods=['POST'])
def interpret():
    if request.method == 'POST':
        token = request.form['token']
        code = request.form['code']
        tempfile = writeTempFile(token, code)
        runTempFile(tempfile)

    return "<p>Serving🔨...</p>"
