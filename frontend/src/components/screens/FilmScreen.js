import ManipulateData from '../ManipulateData.component';
import DataTable from '../partials/DataTable.component';
import ModalForm from '../partials/Modal.component';
import { Container } from 'react-bootstrap';
import filmData from '../../data/filmData';
import React from 'react';

const FilmScreen = () => {
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на филми</h2>
        <ModalForm
          btnText={'Добави нов филм'}
          modalBody={
            <ManipulateData
              link={'/api/films/'}
              inputValues={filmData.inputValues}
              formData={filmData.formData}
              />
            }
        />
            <DataTable
                link={'/api/films/'}
                data={filmData.inputData}
                queryKey='films'
            />
      </Container>
  );
};

export default FilmScreen;
