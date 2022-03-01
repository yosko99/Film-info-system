import React, { useState, useEffect } from 'react';
import Loading from '../Loading.component';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

const DataTable = ({ link, data }) => {
  const [loadingState, setLoadingState] = useState(true);
  const [dataState, setDataState] = useState([]);

  // Fetch data on component load depending on passed route
  useEffect(() => {
    axios.get(link).then((response) => {
      setDataState(response.data);
      setLoadingState(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
    <div className='mt-2'>
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
                {dataState.map((stateData, index) => (
                    <tr key={index + 1}>
                        {Object.keys(data).map((key, index) => (
                            <td key={index + 1}>{stateData[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
        }
    </div>
    </>
  );
};

DataTable.propTypes = {
  link: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default DataTable;