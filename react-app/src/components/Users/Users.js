import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"


import {getUsers} from '../../store/user'

const Users = () => {
const dispatch = useDispatch()
const users = useSelector(state => state.user.users)

useEffect(() => {
    dispatch(getUsers())
}, [dispatch])



    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users
