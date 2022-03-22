/* eslint-disable react/prop-types */
import CustomCard from '../../partials/CustomCard.component';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading.component';
import { useQueries } from 'react-query';
import React from 'react';

const ShowFilms = ({ useQueriesData, films }) => {
  const results = useQueries(useQueriesData);
  const navigate = useNavigate();

  const isLoading = results.some(result => result.isLoading);
  const isError = results.some(result => result.isError);
  const error = results.some(result => result.error);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }

  return (
    <Container>
      <h2 className='text-center my-2 mb-5'>Популярни заглавия</h2>
      <Row>
        {films.map((film, index) => (
            <Col lg={3} md={6} sm={12} key={index + 1} className='d-flex justify-content-center my-2'>
              <CustomCard title={film.nazvanieFilm} body={film.kategoriqFilm} imgSrc={results[index].data.Poster}/>
            </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowFilms;
