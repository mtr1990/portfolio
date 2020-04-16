import React from "react";
import { UserItem } from "..";

const UserList = ({ stateUsers, deleteUser }) => {
  if (!stateUsers.length) return null;

  const sortList = stateUsers.sort((a, b) => {
    if (a.email.toLowerCase() < b.email.toLowerCase()) return -1;
    if (a.email.toLowerCase() > b.email.toLowerCase()) return 1;
    return 0;
  });

  return sortList.map((item, index) => (
    <UserItem key={index} item={item} deleteUser={deleteUser} />
  ));
};

export default UserList;
