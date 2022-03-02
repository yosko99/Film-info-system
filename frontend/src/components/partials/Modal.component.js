import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModalForm = ({ btnText, modalBody }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload(false);
  };
  const handleShow = () => setShow(true);

  return (
      <>
      <div className='d-flex justify-content-center'>
        <Button variant="primary" className='w-50 mb-2' onClick={handleShow}>
          {btnText}
        </Button>
      </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{btnText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {modalBody}
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Затвори
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
};

ModalForm.propTypes = {
  btnText: PropTypes.string.isRequired,
  modalBody: PropTypes.any.isRequired
};

export default ModalForm;
