import React from 'react';
import { socialLinks } from '../data';

const SocialLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              className={itemClass}
              target="_blank"
              rel="noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
