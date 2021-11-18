import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import Header from '../Header/Header'

import {getPosts, updatePost,deletePost} from '../../store/post'
import {getComments} from '../../store/comment'
import {getLikes} from '../../store/like'



const Post = () => {
const post = useSelector(state => state.post)
const comments = useSelector(state => state.comments)
const likes = useSelector(state => state.likes)

const dispatch = useDispatch()


useEffect(() => {
    dispatch(getPosts())
    dispatch(getComments())
    dispatch(getLikes())
}, [dispatch])

// edit post caption
const [edit, setEdit] = useState(false)
const [caption, setCaption] = useState(post.caption)

const editPost = (id, caption) => {
    dispatch(updatePost(id, caption))
    setEdit(false)
}

const handleEdit = (e) => {
    e.preventDefault()
    setEdit(true)
}

// delete post
const deleteAPost = (id) => {
    dispatch(deletePost(id))
}




    return (
        <div>
        {post.posts.map(post => (
            <div key={post.id}>
                <Header />
                <div className="post">
                    {post.caption}
                    {post.photoUrl && <img src={post.photoUrl} alt=""/>}
                    {/* edit post caption */}
                    {edit && <form onSubmit={(e) => editPost(post.id, caption)}>
                    <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)}/>
                    <button type="submit">Edit</button>
                    {/* end edit post caption */}
                    <button onClick={handleEdit}>Edit</button>
                    </form>}
                    <button onClick={() => deleteAPost(post.id)}>Delete</button>


        </div>
        </div>
        ))}
        </div>

    )
}

export default Post
