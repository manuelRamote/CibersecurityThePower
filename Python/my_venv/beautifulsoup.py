from bs4 import BeautifulSoup
import requests


url = "https://www.as.com"

response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

headings  = soup.find_all('script')
for heading in headings:
  print(heading.text)