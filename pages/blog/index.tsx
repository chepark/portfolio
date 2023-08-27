import Head from "next/head";
import PostList from "../../components/blog/PostList";
import PageHeader from "../../components/pageHeader/PageHeader";
import { getAllPosts } from "../../lib/posts";

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog — Cheah Park</title>
        <meta name="description" content="Writings about my thoughts, technology, and life. Colors and diagrams are my other languages." />
      </Head>
      <div>
        <div>
          <PageHeader
            title="Blog"
            subTitle="My thoughts and learning into writings, colors, and diagrams."
          />
          <PostList posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Blog;

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
