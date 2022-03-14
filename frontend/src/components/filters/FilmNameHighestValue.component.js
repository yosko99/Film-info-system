import React, { useEffect, useState } from 'react';
import Loading from '../Loading.component';
import axios from 'axios';

const FilmNameHighestValue = () => {
  const [loading, setLoading] = useState(true);
  const [filmName, setFilmName] = useState('');

  useEffect(() => {
    axios.get('/api/projects/max/price').then((response) => {
      const { data: [{ nazvanieFilm }] } = response;
      setFilmName(nazvanieFilm);
      setLoading(false);
    });
  });
  return (
    <>
    {loading
      ? <Loading />
      : <div style={{ height: '80vh' }} className='d-flex justify-content-center align-items-center flex-column'>
          <h2 className='mb-2'>Филм с най-скъп билет</h2>
          <h3>Название на филм: {filmName}</h3>
        </div>
    }
    </>
  );
};

export default FilmNameHighestValue;
