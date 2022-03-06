import React, { useState, useEffect, useRef } from 'react';
import getSubmitUrl from '../../functions/getSubmitUrl';
import DataTable from '../partials/DataTable.component';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading.component';
import filmData from '../../data/filmData';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const FilmByCategory = () => {
  const [dataTableState, setDataTableState] = useState('');
  const [filmsState, setFilmsState] = useState('');
  const navigate = useNavigate();
  const categoryURL = useRef('');

  const handleChange = (e) => {
    categoryURL.current = decodeURIComponent((window.location.search).split('=')[1]);
    setDataTableState(<DataTable
                        link={'/api/films/categories/' + e.target.value}
                        showSetting={false}
                        data={filmData.inputData}
                      />);
    navigate('?' + getSubmitUrl());
  };

  useEffect(() => {
    if (window.location.search !== '') {
      categoryURL.current = decodeURIComponent(window.location.search).split('=')[1];
      setDataTableState(<DataTable
                          link={'/api/films/categories/' + categoryURL.current}
                          showSetting={false}
                          data={filmData.inputData}
                        />);
    }

    axios.get('/api/films/').then((response) => {
      const distinctCategories = new Set();
      response.data.forEach((film) => {
        distinctCategories.add(film.kategoriqFilm);
      });
      setFilmsState(Array.from(distinctCategories));
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
    <h3 className='text-center my-2'>Имена на филми по зададена категория</h3>
    {filmsState === ''
      ? <Loading />
      : <Form type='get'>
      <Form.Group className="mb-3" controlId="categoryName">
        <Form.Label>Категория на филм</Form.Label>
        <Form.Select name='categoryName' onChange={(e) => handleChange(e)} defaultValue={categoryURL.current}>
        {filmsState.map((film, index) => (
          <option value={film} key={index + 1 }>{film}</option>
        ))}
        </Form.Select>
      </Form.Group>
    </Form>
    }

    { dataTableState }

    </>
  );
};

export default FilmByCategory;
