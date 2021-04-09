from flask import Flask,render_template,request, redirect, url_for
import flask
from flask.helpers import flash
from digits_recognition import digit_recog
from alphabet_recognition import alpha_recog
from keras import backend as K

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/digit")
def digit():
    val = digit_recog()
    if val == "q":
        return flask.redirect("/")

@app.route("/alphabet")
def alphabet():
    val = alpha_recog()
    if val == "q":
        return flask.redirect("/")

if(__name__=="__main__"):
    app.run(debug=True, threaded=False)