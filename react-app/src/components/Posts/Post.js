import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import Header from '../Header/Header'
import './post.css'

import {getPosts,deletePost} from '../../store/post'
import {getComments} from '../../store/comment'



import NewComment from "../NewComment/NewComment";
import EditCaption from "../EditCaption/EditCaption";
import EditComments from "../EditComments/EditComments";
import DeleteComments from "../DeleteComments/DeleteComments";
import Likes from "../Likes/Likes";


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
        <div >
            <Header />
            <div className="postContainer">
            {post.map(post => (
                <div key={post.id}>
                    <div className="post">
                <img src={post.photoUrl} alt="" key={post.id} />
                    </div>
                    <div className="likes"> <Likes posts={post} postId={post.id}/> </div>
                    <div className="postCaption">
                <h3 className="caption"> {post.caption} </h3>
                    </div>
                    <div className="postBtn">
                        <div className="postDeleteBtn">
                {post.userId === user.id ? <button onClick={() => deleteAPost(post.id)}><i className="fas fa-trash-alt"> </i></button> : null}
                        </div>
                        <div className="postEditBtn">
                {post.userId === user.id ? <EditCaption post={post} /> : null}
                        </div>
                    </div>
                    <div className="addComment">
                <NewComment post={post} />
                    </div>

                {comments.map(comment => (
                    <div key={comment.id} className="commentContainer">
                        <div className="comment">
                        {comment.postId === post.id && <div className="comments">{comment.body}</div>}
                        </div>
                        <div className="commentBtn">
                            <div className="commentEditBtn">
                        {comment.postId === post.id && comment.userId === user.id ? <EditComments comment={comment} />: null}
                            </div>
                            <div className="commentDeleteBtn">
                        {comment.postId === post.id && comment.userId === user.id ? <DeleteComments comment={comment} />  : null}
                            </div>
                        </div>
                    </div>
              ))}
                </div>
                ))}
                </div>
        </div>

    )
}

export default Post
