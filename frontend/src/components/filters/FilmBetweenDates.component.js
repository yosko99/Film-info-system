import stripQueryFromUrl from '../../functions/stripQueryFromUrl';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getSubmitUrl from '../../functions/getSubmitUrl';
import DataTable from '../partials/DataTable.component';
import React, { useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import Loading from '../Loading.component';
import axios from 'axios';

const FilmByProjectDate = () => {
  const [datesState, setDatesState] = useState({ minDate: '', maxDate: '' });
  const [dataTableState, setDataTableState] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate('?' + getSubmitUrl());
    setDataTableState(<DataTable
                        link={`/api/films/date/${stripQueryFromUrl('minDataProjekciq')} / ${stripQueryFromUrl('maxDataProjekciq')}`}
                        showSetting={false}
                        data={{ nazvanieFilm: 'Название на филм' }}
                      />);
  };

  useEffect(() => {
    if (window.location.search !== '') {
      setDataTableState(<DataTable
                          link={`/api/films/date/${searchParams.get('minDataProjekciq')} / ${searchParams.get('maxDataProjekciq')}`}
                          showSetting={false}
                          data={{ nazvanieFilm: 'Название на филм' }}
                        />);
    }

    // Get recent date for a film and last
    axios.get('/api/projects/date?min').then((response) => {
      const minDate = Object.values(response.data[0])[0].substring(0, 10);
      axios.get('/api/projects/date?max').then((response) => {
        const maxDate = Object.values(response.data[0])[0].substring(0, 10);
        setDatesState({ minDate, maxDate });
      }).catch((err) => {
        navigate('/404', { state: { err } });
      });
    }).catch((err) => {
      navigate('/404', { state: { err } });
    });
  }, []);

  return (
    <>
    <h3 className='text-center my-2'>Имена на филми прожектирани между дати</h3>
    {datesState.minDate === ''
      ? <Loading />
      : <Form type='get'>
          <Form.Group as={Col} className='mb-3' controlId={'minDataProjekciq'}>
            <Form.Label>Начална дата</Form.Label>
            <Form.Control
              required
              onChange={(e) => handleChange(e)}
              type='date'
              name='minDataProjekciq'
              min={datesState.minDate}
              max={datesState.maxDate}
              defaultValue={searchParams.get('minDataProjekciq') || datesState.minDate}
            />
          </Form.Group>
          <Form.Group as={Col} className='mb-3' controlId={'maxDataProjekciq'}>
            <Form.Label>Крайна дата</Form.Label>
            <Form.Control
              required
              onChange={(e) => handleChange(e)}
              type='date'
              name='maxDataProjekciq'
              min={datesState.minDate}
              max={datesState.maxDate}
              defaultValue={searchParams.get('maxDataProjekciq') || datesState.maxDate}
            />
          </Form.Group>
    </Form>
    }

    { dataTableState }

    </>
  );
};

export default FilmByProjectDate;
