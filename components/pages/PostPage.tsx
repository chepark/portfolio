'use client';

import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation';
import formatDate from '../../lib/formatDate';
import profilePic from '../../public/me.png';
import { BackArrowIcon } from '../icons';
import Comments from '../sections/Comments';

const AuthorDate = ({ date }) => {
  return (
    <div className='flex items-center justify-between mt-5 mb-12'>
      <div className='flex items-center gap-5'>
        <div className='w-16 h-16 overflow-hidden rounded-full'>
          <Image src={profilePic} alt='Author of the article' sizes='20vw' />
        </div>
        <div>Cheah Park</div>
      </div>
      <div>{date}</div>
    </div>
  );
};

export default function PostPage({ post }) {
  const router = useRouter();

  // TODO: replace <Head></Head> to MetaData
  return (
    <>
      <div className='cursor-pointer' onClick={router.back}>
        <BackArrowIcon />
      </div>
      <div className='mt-16'>
        <h1 className='text-2xl font-bold'>{post.meta.title}</h1>
        <AuthorDate date={formatDate(post.meta.date)} />
      </div>
      <div className='prose prose-slate max-w-none'>
        <MDXRemote {...post.source} />
      </div>
      <Comments />
    </>
  );
}
