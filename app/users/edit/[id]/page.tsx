'use client';

import { NextPage } from 'next';
import UserForm from '../../components/UserForm';
import { User, usersServices } from '@/services/users';

interface EditUserProps {
  params: {
    id: string;
  };
}

const EditUser: NextPage<EditUserProps> = ({ params }) => {
  const id = params.id;
  const user: User | undefined = usersServices.getUserById(parseInt(params.id));

  if (user) {
    return (
      <div>
        <UserForm user={user} type="edit" id={parseInt(params.id)} />
      </div>
    );
  }
  return <p>404 | User not found</p>;
};

export default EditUser;
