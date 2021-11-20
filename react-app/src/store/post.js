const LOAD="POST/LOAD";
const LOAD_ONE="POST/LOAD_ONE";
const ADD_ONE="POST/ADD_ONE";
const UPDATE_ONE="POST/UPDATE_ONE";
const DELETE_ONE="POST/DELETE_ONE";
const ADD_LIKE = "POST/ADD_LIKE";
const REMOVE_LIKE = "POST/REMOVE_LIKE";
const GET_LIKE = "POST/GET_LIKE";

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

const addLikes = (post) => ({
    type: ADD_LIKE,
    payload: post
});

const removeLikes = (post) => ({
    type: REMOVE_LIKE,
    payload: post
});

const displayLikes = (post) => ({
    type: GET_LIKE,
    payload: post
})



export const addLike = (postData) => async (dispatch) => {
    const response = await fetch(`/api/posts/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)

    });

    const data = await response.json();
    dispatch(addLikes(data));
}

export const removeLike = (postData) => async (dispatch) => {
    const response = await fetch(`/api/posts/unlike/${postData.post_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
    });
    const data = await response.json();
    dispatch(removeLikes(data));
}

// export const displayLike = (id) => async (dispatch) => {
//     const response = await fetch(`/api/likes/post/${id}/`, {
//         method: "GET",
//     });
//     if (response.ok) {
//         const like = await response.json();
//         dispatch(displayLikes(like));
//     }
// };





export const getPosts = () => async (dispatch) => {
    const response = await fetch("api/posts/");
    //get users as well do another fetch for users
    //for each post create new array with that array include owner of post using .find
    if (response.ok) {
      const posts = await response.json();
      dispatch(load(posts));
    }
}

export const getPost = (id) => async (dispatch) => {
    const response = await fetch(`/posts/${id}/`);
    if (response.ok) {
      const post = await response.json();
      dispatch(loadOne(post));
    }
}

export const addPost = (post) => async (dispatch) => {
    const response = await fetch("/api/posts/new/", {
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
    const response = await fetch(`/api/posts/${post.id}/edit/`, {
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
    const response = await fetch(`api/posts/${id}/delete/`, {
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

const PostReducer = (state = initialState, action) => {
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
        case ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            };
        case REMOVE_LIKE:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            };
        case GET_LIKE:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            };
        default:
            return state;
    }
}

export default PostReducer;
