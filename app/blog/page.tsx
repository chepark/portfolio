import { Metadata } from 'next';

import { getAllPosts } from '../../lib/posts';
import BlogPage from './blog-page';

export const metadata: Metadata = {
  title: 'Blog — Chaeah Park',
  description: 'Writing about my thoughts, technology, and life. ',
};

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <BlogPage posts={posts} />
    </>
  );
}
