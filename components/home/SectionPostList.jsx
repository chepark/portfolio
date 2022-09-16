import React from "react";
import Link from "next/link";

const SectionPostList = ({ postsMeta }) => {
  return (
    <div className="mt-4 mb-8">
      <ul>
        {postsMeta.map((meta) => {
          return (
            <Link key={meta.id} href={`/blog/${meta.slug}`}>
              <li className="list-grow">
                <div className="py-3 text-lg font-semibold">{meta.title}</div>
                <div>{meta.date}</div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionPostList;
