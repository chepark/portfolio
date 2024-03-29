'use client';

import { useState } from 'react';
import Link from 'next/link';
import TopNavigation from './TopNavigation';
import { socialData } from '../../data/Socials';
import styles from '../../styles/Navigation.module.css';

type Menu = 'HOME' | 'PROJECTS' | 'BLOG';

const SocialLink = ({ url, icon, animationDelay, areaLabel }) => {
  return (
    <div
      className={styles.socialAnimation}
      style={{ animationDelay }}
      role='social-link'
    >
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='hover:opacity-50'
        aria-label={areaLabel}
      >
        {icon}
      </a>
    </div>
  );
};

const SideNavigation = () => {
  const [currentPath, setCurrentPath] = useState('HOME');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const { target } = e;
    if (target) {
      const menu = (target as HTMLAnchorElement).textContent;
      setCurrentPath(menu as Menu);
    }
  };

  return (
    <>
      <div className='md:z-[100] flex-col justify-between hidden h-screen px-10 pt-10 md:flex bg-white fixed top-0'>
        <nav>
          <ul className='flex flex-col gap-12'>
            <li
              className={`${styles.navAnimation}`}
              style={{ animationDelay: '1000ms' }}
            >
              <Link
                href='/'
                className={`hover:font-semibold ${
                  currentPath === 'HOME' ? 'font-semibold' : ''
                } `}
                aria-label='Home'
                onClick={handleLinkClick}
              >
                HOME
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: '1100ms' }}
            >
              <a
                href='/#projects'
                className={`hover:font-semibold ${
                  currentPath === 'PROJECTS' ? 'font-semibold' : ''
                }`}
                aria-label='Projects'
              >
                PROJECTS
              </a>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: '1200ms' }}
            >
              <Link
                href='/blog'
                className={`hover:font-semibold ${
                  currentPath === 'BLOG' ? 'font-semibold' : ''
                }`}
                aria-label='Blog'
                onClick={handleLinkClick}
              >
                BLOG
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: '1300ms' }}
            >
              <Link
                href={'/cv'}
                aria-label='CV'
                className={`hover:font-semibold `}
                onClick={handleLinkClick}
              >
                CV
              </Link>
            </li>
          </ul>
        </nav>

        {/* SOCIAL LINKS */}
        <div className='flex flex-col gap-8 w-fit'>
          {socialData.map((social) => {
            return (
              <SocialLink
                key={social.id}
                url={social.url}
                areaLabel={social.areaLabel}
                icon={social.iconComponent}
                animationDelay={social.animationDelay}
              />
            );
          })}
          <div
            className={`relative h-44 ${styles.lineAnimation}`}
            style={{ animationDelay: '2000ms' }}
          >
            <svg
              className='absolute bottom-[-10px] left-4'
              xmlns='http://www.w3.org/2000/svg'
              width='1'
              height='193'
              viewBox='0 0 1 193'
            >
              <line
                id='Line_5'
                data-name='Line 5'
                y2='193'
                transform='translate(0.5)'
                fill='none'
                stroke='#363434'
                strokeWidth='1'
              />
            </svg>
          </div>
        </div>
      </div>
      <TopNavigation />
    </>
  );
};

export default SideNavigation;
