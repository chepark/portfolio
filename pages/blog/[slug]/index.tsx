import Head from "next/head";
import { useRouter } from "next/router";
import { getPostBySlug, getSlugs } from "../../../lib/posts";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import BackArrowIcon from "../../../components/icons/BackArrowIcon";
import AuthorDate from "../../../components/blog/AuthorDate";
import formatDate from "../../../lib/formatDate";

const PostDetail = ({ post }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="cursor-pointer" onClick={router.back}>
        <BackArrowIcon />
      </div>
      <div className="mt-16">
        <h1 className="font-bold">{post.meta.title}</h1>
        <AuthorDate date={formatDate(post.meta.date)} />
      </div>
      <div className="prose prose-slate max-w-none">
        <MDXRemote {...post.source} />
      </div>
    </>
  );
};

export default PostDetail;

export const getStaticPaths = async () => {
  const slugs = getSlugs();
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      post: { source: mdxSource, meta },
    },
  };
};
