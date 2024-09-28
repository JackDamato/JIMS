from pymongo import MongoClient
def get_database():
    CONNECTION_STRING = "mongodb+srv://mangia3:linked@linked-cluster.afu0s.mongodb.net/linked_database"
    client = MongoClient(CONNECTION_STRING)
    return client["linked_database"]