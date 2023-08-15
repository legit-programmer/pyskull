import subprocess
import os

def writeTempFile(filename: str, code: str):
    with open(f'{filename}.py', 'w') as file:
        file.writelines(code.split('\n'))
        return file.name


def runTempFile(tempFile):
    command = f"python {tempFile}"
    output = subprocess.run(command, capture_output=True)
    os.remove(tempFile)
    if output.returncode != 0:
        return {'output':output.stderr.decode(), 'error':True}
    return {'output':output.stdout.decode(), 'error':False}
