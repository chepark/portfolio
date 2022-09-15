import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const postsDirPath = path.join(process.cwd(), "posts");

export const getSlugs = () => {
  const fileNames = fs.readdirSync(postsDirPath);
  const slugs = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    return slug;
  });

  return slugs;
};

export const getPostBySlug = (slug) => {
  const postPath = path.join(postsDirPath, slug + ".mdx");
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: slug,
    excerpt: data.excerpt,
    title: data.title,
    tags: data.tags.sort(),
    date: data.date.toString(),
  };
};

export const getAllPosts = () => {
  const slugs = getSlugs();
};
