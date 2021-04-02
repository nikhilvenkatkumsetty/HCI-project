from flask import Flask,render_template,request, redirect, url_for
import flask
from flask.helpers import flash
from digits_recognition import air_write
from alphabet_recognition import alpha_recog

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/digit")
def digit():
    air_write()
    return flask.redirect("/")

@app.route("/alphabet")
def alphabet():
    alpha_recog()
    return flask.redirect("/")

if(__name__=="__main__"):
    app.run(debug=True)