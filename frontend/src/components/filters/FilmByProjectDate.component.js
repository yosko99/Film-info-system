import React, { useState, useEffect, useRef } from 'react';
import decodedSearch from '../../functions/decodedSearch';
import getSubmitUrl from '../../functions/getSubmitUrl';
import DataTable from '../partials/DataTable.component';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading.component';
import filmData from '../../data/filmData';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const FilmByProjectDate = () => {
  const [dataTableState, setDataTableState] = useState('');
  const [filmsState, setFilmsState] = useState('');
  const navigate = useNavigate();
  const categoryURL = useRef('');

  const handleChange = (e) => {
    categoryURL.current = decodedSearch();
    setDataTableState(<DataTable link={'/api/films/projects/' + e.target.value} showSetting={false} data={filmData.inputData}/>);
    navigate('?' + getSubmitUrl());
  };

  useEffect(() => {
    if (window.location.search !== '') {
      categoryURL.current = decodedSearch();
      setDataTableState(<DataTable link={'/api/films/projects/' + categoryURL.current} showSetting={false} data={filmData.inputData} />);
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
      <Form.Group className="mb-3" controlId="categoryName">
        <Form.Label>Заглавие на филм</Form.Label>
        <Form.Select name='nazvanieFilm' onChange={(e) => handleChange(e)} defaultValue={categoryURL.current}>
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
