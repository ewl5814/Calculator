from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from swen_344_db_utils import *

class Count(Resource):
    def get(self):
        result = exec_get_all("SELECT * FROM count")
        return result
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("petridish", type=int, required=True, help="Petri Dish is required")
        parser.add_argument("experiment", type=str, required=True, help="Experiment is required")
        args = parser.parse_args()
        exec_commit("""
        INSERT INTO count(count, petridish, experiment)	
        VALUES  (0, %(id)s, %(experiment)s);
        """, {'experiment': args.experiment, 'id': args.petridish})

    def delete(self):
        parser = reqparse.RequestParser()
        parser.add_argument("petridish", type=int, required=True, help="Petri Dish is required")
        parser.add_argument("experiment", type=str, required=True, help="Experiment is required")
        args = parser.parse_args()
        exec_commit("""
        DELETE FROM count WHERE petridish=%(id)s AND experiment=%(experiment)s;
        """, {'id': args.petridish, 'experiment': args.experiment})






