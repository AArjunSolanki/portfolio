import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Work from './pages/Work';
import Info from './pages/Info';
import Layout from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/info" element={<Info />} />
      </Route>  
    </Routes>
  );
}

export default App;
