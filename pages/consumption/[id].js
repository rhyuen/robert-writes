import { getPostIds, getPostContent } from "../../lib/posts.js";
import Layout from "../../shared/layout.js";
import Link from "next/link";
import Markdown from "react-markdown";
import gfm from "remark-gfm";


export default function ConsumptionPost({ content, slug, date, title, tags }) {
    return (
        <Layout>
            <div className="post__meta-container">
                <time>{date}</time>
                <div className="post__meta-container__inline-row">
                    <Link href="/consumption" className="back-button"></Link>
                    <h1>{title}</h1>
                </div>
            </div>
            <p className="tag-container">
                {tags.split(",").map((t, index) => {
                    return (
                        <span className="tag-container__item" key={index}>
                            {t}
                        </span>
                    )
                })}
            </p>
            <Markdown remarkPlugins={[gfm]} children={content} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const directoryPath = "content/consumption";
    const blah = getPostIds(directoryPath);
    return {
        paths: blah,
        fallback: false
    }
}


export function getStaticProps({ params }) {
    console.log(params.id);
    const directoryPath = "content/consumption";
    const currentPost = getPostContent(directoryPath, params.id);
    return {
        props: {
            ...currentPost
        }
    }
}

