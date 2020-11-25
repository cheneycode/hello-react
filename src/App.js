import React from 'react';
import Index from './pages/index/index'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Index></Index>
    </BrowserRouter>
  );
}

export default App;
