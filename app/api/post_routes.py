import os

from flask import Blueprint, jsonify, request, Flask
from flask_login import login_required, current_user
from app.models import db, User, Post, Comment, Like
from flask_sqlalchemy import SQLAlchemy


post_routes = Blueprint('posts', __name__)


@post_routes.route('/', methods=['GET'])
# @login_required
def get_posts():
    """
    Gets all posts
    """
    posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])


@post_routes.route('/<int:id>', methods=['GET'])
# @login_required
def get_post(id):
    """
    Gets a single post
    """
    post = Post.query.get(id)
    return jsonify(post.to_dict())
    
