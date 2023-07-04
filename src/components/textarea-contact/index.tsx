import React from 'react';

const TextareaContact = ({ title }: any) => {
    return (
        <>
            <textarea name="" id="" className='bg-[#F5F5F5] w-[785px] resize-none h-[300px] p-4 rounded-md outline-none' placeholder={title}></textarea>
        </>
    );
};

export default TextareaContact;