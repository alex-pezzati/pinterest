import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import LoginFormPage from '../LoginFormPage'

// const customStyles = {
//     content : {
//         top                   : '50%',
//         left                  : '50%',
//         right                 : 'auto',
//         bottom                : 'auto',
//         marginRight           : '-50%',
//         transform             : 'translate(-50%, -50%)'
//     }
// };

// Modal.setAppElement('#root');

function TestApp() {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // function openModal() {
    //     setIsOpen(true);
    // }

    // function afterOpenModal() {
    //     subtitle.style.color = 'black';
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                {/* <LoginFormPage /> */}
            </Modal>
        </div>
    )
}

// ReactDom.render(<TestApp />, appElement)

export default TestApp;
