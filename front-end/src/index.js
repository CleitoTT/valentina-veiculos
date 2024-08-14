import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Veiculos from './routes/Veiculos';
import Empresa from './routes/Empresa'
import Header from './components/Header';
import CriaCarros from './routes/CriaCarros';
import Carros from './routes/Carros';
import AtualizarCarro from './routes/AtualizarCarro';
import DeletaCarros from './routes/DeletaCarro';
import Dados from './routes/Dados';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='w-full h-screen bg-branco'>
        <Header />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/veículos' element={<Veiculos />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/criar' element={<CriaCarros />} />
          <Route path='/atualizar' element={<AtualizarCarro/>}/>
          <Route path='/deletar' element={<DeletaCarros/>}/>
          <Route path='/dados' element={<Dados/>}/>
          <Route path='/veículos/:id' element={<Carros/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
