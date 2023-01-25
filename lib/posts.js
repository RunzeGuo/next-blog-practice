import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug) {
  const source = await readFile(`contents/posts/${slug}.md`, "utf-8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);
  return {
    date,
    title,
    body,
  };
}

export async function getSlugs() {
  let files = await readdir("contents/posts");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -3));
}

export async function getPostList() {
  const slugs = await getSlugs();
  const postList = [];
  for (let slug of slugs) {
    const post = await getPost(slug);
    postList.push({ slug, ...post });
  }
  return postList;
}
