import Head from "next/head";
import Image from "next/image";

import { list } from "postcss";
import SectionPostList from "../components/home/SectionPostList";
import SectionTitle from "../components/home/SectionTitle";
import PageHeader from "../components/pageHeader/PageHeader";
import { getAllPosts } from "../lib/posts";
import SectionIntro from "../components/home/SectionIntro";

export default function Home({ postsMeta }) {
  return (
    <div>
      <Head>
        <title>Cheah Park</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="flex items-center justify-between">
        <PageHeader title="Cheah Park" />
      </div>

      <SectionIntro />

      <div className="mt-24">
        <SectionTitle section="skills" />
      </div>

      <div className="mt-24">
        <SectionTitle section="projects" linkText="All projects" />
      </div>

      <div className="mt-24">
        <SectionTitle section="blog" linkText="All posts" />
        <SectionPostList postsMeta={postsMeta} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 5);
  const postsMeta = posts.map((post) => post.meta);

  return {
    props: {
      postsMeta,
    },
  };
}
