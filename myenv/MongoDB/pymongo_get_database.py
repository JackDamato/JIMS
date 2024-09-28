from pymongo import MongoClient
def get_database():
    CONNECTION_STRING = "mongodb+srv://mangia3:linked@linked-cluster.afu0s.mongodb.net/"

    client = MongoClient(CONNECTION_STRING)

    print(client)
    return True


get_database()