import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

// import {getPosts, updatePost,deletePost} from '../../store/post'
import { addComment } from "../../store/comment";

const NewComment = ({post}) => {
const dispatch = useDispatch()


const [body, setBody] = useState('')
const sessionUser = useSelector(state => state.session.user);

const reset = () => {
    setBody('')
}

const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
        body,
        user_id:sessionUser.id,
        postId:post.id
    }

    dispatch(addComment(newComment))
    reset()
}


    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setBody(e.target.value)}
                value={body}
                placeholder="Comment"
                name="body"
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default NewComment
