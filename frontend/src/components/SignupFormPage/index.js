import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

// modal testing
import * as modalActions from '../../store/modal';
import Modal from 'react-modal';


import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    // const modalLogInState = useSelector((state) => state.modal.login)
    const modalSignUpState = useSelector((state) => state.modal.signup)

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    // if (sessionUser) return <Redirect to="/" />;
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


    const closeSignUp = () => {
        dispatch(modalActions.modalSignUpClose())
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={modalSignUpState}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={dispatch(modalActions.closeLogin)}
            contentLabel="SignUp Modal"
            shouldCloseOnOverlayClick={true}
            shouldFocusAfterRender={true}
            style={customStyles}
        >
            <div>
                <div>
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
            </div>
        </ Modal>
    );
}

export default SignupFormPage;
