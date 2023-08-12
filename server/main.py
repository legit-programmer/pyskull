from flask import Flask, request
import subprocess

app = Flask(__name__)
command = "dir"


@app.route("/")
def root():
    return "<p>Serving🔨...</p>"


@app.route("/hammer", methods=['POST'])
def interpret():
    if request.method == 'POST':
        
        data = request.form['code']
        # data['code']
        print(data)
        
    # output = subprocess.check_output(command, shell=True, text=True, stderr=subprocess.STDOUT)
    # print(output)

    return "<p>Serving🔨...</p>"
