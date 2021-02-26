import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { login } from '../../store/session';
import { modalLogInClose, modalSignUpOpen } from '../../store/modal';

// styling
import cn from './LoginForm.module.css';
import logo from '../../images/pinterest-logo.svg'
import close from '../../images/close.svg'

Modal.setAppElement('#root');

function LoginFormPage() {
    const dispatch = useDispatch();
    const modalLogInState = useSelector((state) => state.modal.login);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const closeLogIn = () => {
        dispatch(modalLogInClose());
    }

    const closeLogInOpenSignUp = () => {
        dispatch(modalLogInClose());
        dispatch(modalSignUpOpen());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(login({ credential, password }))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
    }

    let errorRender;
    if (errors.length > 0) {
        errorRender = (
            <div className={cn.div}>
                <ul>
                    {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            </div>
        )
    }

    return (
        <Modal
            isOpen={modalLogInState}
            className={cn.content}
            overlayClassName={cn.overlay}
            shouldCloseOnOverlayClick={false}
            shouldFocusAfterRender={true}
        >
            <div className={cn.container}>
                <div className={cn.x__container}>
                    <button onClick={closeLogIn} className={cn.x__button}>
                        <div className={cn.x__div}>
                            <img className={cn.x__graphic} src={close} />
                        </div>
                    </button>
                </div>
                <div className={cn.header}>
                    <img className={cn.logo} src={logo} alt='logo' />
                </div>
                <h3 className={cn.title}>Welcome to Pinterest</h3>
                <div className={cn.form__container}>
                    <form onSubmit={handleSubmit} className={cn.form}>
                        <div className={cn.div}>
                            <input
                                className={cn.input}
                                type='text'
                                placeholder='Email'
                                onChange={(e) => setCredential(e.target.value)}
                                value={credential}
                                required
                            />
                        </div>
                        {errorRender}
                        <div className={cn.div}>
                            <input
                                className={cn.input}
                                type='password'
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                />
                        </div>
                        <div>
                            <a className={cn.forgot}>Forgot your password?</a>
                        </div>
                        <div className={cn.div}>
                            <button type='submit' className={cn.login__button}>Log In</button>
                        </div>
                    </form>
                    <p className={cn.or}>OR</p>
                </div>
                <div className={cn.div}>
                    <button className={cn.demo}>Continue as Demo</button>
                </div>
                <div className={cn.div__line}>
                </div>
                <div className={cn.div}>
                    <a onClick={(e) => closeLogInOpenSignUp()} className={cn.signup}>Not on Pinterest yet? Sign up</a>
                </div>
            </div>
        </ Modal>
    );
}

export default LoginFormPage;
