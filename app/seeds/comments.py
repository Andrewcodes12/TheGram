from app.models import db, Comment
from datetime import datetime

now = datetime.now()


def seed_comments():
    comment1 = Comment(userId=2, postId=4, body='Looks great!',
                  )
    db.session.add(comment1)
    comment2 = Comment(userId=3, postId=4, body='OKAY !',
                  )
    db.session.add(comment2)
    comment3 = Comment(userId=3, postId=4, body='THIS IS AWESOME',
                  )
    db.session.add(comment3)
    comment4 = Comment(userId=4, postId=4, body='where can i get one',
                  )
    db.session.add(comment4)
    comment5 = Comment(userId=1, postId=7, body='Hello',
                  )
    db.session.add(comment5)
    comment6 = Comment(userId=11, postId=7, body='DO THE THING!',
                  )
    db.session.add(comment6)
    comment7 = Comment(userId=10, postId=7, body='umpalumpa',
                  )
    db.session.add(comment7)
    comment8 = Comment(userId=11, postId=8, body='yes',
                  )
    db.session.add(comment8)
    comment9 = Comment(userId=9, postId=9, body='We are trying to reach you regarding your cars extended warranty',
                  )
    db.session.add(comment9)
    comment10 = Comment(userId=5, postId=12, body='you talking to me?',
                   )
    db.session.add(comment10)
    comment11 = Comment(userId=2, postId=1, body='let meet up soon',
                   )
    db.session.add(comment11)
    comment12 = Comment(userId=2, postId=24, body='how have you been',
                   )
    db.session.add(comment12)
    comment13 = Comment(userId=3, postId=23, body='cant believe its not butter',
                   )
    db.session.add(comment13)
    comment14 = Comment(userId=6, postId=23, body='"YAHTZEEEE',
                   )
    db.session.add(comment14)
    comment15 = Comment(userId=4, postId=9, body='its me',
                   )
    db.session.add(comment15)
    comment16 = Comment(userId=1, postId=8, body='hey girl hey',
                   )
    db.session.add(comment16)
    comment17 = Comment(userId=3, postId=3, body='yoooooo',
                   )
    db.session.add(comment17)
    comment18 = Comment(userId=5, postId=5, body='spectacular',
                   )
    db.session.add(comment18)
    comment19 = Comment(userId=4, postId=1, body='wwjd',
                   )
    db.session.add(comment19)
    comment20 = Comment(userId=7, postId=1, body='boooooogala booooooogala',
                   )
    db.session.add(comment20)
    comment21 = Comment(userId=6, postId=1, body='its electric boogey ooogey oooogey',
                   )
    db.session.add(comment21)
    comment22 = Comment(userId=8, postId=10, body='lorem ipsum',
                   )
    db.session.add(comment22)
    comment23 = Comment(userId=9, postId=12, body='can you see this?',
                   )
    db.session.add(comment23)
    comment24 = Comment(userId=10, postId=20, body='where are you?',
                   )
    db.session.add(comment24)
    comment25 = Comment(userId=11, postId=2, body='are you in town?',
                   )
    db.session.add(comment25)
    comment26 = Comment(userId=3, postId=4, body='lets go out tonight',
                   )
    db.session.add(comment26)
    comment27 = Comment(userId=2, postId=7, body='astonishing',
                   )
    db.session.add(comment27)
    comment28 = Comment(userId=1, postId=9, body='wow',
                   )
    db.session.add(comment28)
    comment29 = Comment(userId=6, postId=8, body='woah',
                   )
    db.session.add(comment29)
    comment30 = Comment(userId=7, postId=8, body='hold up!',
                   )
    db.session.add(comment30)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
