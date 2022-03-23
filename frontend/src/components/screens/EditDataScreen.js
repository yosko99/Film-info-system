import ManipulateData from '../manipulateData/ManipulateData.component';
import Loading from '../partials/Loading.component';
import cinemaData from '../../data/cinemaData';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import filmData from '../../data/filmData';
import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const EditDataScreen = () => {
  const currentTable = useRef({});
  const navigate = useNavigate();

  const { location: { pathname } } = window;
  const apiRoute = pathname.split('/')[1];

  currentTable.current = (apiRoute === 'cinemas') ? cinemaData : filmData;

  const link = `/api${pathname}`;

  const { isLoading, isError, error, data } = useQuery(pathname,
    () => axios.get(link)
      .then((response) => response.data));

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }

  return (
      <>
        <Container className='mt-2'>
          <ManipulateData
            link={`/api/${apiRoute}/`}
            inputValues={currentTable.current.inputData}
            formData={currentTable.current.formData}
            defaultValues={data[0]}
          />
        </Container>
    </>
  );
};

export default EditDataScreen;
