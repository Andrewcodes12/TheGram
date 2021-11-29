import React, {useState} from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addPost } from '../../store/post'

import './newPost.css'
import Header from '../Header/Header'

const NewPost = () => {
const dispatch = useDispatch()
const history = useHistory()

const [photoUrl, setPhotoUrl] = useState('')
const [caption, setCaption] = useState('')
const [valErrors , setValErrors] = useState([])
const [isImage, setIsImage] = useState(false)




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
  }

  if (isImage === false) {
    errors.push("Please provide a valid image URL for your post");
  }
  // } else if(!photoUrl.includes("https://") || photoUrl.length < 30) {
  //   errors.push("Photo Url must include 'https://' followed by image link ");
  // }


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
        userName:sessionUser.username,
        profileImage:sessionUser.profileImage
    }

    dispatch(addPost(newPost))
    reset()
    history.push('/feed')
  }
}



    return (
    <div className="inputBox">
      <Header />
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
        <img src={photoUrl} alt="post"  hidden={true} onLoad={() =>
          setIsImage(true)
        }/>
    </div>
    )
}

export default NewPost
