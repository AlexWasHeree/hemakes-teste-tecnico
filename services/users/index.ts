export interface User {
  id: number;
  name: string;
  image: string;
  role: 'UI Designer' | 'Hr Manager' | 'Leader' | 'Developer';
  verified: boolean;
  status: 'Banned' | 'Active' | 'Idle';
  company: 'Hemakes' | 'Wemake' | 'Youmake';
}

// add method without checking name duplicates
// const addUser = (user: User) => {

//   const storedUsersString = localStorage.getItem('users');
//   const users: User[] = storedUsersString ? JSON.parse(storedUsersString) : [];
//   users.push(user);
//   localStorage.setItem('users', JSON.stringify(users));
// };

const addUser = (user: User) => {
  const storedUsersString = localStorage.getItem('users');
  const users: User[] = storedUsersString ? JSON.parse(storedUsersString) : [];

  const userExists = users.some(
    (existingUser) =>
      existingUser.name.toLowerCase() === user.name.toLowerCase(),
  );
  if (userExists) {
    return 'User already exists [Name Duplicate]';
  }

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  return 'User created';
};

const getAllUsers = (): User[] => {
  const storedUsersString = localStorage.getItem('users');
  const users: User[] = storedUsersString ? JSON.parse(storedUsersString) : [];
  return users;
};

const editUser = (id: number, updatedUser: User) => {
  const storedUsersString = localStorage.getItem('users');
  let users: User[] = storedUsersString ? JSON.parse(storedUsersString) : [];
  users = users.map((user: User) => (user.id === id ? updatedUser : user));
  localStorage.setItem('users', JSON.stringify(users));
  console.log('User edited');
};

const deleteUser = (id: number) => {
  const storedUsersString = localStorage.getItem('users');
  let users: User[] = storedUsersString ? JSON.parse(storedUsersString) : [];
  users = users.filter((user: User) => user.id !== id);
  localStorage.setItem('users', JSON.stringify(users));
};

const getUserById = (id: number): User | undefined => {
  const storedUsersString = localStorage.getItem('users');
  const users: User[] = storedUsersString ? JSON.parse(storedUsersString) : [];
  return users.find((user: User) => user.id === id);
};

const filterUsers = (searchValue: string): User[] => {
  const storedUsersString = localStorage.getItem('users');
  const users: User[] = storedUsersString ? JSON.parse(storedUsersString) : [];

  const searchValueLower = searchValue.toLowerCase();

  const filteredUsers = users.filter((user) => {
    return Object.values(user).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchValueLower),
    );
  });

  return filteredUsers;
};

export const usersServices = {
  addUser,
  getAllUsers,
  editUser,
  deleteUser,
  getUserById,
  filterUsers,
};
