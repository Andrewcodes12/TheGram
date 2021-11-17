import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom";


import { getPosts } from "../../store/post";


const Feed = () => {
const dispatch = useDispatch();
const post = useSelector(state => state.post.posts);
const session= useSelector(state => state.session);

useEffect(() => {
    dispatch(getPosts());
}, [dispatch]);


const editPost = (id) => {
    dispatch(getPosts(id));
}


const addComment = (id, comment) => {
    dispatch(getPosts(id, comment));
}



    return (
        <div className="mainContainer">
           {post.map(post => (
               <div className="postContainer">
                   <div>{post.caption}</div>
                   <img src={post.photoUrl} alt="images"/>
                        <div>{post.likes}</div>
                        <div>{post.comments}</div>
                        <div><button onClick={() => editPost(post.id)}>Edit</button></div>
                        <div><button onClick={() => addComment(post.id, "comment")}>Comment</button></div>
                   </div>
                   ))}

        </div>
    )
}

export default Feed
