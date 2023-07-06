import ButtonAll from '@components/button-account';
import Footer from '@layoutStore/footer';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
    const { t } = useTranslation();
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar></NavBar>
            <div className='centerAll flex-col gap-y-5 mt-[150px]'>
                <div className='text-[110px] fontAcount'>404 Not Found</div>
                <div className=''>{t("title404")}</div>
                <NavLink to="/" className='mt-20'>
                    <ButtonAll textColor='text-white' nameButton={t("backhome")} background='bg-[#DB4444]'></ButtonAll>
                </NavLink>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Page404;