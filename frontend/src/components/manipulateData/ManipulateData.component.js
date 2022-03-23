import updateResponseMsg from './functions/updateResponseMsg';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import useCreateUpdate from './hooks/useCreateUpdate';
import useHandleDelete from './hooks/useHandleDelete';
import Loading from '../partials/Loading.component';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import PropTypes from 'prop-types';
import axios from 'axios';

const AddData = ({ link, inputValues, formData, optionMenu = false, defaultValues = '' }) => {
  // TODO: Maybe make it more responsive and export functionality and components to other files
  const [optionMenuState, setOptionMenuState] = useState({ films: '', cinemas: '' });
  const [dataState, setDataState] = useState({ inputValues });
  const [msgBoxState, setMsgBoxState] = useState('');
  const [headerState, setHeaderState] = useState('');
  const [validated, setValidated] = useState(false);

  const createData = useCreateUpdate(link, 'create');
  const updateData = useCreateUpdate(link, 'update');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // Hide alert box
    setMsgBoxState('');

    // Validate form
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Adding data
      if (defaultValues === '') {
        createData.mutate(dataState);
        updateResponseMsg(setMsgBoxState);
      } else { // Updating data
        updateData.mutate(dataState);
        updateResponseMsg(setMsgBoxState);
        setHeaderState(dataState[formData[0].id]);
      }
    }

    setValidated(true);
  };

  const { id } = useParams();
  const deleteData = useHandleDelete(link, id);

  const handleDelete = (e) => {
    e.preventDefault();
    if (confirm('Наистина ли искате да изтриете данните?')) {
      deleteData.mutate();
    }
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
    if (defaultValues !== '') {
      // formData[0].id is usually the name for the table row like nazvanieFilm, nazvanieKinoteatyr etc.
      setHeaderState(defaultValues[formData[0].id]);
    }
    // Check whether option menu flag is set and fetch all film and cinema names
    if (optionMenu) {
      axios.get(('/api/films/')).then((response) => {
        const films = response.data;
        axios.get(('/api/cinemas/')).then((response) => {
          const cinemas = response.data;
          setOptionMenuState({ films: films, cinemas: cinemas });
        });
      });
    }

    setDataState(defaultValues);
  }, []);

  return (
    <>
    {/* Check whether option menu flag is set and print cycle of input or raw input */}

    {defaultValues !== '' && <h3 className='text-center my-2'>Редактирай {headerState}</h3>}

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {!optionMenu
        ? formData.map((formItem, index) => (
        <Form.Group key={index + 1} as={Col} className='mb-3' controlId={formItem.id}>
          <Form.Label>{formItem.label}</Form.Label>
          <Form.Control
              required
              type="text"
              name={formItem.id}
              pattern='^[a-zA-Z\s\d]+$'
              onChange={(e) => handleChange(e)}
              placeholder={formItem.placeHolder}
              defaultValue={defaultValues[formItem.id]}
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
          <Form.Control.Feedback type="invalid">Въведи сума на билет по-голяма от 0 !</Form.Control.Feedback>
        </Form.Group>
        </>}

        {msgBoxState !== '' && <Zoom><Alert variant={msgBoxState.variant}>{msgBoxState.msg}</Alert></Zoom>}

          {defaultValues === ''
            ? <Button type='submit' className='w-100 mt-2'>Добави</Button>
            : <>
             <Button type='submit' variant='success' className='w-50 mt-2 '>Редактирай</Button>
             <Button type='submit' variant='danger' onClick={(e) => handleDelete(e)} className='w-50 mt-2'>Изтрий</Button>
           </>
           }
    </Form>
    </>
  );
};

AddData.propTypes = {
  defaultValues: PropTypes.object,
  inputValues: PropTypes.object,
  optionMenu: PropTypes.bool,
  formData: PropTypes.array,
  link: PropTypes.string
};

export default AddData;
