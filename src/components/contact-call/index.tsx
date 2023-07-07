import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiPhoneCall } from 'react-icons/fi';

const ContactCall = () => {
    const {t} = useTranslation();
    return (
        <div className=" inline-block call mb-10 pb-10 border border-b-black border-r-transparent border-l-transparent border-t-transparent">
            <div className="flex gap-x-4">
                <div className='w-[25px] h-[25px] p-4 border rounded-full bg-[#DB4444]'>
                    <FiPhoneCall className='text-white -translate-x-2 -translate-y-2'></FiPhoneCall>
                </div>
                <div className="title font-medium mt-1">{t("calltact")}</div>
            </div>
            <div className="mt-5 mb-3">{t("infocontact")}</div>
            <div>{t("sdt")}: +8801611112222</div>
        </div>
    );
};

export default ContactCall;