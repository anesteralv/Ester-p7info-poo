from flask import Flask
from werkzeug.utils import redirect
import math

app = Flask(__name__)


@app.route("/")
def hello_world():
    # return "<p>Hello, World!</p>"
    return redirect("/static/index.html")


@app.route("/hello")
def hello2():
    return "<h1>Hello, again!<h1>"


@app.route("/hello/plus/<string:name>")
def hello_plus(name):
    msg = "<h1>Hello, {}</h1>".format(name.upper())
    return msg


@app.route("/retangulo/perimetro/<int:lado1>/<int:lado2>")
def perimetro(lado1, lado2):
    s = (lado1 * 2) + (lado2 * 2)
    return str(s)


@app.route("/quadrado/perimetro/<int:lado>")
def quad_per(lado):
    s = lado * 4
    return str(s)


@app.route("/trapezio/perimetro/<int:baseM>/<int:basem>/<int:lado1>/<int:lado2>")
def trap_per(baseM, basem, lado1, lado2):
    s = basem + baseM + lado1 + lado2
    return str(s)


@app.route("/triangulo/perimetro/<int:lado1>/<int:lado2>/<int:lado3>")
def trian_per(lado1, lado2, lado3):
    s = lado1 + lado2 + lado3
    return str(s)


@app.route("/circulo/perimetro/<int:raio>")
def circulo_per(raio):
    s = 2 * math.pi * raio
    return str(s)


@app.route("/circulo/area/<int:raio>")
def circulo_area(raio):
    s = math.pi * (raio ** 2)
    return str(s)


@app.route("/retangulo/area/<int:base>/<int:altura>")
def retangulo_area(base, altura):
    s = base * altura
    return str(s)
