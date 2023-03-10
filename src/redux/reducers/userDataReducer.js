import { GET_PAGE_LIST, USER_LOGOUT_SUCCESS, POST_USER_SIGNUP_SUCCESS, USER_LOGIN_SUCCESS, POST_USER_SIGNUP_VERIFY_SUCCESS,POST_USER_LOGIN_VERIFY_SUCCESS } from '../constants';

const initialState = {
    userValidator: false,
    userData: [],
    pageList: [],
    hotelData:[],
    flightData:[]
};

const userDataReducer = (state = initialState, action) => {
    // console.log("ACTION_IN_USERREDUCER : ", userData)
    switch (action.type) {
        case GET_PAGE_LIST:
            return {
                ...state,
                userValidator: []
            };
        case POST_USER_SIGNUP_SUCCESS:
            return {
                ...state,
                userData: action.data
            };
        case POST_USER_SIGNUP_VERIFY_SUCCESS:
            return {
                ...state,
                userData: action.data
            };

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                userValidator: true
            };

        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                userValidator: false
            };
        case POST_USER_LOGIN_VERIFY_SUCCESS:
            return {
                ...state,
                userData: action.data
            };
        default:
            return state;
    }
}

export default userDataReducer;