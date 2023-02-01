import React from 'react';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
        <SocialLink parentClass="footer-icons" itemClass="footer-icon" />
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
