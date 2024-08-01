import requests 
# URL del archivo que queremos descargar 
url = '<https://www.ejemplo.com/archivo.zip>' 
# Realizar una solicitud GET para descargar el archivo 
response = requests.get(url) 

# Verificar si la solicitud fue exitosa (código de estado 2 00)
if response.status_code == 200:
  # Guardar el contenido del archivo en un archivo local 
  with open('archivo_local.zip', 'wb') as f: f.write(response.content)
  print('Archivo descargado correctamente') 
else:
   print('Error al descargar el archivo: ', response.status_code)