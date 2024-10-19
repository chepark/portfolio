import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';
import styles from '../../styles/Navigation.module.css';

function SocialLinksPop() {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/cheahpark/"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center`}
        aria-label="LinkedIn"
        style={{ animationDelay: '1300ms' }}
      >
        <FaLinkedinIn className="w-5 h-5 mr-1 socialIcon" />
      </a>
      <a
        href="https://github.com/chepark/heihei"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center`}
        aria-label="GitHub"
        style={{ animationDelay: '1400ms' }}
      >
        <FiGithub className="w-5 h-5 mr-1 socialIcon" />
      </a>
      <a
        href="https://dev.to/birdy"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center`}
        aria-label="Dev.to"
        style={{ animationDelay: '1500ms' }}
      >
        <FaDev className="w-5 h-5 socialIcon" />
      </a>
    </>
  );
}

export default SocialLinksPop;
