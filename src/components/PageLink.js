import React from 'react';

const PageLink = ({ href, text, className }) => {
  return (
    <li>
      <a className={className} href={href}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
