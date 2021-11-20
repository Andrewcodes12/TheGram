import React,{ useEffect, useState } from 'react'
import { useDispatch } from "react-redux";

import {updatePost} from '../../store/post'

const EditCaption = ({post}) => {
const dispatch = useDispatch()

const [caption, setCaption] = useState(post.caption)


//handle click to edit post
const handleSubmit = async (e) => {
    e.preventDefault()
    post.caption = caption

    let editedPost = await dispatch(updatePost(post))

    if(editedPost){
        console.log('post updated')
    }
}

useEffect(() => {
    setCaption(post.caption)
}, [post])


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
                <button type="submit"><i className="fas fa-edit"></i></button>
            </form>

        </div>
    )
}

export default EditCaption
