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
      role="social-link"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-50"
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
      <TopNavigation />
    </>
  );
};

export default SideNavigation;
