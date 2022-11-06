import * as React from "react";
import Head from "next/head";
import Image from "next/image";

import { list } from "postcss";
import SectionPostList from "../components/home/SectionPostList";
import SectionTitle from "../components/home/SectionTitle";
import PageHeader from "../components/pageHeader/PageHeader";
import { getAllPosts } from "../lib/posts";
import SectionIntro from "../components/home/SectionIntro";
import SectionSkills from "../components/home/SectionSkills";
import SectionProjectList from "../components/home/SectionProjectList";

export default function Home({ postsMeta }) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between " id="about">
          <PageHeader title="Chaeah Park" />
        </div>

        <div>
          <SectionIntro />
        </div>

        <div className="mt-32">
          <SectionTitle section="skills" />
          <SectionSkills />
        </div>

        <div className="mt-32" id="projects">
          <SectionTitle section="projects" linkText="All projects" />
          <SectionProjectList />
        </div>

        <div className="mt-32">
          <SectionTitle section="blog" linkText="All posts" />
          <SectionPostList postsMeta={postsMeta} />
        </div>
      </div>
    </>
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
