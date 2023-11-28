import React from 'react';
import PageHeader from '../sections/PageHeader';

export default function CVPage() {
  const IFRAME_WIDTH = '100%';
  const IFRAME_HEIGHT = '100vh';

  return (
    <div>
      <PageHeader title="Curriculum Vitae" />
      <iframe
        style={{
          width: IFRAME_WIDTH,
          height: IFRAME_HEIGHT,
        }}
        src="https://docs.google.com/document/d/e/2PACX-1vRKmNUEXijK6etL0dd9pxnpoDD6g2EFd2gprtBPaqeQCn9uNiEDK6K9I17jUyjBp2HPac6u8pbXyrnc/pub?embedded=true"
      ></iframe>
    </div>
  );
}
