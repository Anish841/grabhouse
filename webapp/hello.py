import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/test')
def hello():
    return '0 1 2 3'

@app.route('/')
def firstpage():
    return render_template('ConstraintsForm.html')

@app.route('/about')
def about():
    return '{"Team": {"name":"IIIT-B BHKs", "members": ["Anish", "Pavan", "Navin", "Ganesh", "Android Guru aka Puneeth"]}}'

@app.route('/getroute')
def getseq():
    return render_template('ConstraintsForm.html')

#if __name__ == '__main__':
#    app.run(debug=True)