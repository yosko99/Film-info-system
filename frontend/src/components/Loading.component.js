import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const Loading = ({ height = '50vh' }) => (
    <div className='d-flex justify-content-center align-items-center' style={{ height }}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Зарежда се...</span>
        </Spinner>
    </div>
);

Loading.propTypes = {
  height: PropTypes.string
};

export default Loading;
