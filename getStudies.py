from app import db
import sys
from models import Studies
from models import Locations

def getStudiesInCity(city):
    results = db.session.query(Studies).filter(Studies.location==city)
    print('Hello world!', file=sys.stderr)
    return results
    