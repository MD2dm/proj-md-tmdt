import React from 'react';
import { useTranslation } from 'react-i18next';
const listHome: { id: number, title: string }[] = [
    {
        id: 1,
        title: "listhome1"
    },
    {
        id: 2,
        title: "listhome2"
    },
    {
        id: 3,
        title: "listhome3"
    },
    {
        id: 4,
        title: "listhome4"
    },
    {
        id: 5,
        title: "listhome5"
    },
    {
        id: 6,
        title: "listhome6"
    },
    {
        id: 7,
        title: "listhome7"
    },
    {
        id: 8,
        title: "listhome8"
    },
    {
        id: 9,
        title: "listhome9"
    },

]
const ListHome = () => {
    const { t } = useTranslation();
    return (
        <div className='inline-block p-5 border border-t-transparent border-b-transparent border-l-transparent w-[300px] ml-28'>
            {listHome.map((item: any, index: any) => (
                <div className='mb-8' key={item.id}>
                    {t(item.title)}
                </div>
            ))}
        </div>
    );
};

export default ListHome;