import Loading from '../Loading.component';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';

const FilmNameHighestValue = () => {
  const navigate = useNavigate();
  const { isLoading, isError, error, data } = useQuery('mostProjectDate',
    () => axios.get('/api/projects/date/countMost')
      .then((response) => response.data));

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }
  return (
    <div style={{ height: '80vh' }} className='d-flex justify-content-center align-items-center flex-column'>
      <h2 className='mb-2'>Дата с най-много излъчвани филми</h2>
      <h3>През {data.date} са били излъчени {data.numTimes} филма</h3>
    </div>
  );
};

export default FilmNameHighestValue;
