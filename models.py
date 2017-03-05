from sqlalchemy.dialects.postgresql import JSON
from app import db

class Studies(db.Model):
    __tablename__ = 'studies'

    id = db.Column(db.Integer, primary_key=True)
    link = db.Column(db.String())
    name = db.Column(db.Text())
    purpose = db.Column(db.Text())
    study_type = db.Column(db.Text())
    eligibility = db.Column(db.Text())
    recruiting_status = db.Column(db.Text())
    contact_name = db.Column(db.Text())



    def __init__(self, id, link, name, purpose, study_type, eligibility, recruiting_status, contact_name):
        self.id = id
        self.link = link
        self.name = name
        self.purpose = purpose
        self.study_type = study_type
        self.eligibility = eligibility
        self.recruiting_status = recruiting_status
        self.contact_name = contact_name

    def __repr__(self):
        return '<id {}'.format(self.id)
        


'''    
class Locations(db.Model):
    __tablename__ = 'locations'

    id = db.Column(db.Serial, primary_key=True)
    name = db.Column(db.Text())
    country = db.Column(db.Text())
    province = db.Column(db.String())
    city = db.Column(db.Text())
    care_center = db.Column(db.Text())


    def __init__(self, id, name, country, province, city, care_center):
        self.id = id
        self.name = name
        self.country = country
        self.province = province
        self.city = city
        self.care_center = care_center

    def __repr__(self):
        return '<id {}>'.format(self.id)
    
class StudyLocations(db.Model):
    __tablename__ = 'studies_locations'

    study_id = db.Column(db.Integer, ForeignKey("studies.id"))
    location_id = db.Column(db.Integer, ForeignKey("locations._id"))
    


    def __init__(self, study_id, location_id):
        self.study_id = study_id
        self.location_id = location_id

    def __repr__(self):
        return '<id {}>'.format(study_id.id)
        
'''