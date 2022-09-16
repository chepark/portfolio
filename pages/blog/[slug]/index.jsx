import { getPostBySlug, getSlugs } from "../../../lib/posts";
import { serialize } from "next-mdx-remote/serialize";

const PostDetail = ({ post }) => {
  return <div>{post.meta.title}</div>;
};

export default PostDetail;

// getStaticPath is needed
// to pregenerate all paths.
// because it is static page.
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
  const mdxSource = await serialize(content);

  return {
    props: {
      post: { source: mdxSource, meta },
    },
  };
};
