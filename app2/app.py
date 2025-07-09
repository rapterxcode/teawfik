from flask import Flask
import os
import socket

app = Flask(__name__)

@app.route('/')
def home():
    hostname = socket.gethostname()
    return f"""
    <h1>Flask App 2</h1>
    <p>Hello from App 2!</p>
    <p>Container hostname: {hostname}</p>
    <p>Service: app2</p>
    """

@app.route('/health')
def health():
    return {'status': 'healthy', 'app': 'app2'}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)