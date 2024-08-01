a = 5
b= 2.5
sum = a + b
print(sum)

c = "Hola mundo"
d = 'Comillas'

print(c)
print(d)

cadena = c + d
#print(cadena)

e = False
f = True
y_logico = e and f
print(y_logico) #False
o_logico = e or f
print(o_logico) #True

negacion = not e
print(negacion) #true

numbers = [1,2,3,4,5,6]
print(numbers)

numbers.append("Manu")
print(numbers)

numbers.remove(2)
print(numbers) #elimina el 2 de la lista


persona = {
  "Nombre" : "Manu",
  "edad" : 28

}

print(persona)
print(persona["edad"])

a = "ab"
b = 55
c = a+b
#print(c)#error no puede sumar