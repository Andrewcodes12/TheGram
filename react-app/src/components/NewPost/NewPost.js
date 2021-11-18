import React, {useState} from 'react'

import { useDispatch,useSelector } from 'react-redux'

import { addPost } from '../../store/post'


const NewPost = () => {
const dispatch = useDispatch()

const [photoUrl, setPhotoUrl] = useState('')
const [caption, setCaption] = useState('')


const sessionUser = useSelector(state => state.session.user);

const reset = () => {
    setPhotoUrl('')
    setCaption('')
}

const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {
        photoUrl,
        caption,
        userId:sessionUser.id
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
          value={photoUrl}
          placeholder="Image URL"
          name="imageUrl"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    )
}

export default NewPost
