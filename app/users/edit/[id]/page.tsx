'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

interface EditUserProps {
  params: {
    id: string;
  };
}

const EditUser: NextPage<EditUserProps> = ({ params }) => {
  const router = useRouter();
  const id = params.id;

  return <div>Edit user {id}</div>;
};

export default EditUser;
