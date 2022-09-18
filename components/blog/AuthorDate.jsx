import React from "react";
import Image from "next/image";
import profilePic from "../../public/me.png";

const AuthorDate = ({ date }) => {
  return (
    <div className="flex items-center justify-between mt-5 mb-12">
      <div className="w-32 h-32 overflow-hidden rounded-full">
        <Image
          src={profilePic}
          alt="Author of the article"
          width={50}
          height={50}
        />
      </div>
      <div>{date}</div>
    </div>
  );
};

export default AuthorDate;
