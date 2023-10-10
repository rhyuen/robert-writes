import Footer from "./footer";
import { useEffect } from "react";
import Nav from "./nav.js";
import { useRouter } from "next/router";

export default function Layout({ children }) {
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
        <>
            <main>
                <Nav />
                <section>
                    {children}
                </section>

                <style jsx>{`
                main{
                    display: grid;
                    grid-template-columns: 1fr [content-start] min(80ch, 100%) [content-end] 1fr;                    
                    padding: 1rem;
                }                
                section {
                    grid-column: content-start/content-end;
                }
            `}
                </style>
            </main>
            <Footer />
        </>
    )
}