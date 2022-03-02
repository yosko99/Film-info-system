import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManipulateData from './components/ManipulateData.component';
import EditDataScreen from './components/screens/EditDataScreen';
import ProjectScreen from './components/screens/ProjectScreen';
import CinemaScreen from './components/screens/CinemaScreen';
import Header from './components/partials/Header.component';
import MainScreen from './components/screens/MainScreen';
import FilmScreen from './components/screens/FilmScreen';
import React from 'react';

function App () {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path='/' exact element={<MainScreen />}/>
          <Route path='/film' exact element={<FilmScreen />}/>
          <Route path='/film/:id' exact element={<EditDataScreen />}/>
          <Route path='/cinema' exact element={<CinemaScreen />}/>
          <Route path='/cinema/:id' exact element={<EditDataScreen />}/>
          <Route path='/project' exact element={<ProjectScreen />}/>
          <Route path='/addFilm' exact element={<ManipulateData />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
