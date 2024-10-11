import * as React from 'react';
import profilePic from '../../public/me.png';
import styles from '../../styles/SectionIntro.module.css';
import Image from 'next/image';
import SocialLinksPop from './SocialLinksPop';

const Hero = () => {
  return (
    <>
      <section>
        <div className="flex flex-col-reverse justify-between gap-6 mt-3 mb-3 items-top sm:flex-row">
          <div className="relative inline-block mr-auto">
            <Image
              className="rounded-full"
              src={profilePic}
              alt="Chaeah Park, author of the website"
              objectFit="cover"
              width="100"
              height={100}
            />
          </div>
          <div className="whitespace-pre-line sm:w-4/5">
            <h1 className="font-righteous">Chaeah Park</h1>
            <div className="font-semibold">
              Software Developer based in Finland
              <div className="flex flex-wrap mt-1">
                <span className="mr-2 text-sm">#FullStack</span>
                <span className="mr-2 text-sm">#TypeScript</span>
                <span className="mr-2 text-sm">#AutomatedTesting</span>
                <span className="mr-2 text-sm">#Agile</span>
                <span className="mr-2 text-sm">#UX</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-7">
          My passion for software is rooted in my teaching background, where I
          saw how engaging applications can spark curiosity and enhance
          learning. Besides, my teaching career has sharpened skills in{' '}
          <span className="highligher">information architecture</span> and{' '}
          <span className="highligher">UX design</span>, which I now combine
          with my <span className="highligher">software development</span>{' '}
          expertise. I’m dedicated to creating intuitive interfaces that deeply
          connect with users.
        </p>
        <div className="flex gap-5 mt-5 md:hidden w-fit">
          <SocialLinksPop />
        </div>
      </section>
    </>
  );
};

export default Hero;
