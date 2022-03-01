import DataTable from '../partials/DataTable.component';
import ModalForm from '../partials/Modal.component';
import { Container } from 'react-bootstrap';
import React from 'react';

const FilmScreen = () => {
  const inputData = {
    kodFilm: 'Код на филм',
    nazvanieFilm: 'Название на филм',
    rejisyorFilm: 'Режисьор на филм',
    kompozitorFilm: 'Композитор на филм',
    tematikaFilm: 'Тематика на филм',
    kategoriqFilm: 'Категория на филм',
    scenaristFilm: 'Сценарист на филм'
  };

  const formData = [
    {
      id: 'nazvanieFilm',
      label: 'Название на филм',
      placeHolder: 'Въведи име на филм'
    }, {
      id: 'rejisyorFilm',
      label: 'Име на режисьор',
      placeHolder: 'Въведи име на режисьор'
    }, {
      id: 'kompozitorFilm',
      label: 'Име на композитор',
      placeHolder: 'Въведи име на композитор'
    }, {
      id: 'tematikaFilm',
      label: 'Тематика на филм',
      placeHolder: 'Въведи тематика на филм'
    }, {
      id: 'kategoriqFilm',
      label: 'Категория на филм',
      placeHolder: 'Въведи категория на филм'
    }, {
      id: 'scenaristFilm',
      label: 'Име на сценарист',
      placeHolder: 'Въведи име на сценарист'
    }
  ];
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на филми</h2>
        <ModalForm
          btnText={'Добави нов филм'}
          link={'/api/film/'}
          inputValues={inputData}
          formData={formData}
        />
            <DataTable
                link={'/api/film/'}
                data={inputData}
            />
      </Container>
  );
};

export default FilmScreen;
