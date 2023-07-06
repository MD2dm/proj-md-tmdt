
import ButtonAll from '@components/button-account';
import Input from '@components/input';
import TextareaContact from '@components/textarea-contact';
import React from 'react';
import { useTranslation } from 'react-i18next';

const InPutConTact = () => {
    const { t } = useTranslation();
    return (
        <div className='relative w-[870px] h-[526px] p-10 shadow-2xl'>
            <div className='flex gap-x-10'>
                <Input type='text' id='name' placeholder={t('yourname')}></Input>
                <Input type='email' id='email' placeholder={t('email')}></Input>
                <Input type='phone' id='phone' placeholder={t('phone')}></Input>
            </div>
            <div className='mt-10'>
                <TextareaContact title={t("message")}></TextareaContact>
            </div>
            <div className='absolute right-12 bottom-8'>
                <ButtonAll nameButton={t('sendms')} background='bg-[#DB4444]' textColor='text-white'></ButtonAll>
            </div>
        </div>
    );
};

export default InPutConTact;