import ButtonAll from '@components/button-account';
import InputAll from '@components/input-all';
import { useTranslation } from 'react-i18next';



const FormLogin = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='flex flex-col gap-y-7 mb-10'>
                <p className='text-[34px] font-medium fontAcount leading-6'>{t("login")}</p>
                <p className='font-normal leading-4'>{t("enterdetails")}</p>
            </div>
            <div>
                <InputAll type={"email | phone"} id={"address"} placeholder={t("Email or Phone Number")}></InputAll>
                <InputAll type={"password"} id={"pass"} placeholder={t("Password")}></InputAll>
            </div>
            <div className='flex'>
                <ButtonAll textColor='text-white' nameButton={t("loginsigle")} background='bg-[#DB4444]'></ButtonAll>
                <ButtonAll textColor='text-[#DB4444]' nameButton={t("forgetpassword")} background='bg-white'></ButtonAll>
            </div>
        </div>
    );
};

export default FormLogin;