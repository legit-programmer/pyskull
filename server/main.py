from flask import Flask, request
from flask_cors import CORS
import subprocess
import os

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

def writeTempFile(filename:str, code:str):
    with open(f'{filename}.py', 'w') as file:
        file.write(code)
        return file.name

def runTempFile(tempFile):
    command = f"python {tempFile}"
    output = subprocess.check_output(command, shell=True, text=True, stderr=subprocess.STDOUT)
    os.remove(tempFile)
    print(output)
    return output
    

@app.route("/")
def root():
    return "<p>Serving🔨...</p>"


@app.route("/hammer", methods=['POST', 'GET'])
def interpret():
    if request.method == 'POST':
        token = request.form['token']
        code = request.form['code']
        tempfile = writeTempFile(token, code)
        output = runTempFile(tempfile)
        return {'output': output}
    
    return "<p>Serving🔨...</p>"
