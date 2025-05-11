import React, { useEffect, useState } from 'react';
import { getProducts } from './utils';
import { abrirCarrinho } from './utils';

import Slider from "react-slick";


export default function LancamentosMobile() {
    const [products, setProducts] = useState([]);
    const [favoritos, setFavoritos] = useState({});
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
    const tamanhos = [34, 35, 36, 37, 38, 39, 40];

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    const favoritarProduto = (id) => {
        setFavoritos((prev) => ({
          ...prev,
          [id]: !prev[id]
        }));
    };

    const abrirDetalhes = (product) => {
        setProdutoSelecionado(product);
        document.body.style.overflow = 'hidden'
    };
    
    const fecharDetalhes = () => {
        setProdutoSelecionado(null);
        document.body.style.overflow = ''
    };

    const addItem = () => {
        const item = document.getElementById('num-items')

        localStorage.setItem("itens", +localStorage.getItem("itens")+1)
        item.textContent = localStorage.getItem("itens")
        fecharDetalhes()

        abrirCarrinho()
    }

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        
        <div className='Lancamentos'>
            <div className='text'>
                <h1>Lançamentos</h1>
            </div>

            <div className='produtos'>
                {products.map((product) => {
                    const { name, image, price, id } = product;
                    const isFavorito = favoritos[id];
                    const isDiscounted = price.isDiscount != null;
                    const discountPercent = isDiscounted
                        ? Math.round(((price.amount - price.isDiscount) / price.amount) * 100)
                        : null;

                    return (
                        <div className='produto' style={{display: 'flex'}} key={id}>
                            <div className='img-card'>
                                <div onClick={() => favoritarProduto(id)} className='fav'>
                                    <img
                                        className="fav-heart"
                                        src={isFavorito ? "/static/images/heart-fill.svg" : "/static/images/heart.svg"}
                                        alt="Adicionar aos favoritos"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>

                                <img onClick={() => abrirDetalhes(product)} className='vitrine' src="/static/images/vitrine.svg" alt="Adicionar a vitrine" />
                                {isDiscounted && <p>{discountPercent}% OFF</p>}
                                <img src={image} alt={name} />
                            </div>

                            <p>{name}</p>

                            <div className='promo'>
                                {isDiscounted ? (
                                    <>
                                        <h2>R$ {price.amount.toFixed(2).replace('.', ',')}</h2>
                                        <h1>R$ {price.isDiscount.toFixed(2).replace('.', ',')}</h1>
                                    </>
                                ) : (
                                    <h1>R$ {price.amount.toFixed(2).replace('.', ',')}</h1>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {produtoSelecionado && (
                <div>
                    <div className='fundo-vitrine' onClick={fecharDetalhes}></div>
                    <div className="vitrine-modal" onClick={(e) => e.stopPropagation()}>
                        <img
                        src={produtoSelecionado.image}
                        alt={produtoSelecionado.name}
                        />
                        
                        <div className='produto'>
                            <h2>{produtoSelecionado.name}</h2>

                            <div className='tamanhos'>
                                <p>
                                    {tamanhoSelecionado
                                    ? `Tamanho: ${tamanhoSelecionado}`
                                    : 'Tamanho:'}
                                </p>
                                <div>
                                    {tamanhos.map((tam) => (
                                        <label
                                            key={tam}
                                            className={`tamanho ${tamanhoSelecionado === tam ? 'ativo' : ''}`}
                                        >
                                            <p>{tam}</p>
                                            <input
                                                type="radio"
                                                name="tam"
                                                value={tam}
                                                onChange={() => setTamanhoSelecionado(tam)}
                                                hidden
                                            />
                                        </label>
                                    ))}

                                    <img src="static/images/sem-tamanho.svg" alt="" />
                                </div>
                            </div>

                            <div onClick={ addItem } className='button'>
                                <p>Adicionar ao carrinho</p>
                                <img src="static/images/vitrine-no-back.svg" alt="" />
                            </div>
                        </div>

                        <img className='close' onClick={fecharDetalhes} src="/static/images/modal/close-btn.svg" alt="Fechar Modal" />
                    </div>
                </div>
            )}

        </div>
    );
}