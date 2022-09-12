import Link from "next/link";
import LinkedInIcon from "../icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";
import EmailIcon from "../icons/EmailIcon";
import DevToIcon from "../icons/DevToIcon";

const Sidebar = () => {
  return (
    // add classname for styling on <a> tag.
    <div className="sticky top-0 flex flex-col justify-between h-screen p-8">
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
      <div className="flex flex-col gap-8">
        <div>
          <LinkedInIcon />
        </div>
        <div>
          <GithubIcon />
        </div>
        <div>
          <EmailIcon />
        </div>
        <div>
          <DevToIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
