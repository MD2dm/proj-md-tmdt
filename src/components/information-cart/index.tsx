import ButtonAll from '@components/button-account';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const InfoCart = () => {
    const { t } = useTranslation();
    return (
        <div className='flex justify-between items-baseline w-[1370px] mx-auto mt-10'>
            <div className='flex gap-x-10 mt-10'>
                <input type="text" placeholder={t('coupon')} className='border border-[#808080] px-3 py-2 rounded-lg w-[250px] outline-none' />
                <ButtonAll textColor='text-white' nameButton={t("applycoupon")} background='bg-[#DB4444]'></ButtonAll>
            </div>
            <div className='border px-5 py-10 w-[450px]'>
                <span className='text-[20px] font-medium'>{t('total')}</span>
                <div className=' mt-7 flex justify-between pb-2 border border-b-black border-t-transparent border-r-transparent border-l-transparent mb-10'>
                    <span>{t('subtotal')}:</span>
                    <span>$1750</span>
                </div>
                <div className='flex justify-between pb-2 border border-b-black border-t-transparent border-r-transparent border-l-transparent mb-10'>
                    <span>{t('shipping')}:</span>
                    <span>Free</span>
                </div>
                <div className='flex justify-between mb-10' >
                    <span>{t("totalend")}:</span>
                    <span>$1750</span>
                </div>
                <NavLink to="/checkout" className='text-center'>
                    <ButtonAll textColor='text-white' nameButton={t("checkout")} background='bg-[#DB4444]'></ButtonAll>
                </NavLink>
            </div>
        </div>
    );
};

export default InfoCart;