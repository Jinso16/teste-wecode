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
     

     if (!inverse) {
          window.addEventListener('scroll', verificarScroll);
          window.addEventListener('mouseover', verificarMouse);
     }

     function atualizarCep() {
          let cep = localStorage.getItem('cep')

          if (cep !== '') {
               document.getElementById('local_atual').textContent = "Você está em: "+cep
          }
     }
     
     window.addEventListener('mouseover', atualizarCep);
});

reportWebVitals();
