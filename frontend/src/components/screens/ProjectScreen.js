import ManipulateData from '../ManipulateData.component';
import DataTable from '../partials/DataTable.component';
import ModalForm from '../partials/Modal.component';
import projectData from '../../data/projectData';
import { Container } from 'react-bootstrap';
import React from 'react';
const ProjectScreen = () => {
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на прожекции</h2>
        <ModalForm
          btnText={'Добави нова дата на прежекция'}
          modalBody={
          <ManipulateData
            link={'/api/projects/'}
            inputValues={projectData.inputData}
            optionMenu={true}
              />}
        />
            <DataTable
                link={'/api/projects/'}
                data={projectData.inputData}
                showSetting={false}
                queryKey='projects'
            />
      </Container>
  );
};

export default ProjectScreen;
