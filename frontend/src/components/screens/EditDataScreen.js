import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddData from '../AddData.component';
import filmData from '../../data/filmData';
import { Container } from 'react-bootstrap';
import Loading from '../Loading.component';

const EditDataScreen = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    axios.get(`/api${window.location.pathname}`).then((response) => {
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
          <AddData
          link={'/api/film/'}
          inputValues={filmData.inputData}
          formData={filmData.formData}
          defaultValues={dataState}
          />
      </Container>
    }
    </>
  );
};

export default EditDataScreen;
