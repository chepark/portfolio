import * as React from 'react';
import Image from 'next/legacy/image';
import profilePic from '../../public/me.png';
import styles from '../../styles/SectionIntro.module.css';
import { CV_URL } from '../../lib/Socials';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col-reverse items-center justify-between gap-6 mt-6 sm:mt-12 sm:flex-row'>
        <div className='whitespace-pre-line sm:w-4/5'>
          Hi there.{'\n'}My name is Cheah and people call me as Chai like tea.
          {'\n'}
          {'\n'}I am a web developer and an engineering student based in
          Finland. I enjoy building web applications and analyzing user
          experience based on data.
        </div>
        <div className='w-[120px] sm:w-[176px] relative  sm:mb-8 mr-auto '>
          <Image
            className='rounded-full'
            src={profilePic}
            alt='Cheah Park, author of the website'
            objectFit='cover'
            sizes='30vw'
          />
        </div>
      </div>
      <div>
        <button
          className={`px-3 py-1.5 mt-5 md:mt-0 text-primary-black rounded-md ${styles.btnCV}`}
        >
          <a
            href={CV_URL}
            aria-label='CV'
            target='_blank'
            rel='noopener noreferrer'
          >
            Check My CV
          </a>
        </button>
      </div>
    </>
  );
};

export default Hero;
