import React from "react";
import { motion } from "framer-motion";
import { varWrapBoth } from "../../utilities";
import { UserItem } from "..";

const UserList = ({ stateUsers, deleteUser }) => {
  if (!stateUsers.length) return null;

  const sortList = stateUsers.sort((a, b) => {
    if (a.email.toLowerCase() < b.email.toLowerCase()) return -1;
    if (a.email.toLowerCase() > b.email.toLowerCase()) return 1;
    return 0;
  });

  return (
    <motion.div variants={varWrapBoth}>
      {sortList.map((item) => (
        <UserItem key={item._id} item={item} deleteUser={deleteUser} />
      ))}
    </motion.div>
  );
};

export default UserList;
