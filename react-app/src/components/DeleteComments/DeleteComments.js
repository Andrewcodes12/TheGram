import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import {deleteAComment} from '../../store/comment'




const DeleteComments = ({comment}) => {
const dispatch = useDispatch()

const comments = useSelector(state => state.comment.comments)


const deleteComment = (comment) => {
    dispatch(deleteAComment(comment))
}

    return (
        <div>
            <button onClick={() => deleteComment(comment)}><i class="fas fa-trash-alt"> </i></button>
        </div>
    )
}

export default DeleteComments
