from bottle import route, run, template, static_file
import json
import random

# serve static files
@route('/static/:path#.+#', name='static')
def static(path):
    return static_file(path, root='static')


@route('/')
def index():
    output = template('index')
    return output
    
@route('/activities')
def return_activity():
    result = {}
    
    with open('activities.json', 'r', encoding='utf-8') as in_file:
        activities = json.loads(in_file.read())
    
    for i in range(3):
        index = random.randint(0, len(activities) - 1)
        result[i] = activities[index]
        
    return(result)    
    

run(host='localhost', port=8080)