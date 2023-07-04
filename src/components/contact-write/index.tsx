import React from 'react';
import { FiMail } from 'react-icons/fi';

const ContactWrite = () => {
    return (
        <div className="call flex flex-col gap-y-5">
            <div className="flex gap-x-4 mb-3">
                <div className='w-[25px] h-[25px] p-4 border rounded-full bg-[#DB4444]'>
                    <FiMail className='text-white -translate-x-2 -translate-y-2'></FiMail>
                </div>
                <div className="title font-medium mt-1">Write To US</div>
            </div>
            <div className="w-[340px]">
                Fill out our form and we will contact you within 24 hours.
            </div>
            <div>Emails: customer@exclusive.com</div>
            <div>Emails: support@exclusive.com</div>
        </div>
    );
};

export default ContactWrite;