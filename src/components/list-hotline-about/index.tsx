import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheckSquare, FiPhoneCall, FiTruck } from 'react-icons/fi';

const LinkList: { id: number; icon: any, des: string, title: string }[] = [
    {
        id: 1,
        icon: <FiTruck className='setIconAboutHotline'></FiTruck>,
        des: 'des1about',
        title: "tit1about"
    },
    {
        id: 2,
        icon: <FiPhoneCall className='setIconAboutHotline'></FiPhoneCall>,
        des: 'des2about',
        title: "tit2about"
    },
    {
        id: 3,
        icon: <FiCheckSquare className='setIconAboutHotline'></FiCheckSquare>,
        des: 'des3about',
        title: "tit3about"
    },
];

const ListHotlineAbout = () => {
    const { t } = useTranslation();
    return (
        <div className='centerAll gap-x-44 mt-24'>
            {LinkList.map((item: any, index: number) => (
                <div key={item.id}>
                    <div className='w-[80px] h-[80px] mx-auto bg-black rounded-full centerAll  mb-7'>{item.icon}</div>
                    <div className='text-center'>
                        <p className='text-[20px] font-semibold'>{t(item.title)}</p>
                        <p className='text-[14px] font-normal mt-5'>{t(item.des)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListHotlineAbout;