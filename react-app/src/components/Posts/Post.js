import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import Header from '../Header/Header'

import {getPosts,deletePost} from '../../store/post'
import {getComments} from '../../store/comment'
import {getLikes} from '../../store/like'


import NewComment from "../NewComment/NewComment";
import EditCaption from "../EditCaption/EditCaption";

const Post = () => {
const post = useSelector(state => state.post.posts)
const comments = useSelector(state => state.comment.comments)
const likes = useSelector(state => state.likes)
const user = useSelector(state => state.session.user)


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
                <img src={post.photoUrl} alt="" key={post.id} />
                <h3> {post.caption} </h3>
                {post.userId === user.id ? <button onClick={() => deleteAPost(post.id)}>Delete</button> : null}
                {post.userId === user.id ? <EditCaption post={post} /> : null}
                <h5> {post.likes} likes </h5>
                {comments.map(comment => (
                    <div key={comment.id}>
                        {comment.postId === post.id && <div>{comment.body}</div>}
                    </div>
              ))}
                <NewComment post={post} />
                </div>
                ))}



        </div>

    )
}

export default Post
