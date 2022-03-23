/* eslint-disable no-var */
import { LinkContainer } from 'react-router-bootstrap';
import Loading from '../partials/Loading.component';
import { useQuery, useMutation } from 'react-query';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import axios from 'axios';
import React from 'react';

// link - link to backend api
// data - column name for table and key for row from fetched data,
// so it can be responsive example (nazvanieFilm: 'Название на филм')
// showSetting - whether to show setting at the end of the table
// optionalData - if passsed make a post request with the provided data and link

const DataTable = ({ link, data, showSetting = true, optionalData = '', queryKey = '' }) => {
  const navigate = useNavigate();

  // TODO: Crashesh when using search bar
  // Fetch data on component load depending on passed route
  if (optionalData !== '') {
    var { isLoading, isError, error, data: response } = useMutation(
      () => axios.post(link, { data: optionalData })
        .then((response) => response.data));
    console.log(link);
    // axios.post(link, { data: optionalData }).then((response) => {
    //   setDataState(response.data);
    //   setLoadingState(false);
    // }).catch((err) => {
    //   navigate('/404', { state: { err } });
    // });
  } else {
    // eslint-disable-next-line no-redeclare
    var { isLoading, isError, error, data: response } = useQuery([queryKey, link],
      () => axios.get(link)
        .then((response) => response.data), {
        refetchOnMount: true
      });
  }

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }

  return (
    <>
    <div className='mt-2'>
        {response.length === 0
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
                  {response.map((stateData, index) => (
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
  showSetting: PropTypes.bool,
  queryKey: PropTypes.string
};

export default DataTable;
