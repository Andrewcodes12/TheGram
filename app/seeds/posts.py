from app.models import db, Post
from datetime import datetime

time = datetime.now()

def seed_posts():
    post1 = Post(userId=2, photoUrl='https://i.imgur.com/ykR5kzJ.png',
                 caption='Such a mean dog', likes=1, created_at=f'{time}',userName='Bobbie Light',profileImage='https://i.imgur.com/I7Ul8TY.jpeg')
    db.session.add(post1)
    post2 = Post(userId=1, photoUrl='https://i.imgur.com/H37kxPH.jpeg',
                 caption='When your owner fake throws the ball too many times', likes=2, created_at=f'{time}',userName='Marnie Barnie',
        profileImage='https://i.imgur.com/YcP0tik.jpeg')
    db.session.add(post2)
    post3 = Post(userId=4, photoUrl='https://i.imgur.com/gtWsPu9.jpeg',
                 caption='Your neighborhood treat dealer', likes=1, created_at=f'{time}',userName='Srad Bimpson',profileImage='https://i.imgur.com/7wQ61EW.jpeg')
    db.session.add(post3)
    post4 = Post(userId=11, photoUrl='https://i.imgur.com/n1aIhF3.jpeg',
                 caption='TBT', likes=3, created_at=f'{time}',userName='Demo',
        profileImage='https://i.imgur.com/NQz9NDx.jpeg')
    db.session.add(post4)
    post5 = Post(userId=2, photoUrl='https://i.imgur.com/bC7Rb21.jpeg',
                 caption='Do you think he noticed?', likes=0, created_at=f'{time}',userName='Bobbie Light',profileImage='https://i.imgur.com/I7Ul8TY.jpeg')
    db.session.add(post5)
    post6 = Post(userId=3, photoUrl='https://i.imgur.com/0qZGhaD.jpeg',
                 caption='RIP Harambe', likes=2, created_at=f'{time}',userName='Jylo Mames',
                 profileImage='https://i.imgur.com/p81Eh87.jpeg')
    db.session.add(post6)
    post7 = Post(userId=4, photoUrl='https://i.imgur.com/Q3z4Ix6.jpeg',
                 caption='Overheard somebody saying shiba isnt going to the moon', likes=5, created_at=f'{time}',userName='Srad Bimpson',profileImage='https://i.imgur.com/7wQ61EW.jpeg')
    db.session.add(post7)
    post8 = Post(userId=10, photoUrl='https://i.imgur.com/8SVodEA.jpeg',
                 caption='Trippy', likes=1, created_at=f'{time}',userName='Gill Bates',
              profileImage='https://i.imgur.com/lb6j2Z5.jpeg')
    db.session.add(post8)
    post9 = Post(userId=11, photoUrl='https://i.imgur.com/BA2hH3f.jpeg',
                 caption='Do or do not, there is no try', likes=0, created_at=f'{time}',userName='Demo',
        profileImage='https://i.imgur.com/NQz9NDx.jpeg')
    db.session.add(post9)
    post10 = Post(userId=10, photoUrl='https://i.imgur.com/JJO2P6U.jpeg',
                  caption='Much wow', likes=1, created_at=f'{time}',userName='Gill Bates',
              profileImage='https://i.imgur.com/lb6j2Z5.jpeg')
    db.session.add(post10)
    post11 = Post(userId=7, photoUrl='https://i.imgur.com/CUG0Aof.jpeg',
                  caption='Yummy', likes=1, created_at=f'{time}',userName='Melon Lusk',
              profileImage='https://i.imgur.com/F9Nf9Fx.jpeg')
    db.session.add(post11)
    post12 = Post(userId=2, photoUrl='https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23-1024x683.jpg',
                  caption='Really cool', likes=1, created_at=f'{time}',userName='Bobbie Light',profileImage='https://i.imgur.com/I7Ul8TY.jpeg')
    db.session.add(post12)
    post13 = Post(userId=11, photoUrl='https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23-1024x683.jpg',
                  caption='Take me back', likes=2, created_at=f'{time}',userName='Demo',
        profileImage='https://i.imgur.com/NQz9NDx.jpeg')
    db.session.add(post13)
    post14 = Post(userId=5, photoUrl='https://i.imgur.com/wgxW0KI.jpeg',
                  caption='pink water?', likes=1, created_at=f'{time}',userName='Alvin The Programmer',
                 profileImage='https://i.imgur.com/JeJrTZr.jpeg')
    db.session.add(post14)
    post16 = Post(userId=8, photoUrl='https://i.imgur.com/C6oUw18.jpeg',
                  caption=':o', likes=2, created_at=f'{time}',userName='Cark Muban',
              profileImage='https://i.imgur.com/udaJG1y.jpeg')
    db.session.add(post16)
    post17 = Post(userId=4, photoUrl='https://i.imgur.com/1Awgf7T.jpeg',
                  caption='Halloween', likes=5, created_at=f'{time}',userName='Srad Bimpson',profileImage='https://i.imgur.com/7wQ61EW.jpeg')
    db.session.add(post17)
    post18 = Post(userId=7, photoUrl='https://i.imgur.com/1bxdFkC.jpeg',
                  caption='Somewhere in a parrallel universe', likes=2, created_at=f'{time}',userName='Melon Lusk',
              profileImage='https://i.imgur.com/F9Nf9Fx.jpeg')
    db.session.add(post18)
    post19 = Post(userId=2, photoUrl='https://i.imgur.com/zqWNasU.jpeg',
                  caption='Rate my setup', likes=1, created_at=f'{time}',userName='Bobbie Light',profileImage='https://i.imgur.com/I7Ul8TY.jpeg')
    db.session.add(post19)
    post20 = Post(userId=11, photoUrl='https://i.imgur.com/C5BscRr.jpeg',
                  caption='What do you think?', likes=3, created_at=f'{time}',userName='Demo',
        profileImage='https://i.imgur.com/NQz9NDx.jpeg')
    db.session.add(post20)
    post21 = Post(userId=8, photoUrl='https://i.imgur.com/5EXmMim.jpeg',
                  caption='My childhood is ruined', likes=1, created_at=f'{time}',userName='Cark Muban',
              profileImage='https://i.imgur.com/udaJG1y.jpeg')
    db.session.add(post21)
    post22 = Post(userId=9, photoUrl='https://i.imgur.com/mfjE8eX.jpeg',
                  caption='Who makes these?', likes=1, created_at=f'{time}',userName='Beff jesoz',
              profileImage='https://i.imgur.com/1fHjKze.jpeg')
    db.session.add(post22)
    post23 = Post(userId=9, photoUrl='https://i.imgur.com/YkkBXgo.png',
                  caption=':p', likes=2, created_at=f'{time}',userName='Beff jesoz',
              profileImage='https://i.imgur.com/1fHjKze.jpeg')
    db.session.add(post23)
    post24 = Post(userId=11, photoUrl='https://i.imgur.com/ZjU14fN.jpeg',
                  caption='On the beach!', likes=3, created_at=f'{time}',userName='Demo',
        profileImage='https://i.imgur.com/NQz9NDx.jpeg')
    db.session.add(post24)
    post25 = Post(userId=6, photoUrl='https://i.imgur.com/O2IkUmb.jpeg',
                  caption='Sand', likes=1, created_at=f'{time}',userName='Zark Muckerberg',
              profileImage='https://i.imgur.com/Kkt2Fpe.jpeg')
    db.session.add(post25)
    post26 = Post(userId=1, photoUrl='https://i.imgur.com/J5ChC.jpeg',
                  caption='Fun times', likes=3, created_at=f'{time}',userName='Marnie Barnie',
        profileImage='https://i.imgur.com/YcP0tik.jpeg')
    db.session.add(post26)
    post27 = Post(userId=7, photoUrl='https://i.imgur.com/MZD2IJl.jpeg',
                  caption='A good boy', likes=1, created_at=f'{time}',userName='Melon Lusk',
              profileImage='https://i.imgur.com/F9Nf9Fx.jpeg')
    db.session.add(post27)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
