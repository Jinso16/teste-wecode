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

     function verificarScroll() {
          const header = document.getElementById('Header');
          if (window.scrollY > 0) {
            header.classList.add('inverso');
          }
     }

     window.addEventListener('scroll', verificarScroll);
});

//window.addEventListener('DOMContentLoaded', verificarScroll);

reportWebVitals();
