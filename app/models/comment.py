from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer(), primary_key=True)
    body= db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer(),db.ForeignKey('users.id'), nullable=False)
    postId = db.Column(db.Integer(), db.ForeignKey('posts.id'))
    userName= db.Column(db.String(255))

    comment_post=db.relationship('User', backref='comments', lazy=True)
    # post_a_comment= db.relationship('Post', backref=db.backref('comment_post'), foreign_keys='Post.post_id', cascade = "all,delete")
    # user_a_comment= db.relationship('User', backref=db.backref('comment_user'),cascade = "all,delete")

    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'userId': self.user_id,
            'postId': self.postId,
            'userName': self.userName
        }
