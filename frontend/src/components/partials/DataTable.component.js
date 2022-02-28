import { Container, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Loading from '../Loading.component';
import axios from 'axios';

/* eslint-disable */
const CinemaScreen = ({ link, data }) => {
  const [state, setState] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    axios.get(link).then((response) => {
      setState(response.data);
      setLoadingState(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
    <Container className='mt-2'>
        {loadingState
          ? <Loading/>
          : <Table striped bordered hover >
            <thead>
                <tr>
                    {Object.values(data).map((title, index) => (
                        <th key={index + 1}>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {state.map((stateData, index) => (
                    <tr key={index + 1}>
                        {Object.keys(data).map((key, index) => (
                            <td key={index + 1}>{stateData[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
        }
    </Container>
    </>
  );
};

export default CinemaScreen;
