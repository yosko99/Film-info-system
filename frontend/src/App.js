import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/partials/Header.component';
import MainScreen from './components/screens/MainScreen';
import FilmScreen from './components/screens/FilmScreen';
import AddFilm from './components/AddFilm.component';
import React from 'react';

function App () {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path='/' exact element={<MainScreen />}/>
          <Route path='/films' exact element={<FilmScreen />}/>
          <Route path='/addFilm' exact element={<AddFilm />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
