const LOAD="POST/LOAD";
const LOAD_ONE="POST/LOAD_ONE";
const ADD_ONE="POST/ADD_ONE";
const UPDATE_ONE="POST/UPDATE_ONE";
const DELETE_ONE="POST/DELETE_ONE";


const load=(posts)=>({
    type:LOAD,
    payload:posts
});

const loadOne=(post)=>({
    type:LOAD_ONE,
    payload:post
});

const addOne=(post)=>({
    type:ADD_ONE,
    payload:post
});

const updateOne=(post)=>({
    type:UPDATE_ONE,
    payload:post
});

const deleteOne=(post)=>({
    type:DELETE_ONE,
    payload:post
});

export const getPosts = () => async (dispatch) => {
    const response = await fetch("api/posts/");
    if (response.ok) {
      const posts = await response.json();
      dispatch(load(posts));
    }
}

export const getPost = (id) => async (dispatch) => {
    const response = await fetch(`api/posts/${id}`);
    if (response.ok) {
      const post = await response.json();
      dispatch(loadOne(post));
    }
}

export const addPost = (post) => async (dispatch) => {
    const response = await fetch("api/posts/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    });
    if (response.ok) {
      const newPost = await response.json();
      dispatch(addOne(newPost));
    }
}

export const updatePost = (post) => async (dispatch) => {
    const response = await fetch(`api/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    });
    if (response.ok) {
      const updatedPost = await response.json();
      dispatch(updateOne(updatedPost));
    }
}


export const deletePost = (id) => async (dispatch) => {
    const response = await fetch(`api/posts/${id}`, {
      method: "DELETE"
    });
    if (response.ok) {
      dispatch(deleteOne(id));
    }
}


const initialState = {
    posts: [],
    post: {}
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                posts: action.payload
            };
        case LOAD_ONE:
            return {
                ...state,
                post: action.payload
            };
        case ADD_ONE:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case UPDATE_ONE:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            };
        case DELETE_ONE:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        default:
            return state;
    }
}

export default postReducer;
