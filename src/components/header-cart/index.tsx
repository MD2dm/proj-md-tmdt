import React from 'react';
import { useTranslation } from 'react-i18next';

const HeaderCart = () => {
    const { t } = useTranslation();
    return (
        <div className='flex w-[1370px] centerAll mx-auto gap-x-64 py-5 shadow-lg mt-20'>
            <span>{t("cart1title")}</span>
            <span>{t("cart2title")}</span>
            <span>{t("cart3title")}</span>
            <span>{t("cart4title")}</span>
        </div>
    );
};

export default HeaderCart;