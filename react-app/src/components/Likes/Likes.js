import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"




import { addLike, removeLike,displayLike,getPosts } from "../../store/post"


const Likes = ({posts,postId}) => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post.posts)
    const likes = useSelector(state => state.like.likes)

    const sessionUser = useSelector(state => state.session.user)


    const [liked, setLiked] = useState(false)

    // useEffect(() => {
    //     dispatch(displayLike(post[postId]?.id))
    // }, [])

    useEffect(() => {
        if (likes.find(like => like.postId === post[postId]?.id)) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }, [likes])

    const handleLike = () => {
        if (liked) {
            dispatch(removeLike({user_id: sessionUser.id, post_id: post[postId]?.id}))
        } else {
            dispatch(addLike({user_id: sessionUser.id, post_id: post[postId]?.id}))
        }
        setLiked(!liked)
    }


    return (
        <div>
            <button onClick={handleLike}>
                {liked ? "Unlike" : "Like"}
            </button>
            <span>{likes.length}</span>
        </div>
    )
}

export default Likes
