import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div className='alterar_cep'>
          <p>Você está em: São Paulo</p>
          <p>Alterar</p>
        </div>

        <div className='Header'>
          <div className='left_header'>
            <img src="/static/images/header/logo-branco.svg" alt="Logo" className='Logo'/>
            <p>Produtos</p>
            <p>Lançamentos</p>
            <p>Outlet</p>
          </div>

          <div className='right_header'>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
