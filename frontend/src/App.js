import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './Test.component';
import React from 'react';

function App () {
  return (
    <Router>
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path='/' exact element={<Test />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
