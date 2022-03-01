import { Button, Modal } from 'react-bootstrap';
import AddData from '../AddData.component';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModalForm = ({ btnText, link, inputValues, formData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
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
              <AddData link={link} inputValues={inputValues} formData={formData}/>
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
  inputValues: PropTypes.object.isRequired,
  btnText: PropTypes.string.isRequired,
  formData: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired
};

export default ModalForm;
