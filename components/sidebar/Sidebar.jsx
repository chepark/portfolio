import Link from "next/link";

const Sidebar = () => {
  return (
    // add classname for styling on <a> tag.
    <ul>
      <li>
        <Link href="/">
          <a>HOME</a>
        </Link>
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
  );
};

export default Sidebar;
