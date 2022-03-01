import { Form, Button, Col, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AddData = ({ link, inputValues, formData }) => {
  const [fetchResponseState, setFetchResponseState] = useState('');
  const [dataState, setDataState] = useState({ inputValues });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      axios.post(link, {
        data: dataState
      }).then((response) => {
        if (response.data.sqlMessage !== undefined) {
          setFetchResponseState({
            msg: response.data.sqlMessage,
            variant: 'danger'
          });
        } else {
          setFetchResponseState({
            msg: 'Успешно добавяне :)',
            variant: 'success'
          });
        }
      }).catch((err) => {
        console.log(err.sqlState);
      });
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setDataState({
      ...dataState,
      [e.target.name]: value
    });
  };

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {formData.map((formItem, index) => (
        <Form.Group key={index + 1} as={Col} className='mb-2' controlId={formItem.id}>
          <Form.Label>{formItem.label}</Form.Label>
          <Form.Control
            required
            type="text"
            name={formItem.id}
            pattern='^[a-zA-Z]+$'
            onChange={(e) => handleChange(e)}
            placeholder={formItem.placeHolder}
          />
          <Form.Control.Feedback type="valid">Изглежда добре!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Пробвайте с друг вход!</Form.Control.Feedback>
        </Form.Group>
      ))}
      {fetchResponseState !== '' && <Alert variant={fetchResponseState.variant}>{fetchResponseState.msg}</Alert>}
        <Button type="submit" className='w-100 mt-2'>Добави</Button>
    </Form>
    </>
  );
};

AddData.propTypes = {
  inputValues: PropTypes.object,
  formData: PropTypes.array,
  link: PropTypes.string
};

export default AddData;
