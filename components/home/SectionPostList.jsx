import React from "react";
import Link from "next/link";

const SectionPostList = ({ postsMeta }) => {
  return (
    <div className="mt-4 mb-8">
      <ul className="">
        {postsMeta.map((meta) => {
          return (
            <Link key={meta.id} href={`/blog/${meta.slug}`}>
              <li>
                <div className="flex flex-col justify-between py-3 border-b md:items-center sm:items-end list-grow sm:flex-row hover:opacity-50">
                  <div className="text-lg font-semibold ">{meta.title}</div>
                  <div className="sm:mt-0">{meta.date}</div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionPostList;
