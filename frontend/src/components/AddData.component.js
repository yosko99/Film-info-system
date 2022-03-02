import { Form, Button, Col, Alert } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Loading from './Loading.component';
import PropTypes from 'prop-types';
import axios from 'axios';

const AddData = ({ link, inputValues, formData, optionMenu = false }) => {
  // TODO: Maybe make it more responsive and export functionality and components to other files

  const [optionMenuState, setOptionMenuState] = useState({ films: '', cinemas: '' });
  const [fetchResponseState, setFetchResponseState] = useState('');
  const [dataState, setDataState] = useState({ inputValues });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // Validate form
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      axios.post(link, {
        data: dataState
      }).then((response) => {
        // Something went wrong with the insertion
        if (response.data.sqlMessage !== undefined) {
          setFetchResponseState({
            msg: response.data.sqlMessage,
            variant: 'danger'
          });
        } else {
          // Successfull inesrtion
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

  // Update form value states
  const handleChange = (e) => {
    const value = e.target.value;
    setDataState({
      ...dataState,
      [e.target.name]: value
    });
  };

  useEffect(() => {
    // Check whether option menu flag is set and fetch all film and cinema names
    if (optionMenu) {
      axios.get(('/api/film/')).then((response) => {
        const films = response.data;
        axios.get(('/api/cinema/')).then((response) => {
          const cinemas = response.data;
          setOptionMenuState({ films: films, cinemas: cinemas });
        });
      });
    }
  }, []);

  return (
    <>
    {/* Check whether option menu flag is set and print cycle of input or raw input */}

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {!optionMenu
        ? formData.map((formItem, index) => (
        <Form.Group key={index + 1} as={Col} className='mb-3' controlId={formItem.id}>
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
        ))
        : <>
        <Form.Group as={Col} className='mb-3' controlId={'dataProjekciq'}>
          <Form.Label>Дата на прожекция</Form.Label>
          <Form.Control
            required
            onChange={(e) => handleChange(e)}
            type='datetime-local'
            name='dataProjekciq'
          />
          <Form.Control.Feedback type="valid">Изглежда добре!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Избери някоя дата!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className='mb-3' controlId={'kodKinoteatyr'}>
          <Form.Label>Кинотеатър</Form.Label>
          {optionMenuState.cinemas === ''
            ? <Loading height='20'/>
            : <Form.Select required name='kodKinoteatyr' onChange={(e) => handleChange(e)}>
              <option></option>
              {optionMenuState.cinemas.map((cinemas) => (
                <option id={cinemas.kodKinoteatyr} value={cinemas.kodKinoteatyr} key={cinemas.kodKinoteatyr}>{cinemas.nazvanieKinoteatyr}</option>
              ))}
          </Form.Select>
          }
          <Form.Control.Feedback type="valid">Изглежда добре!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Избери кинотеатър!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className='mb-3' controlId={'kodFilm'}>
          <Form.Label>Филм</Form.Label>
          {optionMenuState.films === ''
            ? <Loading height='20'/>
            : <Form.Select required name='kodFilm' onChange={(e) => handleChange(e)}>
              <option></option>
              {optionMenuState.films.map((film) => (
                <option id={film.kodFilm} value={film.kodFilm} key={film.kodFilm}>{film.nazvanieFilm}</option>
              ))}
          </Form.Select>
          }
          <Form.Control.Feedback type="valid">Изглежда добре!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Избери филм!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className='mb-3' controlId={'cenaBilet'}>
          <Form.Label>Цена на билет</Form.Label>
          <Form.Control
            required
            onChange={(e) => handleChange(e)}
            type='number'
            min='1'
            name='cenaBilet'
          />
          <Form.Control.Feedback type="valid">Изглежда добре!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Въведи сума на билет > 0 !</Form.Control.Feedback>
        </Form.Group>
        </>}

      {fetchResponseState !== '' && <Alert variant={fetchResponseState.variant}>{fetchResponseState.msg}</Alert>}

        <Button type="submit" className='w-100 mt-2'>Добави</Button>
    </Form>
    </>
  );
};

AddData.propTypes = {
  inputValues: PropTypes.object,
  optionMenu: PropTypes.bool,
  formData: PropTypes.array,
  link: PropTypes.string
};

export default AddData;
