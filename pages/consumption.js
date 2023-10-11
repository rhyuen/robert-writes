import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../shared/layout.js";
import Link from "next/link";

export default function ConsumptionHome({ data }) {
    return (
        <Layout>
            <section className="preamble">
                <h1>List of Media Consumption</h1>
                <p>Just (mostly complete) summaries of books and movies that I've watched and read.</p>
            </section>
            <section className="root">
                <ul className="root__list">
                    {
                        data.map((d, i) =>
                            <li key={i} className="root__list__item">
                                <time>{d.date}</time>
                                <Link href={`/consumption/${d.slug}`}>{d.title}</Link>
                                <div className="tag-container">
                                    {
                                        d.tags.split(",").map((t, index) => {
                                            return (
                                                <span className="tag-container__item" key={index}>
                                                    {
                                                        t
                                                    }
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                        )
                    }
                </ul>
            </section>
        </Layout>
    )
}

export function getStaticProps({ params }) {
    const contentDirectoryPath = "content/consumption";
    const postsDir = path.join(process.cwd(), contentDirectoryPath);
    const allPostsData = fs.readdirSync(postsDir);
    const paths = allPostsData.map(p => {
        let curr = path.join(process.cwd(), contentDirectoryPath, p);
        let content = fs.readFileSync(curr, "utf8");
        let matterResult = matter(content)
        curr = curr.replace(".md", "");
        return { ...matterResult.data, curr };

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
}