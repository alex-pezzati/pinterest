const LOGIN_OPEN = 'modal/LogInOpen';
const LOGIN_CLOSE = 'modal/LogInClose';
const SIGNUP_OPEN = 'modal/SignUpOpen';
const SIGNUP_CLOSE = 'modal/SignUpClose';


export const openLogin = () => {
    return {
        type: LOGIN_OPEN,
    }
}

export const closeLogin = () => {
    return {
        type: LOGIN_CLOSE,
    }
}

export const openSignUp = () => {
    return {
        type: SIGNUP_OPEN,
    }
}

export const closeSignUp = () => {
    return {
        type: SIGNUP_CLOSE,
    }
}


const initialState = { login: false, signup: false }
const modalReducer = ( state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOGIN_OPEN:
            newState = Object.assign({}, state, {login: true});
            return newState;
        case LOGIN_CLOSE:
            newState = Object.assign({}, state, {login: false});
            return newState;
        case SIGNUP_OPEN:
            newState = Object.assign({}, state, {signup: true});
            return newState;
        case SIGNUP_CLOSE:
            newState = Object.assign({}, state, {signup: false});
            return newState;
        default:
            return state;
    }
}

export default modalReducer;
