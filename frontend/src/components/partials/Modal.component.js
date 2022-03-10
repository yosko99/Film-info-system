import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModalForm = ({ btnText, modalBody, onClick }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload(false);
  };
  const handleShow = (e) => {
    if (onClick !== undefined) {
      onClick(e);
    }
    setShow(true);
  };

  return (
      <>
      <div className='d-flex justify-content-center'>
        <Button variant="primary" className='' onClick={(e) => handleShow(e)}>
          {btnText}
        </Button>
      </div>

        <Modal show={show} onHide={() => setShow(false)}>
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
  modalBody: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

export default ModalForm;
