import Link from "next/link";
import { LinkedInIcon, GithubIcon, EmailIcon, DevToIcon } from "../icons";
import styles from "../../styles/sidebar.module.css";

const Sidebar = ({ toggleOn, setToggleOn }) => {
  const handleHamburgerClick = () => {
    setToggleOn(!toggleOn);
    console.log(toggleOn);
  };

  const toggleOff = () => {
    setToggleOn(false);
  };

  return (
    // add classname for styling on <a> tag.
    // MENU FOR TABLETS AND PC
    <div className="relative">
      <div className="md:z-[100] flex-col justify-between hidden h-screen px-10 pt-10 md:flex bg-white fixed top-0">
        <nav>
          <ul className="flex flex-col gap-12">
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
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
          <div className="relative h-44">
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

        {/* <button className="space-y-2" onClick={handleHamburgerClick}>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
        </button>
        {toggleOn && (
          <div>
            <ul className="flex flex-col gap-12 mt-8">
              <li>
                <Link href="/">
                  <a onClick={toggleOff}>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a onClick={toggleOff}>ABOUT</a>
                </Link>
              </li>
              <li>
                <Link href="/#projects">
                  <a onClick={toggleOff}>PROJECTS</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a onClick={toggleOff}>BLOG</a>
                </Link>
              </li>
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Sidebar;
