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

l_real= [x.r, y.r, z.i]
print(l_real)