import ButtonAll from '@components/button-account';
import ShowProduct from '@components/show-product-cart';
import { useTranslation } from 'react-i18next';



const TitleProductCart = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='flex w-[1370px] centerAll mx-auto gap-x-64 py-5 shadow-lg mt-20'>
                <span>{t("cart1title")}</span>
                <span>{t("cart2title")}</span>
                <span>{t("cart3title")}</span>
                <span>{t("cart4title")}</span>
            </div>
            <ShowProduct></ShowProduct>
            <ShowProduct></ShowProduct>
            <ShowProduct></ShowProduct>
            <ShowProduct></ShowProduct>
            <ShowProduct></ShowProduct>
            <div className='flex justify-between w-[1370px] mx-auto mt-10'>
                <ButtonAll textColor='text-black' nameButton={t("returnshop")} background='bg-white' border='border border-[#808080]'></ButtonAll>
                <ButtonAll textColor='text-black' nameButton={t("updatecart")} background='bg-white' border='border border-[#808080]'></ButtonAll>
            </div>
            <div className='flex justify-between items-baseline w-[1370px] mx-auto mt-10'>
                <div className='flex gap-x-10 mt-10'>
                    <input type="text" placeholder={t('coupon')} className='border border-[#808080] px-3 py-2 rounded-lg w-[250px]' />
                    <ButtonAll textColor='text-white' nameButton={t("applycoupon")} background='bg-[#DB4444]'></ButtonAll>
                </div>
                <div className='border px-5 py-10 w-[450px]'>
                    <span className='text-[20px] font-medium'>{t('total')}</span>
                    <div className=' mt-7 flex justify-between pb-2 border border-b-black border-t-transparent border-r-transparent border-l-transparent mb-10'>
                        <span>{t('subtotal')}:</span>
                        <span>$1750</span>
                    </div>
                    <div className='flex justify-between pb-2 border border-b-black border-t-transparent border-r-transparent border-l-transparent mb-10'>
                        <span>{t('shipping')}:</span>
                        <span>Free</span>
                    </div>
                    <div className='flex justify-between' >
                        <span>{t("totalend")}:</span>
                        <span>$1750</span>
                    </div>
                    <div className='text-center mt-10'>
                        <ButtonAll textColor='text-white' nameButton={t("checkout")} background='bg-[#DB4444]'></ButtonAll>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TitleProductCart;