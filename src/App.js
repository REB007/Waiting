import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SimplePage } from './SimplePage.js';

const App = () => {
  return (
    <BrowserRouter>
      <SimplePage/>
    </BrowserRouter>
  );
}

export default App;