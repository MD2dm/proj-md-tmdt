import InputSearch from '@components/input-search';
import Footer from '@layoutStore/footer';
import FromCart from '@layoutStore/form-cart';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';


const PageCart = () => {
    return (
        <div>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <FromCart></FromCart>
            <Footer></Footer>
        </div>
    );
};

export default PageCart;