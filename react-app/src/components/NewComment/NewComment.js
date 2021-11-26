import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { addComment,getComments } from "../../store/comment";

const NewComment = ({post}) => {
const dispatch = useDispatch()


const [body, setBody] = useState('')
const sessionUser = useSelector(state => state.session.user);
const comments = useSelector(state => state.comments)

const reset = () => {
    setBody('')
}

const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
        body,
        user_id:sessionUser.id,
        postId:post.id,
        userName:sessionUser.username,
    }

    dispatch(addComment(newComment))
    reset()
}

 useEffect(() => {
     dispatch(getComments())
 }, [dispatch])


    return (
        <div>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setBody(e.target.value)}
                value={body}
                placeholder="Add Comment..."
                name="body"
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default NewComment
