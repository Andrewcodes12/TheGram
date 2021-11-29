from sqlalchemy.orm import backref
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profileImage=db.Column( db.String, default='http://clipart-library.com/new_gallery/280-2806732_png-file-svg-default-profile-picture-png.png',nullable=False)

    # likes=db.relationship('Like',cascade = "all,delete", backref='user_like')
    # comment_user=db.relationship('Comment',cascade = "all,delete", backref='user_name')
    user_post=db.relationship('Post',cascade = "all,delete", backref='see_posts')
    # the_users_id= db.relationship('Comment', backref='userId',cascade = "all,delete")
    userid_for_comment = db.relationship("Comment", backref=db.backref('comments', lazy=True))


    following = db.relationship(
    'User', lambda: user_following,
    primaryjoin=lambda: User.id == user_following.c.userId,
    secondaryjoin=lambda: User.id == user_following.c.followingId,
    backref='user',
    cascade='all, delete'
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profileImage':self.profileImage,
            'following': [user.to_dict_following() for user in self.following]
        }

    def to_dict_following(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profileImage':self.profileImage,
        }

user_following = db.Table(
    'user_following',
    db.Column('userId', db.Integer, db.ForeignKey(User.id), primary_key=True),
    db.Column('followingId', db.Integer,
              db.ForeignKey(User.id), primary_key=True),
)
