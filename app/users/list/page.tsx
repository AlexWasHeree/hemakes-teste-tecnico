'use client';

import React, { useEffect, useState } from 'react';
import IconSearch from '../../../public/icons/icons8-pesquisar-30.png';
import AddIcon from '../../../public/icons/icons8-soma-64.png';
import TableMenu from './components/TableMenu';
import Link from 'next/link';
import { User, usersServices } from '@/services/users';

const UserList = () => {
  const [usersDB, setUsersDB] = useState<User[]>([]);
  const [filter, setFilter] = useState<string>('');

  const fetchData = () => {
    const users = usersServices.getAllUsers();
    setUsersDB(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: any) => {
    setFilter(e.target.value);
    const returnedUsers = usersServices.filterUsers(e.target.value);
    setUsersDB(returnedUsers);
    console.log(returnedUsers);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between px-8 py-8">
        <label className="input input-bordered flex items-center gap-2">
          <img src={IconSearch.src} alt="Search Icon" className="w-6 h-6" />
          <input
            id="filter"
            name="filter"
            value={filter}
            onChange={handleChange}
            type="text"
            className="grow"
            placeholder="Search User..."
          />
        </label>
        <Link href="/users/create">
          <button className="btn btn-primary">
            <img src={AddIcon.src} alt="Add icon" className="w-7" />
            Create User
          </button>
        </Link>
      </div>
      <table className="table mb-20">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Company</th>
            <th>Role</th>
            <th>Verified</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersDB.map((user, index) => (
            <tr key={index}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-circle w-12 h-12">
                      <img
                        src={user.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div className="font-bold">{user.name}</div>
                </div>
              </td>
              <td>{user.company}</td>
              <td>{user.role}</td>
              <td>{user.verified ? 'Yes' : 'No'}</td>
              <td>{user.status}</td>
              <th>
                <TableMenu id={user.id} fetch={fetchData} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
