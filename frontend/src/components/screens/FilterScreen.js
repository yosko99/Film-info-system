import React, { useState, useEffect } from 'react';
import filters from '../filters/exportedFilters';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const FilterScreen = () => {
  const [formState, setFormState] = useState('');
  const { id } = useParams();

  useEffect(() => {
    switch (id) {
      case '1':
        setFormState(<filters.FilmByCategory />);
        break;
      case '2':
        setFormState(<filters.FilmProjectDate />);
        break;
      case '3':
        setFormState(<filters.FilmBetweenDates />);
        break;
    }
  }, [id]);

  return (
    <Container className='mt-2'>
      {formState}
    </Container>
  );
};

export default FilterScreen;
