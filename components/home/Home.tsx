import * as React from 'react';

import { list } from 'postcss';
import SectionPostList from './SectionPostList';
import SectionTitle from './SectionTitle';
import PageHeader from '../pageHeader/PageHeader';
import { getAllPosts } from '../../lib/posts';
import SectionIntro from './SectionIntro';
import SectionSkills from './SectionSkills';
import SectionProjectList from './SectionProjectList';
import ProjectList from '../projects/ProjectList';

export default function Home({ postsMeta }) {
  return (
    <>
      <div>
        <div className='flex items-center justify-between ' id='about'>
          <PageHeader title='Chaeah Park' />
        </div>

        <div>
          <SectionIntro />
        </div>

        <div className='mt-32'>
          <SectionTitle section='skills' />
          <SectionSkills />
        </div>

        <div className='mt-32' id='projects'>
          <SectionTitle section='projects' linkText='All projects' />
          {/* <SectionProjectList /> */}
          <ProjectList />
        </div>

        <div className='mt-32'>
          <SectionTitle section='blog' linkText='All posts' />
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
