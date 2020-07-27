export const errorType = {
    TIME_OUT: 'TIME_OUT',
    CLEAN_NOTICE: 'CLEAN_NOTICE'
};

const error = (state = {isNoticed: 0}, action) => {
    switch (action.type) {
        case errorType.TIME_OUT:
            return ({
                ...state,
                message: errorType.TIME_OUT,
                isNoticed: 1
            });
        case errorType.CLEAN_NOTICE:
            return ({
                ...state,
                isNoticed: 0
            });
        default:
            return state;
    }
};

export default error;
