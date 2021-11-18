import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import Header from '../Header/Header'

import {getPosts, updatePost,deletePost} from '../../store/post'
import {getComments} from '../../store/comment'
import {getLikes} from '../../store/like'

import EditPost from "../EditPost/EditPost";


const Post = () => {
const post = useSelector(state => state.post.posts)
const comments = useSelector(state => state.comments)
const likes = useSelector(state => state.likes)

const dispatch = useDispatch()


useEffect(() => {
    dispatch(getPosts())
    dispatch(getComments())
    dispatch(getLikes())
}, [dispatch])


// delete post
const deleteAPost = (id) => {
    dispatch(deletePost(id))
}




    return (
        <div>
            <Header />
            {post.map(post => (
                <div key={post.id}>
                <img src={post.photoUrl} alt={post.caption} key={post.id} />
                <div> {post.caption} </div>
                <EditPost post={post} />
                </div>
                ))}
        </div>

    )
}

export default Post
