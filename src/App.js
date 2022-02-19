import React from 'react';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';

function App() {
  return (
  <div>
    <Routes>
      <Route exact path='/' element={<HomePage />} />
    </Routes>
  </div>
  );
}

export default App;
