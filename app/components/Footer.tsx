import Link from 'next/link';
import GithubIcon from '../../public/icons/icons8-github-64.png';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center py-4 h-28 items-center">
      <div className="flex justify-center items-center gap-2">
        <p>Developed by Victor Alexandre</p>
        <Link href="https://github.com/AlexWasHeree/hemakes-teste-tecnico">
          <img src={GithubIcon.src} alt="Github Icon" className="w-8 h-8" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
