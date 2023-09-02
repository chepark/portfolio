'use client';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote';

import 'highlight.js/styles/atom-one-dark.css';
import BackArrowIcon from '../../../components/icons/BackArrowIcon';
import AuthorDate from '../../../components/blog/AuthorDate';
import formatDate from '../../../lib/formatDate';

export default function PostPage({ post }) {
  const router = useRouter();

  // TODO: replace <Head></Head> to MetaData
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
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
    </>
  );
}
