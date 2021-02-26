import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import { modalLogInOpen, modalSignUpOpen } from '../../store/modal';

// cn = className
import c from './Navigation.module.css';
import logo from '../../images/pinterest-logo.svg'


function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const openLogIn = () => {
        dispatch(modalLogInOpen())
    }

    const openSignUp = () => {
        dispatch(modalSignUpOpen())
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
        <>
            <div>
                <button
                    className={c.login}
                    onClick={openLogIn}
                >
                    Log In
                </button>
                <LoginFormPage />
            </div>
            <div>
                <button
                    className={c.signup}
                    onClick={openSignUp}
                >
                    Sign Up
                </button>
                <SignupFormPage />
            </div>
        </>
        );
    }

    return (
        <div className={c.bar}>
            <div>
                <NavLink exact to="/" className={c.container} >
                    <img className={c.logo} src={logo} alt='logo' />
                    <h3 className={c.pinterest}>
                        Pinterest
                    </h3>
                </NavLink>
            </div>
            <div className={c.container}>
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
