from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    body= db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'))

    # user_name= db.relationship('User', backref='comment_user',cascade = "all,delete")
    # post= db.relationship('Post', backref='comment_post',cascade = "all,delete")


    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'userId': self.userId,
            'postId': self.postId
        }
