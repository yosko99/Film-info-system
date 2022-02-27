import { Container, Button, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [filmState, setFilmState] = useState([]);
  const [filmInfoState, setFilmInfoState] = useState('');

  useEffect(() => {
    axios.get('/tables?table=film').then((response) => {
      setFilmState(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const filmHandler = (e) => {
    setFilmInfoState(filmState.find((film) => film.kodFilm.toString() === e.target.id));
  };

  return (
    <Container>
      <Row>
        <Col lg={5}>
          {filmState.map((film) => (
            <Button
              onClick={(e) => filmHandler(e)}
              id={film.kodFilm}
              variant='dark'
              className='m-1'
              key={film.kodFilm}>{film.nazvanieFilm}
            </Button>
          ))}
        </Col>
        <Col lg={7}>
            {filmInfoState === ''
              ? <h1>Click one of the films :)</h1>
              : <>
                <p>Композитор: {filmInfoState.kompozitorFilm}</p>
              </>}
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
