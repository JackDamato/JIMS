from pymongo_get_database import get_database
from datetime import date
from datetime import datetime

user = {
  "Username" : "",
  "Age" : 18,
  "AgeMin" : 17,
  "AgeMax" : 20,
  "Email" : "",
  "Ethnicity" : "",
  "Gender" : "",
  "GenderInterest" : "",
  "Interests" : "",
  "Major" : "",
  "Name" : "",
  "Organizations" : "",
  "Password" : "",
  "School" : "",
  "Year" : 1
}


activity = {
    "Creator" : "",
    "Title" : "",
    "Date" : str(date.today()),
    "Time" : str(datetime.now().time()),
    "Description" : "",
    "Tags" : ""
}

def commit_user():
    db = get_database()
    users = db['users']
    users.insert_one(user)


def commit_activity():
    db = get_database()
    activities = db['activities']
    activities.insert_one(activity)


commit_activity()