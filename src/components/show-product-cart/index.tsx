import QuantityCart from '@components/quantity-cart';
import url from "@assets/image/avt3.png"
import React from 'react';

const ShowProduct = () => {
    return (
        <div className='flex w-[1370px] centerAll mx-auto gap-x-64 py-5 shadow-lg mt-20'>
            <div className='flex gap-x-5 -translate-x-10'>
                <img src={url} alt="" className='w-[80px]' />
                <div className='centerAll'>LCD Monitor</div>
            </div>
            <div className='-translate-x-[70px]'>$650</div>
            <div className='grid gap-y-4'>
                <QuantityCart></QuantityCart>
            </div>
            <div className='-translate-x-20'>$650</div>
        </div>
    );
};

export default ShowProduct;