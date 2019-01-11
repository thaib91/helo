const initialState = {
    username: '',
    profile: '',
    userId: 0

}

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export function updateUserInfo(username, profile, userId) {
    return {
        type: UPDATE_USER_INFO,
        payload: {username:username, profile:profile, userId:userId}
    }
}

export default function reducer(reduxState = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return {...reduxState, username:action.payload.username, profile: action.payload.profile, userId: action.payload.userId}

        default: return reduxState;
    }
}