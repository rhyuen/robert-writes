import Footer from "./footer";
import {useEffect} from "react";
import Nav from "./nav.js";
import {useRouter} from "next/router";

export default function Layout({children}){
    const router = useRouter();
    console.log(router.query);
    console.log(router.pathname);

    useEffect(() => {       

        const url = `https://vercelcors.vercel.app/api/index?p=/posts/${router.query.id}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                console.log("counter endpoint hit.");
            }).catch(e => {
                console.error(e);
            });
    }, []);

    return (
        <main>
            <Nav/>
            {children}
            <Footer/>
            <style jsx>{`
                main{
                    max-width: 1000px;
                    margin: 0 auto;
                }

            `}
            </style>
        </main>
    )
}