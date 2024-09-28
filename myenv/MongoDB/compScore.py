import os
import sys
from pymongo import MongoClient
from datetime import datetime
from bson.objectid import ObjectId
sys.path.append(os.path.abspath('/workspaces/JIMS/myenv/MatchingAlg'))

from personalityCompatability import main
from majorCompatability import majorCompatability
from organizationCompatability import compare_orgs


def get_database():
    CONNECTION_STRING = "mongodb+srv://mangia3:linked@linked-cluster.afu0s.mongodb.net/linked_database"
    client = MongoClient(CONNECTION_STRING)
    return client['linked_database']  

def get_user_by_id(user_id):
    db = get_database()
    return db['users'].find_one({"_id": user_id})

# Function to store a compatibility score
def store_compatibility_score(user1_id, user2_id):
    
    # Always store the smaller user_id as user1_id
    if user1_id > user2_id:
        user1_id, user2_id = user2_id, user1_id

    user1 = get_user_by_id(user1_id)
    user2 = get_user_by_id(user2_id)
    
    # Safely access organization, bios, and major with defaults
    organization1 = user1['clubs']      # None or default value if not found
    organization2 = user2['clubs']
    bios1 = user1['bio']
    bios2 = user2['bio']
    major1 = user1['major']
    major2 = user2['major']
    year1 = user1['year']
    year2 = user2['year']

    # Check for None values before calculating the score
    if organization1 is None or organization2 is None or bios1 is None or bios2 is None or major1 is None or major2 is None:
        print("Error: One or more required fields are missing.")
        return
    
    # Calculate compatibility score
    score = round(float(compare_orgs(organization1, organization2)) + float(main(bios1, bios2)) + float(majorCompatability(major1, major2, year1, year2)), 2)
    
    if score > 100:
        score = 100

    return (score, user2_id)
  
