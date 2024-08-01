  #Enviar datos en un formulario POST
import requests 
  # URL de la página que procesa el formulario 
url = 'https://www.marca.com'
 # Datos del formulario que queremos enviar 
data = {'user': 'test', 'password': 'test'}
  # Realizar una solicitud POST con los datos del formulario 
response = requests.post(url, data=data)
# Verificar si la solicitud fue exitosa (código de estado 2 00) 
if response.status_code == 200: # Imprimir la respuesta 
  print(response.text) 
else: 
  print('Error al enviar el formulario: ', response.status_code)