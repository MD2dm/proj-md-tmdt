import React from 'react';
import url from "@assets/image/SliceAccount.png"
import { FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const ListProductUserSell = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='text-center -translate-x-14 text-[32px] font-bold text-[#DB4444] mb-10'>
                <h1>{t("usersell")}</h1>
            </div>
            <div className=' flex border  w-[600px] h-[180px] -translate-x-14 rounded-lg gap-x-5 mb-10' >
                <div className='setIcon absolute right-0 p-2 border rounded-lg translate-x-[1px] -translate-y-[1px]'><FiX></FiX></div>
                <div className='mt-8 ml-5'>
                    <img src={url} alt="" className='w-[100px] rounded-lg' />
                </div>
                <div className='translate-y-7'>
                    <h1 className=' text-[18px] font-bold mb-2 text-[#DB4444]'>Điện thoại Iphone 13</h1>
                    <div className='flex gap-x-5'>
                        <div className='mb-2'>
                            <span>{t("price")}: </span>
                            <span>$560</span>
                        </div>
                        <div>
                            <span>{t("sold")}: </span>
                            <span>1056</span>
                        </div>
                        <div>
                            <span>{t("totalproduct")}: </span>
                            <span>3056</span>
                        </div>
                        <div>
                            <span>{t("inventories")}: </span>
                            <span>2123</span>
                        </div>
                    </div>
                    <div className='text-[#DB4444] mt-4'>
                        <span>{t("totalusersell")}: </span>
                        <span>$6765234</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProductUserSell;