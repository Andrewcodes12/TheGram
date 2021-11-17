from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer(), primary_key=True)
    body= db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer(),db.ForeignKey('users.id'), nullable=False)
    postId = db.Column(db.Integer(), db.ForeignKey('posts.id'))


    # post_a_comment= db.relationship('Post', backref=db.backref('comment_post'),cascade = "all,delete")
    # user_a_comment= db.relationship('User', backref=db.backref('comment_user'),cascade = "all,delete")

    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'userId': self.userId,
            'postId': self.postId
        }
