import i18n from "@i18n";
import VI from "@assets/image/VN.png"
import EN from "@assets/image/EN.png"


const LanguageDropdown = () => {
    const changeLanguage = (lng: 'en' | 'vi') => {
        i18n.changeLanguage(lng)
    }
    return (
        <>
            {i18n.language === 'vi' && <button onClick={() => changeLanguage('en')}>
                <img src={VI} alt="" className="w-[30px]" />
            </button>}
            {i18n.language === 'en' && <button onClick={() => changeLanguage('vi')}>
                <img src={EN} alt="" className="w-[30px]" />

            </button>}
        </>
    );
};

export default LanguageDropdown;


