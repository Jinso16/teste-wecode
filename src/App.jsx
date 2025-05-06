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

        <div className='Header' id='Header'>
          <div className='left_header'>
            <img src="/static/images/header/logo-branco.svg" alt="Logo" className='Logo' id='Logo'/>
            <div className='exp_produtos'>
              <p>Produtos</p>
              <img src="/static/images/header/seta-baixo.svg" alt="Expandir Produtos" className='seta'/>
            </div>
            <p>Lançamentos</p>
            <p style={{ color: '#B11B26' }}>Outlet</p>
          </div>

          <div className='right_header'>
            <img src="/static/images/header/icone-search.svg" alt="Pesquisar" />
            <img src="/static/images/header/icone-conta.svg" alt="Minha Conta" />
            <img src="/static/images/header/icone-carrinho.svg" alt="Carrinho" style={{ width: '35px' }}/>
          </div>
        </div>
      </header>

      <div className='Home'>
        
      </div>
    </div>
  );
}

export default App;
