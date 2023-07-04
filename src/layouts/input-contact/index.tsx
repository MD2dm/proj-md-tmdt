
import ButtonAll from '@components/button-account';
import Input from '@components/input';
import TextareaContact from '@components/textarea-contact';
import React from 'react';

const InPutConTact = () => {
    return (
        <div className='relative w-[870px] h-[526px] p-10 shadow-2xl'>
            <div className='flex gap-x-10'>
                <Input type='text' id='name' placeholder='Your Name'></Input>
                <Input type='email' id='email' placeholder='Your Email'></Input>
                <Input type='phone' id='phone' placeholder='Your Phone'></Input>
            </div>
            <div className='mt-10'>
                <TextareaContact title="Your message"></TextareaContact>
            </div>
            <div className='absolute right-12 bottom-8'>
                <ButtonAll nameButton='Send Massage' background='bg-[#DB4444]' textColor='text-white'></ButtonAll>
            </div>
        </div>
    );
};

export default InPutConTact;