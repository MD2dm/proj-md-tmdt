import ListHome from '@components/list-home';
import SwiperSlider from '@components/swiper-slice';
import React from 'react';

const HeaderHome = () => {
    return (
        <div className='flex gap-x-20'>
            <ListHome></ListHome>
            <SwiperSlider></SwiperSlider>
        </div>
    );
};

export default HeaderHome;