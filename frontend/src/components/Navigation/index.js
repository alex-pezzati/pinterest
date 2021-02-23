import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

// cn = className
import cn from './Navigation.module.css';
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
                    <button className={cn.bar__login}>
                        Log In
                    </button>
                </NavLink>
            </div>
            <div>
                <NavLink to="/signup">
                    <button className={cn.bar__signup}>
                        Sign Up
                    </button>
                </NavLink>
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
