import React from 'react';
import './App.scss';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { fecharModal } from './utils';
import { abrirModal } from './utils';
import { salvarCEP } from './utils';
import { fecharAbaProdutos } from './utils';

function App() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <div id="modal1" className='fundo_modal' onClick={fecharModal}></div>
      <div id="modal2" className='alterar_cep_modal'>
        <img src="/static/images/modal/close-btn.svg" alt="Fechar" onClick={fecharModal}/>

        <p>Personalize sua experiência e encontre produtos perto de você!</p>

        <section>
          <div className='cep'>
            <span>Cógido postal*</span>
            <input id='cep' type='text' placeholder='00000-000' maxLength={9} required/>
          </div>

          <div className='local'>
            <div className='cidade'>
              <span>Cidade</span>
              <input id='cidade' type='text' placeholder='Opcional'/>
            </div>

            <div className='estado'>
              <span>Estado</span>
              <select id="estado" defaultValue={'Opcional'}>
                <option value="Opcional" disabled>Opcional</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>
          </div>

          <button onClick={salvarCEP}>Salvar endereço</button>
        </section>
        
      </div>

      <header>
        <div className='alterar_cep_header'>
          <p id='local_atual'>Você está em: São Paulo</p>
          <p onClick={abrirModal} style={ {textDecoration: 'underline'} }>Alterar</p>
        </div>

        <div className='Header' id='Header'>
          <div className='left_header'>
            <img src="/static/images/header/logo-branco.svg" alt="Logo" className='Logo' id='Logo'/>
            <div className='exp_produtos'>
              <p id='produtos'>Produtos</p>
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

        <div onClick={fecharAbaProdutos} className='fundo-produtos' id='fundo-produtos'></div>
        <div className='div-produtos' id='div-produtos'>
          <div className='produtos'>
            <li data-img='img-cat1.svg' >Sapatos</li>
            <li data-img='img-cat2.svg' >Scarpins</li>
            <li data-img='img-cat3.svg' >Sandálias</li>
            <li data-img='img-cat4.svg' >Botas</li>
          </div>

          <img id='prod-img' src="/static/images/produtos/img-cat1.svg" alt="Imagem da categoria" />
        </div>
      </header>

      <Slider {...settings}>
        <div className='div-banner'>
          <img src="/static/images/banner/banner-2.png" alt="" />
        </div>

        <div className='div-banner'>
          <img src="/static/images/banner/banner-1.png" alt="" />
        </div>
      </Slider>
      
    </div>
  );
}

export default App;
