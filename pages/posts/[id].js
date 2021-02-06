import Layout from "../../shared/layout";
import {getPostIds, getPostContent} from "../../lib/posts";
import Markdown from "react-markdown";
import Link from "next/link";
import gfm from "remark-gfm";
import {Prism} from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Code = ({language, value}) => {
    return (
        <Prism style={vscDarkPlus} showLineNumbers={true} language={language}>
            {value}
        </Prism>
    );
}

export default function Post({content, slug, date, title, tags}){
    return (
        <Layout>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <Link href="/">Home</Link>
            <p>
            {tags}
            </p>            
            <Markdown plugins={[gfm]} source = {content} renderers={{code: Code}}/>
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