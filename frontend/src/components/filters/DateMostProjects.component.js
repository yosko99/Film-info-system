import React, { useEffect, useState } from 'react';
import Loading from '../Loading.component';
import axios from 'axios';

const FilmNameHighestValue = () => {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState({
    date: '',
    numTimes: ''
  });

  useEffect(() => {
    axios.get('/api/projects/date/countMost').then((response) => {
      const { data: [{ broiProjekcii: numTimes, dataProjekciq: date }] } = response;
      setDate({ date, numTimes });
      setLoading(false);
    });
  });
  return (
    <>
    {loading
      ? <Loading />
      : <div style={{ height: '80vh' }} className='d-flex justify-content-center align-items-center flex-column'>
          <h2 className='mb-2'>Дата с най-много излъчвани филми</h2>
          <h3>През {date.date} са били излъчени {date.numTimes} филма</h3>
        </div>
    }
    </>
  );
};

export default FilmNameHighestValue;
