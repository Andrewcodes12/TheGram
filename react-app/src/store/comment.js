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


export const getComments = () => async (dispatch) => {
    const response = await fetch("api/comments/");
    if (response.ok) {
      const comments = await response.json();
      dispatch(load(comments));
    }
}

export const getComment = (id) => async (dispatch) => {
    const response = await fetch(`api/comments/${id}/`);
    if (response.ok) {
      const comment = await response.json();
      dispatch(loadOne(comment));
    }
}

export const addComment = (comment) => async (dispatch) => {
    const response = await fetch("api/comments/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    });
    if (response.ok) {
      const newComment = await response.json();
      dispatch(addOne(newComment));
    }
}


export const updateComment = (comment) => async (dispatch) => {
    const response = await fetch(`api/comments/${comment.id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    });
    if (response.ok) {
        const updatedComment = await response.json();
        dispatch(updateOne(updatedComment));
    }
}



export const deleteComment = (comment) => async (dispatch) => {
    const response = await fetch(`api/comments/${comment.id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    });
    if (response.ok) {
      dispatch(deleteOne(comment));
    }
}


const initialState = {
    comments: [],
    comment: {}
}

const CommentReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD:
            return {
                ...state,
                comments: action.payload
            }
        case LOAD_ONE:
            return {
                ...state,
                comment: action.payload
            }
        case ADD_ONE:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case UPDATE_ONE:
            return {
                ...state,
                comments: state.comments.map(comment => comment.id === action.payload.id ? action.payload : comment)
            }
        case DELETE_ONE:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default CommentReducer;
