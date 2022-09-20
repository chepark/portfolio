import Link from "next/link";
import { LinkedInIcon, GithubIcon, EmailIcon, DevToIcon } from "../icons";

const Sidebar = () => {
  return (
    // add classname for styling on <a> tag.
    <div className="sticky top-0 flex-col justify-between hidden h-screen px-8 py-12 md:flex">
      <nav>
        <ul className="flex flex-col gap-12">
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>BLOG</a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* SOCIAL LINKS */}
      <div className="flex flex-col gap-8">
        <div>
          <a href="https://www.linkedin.com/in/cheahpark/" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
        <div>
          <a href="https://github.com/chepark" target="_blank">
            <GithubIcon width="35" height="34.14" />
          </a>
        </div>
        <div>
          <a href="mailto:parkchaeah331@gmail.com" target="_blank">
            <EmailIcon />
          </a>
        </div>
        <div>
          <a href="https://dev.to/birdy" target="_blank">
            <DevToIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
