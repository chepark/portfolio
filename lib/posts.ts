import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export type PostContent = string;
export interface PostMeta {
  slug: string;
  excerpt: string;
  title: string;
  tags: string[];
  date: string;
}

export interface Post {
  content: PostContent;
  meta: PostMeta;
}

const postsDirPath = path.join(process.cwd(), 'data/posts');

export const getSlugs = () => {
  const fileNames = fs.readdirSync(postsDirPath);
  const slugs = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    return slug;
  });

  return slugs;
};

export const getPostBySlug = (slug) => {
  const postPath = path.join(postsDirPath, slug + '.mdx');
  const source = fs.readFileSync(postPath);
  const {
    content,
    data: { excerpt, title, tags, date },
  } = matter(source);

  const post: Post = {
    content,
    meta: {
      slug,
      excerpt,
      title,
      tags: tags.sort(),
      date: date.toString(),
    },
  };
  console.log('tags', date);
  return post;
};

export const getAllPosts = () => {
  const slugs = getSlugs();
  const posts: Post[] = slugs
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
