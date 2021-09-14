import React, { useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RegistrationModal({ registration, setRegistration }) {
  const [modalShow, setModalShow] = React.useState(true);

  const handleInputChange = useCallback(
    (event) => {
      setRegistration(event.target.value);
    },
    [setRegistration]
  );

  return (
    <div>
      <Modal
        show={registration}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => (registration = false-)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <>
        <Button variant="primary" onClick={handleInputChange}>
          Launch vertically centered modal
        </Button>
      </>
    </div>
  );
}

export default RegistrationModal;
