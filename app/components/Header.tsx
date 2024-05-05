'use client';

import React from 'react';
import BackIcon from '../../public/icons/icons8-voltar-67.png';
import Logo from '../../public/icons/LogoHemakes.png';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <header className="py-4 px-6 flex justify-between items-center">
      <div>
        <img src={Logo.src} alt="Logo" className="w-20" />
      </div>
      <div>
        <button
          onClick={handleClick}
          className="bg-white text-primary px-4 py-2 rounded-md"
        >
          <img src={BackIcon.src} alt="Back icon" className="w-8" />
        </button>
      </div>
    </header>
  );
};

export default Header;
