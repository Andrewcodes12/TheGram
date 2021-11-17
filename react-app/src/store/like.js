const LOAD="Like/LOAD";
const LOAD_ONE="Like/LOAD_ONE";
const ADD_ONE="Like/ADD_ONE";
const UPDATE_ONE="Like/UPDATE_ONE";
const DELETE_ONE="Like/DELETE_ONE";


const load=(likes)=>({
    type:LOAD,
    payload:likes
});

const loadOne=(like)=>({
    type:LOAD_ONE,
    payload:like
});


