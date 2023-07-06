import ButtonAll from '@components/button-account';
import InputAll from '@components/input-all';
import { useTranslation } from 'react-i18next';
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'


const FormSigup = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='flex flex-col gap-y-7 mb-10'>
                <p className='text-[34px] font-medium fontAcount leading-6'>{t('create account')}</p>
                <p className='font-normal leading-4'>{t('info')}</p>
            </div>
            <div>
                <InputAll type={"text"} id="name" placeholder={t("name")}></InputAll>
                <InputAll type={"email | phone"} id={"address"} placeholder={t("Email or Phone Number")}></InputAll>
                <InputAll type={"password"} id={"pass"} placeholder={t("Password")}></InputAll>
            </div>
            <div className='flex flex-col gap-y-5'>
                <ButtonAll size='w-[350px]' textColor='text-white' nameButton={t('Create Account')} background='bg-[#DB4444]'></ButtonAll>
                <div className=''>
                    <div className='absolute z-50 top-[71.3%] left-[70px] setIcon border rounded-full'>
                        <FcGoogle></FcGoogle>
                    </div>
                    <ButtonAll size='w-[350px]' textColor='text-black' border='border border-[#9CA3AF]' nameButton={t('google')} background='bg-white'></ButtonAll>
                </div>
            </div>
            <div className='flex gap-x-3 ml-14 mt-7 opacity-50'>
                <p>{t('Already')}</p>
                <NavLink to="/login" className="underline">{t("sigup")}</NavLink>
            </div>
        </div>
    );
};

export default FormSigup;