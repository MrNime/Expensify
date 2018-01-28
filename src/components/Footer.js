import React from 'react';

const Footer = ({ dispatchStartLogout }) => (
  <header className="footer">
    <div className="content-container">
      <div className="footer__content">
        <p>
          Coded by{' '}
          <a href="https://github.com/NickyMeuleman/Expensify" target="_blank" rel="noopener noreferrer">
            Nicky Meuleman
          </a>
        </p>
        <p>
          Based on a course by{' '}
          <a href="https://mead.io/" target="_blank" rel="noopener noreferrer">
            Andrew J. Mead
          </a>
        </p>
      </div>
    </div>
  </header>
);

export default Footer;
