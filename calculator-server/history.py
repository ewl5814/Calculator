from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from db_utils import *

class History(Resource):
    def get(self):
        result = exec_get_all("SELECT equation FROM history")
        return result
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("equation", type=str, required=True, help="Equation is required")
        args = parser.parse_args()
        exec_commit("""
        INSERT INTO history(equation)	
        VALUES  (%(equation)s);
        """, {'equation': args.equation})

    def delete(self):
        exec_commit("""
        DELETE FROM history;
        """)






