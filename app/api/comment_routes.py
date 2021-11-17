from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.forms import CommentForm
from app.models import Comment, db,User,Like,Post
