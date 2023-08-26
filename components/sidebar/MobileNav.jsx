import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";
import { CV_URL } from "../../lib/socials";

const MobileNav = () => {
  return (
    <div className="flex flex-row justify-center visible gap-5 pt-10 md:hidden">
      <Link href="/" legacyBehavior>
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: "1000ms" }}
        >
          HOME
        </div>
      </Link>
      <Link href="/#projects" legacyBehavior>
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: "1100ms" }}
        >
          PROJECTS
        </div>
      </Link>
      <Link href="/blog" legacyBehavior>
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: "1200ms" }}
        >
          BLOG
        </div>
      </Link>
      <a
        href="https://github.com/chepark"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: "1300ms" }}
        >
          GITHUB
        </div>
      </a>
      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="CV"
      >
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: "1400ms" }}
        >
          CV
        </div>
      </a>
    </div>
  );
};

export default MobileNav;
