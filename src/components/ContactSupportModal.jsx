import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ContactSupportModal = (props) => {
  const handleClick = () => {
    window.open('https://www.facebook.com/Tamnhhe', '_blank');
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Support
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Support Information</h4>
        <p>
          If you have any issues or questions, please reach out to our support team.
          You can contact us via email at Tamnhhe@gmail.com or call us at 0369994876.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Contact</Button>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactSupportModal;
