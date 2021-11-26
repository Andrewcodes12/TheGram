import React,{ useEffect, useState } from 'react'
import { useDispatch } from "react-redux";

import {updatePost} from '../../store/post'

const EditCaption = ({post}) => {
const dispatch = useDispatch()

const [caption, setCaption] = useState(post.caption)
const [isClicked, setIsClicked] = useState(false);


//handle click to edit post
const handleSubmit = async (e) => {
    e.preventDefault()
    post.caption = caption

    let editedPost = await dispatch(updatePost(post))

    if(editedPost){
        console.log('post updated')
    }
    setIsClicked(false)
}

useEffect(() => {
    setCaption(post.caption)
}, [post])


    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
                <button type="submit"><i className="fas fa-edit"></i></button>
            </form> */}
        {isClicked ? (
            <form onSubmit={handleSubmit}>
                <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        ) : (
            <i className="fas fa-edit"onClick={() => setIsClicked(true)}></i>
        )}

        </div>
    )
}

export default EditCaption
