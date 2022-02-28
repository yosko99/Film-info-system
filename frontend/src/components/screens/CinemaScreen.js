import DataTable from '../partials/DataTable.component';
import { Container } from 'react-bootstrap';
import React from 'react';

const CinemaScreen = () => {
  return (
      <Container>
        <h2 className='text-center my-3'>Справка на кинотеатри</h2>
            <DataTable
                link={'/api/cinema/'}
                data={{
                  kodKinoteatyr: 'Код на кинотеатър',
                  nazvanieKinoteatyr: 'Название на кинотеатър',
                  adresKinoteatyr: 'Адрес на кинотеатър',
                  kategoriqKinoteatyr: 'Категория на кинотеатър',
                  imeDirektor: 'Име на директор',
                  kinorazpredelitel: 'Киноразпределител'
                }}
            />
      </Container>
  );
};

export default CinemaScreen;
