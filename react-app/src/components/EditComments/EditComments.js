import React,{ useEffect, useState } from 'react'
import { useDispatch } from "react-redux";

import { updateComment } from '../../store/comment'


const EditComments = ({comment}) => {
const dispatch = useDispatch()

const [comments, setComment] = useState(comment.body)

const handleSubmit = async (e) => {
    e.preventDefault()
    comment.body = comments
    let editedComment = await dispatch(updateComment(comment))
    if(editedComment){
        console.log('comment updated')
    }
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={comments} onChange={(e) => setComment(e.target.value)} />
                <button type="submit">Edit Comment</button>
            </form>
        </div>
    )
}

export default EditComments
