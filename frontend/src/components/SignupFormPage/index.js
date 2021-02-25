import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { signup } from '../../store/session';
import { modalSignUpClose } from '../../store/modal';

import cn from'./SignupForm.module.css';
import logo from '../../images/pinterest-logo.jpg'

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
        dispatch(modalSignUpClose())
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
            className={cn.modal__content}
            overlayClassName={cn.modal__overlay}
            // bodyOpenClassName={cn.modal__portal}
            // portalClassName={cn.modal__portal}
            // style={modalStyle}
            shouldCloseOnOverlayClick={false}
            shouldFocusAfterRender={true}
        >
            <div>
                <img className={cn.login__logo} src={logo} alt='logo' />
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label>
                        Email
                        <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        Username
                        <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        Password
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        Confirm Password
                        <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
                <button onClick={closeSignUp}>close</button>
            </div>
        </ Modal>
    );
}

export default SignupFormPage;
