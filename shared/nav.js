import Link from "next/link";

export default function Nav(){
    return (
        <nav>
            <ul className="nav__left-side">
                <li><Link href="/" className="linking">Robert-Writes</Link></li>                
            </ul>

            <ul className="nav__right-side">
                <li><Link href="/consumption" className="linking margin-right">Consumption</Link></li>
                <li><Link href="/about" className="linking">About</Link></li>
            </ul>
            <style jsx>{`
                nav{                    
                    grid-column: content-start/content-end;   
                    display: flex;
                    justify-content: space-between;  
                    block-size: 5rem;               
                }

                nav ul{
                    display: flex;
                }

                nav ul li{
                    font-weight: 600;
                    font-size: 1.1rem;
                }
              
                nav .nav__right-side li{
                    margin-left: var(--SPACING);
                }
              

                `}</style>
        </nav>
    )
}