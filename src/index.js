import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
          <App />
     </React.StrictMode>
);   

window.addEventListener('DOMContentLoaded', () => {
     window.onbeforeunload = function () {
          window.scrollTo(0, 0);
     };

     let modal = true

     if (modal) {
          document.body.style.overflow = 'hidden'
     }

     let inverse = false
     let produtos_open = false

     function verificarScroll() {
          if (window.scrollY > 0 && !inverse) {
               const header = document.getElementById('Header');
               header.classList.add('inverso');
               inverse = true;
          }
     }

     function verificarMouse() {
          const header = document.getElementById('Header');
          if (!inverse && header.addEventListener('mouseover', function() {
               header.classList.add('inverso');
               inverse = true
          })) {}
     }
     
     function atualizarCep() {
          let cep = localStorage.getItem('cep')

          if (cep !== null) {
               document.getElementById('local_atual').textContent = "Você está em: "+cep
          }
     }
     
     function abrirAbaProdutos() {
          const produtos = document.getElementById('produtos')
          const div = document.getElementById('div-produtos')
          const fundo = document.getElementById('fundo-produtos')

          const lista = document.querySelectorAll('li[data-img]')
          const img = document.getElementById('prod-img')

          if (!produtos_open && produtos.addEventListener('mouseover', function() {
               produtos_open = true
               div.style.display = 'flex'
               document.body.style.overflow = 'hidden'
               fundo.style.display = 'block'
          })) {}

          lista.forEach(item => {
               item.addEventListener('mouseenter', () => {
                    const novaImagem = item.getAttribute('data-img')
                    img.src = "/static/images/produtos/"+novaImagem
               })
          })
     }

     if (!inverse) {
          window.addEventListener('scroll', verificarScroll);
          window.addEventListener('mouseover', verificarMouse);
     }

     window.addEventListener('mouseover', atualizarCep);

     if (!produtos_open) {
          window.addEventListener('mouseover', abrirAbaProdutos);
     }
});

reportWebVitals();
