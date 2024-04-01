import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './EstiloGlobal.scss';
import Home from './components/Home/Home';
import Sobre from './components/Home/Sobre/Sobre';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
