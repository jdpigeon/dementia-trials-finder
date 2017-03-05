from flask import Flask, render_template, request
from flask.ext.mysql import MySQL


app = Flask(__name__)

# MySQL configurations
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'pikmin'
app.config['MYSQL_DATABASE_DB'] = 'we4dementia'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)
conn = mysql.connect()
cursor = conn.cursor()


@app.route("/")
def main():
    return render_template('index.html')
    
# MySQL Functions
@app.route("/addStudy")
def addStudy():
    name = request.args.get('name')
    identifier = request.args.get('identifier')
    purpose = request.args.get('purpose')
    cursor.callproc('sp_createStudy',(name, identifier, purpose))
    data = cursor.fetchall()
    if len(data) is 0:
        conn.commit()
        print('User created successfully !')
    else:
        print('error')
   
    
if __name__ == "__main__":
    app.run(debug=True)