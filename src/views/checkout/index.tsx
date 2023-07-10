import InputSearch from '@components/input-search';
import Footer from '@layoutStore/footer';
import FormInfomationCheckOut from '@layoutStore/form-infomation-checkout';
import FromInputCheckOut from '@layoutStore/form-input-checkout';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';

const PageCheckOut = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <div className='flex justify-around mt-20'>
                <FromInputCheckOut></FromInputCheckOut>
                <div className=''>
                    <FormInfomationCheckOut></FormInfomationCheckOut>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default PageCheckOut;