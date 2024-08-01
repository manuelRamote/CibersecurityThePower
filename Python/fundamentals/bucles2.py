patatas = 5
tomates =4
naranjas = 7

productos= [patatas,tomates,naranjas]
print(productos)

total = 0
for producto in productos:
  total += producto

print(total) #16

tareas = ["T1", "T2","T3","T4"]

while len(tareas) > 0:
  tarea_actual = tareas.pop(0)
  print(f"Estoy completando la tarea {tarea_actual}")

print ("Puedes descansar")

estudiante= {
  "nombre " : "Manu",
  "apellido" : "Ramirez"
}

for clave,valor in estudiante.items():
  print(clave, ": " , valor)
  print (valor)


numeros = [5,8,10,-3,2,1]

for numero in numeros:
  print(numero)
  if numero < 0:
    print ("El primer numero negativo encontrado es : ", numero)
    break
