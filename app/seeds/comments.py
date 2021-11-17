from app.models import db, Comment
from datetime import datetime



def seed_comments():
    comment1 = Comment(body='Looks great!',user_id=2, postId=4,
                  )
    db.session.add(comment1)
    comment2 = Comment( body='OKAY !',user_id=3, postId=4
                  )
    db.session.add(comment2)
    comment3 = Comment(body='THIS IS AWESOME',user_id=3, postId=4,
                  )
    db.session.add(comment3)
    comment4 = Comment(body='where can i get one',user_id=4, postId=4,
                  )
    db.session.add(comment4)
    comment5 = Comment(body='Hello',user_id=1, postId=7,
                  )
    db.session.add(comment5)
    comment6 = Comment(body='DO THE THING!',user_id=11, postId=7,
                  )
    db.session.add(comment6)
    comment7 = Comment(body='umpalumpa',user_id=10, postId=7,
                  )
    db.session.add(comment7)
    comment8 = Comment(body='yes',user_id=11, postId=8,
                  )
    db.session.add(comment8)
    comment9 = Comment(body='We are trying to reach you regarding your cars extended warranty',user_id=9, postId=9,
                  )
    db.session.add(comment9)
    comment10 = Comment(body='you talking to me?',user_id=5, postId=12,
                   )
    db.session.add(comment10)
    comment11 = Comment( body='let meet up soon',user_id=2, postId=1,
                   )
    db.session.add(comment11)
    comment12 = Comment(body='how have you been',user_id=2, postId=24,
                   )
    db.session.add(comment12)
    comment13 = Comment(body='cant believe its not butter',user_id=3, postId=23,
                   )
    db.session.add(comment13)
    comment14 = Comment(body='"YAHTZEEEE',user_id=6, postId=23,
                   )
    db.session.add(comment14)
    comment15 = Comment(body='its me',user_id=4, postId=9,
                   )
    db.session.add(comment15)
    comment16 = Comment(body='hey girl hey',user_id=1, postId=8,
                   )
    db.session.add(comment16)
    comment17 = Comment(body='yoooooo',user_id=3, postId=3,
                   )
    db.session.add(comment17)
    comment18 = Comment(body='spectacular',user_id=5, postId=5,
                   )
    db.session.add(comment18)
    comment19 = Comment( body='wwjd',user_id=4, postId=1,
                   )
    db.session.add(comment19)
    comment20 = Comment(body='boooooogala booooooogala',user_id=7, postId=1,
                   )
    db.session.add(comment20)
    comment21 = Comment(body='its electric boogey ooogey oooogey',user_id=6, postId=1,
                   )
    db.session.add(comment21)
    comment22 = Comment(body='lorem ipsum',user_id=8, postId=10,
                   )
    db.session.add(comment22)
    comment23 = Comment(body='can you see this?',user_id=9, postId=12,
                   )
    db.session.add(comment23)
    comment24 = Comment(body='where are you?',user_id=10, postId=20,
                   )
    db.session.add(comment24)
    comment25 = Comment(body='are you in town?',user_id=11, postId=2,
                   )
    db.session.add(comment25)
    comment26 = Comment(body='lets go out tonight',user_id=3, postId=4,
                   )
    db.session.add(comment26)
    comment27 = Comment(body='astonishing',user_id=2, postId=7,
                   )
    db.session.add(comment27)
    comment28 = Comment(body='wow',user_id=1, postId=9,
                   )
    db.session.add(comment28)
    comment29 = Comment(body='woah',user_id=6, postId=8,
                   )
    db.session.add(comment29)
    comment30 = Comment( body='hold up!',user_id=7, postId=8,
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
