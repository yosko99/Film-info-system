import DataTable from '../partials/DataTable.component';
import { Container } from 'react-bootstrap';
import React from 'react';

const FilmScreen = () => {
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на филми</h2>
            <DataTable
                link={'/api/film/'}
                data={{
                  kodFilm: 'Код на филм',
                  nazvanieFilm: 'Название на филм',
                  rejisyorFilm: 'Режисьор на филм',
                  kompozitorFilm: 'Композитор на филм',
                  tematikaFilm: 'Тематика на филм',
                  kategoriqFilm: 'Категория на филм',
                  scenaristFilm: 'Сценарист на филм'
                }}
            />
      </Container>
  );
};

export default FilmScreen;
