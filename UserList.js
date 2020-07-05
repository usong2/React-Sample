import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "usong",
      email: "usong@gmail.com",
    },
    {
      id: 2,
      username: "kkyu",
      email: "kyu@gmail.com",
    },
    {
      id: 3,
      username: "merong",
      email: "merong@gmail.com",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
