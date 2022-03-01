import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectScreen from './components/screens/ProjectScreen';
import CinemaScreen from './components/screens/CinemaScreen';
import Header from './components/partials/Header.component';
import MainScreen from './components/screens/MainScreen';
import FilmScreen from './components/screens/FilmScreen';
import AddData from './components/AddData.component';
import React from 'react';

function App () {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path='/' exact element={<MainScreen />}/>
          <Route path='/films' exact element={<FilmScreen />}/>
          <Route path='/cinemas' exact element={<CinemaScreen />}/>
          <Route path='/projects' exact element={<ProjectScreen />}/>
          <Route path='/addFilm' exact element={<AddData />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
