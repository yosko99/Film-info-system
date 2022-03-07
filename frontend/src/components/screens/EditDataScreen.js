import ManipulateData from '../ManipulateData.component';
import React, { useState, useEffect } from 'react';
import cinemaData from '../../data/cinemaData';
import { Container } from 'react-bootstrap';
import filmData from '../../data/filmData';
import Loading from '../Loading.component';
import axios from 'axios';

const EditDataScreen = () => {
  const [currentTableState, setCurrentTableState] = useState({});
  const [loadingState, setLoadingState] = useState(true);
  const [dataState, setDataState] = useState([]);

  const apiRoute = window.location.pathname.split('/')[1];

  useEffect(() => {
    axios.get(`/api${window.location.pathname}`).then((response) => {
      // Check which route is entered to decide what data to load
      apiRoute === 'cinemas' ? setCurrentTableState(cinemaData) : setCurrentTableState(filmData);
      setDataState(response.data[0]);
      setLoadingState(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
      <>
      {loadingState
        ? <Loading />
        : <Container className='mt-2'>
          <ManipulateData
            link={`/api/${apiRoute}/`}
            inputValues={currentTableState.inputData}
            formData={currentTableState.formData}
            defaultValues={dataState}
          />
      </Container>
    }
    </>
  );
};

export default EditDataScreen;
