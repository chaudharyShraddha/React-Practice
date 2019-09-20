import React from "react";
import Modal from "react-modal";

const ModalOption = ( props ) => (
    <Modal isOpen={props.isActive} onRequestClose={props.isClose}>
        <h3>Welcome {props.UserName}!</h3><hr/>
        <p>Your entered email address is:</p>
        <p><b>{props.Email}</b></p>
        <button onClick={props.isClose}>OKAY</button>
    </Modal>
);

export default ModalOption;