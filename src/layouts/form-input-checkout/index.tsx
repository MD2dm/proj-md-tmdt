import InputCheckBox from '@components/input-checkbox';
import InputCheckOut from '@components/input-checkout';
import React from 'react';
import { useTranslation } from 'react-i18next';

const FromInputCheckOut = () => {
    const { t } = useTranslation();
    return (
        <form>
            <h1 className='text-[36px] mb-10'>{t("billingdetails")}</h1>
            <InputCheckOut name={t("firstname")} type='text' id='firstname' ></InputCheckOut>
            <InputCheckOut name={t("company")} type='text' id='companyname' ></InputCheckOut>
            <InputCheckOut name={t("streetaddress")} type='text' id='streetaddress' ></InputCheckOut>
            <InputCheckOut name={t("numberhome")} type='text' id='info' ></InputCheckOut>
            <InputCheckOut name={t("town/city")} type='text' id='address' ></InputCheckOut>
            <InputCheckOut name={t("phonenumber")} type='phone' id='phone' ></InputCheckOut>
            <InputCheckOut name={t("emailaddress")} type='email' id='email' ></InputCheckOut>
            <InputCheckBox></InputCheckBox>
        </form>
    );
};

export default FromInputCheckOut;