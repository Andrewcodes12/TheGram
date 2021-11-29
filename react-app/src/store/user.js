const LOAD_USERS = 'LOAD_USER';
const LOAD_USER = 'LOAD_USER';



const loadUsers = () => ({
    type: LOAD_USERS,
});

const loadUser = (user) => ({
    type: LOAD_USER,
    user
});

export const getUsers = () => async (dispatch) => {
    const response = await fetch('/api/users');
    const users = await response.json();
    dispatch(loadUsers(users));
}


const getUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/`);
    const user = await response.json();
    dispatch(loadUser(user));
}

const UserReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: action.users
            };
        case LOAD_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}

export default UserReducer;
