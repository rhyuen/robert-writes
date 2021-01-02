import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostIds(){
    const postsDirectory = path.join(process.cwd(), "content");
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(f => {
        return {
            params: {
                id: f.replace(/\.md$/, "")
            }
        };
    });
}

export function getPostContent(id){    
    const filePath = path.join(process.cwd(), "content", `${id}.md`);
    const fileContent = fs.readFileSync(filePath);
    const matterFileContent = matter(fileContent);
    return {
        content: matterFileContent.content,
        ...matterFileContent.data
    };
}