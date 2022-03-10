import { Form, FormControl, Alert } from 'react-bootstrap';
import { searchData } from '../../data/searchData';
import DataTable from './DataTable.component';
import ModalForm from './Modal.component';
import React, { useState } from 'react';
import MiniSearch from 'minisearch';

const SearchBar = () => {
  const [dataState, setDataState] = useState({ query: '', variable: '' });
  const [tableState, setTableState] = useState('');

  const miniSearch = new MiniSearch({
    fields: ['text'], // fields to index for full-text search
    storeFields: ['query'] // fields to return with search results
  });

  miniSearch.addAll(searchData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataState.query !== '') {
      setTableState(<DataTable showSetting={false} link={'/api/dynamicQuery/'} optionalData={dataState} data={{ nazvanieFilm: 'Название на филм' }}/>);
    } else {
      setTableState(<Alert variant='warning' className='text-center'>Няма данни за въведената информация</Alert>);
    }
  };

  const handleChange = (e) => {
    const extractNumber = e.target.value.match(/\d+/);
    const suggestions = miniSearch.search(e.target.value, { fuzzy: 0.5 });
    const searchMatch = (suggestions.find((suggestion) => suggestion.terms.length >= 2));
    if (searchMatch !== undefined && extractNumber !== null) {
      setDataState({ query: searchMatch.query, variable: extractNumber[0] });
    }
  };

  return (
    <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
        <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => handleChange(e)}
        />
        <ModalForm btnText='Search' onClick={(e) => handleSubmit(e)} modalBody={tableState}/>
    </Form>
  );
};

export default SearchBar;
