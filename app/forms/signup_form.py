from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')
    if len(username) < 3 or len(username) > 32:
        raise ValidationError(
            'Username must be between 3 to 32 characters long.')

def password_check(form, field):
    symbols = '!@#$%^&*(),./?'
    password = field.data

    if len(password) < 8 or len(password) > 32:
        raise ValidationError(
            'Password must be between 8 to 32 characters long.')
    if not any(char for char in password if char in symbols):
        raise ValidationError(
            'Password must contain one of these following characters: !@#$%^&*(),./?')
    if not any(char for char in password if char.isupper()):
        raise ValidationError(
            'Pasword must contain one uppercase letter.')
    if not any(char for char in password if char.islower()):
        raise ValidationError(
            'Pasword must contain one lowercase letter.')
    if not any(char for char in password if char.isdecimal()):
        raise ValidationError(
            'Pasword must contain one number.')





class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[ username_exists])
    email = StringField('email', validators=[ user_exists])
    password = StringField('password', validators=[password_check])
