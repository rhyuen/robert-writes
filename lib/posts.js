import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostIds(directoryPath){
    const postsDirectory = path.join(process.cwd(), directoryPath);
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(f => {
        return {
            params: {
                id: f.replace(/\.md$/, "")
            }
        };
    });
}

export function getPostContent(directoryPath, id){    
    const filePath = path.join(process.cwd(), directoryPath, `${id}.md`);
    const fileContent = fs.readFileSync(filePath);
    const matterFileContent = matter(fileContent);
    return {
        content: matterFileContent.content,
        ...matterFileContent.data
    };
}