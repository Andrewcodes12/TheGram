from flask_wtf import FlaskForm
from wtforms import StringField

from wtforms.validators import DataRequired


class PostForm(FlaskForm):
    photoUrl = StringField('photoUrl')
    caption = StringField('caption')
    userId = StringField('userId')