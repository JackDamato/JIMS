import sqlite3

# Note that profile must be imported as a tuple
# profile =Username,Name,Age,Gender,Major,Year,CareerGoals,ClubsAndOrganizations,Interests,Personality,Home,Dorm,Ethnicity
def add_profile(database, profile):
    profile = ()
    sql_query = ''' INSERT INTO Profiles(Username,Name,Age,Gender,Major,Year,CareerGoals,ClubsAndOrganizations,Interests,Personality,Home,Dorm,Ethnicity)
                    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?) '''
    cur = database.cursor()
    cur.execute(sql_query, profile)
    database.commit()
    return True


def add_activity():
    return


def add_organization():
    return


def main(data, table):
    try:
        with sqlite3.connect('')