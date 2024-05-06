'use client';

import { useState } from 'react';
import NoImageIcon from '../../../public/icons/no-image-icon.png';
import BackIcon from '../../../public/icons/turn-back-icon.png';
import { User, usersServices } from '@/services/users';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  name: string;
  image: string;
  role: string;
  verified: boolean;
  status: string;
  company: string;
}

interface UserFormProps {
  type: 'edit' | 'create';
  id?: number;
  user?: User;
}

const UserForm = ({ type, id, user }: UserFormProps) => {
  if (type === 'edit') {
    console.log('edit mode');
  }

  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: user ? user.name : '',
    image: user ? user.image : '',
    role: user ? user.role : '',
    verified: user ? user.verified : false,
    status: user ? user.status : '',
    company: user ? user.company : '',
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newUser: User = {
      id: Date.now(),
      name: formData.name,
      image: formData.image,
      role: formData.role as User['role'],
      verified: formData.verified,
      status: formData.status as User['status'],
      company: formData.company as User['company'],
    };
    const editedUser: User = {
      /* @ts-ignore: id can never be undefined as long as type is "edit" */
      id: id,
      name: formData.name,
      image: formData.image,
      role: formData.role as User['role'],
      verified: formData.verified,
      status: formData.status as User['status'],
      company: formData.company as User['company'],
    };

    if (type === 'create') {
      const responseCreat = usersServices.addUser(newUser);
      alert(responseCreat);
    } else if (type === 'edit') {
      /* @ts-ignore: id can never be undefined as long as type is "edit" */
      const responseEdit = usersServices.editUser(id, editedUser);
      alert(responseEdit);
    }
    const allUsers = usersServices.getAllUsers();

    setTimeout(() => {
      router.push('/users/list');
    }, 500);
  };

  return (
    <div className="container mx-auto max-w-xl bg-whiteMain rounded-xl p-4 sm:p-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-lg font-bold text-blackMain">
          {type === 'edit' ? 'Edit User' : 'Create User'}
        </h1>
        {type === 'edit' ? (
          <Link href="/users/list">
            <button className="btn bg-red-400 hover:bg-red-500 w-28 btn-sm xxs:btn-md xxs:w-48">
              Cancel
            </button>
          </Link>
        ) : (
          <div className="w-8 h-8">
            <Link href="/users/list">
              <img
                src={BackIcon.src}
                alt="Back Icon"
                className="w-6 hover:w-7 transition-all"
              />
            </Link>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-sm xxs:text-base"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full max-w-xl"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-1 font-medium text-sm xxs:text-base"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="select select-bordered w-full max-w-xl "
              required
            >
              <option value="">Select Role</option>
              <option value="UI Designer">UI Designer</option>
              <option value="HR Manager">HR Manager</option>
              <option value="Leader">Leader</option>
              <option value="Developer">Developer</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="image"
                className="block mb-1 font-medium text-sm xxs:text-base"
              >
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="input input-bordered w-full max-w-xl"
                placeholder="Enter image URL"
                required
              />
            </div>

            <div>
              <label
                htmlFor="verified"
                className="flex items-center text-sm xxs:text-base"
              >
                <p className="font-medium">Verified</p>
                <input
                  type="checkbox"
                  id="verified"
                  name="verified"
                  checked={formData.verified}
                  onChange={handleChange}
                  className="checkbox checkbox-lg ml-2"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center border-2 rounded-lg">
            <figure>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img
                    src={formData.image ? formData.image : NoImageIcon.src}
                  />
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <label
              htmlFor="status"
              className="block mb-1 font-medium text-sm xxs:text-base"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="select select-bordered w-full max-w-xl"
              required
            >
              <option value="">Select Status</option>
              <option value="Banned">Banned</option>
              <option value="Active">Active</option>
              <option value="Idle">Idle</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-1 font-medium text-sm xxs:text-base"
            >
              Company
            </label>
            <select
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Company</option>
              <option value="Hemakes">Hemakes</option>
              <option value="Wemake">Wemake</option>
              <option value="Youmake">Youmake</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full btn-sm xxs:btn-md "
        >
          {type === 'create' ? 'Create' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
