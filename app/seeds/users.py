from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password',
        profileImage='https://i.imgur.com/YcP0tik.jpeg')

    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password',
        profileImage='https://i.imgur.com/I7Ul8TY.jpeg')

    Jylo = User(username='Jylo Mames', password='jylo', email='jylo@aol.com',
                 following=[bobbie],
                 profileImage='https://i.imgur.com/p81Eh87.jpeg')

    srad = User(username='Srad Bimpson', password='srad', email='srad@aol.com',
                  following=[bobbie, Jylo],
                  profileImage='https://i.imgur.com/7wQ61EW.jpeg')

    alvin = User(username='Alvin The Programmer', password='alvin', email='arath@aol.com',
                 following=[bobbie, Jylo, srad],
                 profileImage='https://i.imgur.com/JeJrTZr.jpeg')

    zark = User(username='Zark Muckerberg', password='zark', email='u1@aol.com',
              following=[bobbie, Jylo, srad, alvin],
              profileImage='https://i.imgur.com/Kkt2Fpe.jpeg')

    melon = User(username='Melon Eusk', password='melon', email='u2@aol.com',
              following=[bobbie, Jylo, srad, alvin, zark],
              profileImage='https://i.imgur.com/F9Nf9Fx.jpeg')

    cark = User(username='Cark Muban', password='cark', email='u3@aol.com',
              following=[bobbie, Jylo, srad, alvin, zark, melon],
              profileImage='https://i.imgur.com/udaJG1y.jpeg')

    beff = User(username='Beff Jesoz', password='beff', email='u4@aol.com',
              following=[bobbie, Jylo, srad, alvin, zark, melon,cark],
              profileImage='https://i.imgur.com/1fHjKze.jpeg')

    gill = User(username='Gill Bates', password='gill', email='u5@aol.com',
              following=[bobbie, Jylo, srad, alvin, zark, melon,cark, beff],
              profileImage='https://i.imgur.com/lb6j2Z5.jpeg')

    demo = User(
        username='Demo', email='demo@aa.io', password='password',
        following=[bobbie, Jylo, srad, alvin, zark, melon,cark, beff, gill],
        profileImage='https://i.imgur.com/NQz9NDx.jpeg')

    db.session.add_all([marnie, bobbie, Jylo, srad, alvin, zark, melon,cark, beff, gill, demo])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
