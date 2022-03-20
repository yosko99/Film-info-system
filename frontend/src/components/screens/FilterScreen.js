import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import filters from '../filters/exportedFilters';
import { Container } from 'react-bootstrap';

const FilterScreen = () => {
  const [formState, setFormState] = useState('');
  const navigate = useNavigate();
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
      case '4':
        setFormState(<filters.FilmNameHighestValue />);
        break;
      case '5':
        setFormState(<filters.DateMostProjects />);
        break;
      default:
        navigate('/404');
    }
  }, [id]);

  return (
    <Container className='mt-2'>
      {formState}
    </Container>
  );
};

export default FilterScreen;
