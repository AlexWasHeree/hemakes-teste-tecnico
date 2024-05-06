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
  const [checkedRecords, setCheckedRecords] = useState<number[]>([]);

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
    <>
      <div className="rounded-xl p-4 bg-whiteMain">
        <div className="flex justify-between px-8 py-8 ">
          <div className="flex items-center gap-4 flex-wrap">
            <label className="input input-bordered flex items-center gap-2 w-48 ">
              <img src={IconSearch.src} alt="Search Icon" className="w-6 h-6" />
              <input
                id="filter"
                name="filter"
                value={filter}
                onChange={handleChange}
                type="text"
                className="grow placeholder-transparent  sm:placeholder-gray-400 "
                placeholder="Search User..."
              />
            </label>
            {checkedRecords.length > 0 && (
              <button
                className="btn btn-error text-zinc-50 btn-sm xxs:btn-md"
                onClick={() =>
                  (
                    document?.getElementById('my_modal_1') as HTMLDialogElement
                  )?.showModal()
                }
              >
                Delete
              </button>
            )}
          </div>
          <Link href="/users/create">
            <button className="btn btn-primary w-16 sm:w-48 btn-sm xxs:btn-md ">
              <img src={AddIcon.src} alt="Add icon" className="w-7" />
              <span className="hidden sm:block">Create User</span>
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table mb-20 ">
            <thead>
              <tr className="text-black">
                <th></th>
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
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={checkedRecords.includes(user.id)}
                        onChange={(event) => {
                          if (event.target.checked) {
                            setCheckedRecords((prevState) => {
                              const newState = [...prevState];
                              newState.push(user.id);
                              return newState;
                            });
                          } else {
                            setCheckedRecords((prevState) => {
                              const newState = [...prevState];
                              return newState.filter((uid) => uid !== user.id);
                            });
                          }
                        }}
                      />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar hidden xxs:block">
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
                  <td>
                    {user.status === 'Active' && (
                      <span className="py-[0.012rem] px-2 rounded-lg bg-green-300 text-green-700 font-semibold ">
                        Active
                      </span>
                    )}
                    {user.status === 'Banned' && (
                      <span className="py-[0.012rem] px-2 rounded-lg bg-red-300 text-red-700 font-semibold ">
                        Banned
                      </span>
                    )}
                    {user.status === 'Idle' && (
                      <span className="py-[0.012rem] px-2 rounded-lg bg-orange-300 text-orange-700 font-semibold ">
                        Idle
                      </span>
                    )}
                  </td>
                  <th>
                    <TableMenu id={user.id} fetch={fetchData} />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete users</h3>
          <p className="py-4">
            Are you sure you want to delete users? This actions can not be
            undone.
          </p>
          <div className="modal-action">
            <form method="dialog" className="gap-2 flex">
              <button className="btn">Close</button>
              <button
                className="btn btn-error text-zinc-50"
                onClick={() => {
                  usersServices.deleteManyUsers(checkedRecords);
                  fetchData();
                  setCheckedRecords([]);
                }}
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UserList;
