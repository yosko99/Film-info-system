import { LinkContainer } from 'react-router-bootstrap';
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading.component';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import axios from 'axios';

const DataTable = ({ link, data, showSetting = true, optionalData = '' }) => {
  const [loadingState, setLoadingState] = useState(true);
  const [dataState, setDataState] = useState([]);
  const navigate = useNavigate();

  // Fetch data on component load depending on passed route
  useEffect(() => {
    setLoadingState(true);
    if (optionalData !== '') {
      axios.post(link, { data: optionalData }).then((response) => {
        setDataState(response.data);
        setLoadingState(false);
      }).catch((err) => {
        navigate('/404', { state: { err } });
      });
    } else {
      axios.get(link).then((response) => {
        setDataState(response.data);
        setLoadingState(false);
      }).catch((err) => {
        navigate('/404', { state: { err } });
      });
    }
  }, [link]);

  return (
    <>
    <div className='mt-2'>
        {loadingState
          ? <Loading/>
          : dataState.length === 0
            ? <h4 className='text-center'>Няма данни за избраната опция</h4>
            : <Fade>
              <Table striped bordered hover >
              <thead>
                  <tr>
                      {Object.values(data).map((title, index) => (
                          <th key={index + 1}>{title}</th>
                      ))}
                      {showSetting && <th></th>}
                  </tr>
              </thead>
              <tbody>
                  {dataState.map((stateData, index) => (
                    <tr key={index + 1}>
                        {Object.keys(data).map((key, index) => (
                            <td key={index + 1}>{stateData[key]}</td>
                        ))}
                        {showSetting &&
                        <td>
                          <LinkContainer className='d-flex justify-content-center' to={`${window.location.pathname}/${Object.values(stateData)[0]}`}>
                            <Button>Редактирай</Button>
                          </LinkContainer>
                        </td>
                        }
                    </tr>
                  ))}
              </tbody>
          </Table>
        </Fade>
        }
    </div>
    </>
  );
};

DataTable.propTypes = {
  link: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  optionalData: PropTypes.object,
  showSetting: PropTypes.bool
};

export default DataTable;
