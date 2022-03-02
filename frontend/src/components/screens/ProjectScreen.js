import DataTable from '../partials/DataTable.component';
import ModalForm from '../partials/Modal.component';
import projectData from '../../data/projectData';
import { Container } from 'react-bootstrap';
import AddData from '../AddData.component';
import React from 'react';

const ProjectScreen = () => {
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на прожекции</h2>
        <ModalForm
          btnText={'Добави нова дата на прежекция'}
          modalBody={
          <AddData
            link={'/api/project/'}
            inputValues={projectData.inputData}
            optionMenu={true}
              />}
        />
            <DataTable
                link={'/api/project/'}
                data={projectData.inputData}
                showSetting={false}
            />
      </Container>
  );
};

export default ProjectScreen;
