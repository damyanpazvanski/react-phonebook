import { users } from './../data';

export default function reducer(state = {
    users: [],
    selectedId: null,
    allUsers: []
}, action) {

    let newState = Object.assign({}, state);

    switch (action.type) {
        case "GET_USERS": {
            newState.users = users;
            newState.allUsers = users;
            break;
        }
        case "GET_USER": {
            newState.selectedId = action.userId;
            break;
        }
        case "EDIT_USER": {
            newState.allUsers[action.user.id - 1] = action.user;
            break;
        }
        case "SEARCH_USER": {
            newState.users = newState.allUsers.filter(e => (e.firstName.toLowerCase().search(action.text.toLowerCase()) >= 0));
            break;
        }
        case "ADD_USER": {
            action.user.id = newState.allUsers[newState.allUsers.length - 1].id + 1;
            newState.users.push(action.user);
            break;
        }
        default: {
            newState = state;
        }
    }

    return newState;
}

