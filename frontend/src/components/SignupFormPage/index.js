import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { signup } from '../../store/session';
import { modalSignUpClose, modalLogInOpen } from '../../store/modal';

import c from'./SignupForm.module.css';
import logo from '../../images/pinterest-logo.svg'
import close from '../../images/close.svg'

Modal.setAppElement('#root');

function SignupFormPage() {
    const dispatch = useDispatch();
    const modalSignUpState = useSelector((state) => state.modal.signup)

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);


    const closeSignUp = () => {
        dispatch(modalSignUpClose());
    }

    const closeSignUpOpenLogIn = () => {
        dispatch(modalSignUpClose());
        dispatch(modalLogInOpen())
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(signup({ email, username, password }))
                .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };


    return (
        <Modal
            isOpen={modalSignUpState}
            className={c.content}
            overlayClassName={c.overlay}
            shouldCloseOnOverlayClick={false}
            shouldFocusAfterRender={true}
        >
            <div className={c.container}>
                <div className={c.x__container}>
                    <button onClick={closeSignUp} className={c.x__button}>
                        <div className={c.x__div}>
                            <img className={c.x__graphic} src={close} />
                        </div>
                    </button>
                </div>
                <div className={c.header}>
                    <img className={c.logo} src={logo} alt='logo' />
                </div>
                <h3 className={c.title}>Welcome to Pinterest</h3>
                <h3 className={c.subtitle}>Find new ideas to try</h3>
                <div className={c.form__container}>
                    <form onSubmit={handleSubmit} className={c.form}>
                        {/* <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul> */}
                        <input
                            type="text"
                            className={c.input}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder='Email'
                            required
                        />
                        <input
                            type="text"
                            className={c.input}
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder='Username'
                            required
                        />
                        <input
                            type="password"
                            className={c.input}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder='Password'
                            required
                        />
                        {/* <input
                            type="password"
                            className={c.input}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            placeholder='ConfirmPassword'
                            required
                        /> */}
                        <button type="submit"  className={c.continue__button}>Continue</button>
                    </form>
                    <p className={c.or}>OR</p>
                </div>
                <div className={c.div}>
                    <button className={c.demo}>Continue as Demo</button>
                </div>
                <div className={c.div__line}>
                </div>
                <div className={c.div}>
                    <a
                        onClick={(e) => closeSignUpOpenLogIn()}
                        className={c.signup}
                    >
                        Not on Pinterest yet? Sign up
                    </a>
                </div>
            </div>
        </ Modal>
    );
}

export default SignupFormPage;
