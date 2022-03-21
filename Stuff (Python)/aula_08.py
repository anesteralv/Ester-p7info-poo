class parking:
    i= 1234
   

    def f(self):
        return'hello world'

b = parking()

print(b.f())


class Complex:
    def __init__(self, real, img):
        self.r = real
        self.i = img


x = Complex(3, 4)
y = Complex(1, 1)
z = Complex(3, 7)

l_real= [x.r, y.r, z.r]
print(l_real)

class triangulo:
    def __init__(self, base, altura):
        self.b = base
        self.a = altura
        area = (base*altura)/2
        print(area)

x = triangulo(int(input("Digite o valor da base: ")), int(input("Digite o valor da altura: ")))

class Pai:
    Nome = 'Carlos'
    Sobrenome = 'Oliveira'
    Residência = "Filha Solteira"

class Filha(Pai):
    Nome = "Luciana"
    Olhos = 'castanho'
    