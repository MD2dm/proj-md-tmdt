import { IInputAll } from '@interface';
import React from 'react';

const Input = ({ type, id, placeholder, border }: IInputAll) => {
    return (
        <>
            <input type={type} id={id} className={`${border} bg-[#F5F5F5] w-[235px] h-[50px] px-4 rounded-md outline-none`} placeholder={placeholder} />
        </>
    );
};

export default Input;