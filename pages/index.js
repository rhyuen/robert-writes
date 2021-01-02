import Layout from "../shared/layout";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";


export default function Home({data}){
    return (
        <Layout>
            robert writes
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