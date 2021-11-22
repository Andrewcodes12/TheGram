import os

from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Post, Comment, Like
from flask_sqlalchemy import SQLAlchemy
from app.forms import PostForm


post_routes = Blueprint('posts', __name__)

# GET ALL POSTS
@post_routes.route('/', methods=['GET'])
@login_required
def get_posts():
    """
    Gets all posts
    """
    posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])

# GET POST BY ID
@post_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_post(id):
    """
    Gets a single post
    """
    post = Post.query.get(id)
    return jsonify(post.to_dict())

# ADD A POST
@post_routes.route('/new/', methods=['POST'])
@login_required
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
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return jsonify(form.errors), 400

#EDIT A POST
@post_routes.route('/<int:id>/edit/', methods=['PUT'])
@login_required
def edit_post(id):
    """
    Edits a post
    """
    post = Post.query.get(id)
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post.caption = form.data['caption']
        db.session.commit()
        return post.to_dict()
    return jsonify(form.errors), 400


# DELETE A SINGLE POST
@post_routes.route('/<int:id>/delete/', methods=['DELETE'])
@login_required
def delete_post(id):
    """
    Deletes a post
    """
    post = Post.query.get(id)
    likes = Like.query.filter_by(postId=id).all()
    for like in likes:
        db.session.delete(like)
    db.session.delete(post)
    db.session.commit()
    return jsonify(post.to_dict())


#create a like on a post
@post_routes.route('/like', methods=['POST'])
@login_required
def like_post():
    """
    Likes a post
    """
    data= request.json
    # form = PostForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    #     like = Like(
    #         userId=form.data['userId'],
    #         postId=id,

    #     )
    like = Like(
        userId=data['user_id'],
        postId=data['post_id'],
    )
    db.session.add(like)
    db.session.commit()
    return jsonify(like.to_dict())
        # db.session.add(like)
        # db.session.commit()
        # return jsonify(like.to_dict())

#delete a like on a post
@post_routes.route('/unlike/<int:id>', methods=['DELETE'])
@login_required
def unlike_post(id):
    """
    Unlikes a post
    """
    data= request.json
    db.session.query(Like).filter(Like.postId == data['post_id']).delete()
    db.session.commit()
    return jsonify(id)
