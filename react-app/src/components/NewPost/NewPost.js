import React, {useState} from 'react'

import { useDispatch,useSelector } from 'react-redux'

import { addPost } from '../../store/post'


import './newPost.css'

const NewPost = () => {
const dispatch = useDispatch()

const [photoUrl, setPhotoUrl] = useState('')
const [caption, setCaption] = useState('')
const [userId, setUserId] = useState('')

const user = useSelector(state => state.user)

const reset = () => {
    setPhotoUrl('')
    setCaption('')
}

const handleSubmit = (e) => {
    e.preventDefault()
    
    const newPost = {
        photoUrl,
        caption,
        user
    }

    dispatch(addPost(newPost))
    reset()
}





    return (
    <div className="inputBox">
      <h1>Create A Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
          placeholder="Caption"
          name="title"
        />
        <input
          type="text"
          onChange={(e) => setPhotoUrl(e.target.value)}
          value={user}
          placeholder="Image URL"
          name="imageUrl"
        />
          <input
          type="integer"
          onChange={(e) => setUserId(e.target.value)}
          value={user}
          placeholder="userid"
          name="imageUrl"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    )
}

export default NewPost
