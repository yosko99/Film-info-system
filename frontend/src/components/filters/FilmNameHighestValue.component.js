import Loading from '../partials/Loading.component';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';

const FilmNameHighestValue = () => {
  const navigate = useNavigate();

  const { isLoading, isError, error, data } = useQuery('filmNameHighestValue',
    () => axios.get('/api/projects/max/price')
      .then((response) => response.data));

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }

  const [{ nazvanieFilm }] = data;

  return (
    <div style={{ height: '80vh' }} className='d-flex justify-content-center align-items-center flex-column'>
        <h2 className='mb-2'>Филм с най-скъп билет</h2>
        <h3>Название на филм: {nazvanieFilm}</h3>
    </div>
  );
};

export default FilmNameHighestValue;
