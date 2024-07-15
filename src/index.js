import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import './index.css';
import Menu from './components/pages/menu/Menu';
import Price from './components/pages/price/Price';
import Reward from './components/pages/reward/Reward';
import FormComponent from './components/pages/formcomponent/FormComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path='form' element={<FormComponent />} />
        <Route path="price" element={<Price />} />
        <Route path='reward' element={<Reward />} />
      </Routes>
    </BrowserRouter>
    <div className='text-center footer fs-13 text-grey'>Copyright© 2024 เฟื่อง & บอม (EIP2024 intership)</div>
  </React.StrictMode>
);
