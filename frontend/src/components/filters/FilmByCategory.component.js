import { useNavigate, useSearchParams } from 'react-router-dom';
import getSubmitUrl from '../../functions/getSubmitUrl';
import DataTable from '../partials/DataTable.component';
import React, { useState, useEffect } from 'react';
import Loading from '../Loading.component';
import filmData from '../../data/filmData';
import { useQuery } from 'react-query';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const FilmByCategory = () => {
  const [dataTableState, setDataTableState] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate('?' + getSubmitUrl('filmByCategoryForm'));
    setDataTableState(<DataTable
      showSetting={false}
      queryKey='filmByCategory'
      data={filmData.inputData}
      link={'/api/films/category/' + e.target.value}
      />);
  };

  useEffect(() => {
    if (window.location.search !== '') {
      setDataTableState(<DataTable
        showSetting={false}
        queryKey='filmByCategory'
        data={filmData.inputData}
        link={'/api/films/category/' + searchParams.get('categoryName')}
        />);
    }
  }, []);

  const { isLoading, isError, error, data } = useQuery('categoryNames',
    () => axios.get('/api/films/categories/distinct').then((response) => response.data));

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }
  return (
    <>
    <h3 className='text-center my-2'>Филми по зададена категория</h3>
    <Form type='get' id='filmByCategoryForm'>
      <Form.Group className="mb-3" controlId="categoryName">
        <Form.Label>Категория на филм</Form.Label>
        <Form.Select name='categoryName' onChange={(e) => handleChange(e)} defaultValue={searchParams.get('categoryName') || ''}>
        {data.map((kategoriq, index) => (
          <option value={kategoriq.kategoriqFilm} key={index + 1}>{kategoriq.kategoriqFilm}</option>
        ))}
        </Form.Select>
      </Form.Group>
    </Form>

    { dataTableState }

    </>
  );
};

export default FilmByCategory;
