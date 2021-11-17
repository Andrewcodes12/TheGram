import os

from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Post, Comment, Like
from flask_sqlalchemy import SQLAlchemy
from app.forms import CommentForm


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


# ADD A COMMENT
@comment_routes.route('/new/', methods=['POST'])
# @login_required
def create_comment():
    """
    Creates a comment
    """
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment(
            body=form.data['body'],
            user_id=form.data['user_id'],
            postId=form.data['postId']
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return jsonify(form.errors), 400
