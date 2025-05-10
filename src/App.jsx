import React from 'react';
import './App.scss';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';

/*import { fecharModal } from './utils';
import { abrirModal } from './utils';
import { salvarCEP } from './utils';
import { fecharAbaProdutos } from './utils';
import { abrirCarrinho } from './utils';
import { fecharCarrinho } from './utils';
import { enviarNewsletter } from './utils';
import { copiado } from './utils';
import Lancamentos from './Lancamentos';*/

import { useMediaQuery } from 'react-responsive';


import Desktop from './Desktop'
import Mobile from './Mobile'


function App() {
  const isDesktop = useMediaQuery({ minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var settings2 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      {isDesktop && <Desktop />}
      {isMobile && <Mobile />}  
    </div>
  );
}

export default App;
