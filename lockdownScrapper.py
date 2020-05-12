#!/usr/bin/env python

# Get scrappable HTML from web --------------------------------- #
import requests

scrappableWeb = requests.get('https://en.wikipedia.org/wiki/Curfews_and_lockdowns_related_to_the_COVID-19_pandemic').text

# Extract table data to different lists ------------------------ #
from bs4 import BeautifulSoup

soup = BeautifulSoup(scrappableWeb, 'lxml')
table = soup.find('table', {"class": "wikitable"})

A=[]
B=[]
C=[]
D=[]

for row in table.findAll('tr'):
  cells=row.findAll('td')
  if len(cells)==4:
    A.append(cells[0].find('a').find(text=True))
    B.append(cells[1].find(text=True))
    C.append(cells[2].find(text=True).rstrip("\n"))
    D.append(cells[3].find(text=True).rstrip("\n"))
  elif len(cells)==5:
    A.append(cells[0].find('a').find(text=True))
    B.append(cells[2].find(text=True))
    C.append(cells[3].find(text=True).rstrip("\n"))
    D.append(cells[4].find(text=True).rstrip("\n"))

# Print table in JSON ------------------------------------------ #
import pandas as pd
df=pd.DataFrame(A, columns=['country'])
df['startDate']=B
df['startDate']=C
df['level']=D

print(df.to_json(orient='table', index=False))
