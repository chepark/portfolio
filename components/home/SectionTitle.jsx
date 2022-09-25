import React from "react";
import Link from "next/link";
import RightArrowIcon from "../icons/RightArrowIcon";

const SectionTitle = ({ section, linkText }) => {
  const firstChar = section.charAt(0);
  const firstCharToUpperCase = firstChar.toUpperCase();
  const title = section.replace(firstChar, firstCharToUpperCase);

  // const linkText = `All ${section == "blog" ? "posts" : section}`;

  return (
    <div className="flex justify-between">
      <h2 className="text-xl font-righteous">{title}</h2>
      {section == "blog" && (
        <div className="flex flex-row items-center gap-2">
          <Link href={"/" + section}>{linkText}</Link>
          <RightArrowIcon />
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
