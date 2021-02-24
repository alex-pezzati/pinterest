import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import * as modalActions from '../../store/modal';
import Modal from 'react-modal';

import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const modalLogInState = useSelector((state) => state.modal.login);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

//   if (sessionUser) return (
//     <Redirect to="/" />
//   );




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

    const closeLogIn = () => {
        dispatch(modalActions.modalLogInClose())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
    }

    Modal.setAppElement('#root');

  return (
        <Modal
            isOpen={modalLogInState}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={dispatch(modalActions.closeLogin)}
            contentLabel="LogIn Modal"
            shouldCloseOnOverlayClick={true}
            shouldFocusAfterRender={true}
            style={customStyles}
        >
            <div className='window' onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label>
                        Username or Email
                        <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
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
                    <button type="submit">Log In</button>
                </form>
                <button onClick={closeLogIn}>close</button>
            </div>
        </ Modal>
  );
}

export default LoginFormPage;
