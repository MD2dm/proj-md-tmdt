import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const ContactCall = () => {
    return (
        <div className=" inline-block call mb-10 pb-10 border border-b-black border-r-transparent border-l-transparent border-t-transparent">
            <div className="flex gap-x-4">
                <div className='w-[25px] h-[25px] p-4 border rounded-full bg-[#DB4444]'>
                    <FiPhoneCall className='text-white -translate-x-2 -translate-y-2'></FiPhoneCall>
                </div>
                <div className="title font-medium mt-1">Call To Us</div>
            </div>
            <div className="mt-5 mb-3">We are available 24/7, 7 days a week.</div>
            <div>Phone: +8801611112222</div>
        </div>
    );
};

export default ContactCall;