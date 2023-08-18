import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function Layout({children}){
    return(
        <div>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}