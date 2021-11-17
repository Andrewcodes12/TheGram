const LOAD="Like/LOAD";
const LOAD_ONE="Like/LOAD_ONE";
const ADD_ONE="Like/ADD_ONE";
const DELETE_ONE="Like/DELETE_ONE";


const load=(likes)=>({
    type:LOAD,
    payload:likes
});

const loadOne=(like)=>({
    type:LOAD_ONE,
    payload:like
});


const addOne=(like)=>({
    type:ADD_ONE,
    payload:like
});

const deleteOne=(like)=>({
    type:DELETE_ONE,
    payload:like
});


export const getLikes=(id)=>async(dispatch)=>{
    const response=await fetch(`api/likes/post/${id}/`);
    if(response.ok){
        const likes=await response.json();
        dispatch(load(likes));
    }
}

export const getLike=(id)=>async(dispatch)=>{
    const response=await fetch(`api/likes/post/${id}/`);
    if(response.ok){
        const like=await response.json();
        dispatch(loadOne(like));
    }
}

export const addLike=(like,id)=>async(dispatch)=>{
    const response=await fetch(`api/likes/post/${id}/like`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(like)
    });
    if(response.ok){
        const newLike=await response.json();
        dispatch(addOne(newLike));
    }
}

export const deleteLike=(like,id)=>async(dispatch)=>{
    const response=await fetch(`api/likes/post/${id}/unlike`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(like)
    });
    if(response.ok){
        const newLike=await response.json();
        dispatch(deleteOne(newLike));
    }
}


const initialState={
    likes:[],
    like:null
}

const LikeReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOAD:
            return{
                ...state,
                likes:action.payload
            }
        case LOAD_ONE:
            return{
                ...state,
                like:action.payload
            }
        case ADD_ONE:
            return{
                ...state,
                likes:[...state.likes,action.payload]
            }
        case DELETE_ONE:
            return{
                ...state,
                likes:state.likes.filter(like=>like.id!==action.payload.id)
            }
        default:
            return state;
    }
}

export default LikeReducer;
