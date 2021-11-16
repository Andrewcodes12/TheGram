from sqlalchemy.orm import backref
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profileImage=db.Column( db.String, default='http://clipart-library.com/new_gallery/280-2806732_png-file-svg-default-profile-picture-png.png',nullable=False)

    likes=db.relationship('Like',cascade = "all,delete", backref='user')
    comment=db.relationship('Comment',cascade = "all,delete", backref='user')
    post=db.relationship('Post',cascade = "all,delete", backref='user')
    following = db.relationship(
    'User', lambda: following,
    primaryjoin=lambda: User.id == following.c.user_id,
    secondaryjoin=lambda: User.id == following.c.following_id,
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
