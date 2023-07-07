import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail } from 'react-icons/fi';

const ContactWrite = () => {
    const {t} = useTranslation();
    return (
        <div className="call flex flex-col gap-y-5">
            <div className="flex gap-x-4 mb-3">
                <div className='w-[25px] h-[25px] p-4 border rounded-full bg-[#DB4444]'>
                    <FiMail className='text-white -translate-x-2 -translate-y-2'></FiMail>
                </div>
                <div className="title font-medium mt-1">{t("writetact")}</div>
            </div>
            <div className="w-[340px]">
               {t("text")}
            </div>
            <div>Emails: customer@exclusive.com</div>
            <div>Emails: support@exclusive.com</div>
        </div>
    );
};

export default ContactWrite;