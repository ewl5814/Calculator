from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

from db_utils import *
from history import *

app = Flask(__name__)
CORS(app) 
api = Api(app) 

api.add_resource(History, '/history')

if __name__ == '__main__':
    print("Loading db")
    exec_sql_file('history.sql')
    print("Starting flask")
    app.run(debug=True),
