'use client';

import Hero from '../sections/Hero';
import PostList from '../sections/PostList';
import SkillList from '../sections/SkillList';
import Title from '../sections/Title';
import PageHeader from '../sections/PageHeader';
import ProjectList from '../sections/ProjectList';
import sectionData from '../../data/sections.json';
import { PostMeta } from '../../lib/posts';

type HomePageProps = {
  postsMeta: PostMeta[];
};

export default function HomePage({ postsMeta }: HomePageProps) {
  const { sections } = sectionData;
  return (
    <>
      <div>
        <div className="flex items-center justify-between " id="about">
          <PageHeader title="Chaeah Park" />
        </div>

        <div>
          <Hero />
        </div>
        {sections.map((section) => (
          <div className="mt-32" key={section.id}>
            <Title section={section.title} linkLabel={section.linkLabel} />
            {section.title === 'skills' && <SkillList />}
            {section.title === 'projects' && <ProjectList />}
            {section.title === 'blog' && <PostList postsMeta={postsMeta} />}
          </div>
        ))}
      </div>
    </>
  );
}
