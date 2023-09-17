import Link from 'next/link';
import formatDate from '../../lib/formatDate';
import PageHeader from '../sections/PageHeader';
import { Post, PostMeta } from '../../lib/posts';

type BlogPageProps = {
  posts: Post[];
};

const PostListItem = ({ meta }: { meta: PostMeta }) => {
  const { title, date, slug, excerpt } = meta;

  return (
    <>
      <Link href={`/blog/${slug}`}>
        <div className='my-10 cursor-pointer hover:scale-[1.01] hover:duration-300 hover:ease-in-out'>
          <div className='flex flex-col justify-between md:flex-row'>
            <h3>{title}</h3>
            <div className='text-stone-500'>{formatDate(date)}</div>
          </div>
          <div className='mt-3'>{excerpt}</div>
        </div>
      </Link>
    </>
  );
};

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <div>
      <PageHeader
        title='Blog'
        subTitle='My thoughts and learning into writings, colors, and diagrams.'
      />
      <div className='mt-16 md:mt-28'>
        {posts.map((post) => {
          return <PostListItem key={post.meta.id} meta={post.meta} />;
        })}
      </div>
    </div>
  );
}
