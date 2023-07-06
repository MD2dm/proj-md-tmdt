import Input from '@components/input';
import TextareaContact from '@components/textarea-contact';
import React from 'react';
import url from "@assets/image/userbanner.png"
import ButtonAll from '@components/button-account';
import InputImage from '@components/input-image';
import { useTranslation } from 'react-i18next';

const HeaderSell = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='text-center mt-16 mb-16'>
                <h1 className='text-[40px] font-bold text-[#DB4444]'>{t("hello")} User !</h1>
            </div>
            <div className='relative gap-y-5 border border-[#DB4444] w-[880px] p-2 ml-20 rounded-lg'>
                <div className='text-center font-bold mt-5 text-[25px]'>
                    <span className='text-[#DB4444]'>{t("infpro")}</span>
                </div>
                <div className='absolute w-[500px] right-8 top-[108px]'>
                    <img src={url} alt="" className='h-[257px]' />
                </div>
                <div className='flex flex-col gap-y-5 p-10'>
                    <Input type='text' id='name' placeholder='ID Product'></Input>
                    <Input type='text' id='name' placeholder='Name Product'></Input>
                    <Input type='text' id='name' placeholder='Price'></Input>
                    <Input type='text' id='name' placeholder='Categoty'></Input>
                    <InputImage></InputImage>
                    <InputImage></InputImage>
                    <InputImage></InputImage>
                    <TextareaContact title="Description"></TextareaContact>
                </div>
                <div className='text-center mb-5'>
                    <ButtonAll nameButton='Add Product' background='bg-[#DB4444]' textColor='text-white'></ButtonAll>
                </div>
            </div>
        </div>
    );
};

export default HeaderSell;