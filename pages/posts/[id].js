import Layout from "../../shared/layout";
import {getPostIds, getPostContent} from "../../lib/posts";
import Markdown from "react-markdown";
import Link from "next/link";


export default function Post({content, slug, date, title}){
    return (
        <Layout>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <Link href="/">Home</Link>
            <Markdown source = {content}/>
        </Layout>
    )
}

export async function getStaticPaths(){
    const blah = getPostIds();     
    return {
        paths:  blah,
        fallback: false
    }
}

export function getStaticProps({params}){    
    console.log(params.id);
    const currentPost= getPostContent(params.id);
        
    return {
        props: {
            ...currentPost
        }
    }
}