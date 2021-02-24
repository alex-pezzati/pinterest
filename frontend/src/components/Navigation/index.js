import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

// cn = className
import cn from './Navigation.module.css';
import logo from '../../images/pinterest-logo1.png'


// modal testing
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import Modal from 'react-modal';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    const [modalLogInOpen, setLogInOpen] = useState(false);
    const [modalSignUpOpen, setSignUpOpen] = useState(false);

    function openModalLogIn() {
        setLogInOpen(true);
    }

    // var subtitleLogIn;
    // function afterOpenModalLogIn() {
    //     subtitleLogIn.style.color = 'black';
    // }

    function closeModalLogIn() {
        setLogInOpen(false);
    }

    function openModalSignUp() {
        setSignUpOpen(true);
    }

    // var subtitleSignUp;
    // function afterOpenModalSignUp() {
    //     subtitleSignUp.style.color = 'black';
    // }

    function closeModalSignUp() {
        setSignUpOpen(false);
    }

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };

    Modal.setAppElement('#root');

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
        <>
            <div>
                {/* <NavLink to="/login"> */}
                <button
                    className={cn.bar__login}
                    onClick={openModalLogIn}
                >
                    Log In
                </button>
                <Modal
                    isOpen={modalLogInOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModalLogIn}
                    contentLabel="Example Modal"
                    shouldCloseOnOverlayClick={false}
                    style={customStyles}
                >
                    <LoginFormPage />
                    <button onClick={closeModalLogIn}>close</button>
                </Modal>
                {/* </NavLink> */}
            </div>
            <div>
                {/* <NavLink to="/signup"> */}
                <button
                    className={cn.bar__signup}
                    onClick={openModalSignUp}
                >
                    Sign Up
                </button>
                <Modal
                    isOpen={modalSignUpOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModalSignUp}
                    contentLabel="Example Modal"
                    shouldCloseOnOverlayClick={false}
                    style={customStyles}
                >
                    <SignupFormPage />
                    <button onClick={closeModalSignUp}>close</button>
                </Modal>
                {/* </NavLink> */}
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
