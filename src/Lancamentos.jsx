import React, { useEffect, useState } from 'react';
import { getProducts } from './utils';

import Slider from "react-slick";


export default function Lancamentos() {
    const [products, setProducts] = useState([]);
    const [favoritos, setFavoritos] = useState({});
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

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
    };
    
    const fecharDetalhes = () => {
        setProdutoSelecionado(null);
    };

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        
        <div className='Lancamentos'>
            <div className='text'>
                <h1>Lançamentos</h1>
            </div>

            <div className='produtos'>
                <Slider {...settings}>
                    {products.map((product) => {
                        const { name, image, price, id } = product;
                        const isFavorito = favoritos[id];
                        const isDiscounted = price.isDiscount != null;
                        const discountPercent = isDiscounted
                            ? Math.round(((price.amount - price.isDiscount) / price.amount) * 100)
                            : null;

                        return (
                            <div className='produto' key={id}>
                                <div className='img-card'>
                                    <div className='fav'>
                                        <img
                                            className="fav-heart"
                                            src={isFavorito ? "/static/images/heart-fill.svg" : "/static/images/heart.svg"}
                                            alt="Adicionar aos favoritos"
                                            onClick={() => favoritarProduto(id)}
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
                </Slider>
            </div>

            {produtoSelecionado && (
                <div>
                    <div className='fundo-modal' onClick={fecharDetalhes}></div>
                    <div className="vitrine-modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{produtoSelecionado.name}</h2>
                        <img
                        src={produtoSelecionado.image}
                        alt={produtoSelecionado.name}
                        />
                        <p>
                        Preço:{' '}
                        <strong>
                            {produtoSelecionado.price.isDiscount
                            ? `R$ ${produtoSelecionado.price.isDiscount.toFixed(2).replace('.', ',')} (de R$ ${produtoSelecionado.price.amount.toFixed(2).replace('.', ',')})`
                            : `R$ ${produtoSelecionado.price.amount.toFixed(2).replace('.', ',')}`}
                        </strong>
                        </p>
                        <button onClick={fecharDetalhes}>Fechar</button>
                    </div>
                </div>
            )}

        </div>
    );
}