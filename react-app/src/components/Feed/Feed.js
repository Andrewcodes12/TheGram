import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import Header from '../Header/Header'

import {getPosts} from '../../store/post'
import {getComments} from '../../store/comment'


import Post from "../Posts/Post";

const Feed = () => {
const post = useSelector(state => state.post)
const comments = useSelector(state => state.comments)
const likes = useSelector(state => state.likes)

const dispatch = useDispatch()


useEffect(() => {
    dispatch(getPosts())
    dispatch(getComments())
}, [dispatch])


    return (
        <div>
            <Header />
            <Post />
        </div>
    )
}

export default Feed
