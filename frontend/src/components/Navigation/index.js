import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

import style from './Navigation.module.css';
import logo from '../../images/pinterest-logo1.png'

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
        <>
            <div>
                <NavLink to="/login">
                    <button className={style.navbar__button}>
                        Log In
                    </button>
                </NavLink>
            </div>
            <div>
                <NavLink to="/signup">
                    <button className={style.navbar__button_signup}>
                        Sign Up
                    </button>
                </NavLink>
            </div>
        </>
        );
    }

    return (
        <div className={style.navbar}>
            <div>
                <NavLink exact to="/" className={style.navbar__container}>
                    <img className={style.navbar__logo} src={logo} alt='logo' />
                    <h3 className={style.navbar__pinterest}>
                        Pinterest
                    </h3>
                </NavLink>
            </div>
            <div className={style.navbar__container}>
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
