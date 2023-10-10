import {getPostIds, getPostContent} from "../../lib/posts.js";
import Layout from "../../shared/layout.js";
import Link from "next/link";
import Markdown from "react-markdown";
import gfm from "remark-gfm";


export default function ConsumptionPost({content, slug, date, title, tags}){
    return (
        <Layout>
            <h1>{title}</h1>
            <time>{date}</time>
            <p><Link href="/consumption">Home</Link></p>
            <p className="tag-container">
                {tags.split(",").map(t => {
                    return (
                        <span className="tag-container__item">
                            {t}
                        </span>
                    )
                })}
            </p>      
            <Markdown remarkPlugins={[gfm]} children = {content}/>      
        </Layout>
    )
}

export async function getStaticPaths(){
    const directoryPath = "content/consumption";
    const blah = getPostIds(directoryPath);     
    return {
        paths:  blah,
        fallback: false
    }
}


export function getStaticProps({params}){    
    console.log(params.id);    
    const directoryPath = "content/consumption";
    const currentPost= getPostContent(directoryPath, params.id);
    return {
        props: {
            ...currentPost
        }
    }
}

