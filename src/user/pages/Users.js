/** @format */

import React from "react";

import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mark Zuckerberg",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.firstpost.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMark-Zuckerberg-Reuters-1024.jpg&f=1&nofb=1",

      places: 1
    }
  ];
  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
};

export default Users;
