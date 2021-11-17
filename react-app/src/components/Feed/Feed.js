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


    return (
        <div className="mainContainer">
           {post.map(post => (
               <div className="postContainer">
                   <div>{post.caption}</div>
                   <img src={post.photoUrl} alt="images"/>
                     <div>{session.user.username}</div>

                   </div>
                   ))}
        </div>
    )
}

export default Feed
