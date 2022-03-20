import { Image, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Screen404 = () => {
  const location = useLocation();

  return (
    <>
      <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '80vh' }}>
          <div className='text-center'>
              <h2>Изглежда че се загуби</h2>
              <LinkContainer to='/'>
                  <Button>Начална страница</Button>
              </LinkContainer> <br/>
              <Image src='/error-404.webp'/>
          </div>
      </Container>
        {location.state &&
          <h4 className='text-center'>{location.state.err.toString()}</h4>
        }
    </>
  );
};

export default Screen404;
