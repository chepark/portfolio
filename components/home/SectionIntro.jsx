import Image from "next/image";
import profilePic from "../../public/me.png";

const SectionIntro = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-10 mt-12">
        <div className="w-4/5 whitespace-pre-line">
          Hi there.{"\n"}My name is Cheah and people call me as Chai like tea.{" "}
          {"\n"}
          {"\n"}I am a web developer and an engineering student based in
          Finland. I enjoy building web applications and analyzing user
          experience based on data.
        </div>
        <div className="relative overflow-hidden rounded-full w-36 h-36">
          <Image
            src={profilePic}
            alt="Author of the article"
            objectFit="cover"
          />
        </div>
      </div>
      <div>
        <button className="px-3 py-1.5 mt-5 text-white bg-primary-black rounded-md">
          Check My CV
        </button>
      </div>
    </>
  );
};

export default SectionIntro;
