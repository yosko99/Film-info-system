import DataTable from '../partials/DataTable.component';
import ModalForm from '../partials/Modal.component';
import { Container } from 'react-bootstrap';
import filmData from '../../data/filmData';
import AddData from '../AddData.component';
import React from 'react';

const FilmScreen = () => {
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на филми</h2>
        <ModalForm
          btnText={'Добави нов филм'}
          modalBody={
            <AddData
              link={'/api/film/'}
              inputValues={filmData.inputValues}
              formData={filmData.formData}
              />
            }
        />
            <DataTable
                link={'/api/film/'}
                data={filmData.inputData}
            />
      </Container>
  );
};

export default FilmScreen;
