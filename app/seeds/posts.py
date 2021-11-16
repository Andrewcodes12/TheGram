from app.models import db, Post
from datetime import datetime

now = datetime.now()

# Adds a demo user, you can add other users here if you want
def seed_posts():
    post1 = Post(userId=2, photoUrl='https://i.imgur.com/ykR5kzJ.png',
                 caption='Brad', likes=1, created_at=f'{now}')


    seed=[post1]


    for i in seed:
        db.session.add(i)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
