import CustomCard from '../partials/CustomCard.component';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading.component';
import axios from 'axios';

const MainScreen = () => {
  const [state, setState] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/films/').then((response) => {
      const films = response.data;
      const randomFilms = [];

      for (let i = 0; i < 4; i++) {
        const film = films[Math.floor(Math.random() * films.length)];
        const filmTitle = film.nazvanieFilm;

        axios.get(`http://www.omdbapi.com/?t=${filmTitle}&apikey=b9333f1e`).then((response) => {
          film.poster = response.data.Poster;
          randomFilms.push(film);
          randomFilms.length === 4 && setState(randomFilms);
        }).catch((err) => {
          navigate('/404', { state: { err } });
        });
      }
    }).catch((err) => {
      navigate('/404', { state: { err } });
    });
  }, []);

  return (
      <Container>
        <h2 className='text-center my-2 mb-5'>Популярни заглавия</h2>
        {state === ''
          ? <Loading />
          : <Row>
          {state.map((film, index) => (
              <Col lg={3} md={6} sm={12} key={index + 1} className='d-flex justify-content-center my-2'>
                <CustomCard title={film.nazvanieFilm} body={film.kategoriqFilm} imgSrc={film.poster}/>
              </Col>
          ))}
        </Row>
        }
      </Container>
  );
};

export default MainScreen;
