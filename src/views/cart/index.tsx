import InputSearch from '@components/input-search';
import TitleProductCart from '@components/title-product';
import Footer from '@layoutStore/footer';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import React from 'react';

const PageCart = () => {
    return (
        <div>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <TitleProductCart></TitleProductCart>
            <Footer></Footer>
        </div>
    );
};

export default PageCart;