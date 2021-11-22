from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


#USER CAN FOLLOW OTHER USERS
@user_routes.route('/<int:id>/follow/', methods=['POST'])
@login_required
def follow(id):
    user = User.query.get(id)
    user.follow()
    return jsonify(user.to_dict())


#USER CAN UNFOLLOW OTHER USERS
@user_routes.route('/<int:id>/unfollow/', methods=['POST'])
@login_required
def unfollow(id):
    user = User.query.get(id)
    user.unfollow()
    return jsonify(user.to_dict())
