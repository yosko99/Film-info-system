import FilmByCategory from '../filters/FilmByCategory.component';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const FilterScreen = () => {
  const [formState, setFormState] = useState('');
  const { id } = useParams();

  useEffect(() => {
    switch (id) {
      case '1':
        setFormState(<FilmByCategory/>);
        break;
    }
  }, []);

  return (
    <Container className='mt-2'>
      {formState}
    </Container>
  );
};

export default FilterScreen;
