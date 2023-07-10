import { IInputAll } from '@interface';
import React from 'react';

const InputCheckOut = ({ id, name, type }: IInputAll) => {
    return (
        <div className='flex flex-col mb-5'>
            <label htmlFor={id} className='text-[#]'>{name}</label>
            <input id={id} type={type} className='bg-[#F5F5F5] w-[450px] h-[50px] outline-none px-5 mt-2' />
        </div>
    );
};

export default InputCheckOut;