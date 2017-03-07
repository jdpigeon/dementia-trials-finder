from flask import Flask, render_template, request
from flask.ext.sqlalchemy import SQLAlchemy
import json
import os

app = Flask(__name__)


# Postgres configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://new_user:password@localhost/dementiatrialsdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)

testdata = {}
testdata['url'] = "https://clinicaltrials.gov/ct2/show/NCT02386670?term=prevention+of+alzheimer%27s+disease&rank=2"
testdata['name'] = "Prevention of Alzheimer's Disease With CR Plus tDCS in Mild Cognitive Impairment and Depression (PACt-MD) (PACt-MD)"
testdata['purpose'] = "This 5-year randomized controlled trial will compare the efficacy of non-invasive brain stimulation (trans-cranial Direct Current Stimulation - tDCS) combined with cognitive remediation (CR) versus sham (placebo) tDCS combined with sham (placebo) CR in slowing down cognitive decline and preventing Alzheimer's Dementia in older persons with mild cognitive impairment or major depressive disorder with or without mild cognitive impairment."
testdata['centre'] = "Centre for Addiction and Mental Health"
testdata['location'] = "Toronto, Ontario, Canada, M6J 1H4"
testdata['study_type'] = "Interventional"
testdata['eligibility'] = "60 Years and older  (Adult, Senior)"
testdata['recruitment'] = "This study is currently recruiting participants."
testdata['contact'] = "Lillian Lourenco, MPH	416-535-8501 ext 30409"
json_data = json.dumps([testdata]);

@app.route("/")
def main():
    return render_template('index.html')
         

@app.route("/postmethod", methods = ['POST'])
def get_post_javascript_data():
    jsdata = request.form['javascript_data']
    print (json.loads(jsdata)[0])
    return jsdata
        
@app.route("/getmethod")
def sendTrials():
    if request.method == 'GET':
        return json_data
   
    
if __name__ == "__main__":
    app.run(debug=True)
    from models import Studies