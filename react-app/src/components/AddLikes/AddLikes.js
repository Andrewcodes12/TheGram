import React, {useState} from 'react'

import { useDispatch,useSelector } from 'react-redux'

import { addLike } from '../../store/like'

const AddLikes = ({post}) => {
const dispatch = useDispatch()

const [addLikes, setAddLike] = useState('')

const sessionUser = useSelector(state => state.session.user);

const handleSubmit = (e) => {
    e.preventDefault()

    const newLike = {
        userId: sessionUser.id,
        postId: post.id,
        count: +1
    }

    dispatch(addLike(newLike))
}

    return (
        <div>
            {/* {likes go up by 1} */}
            <button onClick={handleSubmit}>Like</button>

        </div>
    )
}

export default AddLikes
