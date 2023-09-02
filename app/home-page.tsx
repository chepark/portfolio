'use client';

import * as React from 'react';

import SectionTitle from '../components/home/SectionTitle';
import PageHeader from '../components/pageHeader/PageHeader';
import SectionIntro from '../components/home/SectionIntro';
import SectionSkills from '../components/home/SectionSkills';
import SectionProjectList from '../components/home/SectionProjectList';
import SectionPostList from '../components/home/SectionPostList';

export default function HomePage({ postsMeta }) {
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
          <SectionProjectList />
        </div>

        <div className='mt-32'>
          <SectionTitle section='blog' linkText='All posts' />
          <SectionPostList postsMeta={postsMeta} />
        </div>
      </div>
    </>
  );
}
