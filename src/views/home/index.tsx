import GroupInputHome from "@components/group-input-home";
import HeaderHome from "@layoutStore/header-home";
import NavBar from "@layoutStore/nav";
import TitleHead from "@layoutStore/title-head";




const PageHome = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<GroupInputHome></GroupInputHome>}</NavBar>
            <HeaderHome></HeaderHome>
        </>
    );
};

export default PageHome;