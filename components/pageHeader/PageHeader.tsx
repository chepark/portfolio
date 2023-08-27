import { useRouter } from "next/router";

const PageHeader = ({ title }) => {
  const { pathname } = useRouter();
  const textAlignClass = pathname == "/" ? "text-left" : "text-center";

  return (
    <header>
      <h1 className={`${textAlignClass} font-righteous`}>{title}</h1>
    </header>
  );
};

export default PageHeader;
