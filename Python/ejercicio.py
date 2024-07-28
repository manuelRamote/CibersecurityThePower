#cyberthepower@gmail.com
''''
Ejercicio 1: Conversor de Temperatura Escribe un programa que convierta una temperatura de grados Celsius a grados Fahrenheit
'''
def Cels_a_Fahr(celsius):
  fahrenheit = celsius * (9/5) + 32
  return fahrenheit

#temperatura = float(input("Introduzca la temperatura a convertir en C:"))
#temperatura_farenheit = Cels_a_Fahr(temperatura)
#print(f"La temperatura en F es:  {temperatura_farenheit}")

'''
Ejercicio 2: Calculadora de Propina Crea un programa que calcule el monto total a pagar en un restaurante, incluyendo una propina del 15% sobre el total de la cuenta
'''
def calc_propina(consumo):
  propina = consumo * 0.15
  total = consumo + propina
  return total
#consumo = float(input("Introduzca el total a pagar: "))
#total = calc_propina(consumo)
#print(f"El total a pagar con la propina es : {total}")

'''
Ejercicio 3: Verificación de Edad Escribe un programa que solicite la edad de un usuario y determine si es mayor de edad (mayor o igual a 18 años) o no
'''
def ver_edad(edad):
  if edad >= 18:
    return ("Erers mayor de edad")
  else: 
    return ("No erers mayor de edad")

#edad = int(input("Introduce tu edad "))
#print(ver_edad(edad))

'''
Ejercicio 4: Contador de Vocales Crea un programa que cuente el número de vocales en una palabra ingresada por el usuario.
'''
def cont_vocal(palabra):
  vocales = "aeiou"
  cont = 0
  for letra in palabra:
    if letra in vocales: 
        cont += 1
  return cont
    
#palabra = input("Introduce una palabra: ")
#numero_vocal = cont_vocal(palabra)
#print(f"El numero de vocales es : {numero_vocal}")

''''
Ejercicio 5: Suma de Números Pares Escribe un programa que calcule la suma de todos los números pares del 1 al 100.
'''
suma = 0
for numero in range (2,101,2):
   suma +=numero

#print(f"La suma  de todos los numeros pares es : {suma}" )

'''
Ejercicio 6: Verificación de Palíndromo Crea un programa que verifique si una palabra ingresada por el usuario es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
'''
def es_Palindromo(palabra):
  palabra_invert = palabra[::-1]
  if palabra == palabra_invert:
      return True
  else: 
    return False

#palabra = input("Introduce una palabra: ")

#if es_Palindromo(palabra):
 # print("Es un palindromo")
#else:
 # print("No es un palindromo")

'''
Ejercicio 7: Calculadora Simple Crea un programa que realice operaciones aritméticas simples (suma, resta, multiplicación, división) según la elección del usuario
'''

def calculadora(a,b, oper):
  total = 0
  if oper == "suma":
    total = a + b
  elif oper =="resta":
    total = a - b
  elif oper == "mult":
    total = a * b
  elif oper == "div":
    total = a / b
  else:
    return "Dato incorrecto"
  return total

#operacion = input("Introduzca la opcion (suma,resta,mult,div) que quiere realizar: ")
#num1 = int(input("Introduce un primer numero: "))
#num2 = int(input("Introduce un segundo numero: "))
#res = calculadora(num1,num2, operacion)
#print(res)

'''
Ejercicio 8: Cálculo del Índice de Masa Corporal (IMC) Escribe un programa que calcule el Índice de Masa Corporal (IMC) de una persona.
'''
def calcula_IMC(peso, altura):
  imc = peso / (altura**2)
  return imc

#peso = float(input("Introduce tu peso en Kg: "))
#altura = float(input("Introduzca tu altura en metros: "))

#imc= calcula_IMC(peso,altura)
#print(f"Tu indice de IMC es: {imc:.2f}" )

'''
Ejercicio 9: Conversor de Divisas
Crea un programa que convierta una cantidad de dólares a euros. Suponiendo que 1 dólar es igual a 0.85 euros.
'''

def conv_divisa(dolares):
  euros = dolares * 0.85
  return euros

#cantidad_dolares = float (input("Introduzca los dolares a convertir: "))
#cantidad_euros =conv_divisa (cantidad_dolares)
#print(f"La cantidad de euros a dolares es  : {cantidad_euros}")

'''
Ejercicio 10: Determinar el Día de la Semana Escribe un programa que determine el día de la semana correspondiente a un número ingresado por el usuario (1 para lunes, 2 para martes, etc.).
'''
def determinar_dia(numero):
  dias_semana = ["lunes","martes", "miercoles","jueves","viernes","sabado","domingo"]
  if numero >=1 and numero <=7:
     return dias_semana[numero-1]
  
#dia = int(input("Introduce un numero del del dia del 1 al 7: "))
#nombre_dia = determinar_dia(dia)
#print(f"El dia de la semana correspondiente es {nombre_dia}")

'''
Ejercicio 11: Calculadora de Edad Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual.
'''
def calc_edad(numero):
  anio_actual = 2024
  edad = anio_actual - numero
  return edad

#ano_nacimiento = int(input("Introduce tu año nacimiento: "))
#edad = calc_edad(ano_nacimiento)
#print(f"Tu edad es : {edad}")

'''
Ejercicio 12: Calculadora de Área de un Rectángulo Crea un programa que calcule el área de un rectángulo. El usuario debe ingresar la longitud y el ancho del rectángulo.
'''
def calcula_area_rectan(longitud,anchura):
  area= longitud* anchura
  return area

#longitud = float(input("Introduce la longitud del rectangulo: "))
#anchura = float(input("Introduce la anchura del rectangulo: "))

#area_rect = calcula_area_rectan(longitud, anchura)
#print(f"El area es del rectangulo es: {area_rect}")

'''
Ejercicio 13: Verificación de Número Primo Escribe un programa que determine si un número ingresado por el usuario es primo o no.
'''

def es_primo(numero):
  if numero <=1:
    return False
  for i in range (2, numero):
    if numero % i == 0:
      return False
  return True

#num = int (input("Introduce un numero: "))
#if es_primo (num):
#  print (f"El numero {num} es primo ")
#else:
#  print (f"El numero {num} no es primo ")

'''
Ejercicio 14: Calculadora de Descuento Crea un programa que calcule el precio final de un artículo después de aplicar un descuento del 20%.
'''
def calc_desc(consumo):
  desc = consumo * 0.2
  total = consumo - desc
  return total
#precio_orig = float(input("Introduzca el total a pagar: "))
#total = calc_desc(precio_orig)
#print(f"El total a pagar con el descuento es : {total}")

'''
Ejercicio 15: Conversor de Tiempo Escribe un programa que convierta un número de minutos en horas y minutos. Por ejemplo, 145 minutos serían 2 horas y 25 minutos
'''

def con_min_hor(num):
  horas= num//60
  minutos_rest = num % 60
  return horas, minutos_rest

#minutos = int(input("Introduzca la cantidad de minutos: "))
#horas, min_rest = con_min_hor(minutos)
#print(f"{minutos} serian {horas} y {min_rest} minutos")

'''
Ejercicio 16: Contador de Números Pares e Impares Crea un programa que cuente y muestre la cantidad de números pares e impares en una lista ingresada por el usuario.
'''
def cont_pares_impares(lista):
  pares = 0
  impares= 0
  for num in lista:
    if num% 2 == 0:
      pares += 1
    else:
      impares += 1
  return pares, impares

#numeros = list(map(int, input ("Introduce una lista de numeros separados por espacio: ").split()))
#pares, impares = cont_pares_impares(numeros)
#print(f"La lista contiene {pares} numeros pares y  {impares} numeros impares")

'''
Ejercicio 17: Conversor de Millas a Kilómetros Escribe un programa que convierta una distancia en millas a kilómetros. Sabiendo que 1 milla equivale a 1.60934 kilómetros.
'''
def millas_Km (millas):
  km = millas *1.6034
  return km

#millas = float(input("Introduce la distancia en millas " ))
#km = millas_Km(millas)
#print(f"La distancia en Km es {km:.2f}")
'''
Ejercicio 18: Contador de Palabras Crea un programa que cuente la cantidad de palabras en una oración ingresada por el usuario.
'''
def contar_palabra(frase):
  palabras = frase.split()
  print(palabras)
  cantidad_palabras = len(palabras)
  return cantidad_palabras

#oracion = input("Introduce una oracion " )
#numero_palabr = contar_palabra(oracion)
#print(f"La oracion tiene {numero_palabr} palabras")

'''
Ejercicio 19: Verificación de Año Bisiesto Escribe un programa que determine si un año ingresado por el usuario es bisiesto o no.
'''
def es_bisiesto(num):
  if(num % 4 == 0 and num %100 != 0) or num % 400 == 0 :
    return True 
  return False

#ano = int (input ("Introduce el año: "))
#if es_bisiesto(ano):
#  print(f"el {ano} es un bisiesto")
#else:
#  print(f"el {ano} no es un bisiesto")


'''
Ejercicio 20: Suma de Números en una Lista Crea un programa que sume todos los números en una lista ingresada por el usuario.
'''
def suma_lista (lista):
  suma = 0
  for num in lista:
    suma += num
  return suma

#numeros = list(map(int, input ("Introduce una lista de numeros separados por espacio: ").split()))
#res = suma_lista (numeros)
#print(f"La suma de los numeros en la lista es : {res}")