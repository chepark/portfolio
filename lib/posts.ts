import path from "path";
import fs from "fs";
import matter from "gray-matter";
import formatDate from "../lib/formatDate";

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
    meta: {
      slug,
      id: data.id,
      excerpt: data.excerpt,
      title: data.title,
      tags: data.tags.sort(),
      date: data.date.toString(),
    },
  };
};

export const getAllPosts = () => {
  const slugs = getSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => {
      const dateA = new Date(a.meta.date);
      const dateB = new Date(b.meta.date);
      if (dateA > dateB) return 1;
      if (dateA < dateB) return -1;
      return 0;
    })
    .reverse();
  return posts;
};
