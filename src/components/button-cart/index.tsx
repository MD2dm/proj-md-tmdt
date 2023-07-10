import ButtonAll from '@components/button-account';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ButtonCart = () => {
    const { t } = useTranslation();
    return (
        <div className='flex justify-between w-[1370px] mx-auto mt-10'>
            <ButtonAll textColor='text-black' nameButton={t("returnshop")} background='bg-white' border='border border-[#808080]'></ButtonAll>
            <ButtonAll textColor='text-black' nameButton={t("updatecart")} background='bg-white' border='border border-[#808080]'></ButtonAll>
        </div>
    );
};

export default ButtonCart;