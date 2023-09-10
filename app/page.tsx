import { Metadata } from 'next';
import { getAllPosts } from '../lib/posts';
import HomePage from '../components/pages/HomePage';

export const metadata: Metadata = {
  title: 'Chaeah Park',
  description: 'Software developer and engineering student',
};

export default function Page() {
  const posts = getAllPosts().slice(0, 5);
  const postsMeta = posts.map((post) => post.meta);

  return <HomePage postsMeta={postsMeta} />;
}
