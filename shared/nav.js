import Link from "next/link";

export default function Nav(){
    return (
        <nav>
            <ul>
                <li><Link href="/">Robert Writes</Link></li>
                <li><Link href="/consumption">Consumption</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}