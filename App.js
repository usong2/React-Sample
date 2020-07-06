import React, { useRef } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
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

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); // 4
    nextId.current += -1;
  };

  return <UserList users={users} />;
}

export default App;
