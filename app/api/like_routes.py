import os

from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Post, Comment, Like
from flask_sqlalchemy import SQLAlchemy
from app.forms import CommentForm


like_routes = Blueprint('likes', __name__)


# GET ALL LIKES
@like_routes.route('/', methods=['GET'])
# @login_required
def get_likes():
    """
    Gets all likes
    """
    likes = Like.query.all()
    return jsonify([like.to_dict() for like in likes])
