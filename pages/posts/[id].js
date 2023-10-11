
'use client';

import Layout from "../../shared/layout";
import { getPostIds, getPostContent } from "../../lib/posts";
import Markdown from "react-markdown";
import Link from "next/link";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight, atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// const Code = ({language, value}) => {
//     return (
//         <SyntaxHighlighter style={dark} showLineNumbers={true} language={language}>
//             {value}
//         </SyntaxHighlighter>
//     );
// }

const Code = ({ children, className, node, ...rest }) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
        <SyntaxHighlighter
            {...rest}
            children={String(children).replace(/\n$/, '')}
            style={materialLight}
            language={match[1]}
            PreTag="div"
        />
    ) : (
        <code {...rest} className={className}>
            {children}
        </code>
    )
};

export default function Post({ content, slug, date, title, tags }) {
    return (
        <Layout>
            <div className="post__meta-container">
                <time dateTime={date}>{date}</time>
                <div class="post__meta-container__inline-row">
                    <Link href="/" className="back-button"></Link>
                    <h1>{title}</h1>                    
                </div>
                <div className="tag-container">
                    {
                        tags.split(",").map((t, index) => {
                            return (
                                <span key={index} className="tag-container__item">
                                    {t}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            {/* <Markdown remarkPlugins={[gfm]} 
                children = {content} 
                components={{code: Code}}/> */}
            <Markdown remarkPlugins={[gfm]}
                children={content}
                components={{
                    code(props) {
                        const { children, className, node, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                {...rest}
                                children={String(children).replace(/\n$/, '')}
                                style={atomDark}
                                showLineNumbers={true}
                                showInlineLineNumbers={true}
                                language={match[1]}
                                PreTag="div"
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }} />

        </Layout>
    )
}

export async function getStaticPaths() {
    const directoryPath = "content/dev";
    const blah = getPostIds(directoryPath);
    return {
        paths: blah,
        fallback: false
    }
}

export function getStaticProps({ params }) {
    console.log(params.id);
    const directoryPath = "content/dev";
    const currentPost = getPostContent(directoryPath, params.id);

    return {
        props: {
            ...currentPost
        }
    }
}