import Link from "next/link";
import { LinkedInIcon, GithubIcon, EmailIcon, DevToIcon } from "../icons";
import styles from "../../styles/sidebar.module.css";

const Sidebar = () => {
  return (
    // add classname for styling on <a> tag.
    // MENU FOR TABLETS AND PC
    <div className="relative">
      <div className="md:z-[100] flex-col justify-between hidden h-screen px-10 pt-10 md:flex bg-white fixed top-0">
        <nav>
          <ul className="flex flex-col gap-12">
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1000ms" }}
            >
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1100ms" }}
            >
              <a
                href="https://www.notion.so/Chaeah-Park-Front-end-Developer-4194feb829774cdf91c16d5920cc5007"
                target="_blank"
              >
                CV
              </a>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1200ms" }}
            >
              <Link href="/#projects">
                <a>PROJECTS</a>
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1300ms" }}
            >
              <Link href="/blog">
                <a>BLOG</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* SOCIAL LINKS */}
        <div className="flex flex-col gap-8 w-fit">
          <div
            className={styles.socialAnimation}
            style={{ animationDelay: "2500ms" }}
          >
            <a href="https://www.linkedin.com/in/cheahpark/" target="_blank">
              <LinkedInIcon />
            </a>
          </div>
          <div
            className={styles.socialAnimation}
            style={{ animationDelay: "2600ms" }}
          >
            <a href="https://github.com/chepark" target="_blank">
              <GithubIcon width="35" height="34.14" />
            </a>
          </div>
          <div
            className={styles.socialAnimation}
            style={{ animationDelay: "2700ms" }}
          >
            <a href="mailto:parkchaeah331@gmail.com" target="_blank">
              <EmailIcon />
            </a>
          </div>
          <div
            className={styles.socialAnimation}
            style={{ animationDelay: "2800ms" }}
          >
            <a href="https://dev.to/birdy" target="_blank">
              <DevToIcon />
            </a>
          </div>
          <div
            className={`relative h-44 ${styles.lineAnimation}`}
            style={{ animationDelay: "2000ms" }}
          >
            <svg
              className="absolute bottom-[-10px] left-4"
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="193"
              viewBox="0 0 1 193"
            >
              <line
                id="Line_5"
                data-name="Line 5"
                y2="193"
                transform="translate(0.5)"
                fill="none"
                stroke="#363434"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center visible gap-5 pt-10 md:hidden">
        <Link href="/">
          <div className="text-sm">HOME</div>
        </Link>
        <Link href="/#projects">
          <div>PROJECTS</div>
        </Link>
        <Link href="/blog">
          <div>BLOG</div>
        </Link>
        <Link href="/blog">
          <div>CV</div>
        </Link>
        <Link href="/blog">
          <div>GITHUB</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
