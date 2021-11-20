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


# get all likes on a post
@like_routes.route('/post/<int:id>', methods=['GET'])
# @login_required
def get_post_likes(id):
    """
    Gets all likes on a post
    """
    likes = Like.query.filter_by(postId=id)
    return jsonify([like.to_dict() for like in likes])


# get all likes on a comment
@like_routes.route('/comment/<int:id>', methods=['GET'])
# @login_required
def get_comment_likes(id):
    """
    Gets all likes on a comment
    """
    likes = Like.query.filter_by(commentId=id)
    return jsonify([like.to_dict() for like in likes])


# GET LIKE BY ID
@like_routes.route('/<int:id>', methods=['GET'])
# @login_required
def get_like(id):
    """
    Gets a single like
    """
    like = Like.query.get(id)
    return jsonify(like.to_dict())


# LIKE A POST
# @like_routes.route('/<int:id>/like', methods=['POST'])
# # @login_required
# def like_post(id):
#     """
#     Likes a post
#     """
#     user_id = current_user.get_id()
#     post = Post.query.get(id)
#     post.likes += 1
#     like = Like(
#         userId=user_id,
#         postId=post,
#         count= post.likes
#     )
#     db.session.add(like)
#     db.session.commit()
#     return like.to_dict()


# UNLIKE A POST
# @like_routes.route('/<int:id>/unlike', methods=['DELETE'])
# # @login_required
# def unlike_post(id):
#     """
#     Unlikes a post
#     """
#     user_id = current_user.get_id()
#     post = Post.query.get(id)
#     post.likes -= 1
#     like = Like.query.filter_by(userId=user_id, postId=id).first()
#     db.session.delete(like)
#     db.session.commit()
#     return like.to_dict()
