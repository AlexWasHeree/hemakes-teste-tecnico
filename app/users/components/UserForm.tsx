'use client';

import { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    role: '',
    verified: false,
    status: '',
    company: '',
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
    console.log(formData);
  };

  return (
    <div className="container mx-auto max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
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
            <label htmlFor="role" className="block mb-1 font-medium">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="select select-bordered w-full max-w-xl"
            >
              <option value="">Select Role</option>
              <option value="UI Designer">UI Designer</option>
              <option value="HR Manager">HR Manager</option>
              <option value="Leader">Leader</option>
              <option value="Developer">Developer</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="image" className="block mb-1 font-medium">
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
          <label htmlFor="verified" className="flex items-center">
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
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <label htmlFor="status" className="block mb-1 font-medium">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="select select-bordered w-full max-w-xl"
            >
              <option value="">Select Status</option>
              <option value="Banned">Banned</option>
              <option value="Active">Active</option>
              <option value="Idle">Idle</option>
            </select>
          </div>
          <div>
            <label htmlFor="company" className="block mb-1 font-medium">
              Company
            </label>
            <select
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="">Select Company</option>
              <option value="Hemakes">Hemakes</option>
              <option value="Wemake">Wemake</option>
              <option value="Youmake">Youmake</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
