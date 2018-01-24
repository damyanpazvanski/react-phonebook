export function getUsers() {
    return {
        type: 'GET_USERS'
    }
}

export function getUser(userId) {
    return {
        type: 'GET_USER',
        userId: userId
    }
}

export function editUser(user) {
    return {
        type: 'EDIT_USER',
        user: user
    }
}

export function searchUser(text) {
    return {
        type: 'SEARCH_USER',
        text: text
    }
}

export function addUser(user) {
    return {
        type: 'ADD_USER',
        user: user
    }
}
