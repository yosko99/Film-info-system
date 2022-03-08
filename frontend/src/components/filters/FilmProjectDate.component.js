import { useNavigate, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import getSubmitUrl from '../../functions/getSubmitUrl';
import DataTable from '../partials/DataTable.component';
import Loading from '../Loading.component';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const FilmByProjectDate = () => {
  const [dataTableState, setDataTableState] = useState('');
  const [filmsState, setFilmsState] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDataTableState(<DataTable link={'/api/projects/film/' + e.target.value} showSetting={false} data={{ dataProjekciq: 'Дата на прожекция' }}/>);
    navigate('?' + getSubmitUrl());
  };

  useEffect(() => {
    if (window.location.search !== '') {
      setDataTableState(<DataTable link={'/api/projects/film/' + searchParams.get('kodFilm')} showSetting={false} data={{ dataProjekciq: 'Дата на прожекция' }} />);
    }

    axios.get('/api/films/').then((response) => {
      setFilmsState(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
    <h3 className='text-center my-2'>По избран филм да се изведе дата на прожекция</h3>
    {filmsState === ''
      ? <Loading />
      : <Form type='get'>
      <Form.Group className="mb-3" controlId="kodFilm">
        <Form.Label>Заглавие на филм</Form.Label>
        <Form.Select name='kodFilm' onChange={(e) => handleChange(e)} defaultValue={searchParams.get('kodFilm') || ''}>
        {filmsState.map((film, index) => (
          <option value={film.kodFilm} key={index + 1 }>{film.nazvanieFilm}</option>
        ))}
        </Form.Select>
      </Form.Group>
    </Form>
    }

    { dataTableState }

    </>
  );
};

export default FilmByProjectDate;
