from .db import db

class Following(db.Model):
    __tablename__ = 'following'

    id = db.Column(db.Integer, primary_key=True)
    userId= db.Column(db.Integer, db.ForeignKey('users.id'))
    followingId = db.Column(db.Integer, db.ForeignKey('users.id'))

    users = db.relationship('User', backref='following')
    following= db.relationship('User', backref='following')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'followingId': self.followingId
        }
