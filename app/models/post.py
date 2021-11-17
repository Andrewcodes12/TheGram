from sqlalchemy.orm import backref
from .db import db



class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    photoUrl = db.Column(db.String, nullable=False)
    caption = db.Column(db.String(255))
    likes = db.Column(db.Integer, default=1)
    created_at = db.Column(db.DateTime)
    userId = db.Column(db.Integer(),db.ForeignKey('users.id'), nullable=False)
    
    userName = db.relationship('User', backref=backref('username', lazy=True))

    # like= db.relationship('Like', backref='post',cascade = "all,delete")
    comment_post=db.relationship('Comment', backref='post_a_comment',cascade = "all,delete")
    # see_posts=db.relationship('User', backref='user_post',cascade = "all,delete")

    def to_dict(self):
        return {
            'id': self.id,
            'photoUrl': self.photoUrl,
            'caption': self.caption,
            'likes': self.likes,
            'userId': self.userId
        }
