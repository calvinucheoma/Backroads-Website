import React from 'react';
import { pageLinks } from '../data';
import PageLink from './PageLink';

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        return (
          <PageLink
            key={link.id}
            href={link.href}
            text={link.text}
            className={itemClass}
          />
        );
      })}
    </ul>
  );
};

export default PageLinks;
