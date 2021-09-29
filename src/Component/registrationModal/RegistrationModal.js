import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
// import { MdVisibility, MdVisibilityOff, MdWarning } from "react-icons/md";

function RegistrationModal(props) {
  return (
    <div>
      <Modal
        show={props.showModal}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
      ></Modal>
      <Button variant="primary">Launch vertically centered modal</Button>
    </div>
  );
}

export default RegistrationModal;
