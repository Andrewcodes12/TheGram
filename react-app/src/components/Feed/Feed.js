import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom";



import { deletePost, getPosts, updatePost, } from "../../store/post";
import { getComments } from "../../store/comment";
import {getLikes} from "../../store/like";


const Feed = () => {
const dispatch = useDispatch();
const post = useSelector(state => state.post.posts);
const user = useSelector(state => state.session.user);
const comments = useSelector(state => state.comment.comments);
const likes = useSelector(state => state.like.likes);

useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
    dispatch(getLikes());
}, [dispatch]);


const editPost = (id) => {
    dispatch(updatePost(id));
}


const deletePosts = (id) => {
    dispatch(deletePost(id));
}


const addComment = (id, comment) => {
    dispatch(getPosts(id, comment));
}



    return (
        <div className="mainContainer">
           {post.map(post => (
               <div className="postContainer" key="post.id">
                     <div className="postHeader">
                   <img src={post.photoUrl} alt="images"/>
                   </div>
                   <div className="postCaption">{post.caption}</div>
                        <div className="comment likes container">
                        <div className="postLikes">{post.likes}</div>
                        <div className="postComments">{post.comments}</div>
                        <div><button onClick={() => editPost(post.id)}>Edit</button></div>
                        <div><button onClick={() => addComment(post.id, "comment")}>Comment</button></div>
                        <div><button onClick={() => deletePosts(post.id)}>Delete</button></div>
                        </div>
                   </div>
                   ))}

        </div>
    )
}

export default Feed
