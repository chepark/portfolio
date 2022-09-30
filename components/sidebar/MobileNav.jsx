import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";

const MobileNav = () => {
  return (
    <div className="flex flex-row justify-center visible gap-5 pt-10 md:hidden">
      <Link href="/">
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: "1000ms" }}
        >
          HOME
        </div>
      </Link>
      <Link href="/#projects">
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: "1100ms" }}
        >
          PROJECTS
        </div>
      </Link>
      <Link href="/blog">
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: "1200ms" }}
        >
          BLOG
        </div>
      </Link>
      <a href="https://github.com/chepark" target="_blank" area-label="Github">
        <div
          className={`text-sm ${styles.mobileNavAnimation} cursor-pointer`}
          style={{ animationDelay: "1300ms" }}
        >
          GITHUB
        </div>
      </a>
      <a
        href="https://www.notion.so/Chaeah-Park-Front-end-Developer-4194feb829774cdf91c16d5920cc5007"
        target="_blank"
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
