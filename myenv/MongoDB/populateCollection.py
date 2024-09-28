from compScore import store_compatibility_score
import array
import os
import sys
from pymongo import MongoClient
from datetime import datetime
from bson.objectid import ObjectId

def get_database():
    CONNECTION_STRING = "mongodb+srv://mangia3:linked@linked-cluster.afu0s.mongodb.net/linked_database"
    client = MongoClient(CONNECTION_STRING)
    return client['linked_database']  

def get_user_by_id(user_id):
    db = get_database()
    return db['users'].find_one({"_id": user_id})

# Call this function for some person, and then it populates their "Collection" with all of their compatability scores
def populate_collection(user1_id):
    #arrlist is a list of tuples, (score, ID)
    arrlist = []
    db = get_database()
    user1 = get_user_by_id(user1_id)
    users = db['users'].find()
    for user2 in users:
        if user1['_id'] != user2['_id']:
            arrlist += store_compatibility_score(user1['_id'], user2['_id'])
    #sort the array
        print(arrlist)
    populate_collection(ObjectId('66f7ea39a0b41cd4dc7a5126'))

def sortMatch():
    arrNames = []
    for i in arrlist:
        arrNames += get_user_by_id(i[1])['_id']

    arrNames.sort(reverse=True)
    return arrNames
