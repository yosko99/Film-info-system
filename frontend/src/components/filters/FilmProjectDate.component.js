import { useNavigate, useSearchParams } from 'react-router-dom';
import getSubmitUrl from '../../functions/getSubmitUrl';
import DataTable from '../partials/DataTable.component';
import Loading from '../partials/Loading.component';
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useQuery } from 'react-query';
import axios from 'axios';

const FilmByProjectDate = () => {
  const [dataTableState, setDataTableState] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDataTableState(<DataTable
      showSetting={false}
      queryKey='filmProjectDate'
      link={'/api/projects/film/' + e.target.value}
      data={{ dataProjekciq: 'Дата на прожекция' }}/>);
    navigate('?' + getSubmitUrl('filmProjectDateForm'));
  };

  useEffect(() => {
    if (window.location.search !== '') {
      setDataTableState(<DataTable
        showSetting={false}
        queryKey='filmProjectDate'
        link={'/api/projects/film/' + searchParams.get('kodFilm')}
        data={{ dataProjekciq: 'Дата на прожекция' }} />);
    }
  }, []);

  const { isLoading, isError, error, data } = useQuery(['films', '/api/films'],
    () => axios.get('/api/films/').then((response) => response.data));

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }
  return (
    <>
    <h3 className='text-center my-2'>По избран филм да се изведе дата на прожекция</h3>
    <Form type='get' id='filmProjectDateForm'>
      <Form.Group className="mb-3" controlId="kodFilm">
        <Form.Label>Заглавие на филм</Form.Label>
        <Form.Select name='kodFilm' onChange={(e) => handleChange(e)} defaultValue={searchParams.get('kodFilm') || ''}>
        {data.map((film, index) => (
          <option value={film.kodFilm} key={index + 1 }>{film.nazvanieFilm}</option>
        ))}
        </Form.Select>
      </Form.Group>
    </Form>

    { dataTableState }

    </>
  );
};

export default FilmByProjectDate;
