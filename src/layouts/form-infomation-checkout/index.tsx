import React from 'react';
import url from "@assets/image/avt3.png"
import { useTranslation } from 'react-i18next';
import InputRadio from '@components/input-radio';
import ButtonAll from '@components/button-account';

const FormInfomationCheckOut = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='flex justify-between mb-5 mt-28'>
                <div className='flex gap-x-10'>
                    <img src={url} alt="" className='w-[50px] translate-x-5' />
                    <span className='centerAll'>LCD Monitor</span>
                </div>
                <div className='centerAll -translate-x-5'>$650</div>
            </div>
            <div className='px-5 py-10 w-[450px]'>
                <span className='text-[20px] font-medium'>{t('total')}</span>
                <div className=' mt-7 flex justify-between pb-2 border border-b-black border-t-transparent border-r-transparent border-l-transparent mb-10'>
                    <span>{t('subtotal')}:</span>
                    <span>$1750</span>
                </div>
                <div className='flex justify-between pb-2 border border-b-black border-t-transparent border-r-transparent border-l-transparent mb-10'>
                    <span>{t('shipping')}:</span>
                    <span>Free</span>
                </div>
                <div className='flex justify-between' >
                    <span>{t("totalend")}:</span>
                    <span>$1750</span>
                </div>
            </div>
            <div>
                <InputRadio name={t("bank1")} id="check-1"></InputRadio>
                <InputRadio name={t("bank2")} id="check-2"></InputRadio>
            </div>
            <div className='flex gap-x-5 mt-10 mb-10 translate-x-4'>
                <input type="text" placeholder={t('coupon')} className='border border-[#808080] px-3 py-2 rounded-lg w-[250px] outline-none' />
                <ButtonAll textColor='text-white' nameButton={t("applycoupon")} background='bg-[#DB4444]'></ButtonAll>
            </div>
            <div className='translate-x-4'>
                <ButtonAll textColor='text-white' nameButton={t("placeorder")} background='bg-[#DB4444]'></ButtonAll>
            </div>
        </div>
    );
};

export default FormInfomationCheckOut;