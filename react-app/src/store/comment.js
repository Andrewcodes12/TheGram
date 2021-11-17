const LOAD="Comments/LOAD"
const LOAD_ONE="Comments/LOAD_ONE"
const ADD_ONE="Comments/ADD_ONE"
const UPDATE_ONE="Comments/UPDATE_ONE"
const DELETE_ONE="Comments/DELETE_ONE"


const load = (comments) => ({
    type: LOAD,
    payload:comments
})

const loadOne = (comment) => ({
    type: LOAD_ONE,
    payload:comment
})

const addOne = (comment) => ({
    type: ADD_ONE,
    payload:comment
})

const updateOne = (comment) => ({
    type: UPDATE_ONE,
    payload:comment
})

const deleteOne = (comment) => ({
    type: DELETE_ONE,
    payload:comment
})



