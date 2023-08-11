from flask import Flask, request
import subprocess

app = Flask(__name__)
command = "dir"


@app.route("/")
def root():
    return "<p>Serving🔨...</p>"


@app.route("/hammer", methods=['POST'])
def interpret():
    print("lsdjflksajf lsajf lkjj ")
    if request.method == 'POST':
        print('catcj')
        data = request.get_json()
        print(data)
    # output = subprocess.check_output(command, shell=True, text=True, stderr=subprocess.STDOUT)
    # print(output)

    return "<p>Serving🔨...</p>"
