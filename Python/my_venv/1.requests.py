#Realizar una solicitud GET y obtener el contenido de una pagina web
import requests
# URL de la página web que queremos obtener 
url = 'https://www.marca.com' # Realizar una solicitud GET a la URL especificada 
response = requests.get(url) # Verificar si la solicitud fue exitosa (código de estado 2 00) 
if response.status_code == 200: # Imprimir el contenido de la respuesta (HTML de la pág ina web) 
  #print(response.text)
  pass 
else: 
  print ('Error al acceder a la página: ' , response.status_code)

  #################################

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
