import Link from 'next/link';
import styles from '../../styles/Navigation.module.css';

const TopNavigation = () => {
  return (
    <div className='flex flex-row justify-center visible gap-5 pt-10 md:hidden'>
      <Link href='/'>
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: '1000ms' }}
        >
          HOME
        </div>
      </Link>
      <Link href='/#projects' legacyBehavior>
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: '1100ms' }}
        >
          PROJECTS
        </div>
      </Link>
      <Link href='/blog'>
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: '1200ms' }}
        >
          BLOG
        </div>
      </Link>
      <a
        href='https://github.com/chepark'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Github'
      >
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: '1300ms' }}
        >
          GITHUB
        </div>
      </a>
      <Link href={'/cv'} aria-label='CV'>
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: '1400ms' }}
        >
          CV
        </div>
      </Link>
    </div>
  );
};

export default TopNavigation;
