import os

from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Post, Comment, Like
from flask_sqlalchemy import SQLAlchemy



comment_routes = Blueprint('comments', __name__)


# GET ALL COMMENTS
@comment_routes.route('/', methods=['GET'])
# @login_required
def get_comments():
    """
    Gets all comments
    """
    comments = Comment.query.all()
    return jsonify([comment.to_dict() for comment in comments])


# GET COMMENT BY ID
@comment_routes.route('/<int:id>', methods=['GET'])
# @login_required
def get_comment(id):
    """
    Gets a single comment
    """
    comment = Comment.query.get(id)
    return jsonify(comment.to_dict())
