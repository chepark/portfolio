import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../styles/Navigation.module.css';
import SocialLinksDrop from './SocialLinksDrop';

const TopNavigation = () => {
  const pathname = usePathname();
  const fontColorBasedOnPath = (targetPath: string) =>
    pathname === targetPath ? 'text-primary-black' : 'text-light-grey';

  return (
    <div className="container flex items-center justify-between w-full py-10 mx-auto md:max-w-2xl">
      <div className="flex gap-5 w-fit">
        <Link href="/">
          <div
            className={`text-sm ${
              styles.mobileNavAnimation
            } cursor-pointer ${fontColorBasedOnPath(
              '/',
            )}  font-semibold hover:text-primary-black`}
            style={{ animationDelay: '1000ms' }}
          >
            HOME
          </div>
        </Link>
        <Link href="/#projects">
          <div
            className={`text-sm ${styles.mobileNavAnimation} cursor-pointer text-light-grey font-semibold hover:text-primary-black`}
            style={{ animationDelay: '1100ms' }}
          >
            PROJECTS
          </div>
        </Link>
        <Link href="/blog">
          <div
            className={`text-sm ${
              styles.mobileNavAnimation
            } cursor-pointer ${fontColorBasedOnPath(
              '/blog',
            )} text-light-grey font-semibold hover:text-primary-black`}
            style={{ animationDelay: '1200ms' }}
          >
            BLOG
          </div>
        </Link>
      </div>
      <div className="hidden gap-5 md:flex w-fit">
        <SocialLinksDrop />
      </div>
    </div>
  );
};

export default TopNavigation;
