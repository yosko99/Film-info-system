import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading.component';
import ShowFilms from './ShowFilms.component';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const MainScreen = () => {
  const [limit] = useState(4);
  const navigate = useNavigate();

  // Fetch 4 random films from db
  const { isLoading, isError, error, data: films } = useQuery('randomFilms',
    () => axios.get(`/api/films?limit=${limit}`)
      .then((response) => response.data));

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }

  // Create objects with unique query key and request to API, for useQueries
  const useQueriesData = films.map((film) => {
    return {
      queryKey: film.nazvanieFilm,
      queryFn: () => axios.get(`http://www.omdbapi.com/?t=${film.nazvanieFilm}&apikey=b9333f1e`)
        .then((response) => response.data)
    };
  });

  return <ShowFilms useQueriesData={useQueriesData} films={films}/>;
};

export default MainScreen;
