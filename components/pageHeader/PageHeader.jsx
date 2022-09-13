import { useRouter } from "next/router";

const PageHeader = ({ title, subTitle }) => {
  const { pathname } = useRouter();
  const textAlignClass = pathname == "/" ? "text-left" : "text-center";

  return (
    <header>
      <h1 className={`text-2xl ${textAlignClass}`}>{title}</h1>
      <p className={`mt-3 text-base whitespace-pre-line ${textAlignClass}`}>
        {subTitle}
      </p>
    </header>
  );
};

export default PageHeader;
