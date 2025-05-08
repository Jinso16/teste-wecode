import React, { useEffect, useState } from 'react';
import { getProducts } from './utils';

import Slider from "react-slick";


export default function Lancamentos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    var settings = {
        dots: true,
        arrows: false,
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
                        const isDiscounted = price.isDiscount != null;
                        const discountPercent = isDiscounted
                            ? Math.round(((price.amount - price.isDiscount) / price.amount) * 100)
                            : null;

                        return (
                            <div className='produto' key={id}>
                                <div className='img-card'>
                                    <img className='fav' src="/static/images/favorito.svg" alt="Adicionar aos favoritos" />
                                    <img className='vitrine' src="/static/images/vitrine.svg" alt="Adicionar a vitrine" />
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
        </div>
    );
}