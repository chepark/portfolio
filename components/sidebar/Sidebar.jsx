import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Sidebar.module.css";
import MobileNav from "./MobileNav";
import SocialLink from "./SocialLink";
import { socialData } from "../../lib/socials";

const Sidebar = () => {
  const { asPath } = useRouter();
  const [currentPath, setCurrentPath] = useState({
    home: true,
    projects: false,
    blog: false,
  });

  useEffect(() => {
    if (asPath === "/")
      setCurrentPath({ home: true, projects: false, blog: false });

    if (asPath === "/#projects")
      setCurrentPath({ home: false, projects: true, blog: false });

    if (asPath === "/blog")
      setCurrentPath({ home: false, projects: false, blog: true });
  }, [asPath]);

  return (
    <div className="relative">
      <div className="md:z-[100] flex-col justify-between hidden h-screen px-10 pt-10 md:flex bg-white fixed top-0">
        <nav>
          <ul className="flex flex-col gap-12">
            <li
              className={`${styles.navAnimation}`}
              style={{ animationDelay: "1000ms" }}
            >
              <Link href="/">
                <a
                  className={`hover:font-semibold ${
                    currentPath.home ? "font-semibold" : ""
                  } `}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1100ms" }}
            >
              <Link href="/#projects">
                <a
                  className={`hover:font-semibold ${
                    currentPath.projects ? "font-semibold" : ""
                  }`}
                >
                  PROJECTS
                </a>
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1200ms" }}
            >
              <Link href="/blog">
                <a
                  className={`hover:font-semibold ${
                    currentPath.blog ? "font-semibold" : ""
                  }`}
                >
                  BLOG
                </a>
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1300ms" }}
            >
              <a
                href="https://www.notion.so/Chaeah-Park-Front-end-Developer-4194feb829774cdf91c16d5920cc5007"
                target="_blank"
                className={`hover:font-semibold `}
              >
                CV
              </a>
            </li>
          </ul>
        </nav>

        {/* SOCIAL LINKS */}
        <div className="flex flex-col gap-8 w-fit">
          {socialData.map((social) => {
            return (
              <SocialLink
                key={social.id}
                url={social.url}
                icon={social.iconComponent}
                animationDelay={social.animationDelay}
              />
            );
          })}
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
      <MobileNav />
    </div>
  );
};

export default Sidebar;
