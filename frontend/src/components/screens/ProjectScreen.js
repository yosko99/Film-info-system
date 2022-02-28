import DataTable from '../partials/DataTable.component';
import { Container } from 'react-bootstrap';
import React from 'react';

const ProjectScreen = () => {
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на прожекции</h2>
            <DataTable
                link={'/api/project/'}
                data={{
                  dataProjekciq: 'Дата на прожекция',
                  cenaBilet: 'Цена на билет',
                  kodKinoteatyr: 'Код на кинотеатър',
                  kodFilm: 'Код на филм'
                }}
            />
      </Container>
  );
};

export default ProjectScreen;
