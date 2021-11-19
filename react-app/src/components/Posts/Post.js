import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import Header from '../Header/Header'

import {getPosts,deletePost} from '../../store/post'
import {getComments} from '../../store/comment'



import NewComment from "../NewComment/NewComment";
import EditCaption from "../EditCaption/EditCaption";
import EditComments from "../EditComments/EditComments";
import DeleteComments from "../DeleteComments/DeleteComments";



const Post = () => {
const post = useSelector(state => state.post.posts)
const comments = useSelector(state => state.comment.comments)
const likes = useSelector(state => state.likes)
const user = useSelector(state => state.session.user)


const dispatch = useDispatch()


useEffect(() => {
    dispatch(getPosts())
    dispatch(getComments())
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
                {post.userId === user.id ? <button onClick={() => deleteAPost(post.id)}><i class="fas fa-trash-alt"> </i></button> : null}
                {post.userId === user.id ? <EditCaption post={post} /> : null}
                <NewComment post={post} />

                {comments.map(comment => (
                    <div key={comment.id}>
                        {comment.postId === post.id && <div>{comment.body}</div>}
                        {comment.postId === post.id && comment.userId === user.id ? <EditComments comment={comment} /> : null}
                        {comment.postId === post.id && comment.userId === user.id ? <DeleteComments comment={comment} />  : null}
                    </div>
              ))}
                </div>
                ))}
        </div>

    )
}

export default Post
