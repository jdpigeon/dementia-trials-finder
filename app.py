from flask import Flask, render_template, request
from flask.ext.sqlalchemy import SQLAlchemy
import json
import os

app = Flask(__name__)


# Postgres configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://new_user:password@localhost/dementiatrialsdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)



@app.route("/")
def main():
    print('test')
    return render_template('index.html')
    
        

@app.route("/postmethod", methods = ['POST'])
def get_post_javascript_data():
    jsdata = request.form['javascript_data']
    print (json.loads(jsdata)[0])
    return jsdata
        
   
    
if __name__ == "__main__":
    app.run(debug=True)
    from models import Studies