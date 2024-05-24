
import './style/main.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Aside/>
        <Routes />
      </BrowserRouter>
      
    </div>
  );
}

export default App;



