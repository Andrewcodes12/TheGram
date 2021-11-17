import os

from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Post, Comment, Like
from flask_sqlalchemy import SQLAlchemy
from app.forms import PostForm


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


@post_routes.route('/new', methods=['POST'])
# @login_required
def create_post():
    """
    Creates a post
    """
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post(
            photoUrl=form.data['photoUrl'],
            caption=form.data['caption'],
            userId=form.data['userId']
        )
        print("-------------",current_user.get_id())
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return jsonify(form.errors), 400
