import Footer from "./footer";

export default function Layout({children}){
    return (
        <main>
            {children}
            <Footer/>
        </main>
    )
}