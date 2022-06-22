import Layout from "../shared/layout";
import React from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";


export default function Home({data}){   
    return (
        <Layout>          
            <List items={data}/>
        </Layout>
    )
}

const List = ({items}) => {
    return (
        
        <ul>
            {
                items.map((d, i) =>                     
                    <li key={i}>
                        <Link href={`/posts/${d.slug}`}>{d.title}</Link><br/>
                        <p>&emsp;{d.tags} </p>
                        <p>&emsp;{d.date}</p>
                    </li>                        
                )
            }
        </ul>                    
    );
}

export function getStaticProps(){
    const contentDirectoryPath = "content/dev";
    const postsDir = path.join(process.cwd(), contentDirectoryPath);
    const allPostsData = fs.readdirSync(postsDir);    
    const paths = allPostsData.map(p => {
        let curr = path.join(process.cwd(), contentDirectoryPath, p);        
        let content = fs.readFileSync(curr, "utf8"); 
        let matterResult = matter(content)      
        curr = curr.replace(".md", "");
        return {...matterResult.data, curr};
        
    });

    return {
        props: {
            data: paths.sort((a, b) => {
                if (a.date < b.date) {
                    return 1
                  } else {
                    return -1
                  }
            })
        }
    }
};