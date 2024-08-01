####Enviar datos JSON en una solicitud POST

import requests
import json

# URL del servicio API 
url = '<https://api.ejemplo.com/endpoint>'

# Datos en formato JSON que queremos enviar 
data = {'clave': 'valor'}

# Convertir los datos a JSON 
json_data = json.dumps(data)

# Especificar la cabecera Content-Type para indicar que se envía JSON 
headers = {'Content-Type': 'application/json'}

# Realizar una solicitud POST con los datos JSON y la cabec era especificada 
response = requests.post(url, data=json_data, headers=headers)

if response.status_code == 200: # Imprimir la respuesta 
  print(response.text) 
else: 
  print('Error al enviar el formulario: ', response.status_code)