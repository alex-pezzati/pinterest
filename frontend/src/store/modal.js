const LOGIN_OPEN = 'modal/LogInOpen';
const LOGIN_CLOSE = 'modal/LogInClose';
const SIGNUP_OPEN = 'modal/SignUpOpen';
const SIGNUP_CLOSE = 'modal/SignUpClose';


const openLogin = () => {
    return {
        type: LOGIN_OPEN,
    }
}

const closeLogin = () => {
    return {
        type: LOGIN_CLOSE,
    }
}

const openSignUp = () => {
    // console.log('am i inside of opensignup action?')
    return {
        type: SIGNUP_OPEN,
    }
}

const closeSignUp = () => {
    return {
        type: SIGNUP_CLOSE,
    }
}


export const modalLogInOpen = () => async (dispatch) => {
    dispatch(openLogin());
}

export const modalLogInClose= () => (dispatch) => {
    // console.log('am i getting inside of modalsignupopen?')
    dispatch(closeLogin());
}

export const modalSignUpOpen = () => (dispatch) => {
    // console.log('am i getting inside of modalsignupopen?')
    dispatch(openSignUp());
}

export const modalSignUpClose = () => (dispatch) => {
    // console.log('am i getting inside of modalsignupopen?')
    dispatch(closeSignUp());
}



const initialState = { login: false, signup: false }
const modalReducer = ( state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOGIN_OPEN:
            newState = Object.assign({}, state, {login: true});
            return newState;
        case LOGIN_CLOSE:
            return initialState;
        case SIGNUP_OPEN:
            console.log('im inside of the reducer')
            newState = Object.assign({}, state, {signup: true});
            return newState;
        case SIGNUP_CLOSE:
            return initialState;
        default:
            return state;
    }
}

export default modalReducer;
