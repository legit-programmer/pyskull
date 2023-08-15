from flask import Flask, request
from flask_cors import CORS
from utils import *

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


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
        print(output)
        return {'output': output['output'], 'error':output['error']}

    return "<p>Serving🔨...</p>"
