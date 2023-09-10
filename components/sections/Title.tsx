import * as React from 'react';
import Link from 'next/link';
import RightArrowIcon from '../icons/RightArrowIcon';

type TitleProps = {
  section: string;
  linkLabel?: string;
};

const Title = ({ section, linkLabel }: TitleProps) => {
  const firstChar = section.charAt(0);
  const firstCharToUpperCase = firstChar.toUpperCase();
  const title = section.replace(firstChar, firstCharToUpperCase);

  return (
    <div className='flex justify-between'>
      <h2 className='text-xl font-righteous'>{title}</h2>
      {section == 'blog' && (
        <div className='flex flex-row items-center gap-2'>
          <Link href={'/' + section} legacyBehavior>
            {linkLabel}
          </Link>
          <RightArrowIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
