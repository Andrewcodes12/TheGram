import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { addComment,getComments } from "../../store/comment";

import './newComment.css'

const NewComment = ({post}) => {
const dispatch = useDispatch()


const [body, setBody] = useState('')
const [valErrors , setValErrors] = useState([])

const sessionUser = useSelector(state => state.session.user);
const comments = useSelector(state => state.comments)

const reset = () => {
    setBody('')
}


const validateComment = () => {
    const errors = [];
    if (!body) {
        errors.push("Cannot submit an empty comment");
    }
    setValErrors(errors);
    return errors;
};


const handleSubmit = (e) => {
    e.preventDefault()


    const errs = validateComment()
    if (!errs.length) {
    const newComment = {
        body,
        user_id:sessionUser.id,
        postId:post.id,
        userName:sessionUser.username,
    }


    dispatch(addComment(newComment))
    reset()
}

}

 useEffect(() => {
     dispatch(getComments())
 }, [dispatch])


    return (
        <div>

        <form onSubmit={handleSubmit}>
            <ul className="errors">
                {valErrors.map((valError) => (
                    <li key={valError}>{valError}</li>
                ))}
            </ul>
            <input
                type="text"
                onChange={(e) => setBody(e.target.value)}
                value={body}
                placeholder="Add Comment..."
                name="body"
            />
            <button type="submit" className="submitComment">Submit</button>
        </form>
        </div>
    )
}

export default NewComment
