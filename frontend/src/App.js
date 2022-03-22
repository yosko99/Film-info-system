import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './components/screens/mainScreen/MainScreen';
import EditDataScreen from './components/screens/EditDataScreen';
import ProjectScreen from './components/screens/ProjectScreen';
import CinemaScreen from './components/screens/CinemaScreen';
import FilterScreen from './components/screens/FilterScreen';
import Footer from './components/partials/Footer.component';
import Header from './components/header/Header.component';
import FilmScreen from './components/screens/FilmScreen';
import Screen404 from './components/screens/Screen404';
import React from 'react';

function App () {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '90vh' }}>
        <Routes>
          <Route path='/' exact element={<MainScreen />}/>
          <Route path='/films' exact element={<FilmScreen />}/>
          <Route path='/films/:id' exact element={<EditDataScreen />}/>
          <Route path='/cinemas' exact element={<CinemaScreen />}/>
          <Route path='/cinemas/:id' exact element={<EditDataScreen />}/>
          <Route path='/projects' exact element={<ProjectScreen />}/>
          <Route path='/filters/:id' exact element={<FilterScreen />}/>
          <Route path='/*' exact element={<Screen404 />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
