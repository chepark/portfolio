import { Metadata } from 'next';
import BlogPage from '../../components/pages/BlogPage';
import { getAllPosts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog — Chaeah Park',
  description: 'Writing about my thoughts, technology, and life. ',
};

export default async function Page() {
  const posts = getAllPosts();

  return <BlogPage posts={posts} />;
}
