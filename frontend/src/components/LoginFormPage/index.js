import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { login } from '../../store/session';
import { modalLogInClose } from '../../store/modal';

import cn from './LoginForm.module.css';
import logo from '../../images/pinterest-logo.jpg'
import './test.css'

Modal.setAppElement('#root');

function LoginFormPage() {
    const dispatch = useDispatch();
    const modalLogInState = useSelector((state) => state.modal.login);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    console.log(cn.login__content)

    const closeLogIn = () => {
        dispatch(modalLogInClose())
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


    return (
        <Modal
            isOpen={modalLogInState}
            className={cn.modal__content}
            overlayClassName={cn.modal__overlay}
            // bodyOpenClassName={cn.modal__portal}
            // portalClassName={cn.modal__portal}
            // style={modalStyle}
            shouldCloseOnOverlayClick={false}
            shouldFocusAfterRender={true}
        >
            <div className={cn.login__container}>
                <form onSubmit={handleSubmit}>
                    <img className={cn.login__logo} src={logo} alt='logo' />
                    <h3>Welcome to Pinterest</h3>
                    <div>
                        <input
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            placeholder='Email'
                            required
                        />
                    </div>
                    <div>
                        <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            required
                        />
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <button onClick={closeLogIn}>close</button>
            </div>
        </ Modal>
    );
}

export default LoginFormPage;
