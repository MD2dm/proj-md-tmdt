import ButtonCart from '@components/button-cart';
import HeaderCart from '@components/header-cart';
import InfoCart from '@components/information-cart';
import ShowProduct from '@components/show-product-cart';
import React from 'react';

const FromCart = () => {
    return (
        <div>
            <HeaderCart></HeaderCart>
            <ShowProduct></ShowProduct>
            <ButtonCart></ButtonCart>
            <InfoCart></InfoCart>
        </div>
    );
};

export default FromCart;