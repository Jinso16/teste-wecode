import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

import { fecharModal } from './utils';
import { abrirModal } from './utils';
import { salvarCEP } from './utils';
import { fecharAbaProdutos } from './utils';
import { abrirCarrinho } from './utils';
import { fecharCarrinho } from './utils';
import { enviarNewsletter } from './utils';
import { copiado } from './utils';
import { openSapatos } from "./utils";
import { openMenu } from "./utils";
import { closeMenu } from "./utils"; 

import LancamentosMobile from './LancamentosMobile';

export default function Desktop() {
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
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    var settings3 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <div>
            <div id="modal1" className='fundo_modal' onClick={fecharModal}></div>
            <div id="modal2" className='alterar_cep_modal'>
                <img src="/static/images/modal/close-btn.svg" alt="Fechar" onClick={fecharModal} />

                <p>Personalize sua experiência e encontre produtos perto de você!</p>

                <section>
                    <div className='cep'>
                        <span>Cógido postal*</span>
                        <input id='cep' type='text' placeholder='00000-000' maxLength={9} required />
                    </div>

                    <div className='local'>
                        <div className='cidade'>
                            <span>Cidade</span>
                            <input id='cidade' type='text' placeholder='Opcional' />
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
                    <p onClick={abrirModal} style={{ textDecoration: 'underline' }}>Alterar</p>
                </div>

                <div className='Header' id='Header'>
                    <div className='left_header'>
                        <img onClick={openMenu} src="/static/images/header/menu.svg" alt="" />
                        <img src="/static/images/header/icone-search.svg" alt="Pesquisar" />

                        <div className='exp_produtos'>
                            <p id='produtos'>Produtos</p>
                            <img src="/static/images/header/seta-baixo.svg" alt="Expandir Produtos" className='seta' />
                        </div>
                    </div>

                    <div className="mid_header">
                        <img src="/static/images/header/logo-branco.svg" alt="Logo" className='Logo' id='Logo' />
                    </div>

                    <div className='right_header'>
                        <img src="/static/images/header/icone-conta.svg" alt="Minha Conta" />
                        <div onClick={abrirCarrinho} className='sacola'>
                            <img src="/static/images/header/icone-carrinho.svg" alt="Carrinho" />
                            <h3 id='num-items' className='itens'>{localStorage.getItem("itens")}</h3>
                        </div>
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

            <div id="fundo-menu" className="fundo-menu"></div>
            <div id="menu" className="menu">
                <div className="header-menu">
                    <img src="/static/images/header/logo-preto.svg" alt="Logo Bebece" />
                    <img onClick={closeMenu} src="/static/images/modal/close-btn.svg" alt="Fechar Menu" />
                </div>

                <div className="banner-menu">
                    <img src="/static/images/Menu/banner-menu.svg" alt="" />
                </div>

                <div className="menu-bottom">
                    <p>Liquida</p>
                    
                    <div onClick={openSapatos} className="option">
                        <p>Sapatos</p>
                        <img id='seta-sapatos' src="/static/images/Menu/seta.svg" alt="" />
                    </div>

                    <div id="option-sapatos" className="option-sapatos">
                        <p>Scarpins</p>
                        <p>Mocassim</p>
                        <p>Sapatilhas</p>
                        <p>Mules</p>
                        <p>Peep Toe</p>
                        <p>Oxford</p>
                    </div>

                    <div className="option">
                        <p>Sandálias</p>
                        <img src="/static/images/Menu/seta.svg" alt="" />
                    </div>

                    <div className="option">
                        <p>Botas</p>
                        <img src="/static/images/Menu/seta.svg" alt="" />
                    </div>

                    <div className="option">
                        <p>Tênis</p>
                        <img src="/static/images/Menu/seta.svg" alt="" />
                    </div>

                    <p style={{color: '#B11B26'}}>Outlet</p>
                </div>
            </div>

            <div id='fundo-carrinho' onClick={fecharCarrinho} className='fundo-carrinho'></div>
            <div id='carrinho' className='Carrinho'>
                <div className='carrinho-top'>
                    <div className='carrinho-header'>
                        <h1>Carrinho</h1>
                        <img onClick={fecharCarrinho} src="static/images/modal/close-btn.svg" alt="" />
                    </div>

                    <img src="static/images/card-produto.svg" alt="" />
                </div>

                <div className='carrinho-bottom'>
                    <div className='info'>
                        <p>Subtotal</p>
                        <p>R$ 1055,89</p>
                    </div>

                    <div className='info'>
                        <p>Descontos</p>
                        <p style={{ color: '#B11B26' }}>-R$ 191,62</p>
                    </div>

                    <div className='info'>
                        <p>Total</p>
                        <p>R$ 864,27</p>
                    </div>

                    <button>Finalizar pedido</button>

                    <h2 onClick={fecharCarrinho} >Continuar comprando</h2>
                </div>
            </div>

            <div className='banner'>
                <Slider {...settings}>
                    <div className='div-banner'>
                        <img src="/static/images/banner/banner-mobile-1.svg" alt="" />
                        <button>Conheça agora!</button>
                    </div>

                    <div className='div-banner'>
                        <img src="/static/images/banner/banner-mobile-3.svg" alt="" />
                    </div>

                    <div className='div-banner'>
                        <img src="/static/images/banner/banner-mobile-2.svg" alt="" />
                        <button>Ver coleção completa</button>
                    </div>
                </Slider>
            </div>

            <div className='Categorias'>
                <div className='text'>
                    <h1>Categorias</h1>
                </div>

                <div className='row-categorias'>
                    <div className='categoria'>
                        <div className='img'>
                            <img src="/static/images/produtos/img-cat4.svg" alt="Botas" />
                        </div>
                        <p>Botas</p>
                    </div>

                    <div className='categoria'>
                        <div className='img'>
                            <img src="/static/images/produtos/img-cat2.svg" alt="Scarpins" />
                        </div>
                        <p>Scarpins</p>
                    </div>

                    <div className='categoria'>
                        <div className='img'>
                            <img src="/static/images/produtos/img-cat3.svg" alt="Sapatilhas" />
                        </div>
                        <p>Sapatilhas</p>
                    </div>

                    <div className='categoria'>
                        <div className='img'>
                            <img src="/static/images/produtos/img-cat5.svg" alt="Sandalias" />
                        </div>
                        <p>Sandálias</p>
                    </div>
                </div>
            </div>

            <div className='Cards'>
                <img src="/static/images/banner/banner-3.svg" alt="Card 1" />
                <img src="/static/images/banner/banner-4.svg" alt="Card 2" />
            </div>

            <div className="mobile">
                <LancamentosMobile />
            </div>

            <div className='conheca-mais'>
                <div className='title'>
                    <h1>Conheça mais</h1>
                    <p>Fique por dentro de tudo que acontece na Bebecê.</p>
                </div>

                <div className='blog'>

                    <Slider {...settings2}>
                        <div className='post'>
                            <img src="/static/images/blog/blog-2.svg" alt="" />

                            <h1>É AMANHÃ</h1>
                            <p>SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️</p>
                            <h3>Saiba mais!</h3>
                        </div>

                        <div className='post'>
                            <img src="/static/images/blog/blog-3.svg" alt="" />

                            <h1>NOVO LOGO, MESMA ESSÊNCIA.</h1>
                            <p>Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!</p>
                            <h3>Saiba mais!</h3>
                        </div>

                        <div className='post'>
                            <img src="/static/images/blog/blog-1.svg" alt="" />

                            <h1>DESCUBRA O GLAMOUR EM CADA PASSO.</h1>
                            <p>Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨</p>
                            <h3>Saiba mais!</h3>
                        </div>
                    </Slider>

                </div>
            </div>

            <div className='div-cupom'>
                <div id='text-cupom' className='text'>
                    <p>Cadastre-se e receba 10% OFF na sua primeira compra!</p>
                </div>

                <div id='text2-cupom' className='text2'>
                    <p>Utilize o cupom abaixo e garanta seu desconto!</p>
                </div>

                <div id='inputs-cupom' className='inputs'>
                    <input type="email" name="" id="input-email" placeholder='Digite seu e-mail' />
                    <button onClick={enviarNewsletter} >ENVIAR</button>
                </div>

                <div id='cupom-ativo' className='cupom-ativo'>
                    <div className='cupom'>
                        <p>BEMVINDA</p>
                    </div>
                    <button id='btn-copiar' onClick={copiado}>Copiar</button>
                </div>
            </div>

            <footer>
                <img src="/static/images/Logo-bege.svg" alt="Logo Bebece" />

                <div className='footer-right'>
                    <div className='redes'>
                        <img src="/static/images/redes/instagram.svg" alt="intagram" />
                        <img src="/static/images/redes/facebook.svg" alt="facebook" />
                        <img src="/static/images/redes/pinterest.svg" alt="pinterest" />
                        <img src="/static/images/redes/twitter.svg" alt="twitter" />
                        <img src="/static/images/redes/tik-tok.svg" alt="tik-tok" />
                    </div>
                    <div className='infos'>
                        <h1>Sobre a empresa</h1>
                        <p>Quem somos</p>
                        <p>Fale conosco</p>
                    </div>
                    <div className='infos'>
                        <h1>Políticas</h1>
                        <p>Política de Privacidade</p>
                        <p>Termos de Uso</p>
                        <p>Política de Entrega</p>
                        <p>Política de Cupom e Descontos</p>
                    </div>
                </div>
            </footer>
        </div>
    )
} 