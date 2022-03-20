import stripQueryFromUrl from '../../functions/stripQueryFromUrl';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getSubmitUrl from '../../functions/getSubmitUrl';
import DataTable from '../partials/DataTable.component';
import React, { useEffect, useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import Loading from '../Loading.component';
import { useQueries } from 'react-query';
import axios from 'axios';

const FilmByProjectDate = () => {
  const [dataTableState, setDataTableState] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate('?' + getSubmitUrl('filmBetweenDatesForm'));
    setDataTableState(<DataTable
                        queryKey='filmsBetweenDates'
                        showSetting={false}
                        data={{ nazvanieFilm: 'Название на филм' }}
                        link={`/api/films/date/${stripQueryFromUrl('minDataProjekciq')} / ${stripQueryFromUrl('maxDataProjekciq')}`}
                      />);
  };

  useEffect(() => {
  // Check whether there is already query in the url
    if (window.location.search !== '') {
      setDataTableState(<DataTable
                          queryKey='filmsBetweenDates'
                          link={`/api/films/date/${searchParams.get('minDataProjekciq')} / ${searchParams.get('maxDataProjekciq')}`}
                          showSetting={false}
                          data={{ nazvanieFilm: 'Название на филм' }}
                        />);
    }
  }, []);

  const results = useQueries([
    {
      queryKey: 'maxProjectDate',
      queryFn: () => axios.get('/api/projects/date?max')
        .then((response) => response.data)
    },
    {
      queryKey: 'minProjectDate',
      queryFn: () => axios.get('/api/projects/date?min')
        .then((response) => response.data)
    }
  ]);

  const isLoading = results.some(results => results.isLoading);
  const isError = results.some(results => results.isError);
  const error = results.some(results => results.error);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }

  // Some date shortening
  const minDate = Object.values(results[1].data[0])[0].substring(0, 10);
  const maxDate = Object.values(results[0].data[0])[0].substring(0, 10);

  return (
    <>
    <h3 className='text-center my-2'>Имена на филми прожектирани между дати</h3>
    <Form type='get' id="filmBetweenDatesForm">
      <Form.Group as={Col} className='mb-3' controlId={'minDataProjekciq'}>
        <Form.Label>Начална дата</Form.Label>
        <Form.Control
          required
          onChange={(e) => handleChange(e)}
          type='date'
          name='minDataProjekciq'
          min={minDate}
          max={maxDate}
          defaultValue={searchParams.get('minDataProjekciq') || minDate}
        />
      </Form.Group>
      <Form.Group as={Col} className='mb-3' controlId={'maxDataProjekciq'}>
        <Form.Label>Крайна дата</Form.Label>
        <Form.Control
          required
          onChange={(e) => handleChange(e)}
          type='date'
          name='maxDataProjekciq'
          min={minDate}
          max={maxDate}
          defaultValue={searchParams.get('maxDataProjekciq') || maxDate}
        />
      </Form.Group>
    </Form>

    { dataTableState }

    </>
  );
};

export default FilmByProjectDate;
