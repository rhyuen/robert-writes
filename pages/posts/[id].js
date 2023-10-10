
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
            <h1 style={{
                fontWeight: 600
            }}>{title}</h1>
            <p>
                <time datetime={date}>{date}</time>
            </p>
            <Link href="/">Home</Link>
            <p>
                {
                    tags.split(",").map(t => {
                        return (
                            <span style={{
                                fontWeight: 200
                            }}>
                                {t}&nbsp;
                            </span>
                        )
                    })
                }
            </p>
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