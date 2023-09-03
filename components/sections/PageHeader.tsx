'use client';

import { usePathname } from 'next/navigation';

type PageHeaderProps = {
  title: string;
  subTitle?: string;
};

const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  const pathname = usePathname();
  const textAlignClass = pathname == '/' ? 'text-left' : 'text-center';

  return (
    <header>
      <h1 className={`${textAlignClass} font-righteous`}>{title}</h1>
      {pathname !== '' && (
        <p className={`mt-3 text-base whitespace-pre-line ${textAlignClass}`}>
          {subTitle}
        </p>
      )}
    </header>
  );
};

export default PageHeader;
