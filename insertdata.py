import mysql.connector

db = mysql.connector.connect(
    host="localhost", username="root", password="Gourav@#1234", database="contactfile"
)

cursor = db.cursor()

# Insert example data

insert_query = """
INSERT INTO contactdata (name, email, phone, issue, message)
VALUES(%s, %s, %s, %s, %s)
"""
data = ("JohnTester", "test@example.com", "1234567890", "Login", "This is test message")
cursor.execute(insert_query, data)
db.commit()

print("Data inserted successfully")

# Fetch all data
cursor.execute("SELECT * FROM contactdata")
results = cursor.fetchall()

print("\nSaved contact message")
for row in results:
    print(row)
cursor.close()
db.close()
