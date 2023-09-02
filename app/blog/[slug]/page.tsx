import { Metadata } from 'next';

import PostPage from './post-page';
import { getPostBySlug, getSlugs } from '../../../lib/posts';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';

// TODO: edit the metadata content
export const metadata: Metadata = {
  title: 'Blog — Chaeah Park',
  description: 'Writing about my thoughts, technology, and life. ',
};

export async function generateStaticParams() {
  const slugs = getSlugs();
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return paths;
}

async function getPost(params) {
  const { slug } = params;
  const { content, meta } = await getPostBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  const post = { source: mdxSource, meta };

  return post;
}

export default async function Page({ params }) {
  const post = await getPost(params);

  return (
    <>
      <PostPage post={post} />
    </>
  );
}
