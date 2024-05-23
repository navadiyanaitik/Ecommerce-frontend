import React from 'react'
import Modal from 'react-modal';
import './Modal.css';

const Popup = ({ open, setOpen }) => {
    let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setOpen(false);
    }
    return (
        <Modal
            isOpen={open}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="fixed z-[51] inset-0 bg-black bg-opacity-50"
            className="absolute top-1/2 left-1/2 right-auto bottom-auto -mr-[50%] -translate-x-1/2 -translate-y-1/2 p-12 max-w-[90%]"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>

        </Modal>
    )
}

export default Popup