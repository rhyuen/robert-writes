import Layout from "../shared/layout";
import React from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";


export default function Home({data}){
    React.useEffect(() => {
        const url = "https://vercelcors.vercel.app/api/index";
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }).catch(e => {
                console.error(e);
            });
    });

    return (
        <Layout>
            Robert Writes
            <ul>
                {
                    data.map((d, i) =>                     
                        <li key={i}>
                            <Link href={`/posts/${d.slug}`}>{d.title}</Link><br/>
                            {d.date} <br/>                       
                        </li>                        
                    )
                }
            </ul>
        </Layout>
    )
}

export function getStaticProps(){
    const postsDir = path.join(process.cwd(), "content");
    const allPostsData = fs.readdirSync(postsDir);    
    const paths = allPostsData.map(p => {
        let curr = path.join(process.cwd(), "content", p);        
        let content = fs.readFileSync(curr, "utf8"); 
        let matterResult = matter(content)      
        curr = curr.replace(".md", "");
        return {...matterResult.data, curr};
        
    });

    return {
        props: {
            data: paths
        }
    }
};