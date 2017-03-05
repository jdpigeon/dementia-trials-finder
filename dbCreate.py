from app import db
from models import Studies

# create the database and the database table
db.create_all()

# insert study data
study = Studies('123', 'Test STudy Name', 'Test Url', 'Purpose', 'Study Type', 'Currently Recruiting')
db.session.add(study)
 
# commit the changes
db.session.commit()