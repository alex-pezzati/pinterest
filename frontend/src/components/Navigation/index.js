import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import { modalLogInOpen, modalSignUpOpen } from '../../store/modal';

// cn = className
import cn from './Navigation.module.css';
import logo from '../../images/pinterest-logo1.png'


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
                    className={cn.bar__login}
                    onClick={openLogIn}
                >
                    Log In
                </button>
                <LoginFormPage />
            </div>
            <div>
                <button
                    className={cn.bar__signup}
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
        <div className={cn.bar}>
            <div>
                <NavLink exact to="/" className={cn.bar__container} >
                    <img className={cn.bar__logo} src={logo} alt='logo' />
                    <h3 className={cn.bar__pinterest}>
                        Pinterest
                    </h3>
                </NavLink>
            </div>
            <div className={cn.bar__container}>
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
