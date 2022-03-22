import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const CustomCard = ({ imgSrc, title, body }) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {body}
            </Card.Text>
        </Card.Body>
    </Card>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imgSrc: PropTypes.string
};

export default CustomCard;
