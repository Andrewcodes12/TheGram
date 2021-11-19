import {csrfFetch} from './csrf';

const SEARCH_USERS = 'SEARCH_USERS';

const searchUsers = (users) => ({
    type: SEARCH_USERS,
    users
});


export const userLookUp = (searchTerm) => async (dispatch) => {

    const obj = {
        searchTerm,
    };

    const response = await csrfFetch('/api/search/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
}
    );
    const users = await response.json();
    dispatch(searchUsers(users));
};


const initialState = {  };

const find = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_USERS:
         const everyUser= {};
            action.users.forEach(user => {
                everyUser[user.id] = user;
            });
            return {
                ...state,
                ...everyUser
            };
        default:
            return state;
    }
}

export default find;
