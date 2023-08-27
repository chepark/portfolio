import * as React from "react";
import Image from "next/legacy/image";
import profilePic from "../../public/me.png";

const AuthorDate = ({ date }) => {
  return (
    <div className="flex items-center justify-between mt-5 mb-12">
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <Image src={profilePic} alt="Author of the article" sizes="20vw" />
        </div>
        <div>Cheah Park</div>
      </div>
      <div>{date}</div>
    </div>
  );
};

export default AuthorDate;
