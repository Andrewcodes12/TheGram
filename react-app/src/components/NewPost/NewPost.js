import React, {useState} from 'react'

import { useDispatch,useSelector } from 'react-redux'

import { addPost } from '../../store/post'

import './newPost.css'

const NewPost = () => {
const dispatch = useDispatch()

const [photoUrl, setPhotoUrl] = useState('')
const [caption, setCaption] = useState('')
const [valErrors , setValErrors] = useState([])

const sessionUser = useSelector(state => state.session.user);

const reset = () => {
    setPhotoUrl('')
    setCaption('')
}


const validatePost = () => {
  const errors = [];
  if (!photoUrl) {
    errors.push("Please provide an image URL for your post.");
  }
  if (caption.length === 0) {
    errors.push("Please provide a caption for your post");
  } else if(!photoUrl.includes("https://") || photoUrl.length < 9) {
    errors.push("Photo Url must include 'https://' followed by image link ");
  }

  setValErrors(errors);
  return errors;
};

const handleSubmit = (e) => {
    e.preventDefault()

  const errs = validatePost()
  if (!errs.length) {
    const newPost = {
        photoUrl,
        caption,
        userId:sessionUser.id,
        username:sessionUser.username,
        profileImage:sessionUser.profileImage
    }

    dispatch(addPost(newPost))
    reset()
  }
}



    return (
    <div className="inputBox">
      <h1>Create A Post</h1>
      <form onSubmit={handleSubmit}>
      <ul className="errors">
          {valErrors.map((valError) => (
            <li key={valError}>{valError}</li>
          ))}
        </ul>
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
