import React from 'react';
import IconSearch from '../../../public/icons/icons8-pesquisar-30.png';
import TableMenu from './components/TableMenu';

const usersDB = [
  {
    id: '1',
    name: 'Alice',
    image: 'https://img.daisyui.com/tailwind-css-component-profile-2@56w.png',
    role: 'UI Designer',
    verified: true,
    status: 'Active',
    company: 'Hemakes',
  },
  {
    id: '2',
    name: 'Bob',
    image: 'https://img.daisyui.com/tailwind-css-component-profile-2@56w.png',
    role: 'HR Manager',
    verified: false,
    status: 'Idle',
    company: 'Wemake',
  },
  {
    id: '3',
    name: 'Charlie',
    image: 'https://img.daisyui.com/tailwind-css-component-profile-2@56w.png',
    role: 'Leader',
    verified: true,
    status: 'Active',
    company: 'Youmake',
  },
  {
    id: '4',
    name: 'Diana',
    image: 'https://img.daisyui.com/tailwind-css-component-profile-2@56w.png',
    role: 'Developer',
    verified: true,
    status: 'Banned',
    company: 'Hemakes',
  },
  {
    id: '5',
    name: 'Eric',
    image: 'https://img.daisyui.com/tailwind-css-component-profile-2@56w.png',
    role: 'UI Designer',
    verified: true,
    status: 'Active',
    company: 'Wemake',
  },
  {
    id: '5',
    name: 'Eric',
    image: 'https://img.daisyui.com/tailwind-css-component-profile-2@56w.png',
    role: 'UI Designer',
    verified: true,
    status: 'Active',
    company: 'Wemake',
  },
];

const UserList = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between px-8 py-8">
        <label className="input input-bordered flex items-center gap-2">
          <img src={IconSearch.src} alt="Search Icon" className="w-6 h-6" />
          <input type="text" className="grow" placeholder="Search User..." />
        </label>
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
            <th>Job</th>
            <th>Favorite color</th>
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
                <TableMenu id={user.id} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
