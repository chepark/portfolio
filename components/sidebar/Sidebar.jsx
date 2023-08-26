import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileNav from "./MobileNav";
import SocialLink from "./SocialLink";
import { socialData, CV_URL } from "../../lib/socials";
import styles from "../../styles/Sidebar.module.css";

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
              <Link
                href="/"
                className={`hover:font-semibold ${
                  currentPath.home ? "font-semibold" : ""
                } `}
                aria-label="Home">
                
                  HOME
                
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1100ms" }}
            >
              <Link
                href="/#projects"
                className={`hover:font-semibold ${
                  currentPath.projects ? "font-semibold" : ""
                }`}
                aria-label="Projects">
                
                  PROJECTS
                
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1200ms" }}
            >
              <Link
                href="/blog"
                className={`hover:font-semibold ${
                  currentPath.blog ? "font-semibold" : ""
                }`}
                aria-label="Blog">
                
                  BLOG
                
              </Link>
            </li>
            <li
              className={styles.navAnimation}
              style={{ animationDelay: "1300ms" }}
            >
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CV"
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
                aria-label={social.areaLabel}
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
