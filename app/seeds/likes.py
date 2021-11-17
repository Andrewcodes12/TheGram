from app.models import db, Like


def seed_likes():
    like1 = Like(userId=1, postId=11)
    db.session.add(like1)
    like2 = Like(userId=2, postId=1)
    db.session.add(like2)
    like3 = Like(userId=3, postId=3)
    db.session.add(like3)
    like4 = Like(userId=4, postId=5)
    db.session.add(like4)
    like5 = Like(userId=5, postId=8)
    db.session.add(like5)
    like6 = Like(userId=11, postId=1)
    db.session.add(like6)
    like7 = Like(userId=2, postId=6)
    db.session.add(like7)
    like8 = Like(userId=2, postId=9)
    db.session.add(like8)
    like9 = Like(userId=6, postId=23)
    db.session.add(like9)
    like10 = Like(userId=7, postId=25)
    db.session.add(like10)
    like11 = Like(userId=8, postId=26)
    db.session.add(like11)
    like12 = Like(userId=9, postId=22)
    db.session.add(like12)
    like13 = Like(userId=10, postId=19)
    db.session.add(like13)
    like14 = Like(userId=5, postId=16)
    db.session.add(like14)
    like15 = Like(userId=3, postId=15)
    db.session.add(like15)
    like16 = Like(userId=1, postId=22)
    db.session.add(like16)
    like17 = Like(userId=2, postId=10)
    db.session.add(like17)
    like18 = Like(userId=3, postId=26)
    db.session.add(like18)
    like19 = Like(userId=11, postId=8)
    db.session.add(like19)
    like20 = Like(userId=1, postId=19)
    db.session.add(like20)
    like21 = Like(userId=4, postId=26)
    db.session.add(like21)
    like22 = Like(userId=3, postId=26)
    db.session.add(like22)
    like23 = Like(userId=10, postId=4)
    db.session.add(like23)
    like24 = Like(userId=11, postId=11)
    db.session.add(like24)
    like25 = Like(userId=2, postId=11)
    db.session.add(like25)
    like26 = Like(userId=5, postId=11)
    db.session.add(like26)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
