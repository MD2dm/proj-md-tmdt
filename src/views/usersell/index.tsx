import InputSearch from '@components/input-search';
import HeaderSell from '@layoutStore/header-sell';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import React from 'react';

const PageUserSell = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <HeaderSell></HeaderSell>
        </>
    );
};

export default PageUserSell;