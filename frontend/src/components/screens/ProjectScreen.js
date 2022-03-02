import DataTable from '../partials/DataTable.component';
import ModalForm from '../partials/Modal.component';
import { Container } from 'react-bootstrap';
import AddData from '../AddData.component';
import React from 'react';

const ProjectScreen = () => {
  const inputData = {
    dataProjekciq: 'Дата на прожекция',
    cenaBilet: 'Цена на билет',
    kodKinoteatyr: 'Код на кинотеатър',
    kodFilm: 'Код на филм'
  };
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на прожекции</h2>
        <ModalForm
          btnText={'Добави нова дата на прежекция'}
          modalBody={
          <AddData
            link={'/api/project/'}
            inputValues={inputData}
            optionMenu={true}
              />}
        />
            <DataTable
                link={'/api/project/'}
                data={inputData}
            />
      </Container>
  );
};

export default ProjectScreen;
