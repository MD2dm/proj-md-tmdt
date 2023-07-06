import { IButton } from '@interface';

const ButtonAll = ({ size, nameButton, background, textColor, border, logo }: IButton) => {
    return (
        <div className='relative'>
            <button className={` ${size} ${background} ${textColor} ${border} py-[16px] px-[48px] font-normal leading-6 rounded-md`}>
                {nameButton}
            </button>
        </div>
    );
};
export default ButtonAll;