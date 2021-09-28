import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Registration from "./Registration";
import logo from "../images/logo.png";
import styles from "./Style.module.css";

function MadalRegistration() {
  const [state, changeState] = useState(false);
  const handleShow = () => {
    changeState(!state);
  };

  return (
    <div>
      <Button onClick={handleShow}>register in pethroly</Button>
      <Modal onHide={handleShow} show={state}>
        <img src={logo} alt="logo.png" className={styles.logo}></img>
        <Modal.Body>
          <Registration />
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Button className={styles.registrationBtn} onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MadalRegistration;
