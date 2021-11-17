from flask_wtf import FlaskForm
from wtforms import StringField

from wtforms.validators import DataRequired


class CommentForm(FlaskForm):
    body = StringField('Comment', validators=[DataRequired()])
    user_id = StringField('User ID',)
    postId = StringField('Post ID',)
