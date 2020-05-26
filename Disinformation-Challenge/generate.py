#!/usr/bin/env python

import csv
import json
import collections

# aliases
OrderedDict = collections.OrderedDict

src = 'sheet.csv'
dst = 'data.json'
header = [
    'Source','Article' 'Title' ,'URL','x' ,'y','','','Article Text'
]

data = []
with open(src, 'r') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in reader:
        if row[0].strip()[0] == '#':  #
            continue
        row = filter(None, row)
        data.append(OrderedDict(zip(header, row)))

with open(dst, 'w') as jsonfile:
    json.dump(data, jsonfile, indent=2)