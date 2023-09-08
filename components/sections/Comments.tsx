import React from 'react';

const Comments: React.FC = () => {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'chepark/portfolio');
        scriptElem.setAttribute('issue-term', 'pathname');
        scriptElem.setAttribute('theme', 'github-light');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.crossOrigin = 'anonymous';
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};

export default Comments;
