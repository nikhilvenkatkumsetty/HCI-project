from flask import Flask,render_template,request, redirect, url_for
from digits_recognition import air_write

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/digit")
def digit():
    air_write()
    return 0

if(__name__=="__main__"):
    app.run(debug=True)