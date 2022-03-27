import ManipulateData from '../manipulateData/ManipulateData.component';
import DataTable from '../partials/DataTable.component';
import ModalForm from '../partials/Modal.component';
import cinemaData from '../../data/cinemaData';
import { Container } from 'react-bootstrap';
import React from 'react';

const CinemaScreen = () => {
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на кинотеатри</h2>
        <ModalForm
          btnText={'Добави нов кинотеатър'}
          modalBody={
            <ManipulateData
              link={'/api/cinemas/'}
              formData={cinemaData.formData}
              />
            }
        />
            <DataTable
                link={'/api/cinemas/'}
                data={cinemaData.inputData}
                queryKey='cinemas'
            />
      </Container>
  );
};

export default CinemaScreen;
