export const userType = {
    SEARCH_USER: 'SEARCH_USER',
    SHOW_USER_TWEETS: 'SHOW_USER_TWEETS',
    CLEAN_USER: 'CLEAN_USER'
};

const user = (state = [], action) => {
    switch (action.type) {
        case userType.SEARCH_USER:
            return ({
                userData: action.payload.data
            });
        case userType.SHOW_USER_TWEETS:
            return ({
                ...state,
                selectedUser: action.payload.user,
                lastFiveTweets: action.payload.data
            });
        case userType.CLEAN_USER:
            return ({
                ...state,
                selectedUser: null,
                lastFiveTweets: null
            });
        default:
            return state;
    }
};

export default user;
