import React,{ useEffect, useState } from 'react'
import { useDispatch } from "react-redux";

import { updateComment } from '../../store/comment'


const EditComments = ({comment}) => {
const dispatch = useDispatch()

const [comments, setComment] = useState(comment.body)
const [isClicked, setIsClicked] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault()
    comment.body = comments
    let editedComment = await dispatch(updateComment(comment))
    if(editedComment){
        console.log('comment updated')
    }
    setIsClicked(false)
}





useEffect(() => {
    setComment(comment.body)
}, [comment])


    return (
        <div>
             {/* <form onSubmit={handleSubmit}>
                <input type="text" value={comments} onChange={(e) => setComment(e.target.value)} />
                <button type="submit"><i className="fas fa-edit"></i></button>
            </form> */}
        {isClicked ? (
            <form onSubmit={handleSubmit}>
                <input type="text" value={comments} onChange={(e) => setComment(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        ) : (
            <i className="fas fa-edit"onClick={() => setIsClicked(true)}></i>
        )}
        </div>
    )
}

export default EditComments
