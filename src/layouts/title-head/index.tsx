import i18n from "@i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown } from "react-icons/fi";


const TitleHead = () => {
    const [on, setOn] = useState<Boolean>(false);
    const { t } = useTranslation();
    const handleClick = () => {
        setOn(!on)
    }
    const changeLanguage = (lng: 'en' | 'vi') => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className='w-full h-[48px] bg-black text-white relative text-[14px]'>
            <div className='absolute gap-x-2  top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]'>
                <div className='leading-[21px] font-normal cursor-default'>{t('title')}
                    <span className='font-semibold leading-6 underline ml-3 cursor-pointer'>{t('shopnow')}</span>
                </div>
            </div>
            <div className=' centerAll absolute right-14 top-[50%] -translate-y-[50%] gap-x-1 transition-all cursor-pointer' >
                <div className="mr-2" onClick={() => changeLanguage('en')}>{t("English")}</div>
                <div onClick={handleClick} ><FiChevronDown></FiChevronDown></div>
                {on && <button className="absolute w-[120px] bg-black right-0 top-[32px] px-3 py-2 text-white" onClick={() => changeLanguage('vi')}>{t("vietnam")}</button>}
            </div>
        </div>
    );
};

export default TitleHead;