'use client';

import Hero from '../sections/Hero';
import PostList from '../sections/PostList';
import Skills from '../sections/Skills';
import Title from '../sections/Title';
import PageHeader from '../sections/PageHeader';
import ProjectList from '../sections/ProjectList';

export default function HomePage({ postsMeta }) {
  return (
    <>
      <div>
        <div className='flex items-center justify-between ' id='about'>
          <PageHeader title='Chaeah Park' />
        </div>

        <div>
          <Hero />
        </div>

        <div className='mt-32'>
          <Title section='skills' />
          <Skills />
        </div>

        <div className='mt-32' id='projects'>
          <Title section='projects' linkText='All projects' />
          <ProjectList />
        </div>

        <div className='mt-32'>
          <Title section='blog' linkText='All posts' />
          <PostList postsMeta={postsMeta} />
        </div>
      </div>
    </>
  );
}
