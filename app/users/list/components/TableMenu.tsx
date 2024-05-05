'use client';

import React, { useState, useEffect, useRef } from 'react';
import IconMenu from '../../../../public/icons/icons8-menu-2-48.png';
import Link from 'next/link';
import { usersServices } from '@/services/users';
import { useRouter } from 'next/navigation';

const TableMenu = ({ id, fetch }: { id: number; fetch: () => void }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClickEdit = () => {
    setOpen(false);
  };
  const handleItemClickDelete = () => {
    usersServices.deleteUser(id);
    setOpen(false);
    fetch();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-ghost btn-circle btn-xs"
      >
        <img src={IconMenu.src} alt="Menu Icon" className="w-6 h-6" />
      </button>
      {open && (
        <ul
          className="menu bg-base-200 w-40 rounded-box absolute top-0 right-20 mt-8 z-10"
          ref={menuRef}
        >
          <li>
            <Link
              href={'/users/edit/' + id}
              className="menu-title block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-base-100 cursor-pointer"
              onClick={handleItemClickEdit}
            >
              Edit
            </Link>
          </li>
          <li>
            <a
              className="menu-title block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-base-100 cursor-pointer"
              onClick={handleItemClickDelete}
            >
              Delete
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TableMenu;
