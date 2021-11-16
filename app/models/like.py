from .db import db



class Like(db.Model):
    __tablename__ = 'likes'
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'))
    commentId = db.Column(db.Integer, db.ForeignKey('comments.id'))
    count = db.Column(db.Integer)

    like = db.relationship('Like', backref='user', lazy='dynamic')
    post = db.relationship('Post', backref='post', lazy='dynamic')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'postId': self.postId,
            'commentId': self.commentId,
            'count': self.count
        }
