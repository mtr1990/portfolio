import React from "react";
import { motion } from "framer-motion";
import { varWrapBoth } from "../../utilities";
import { useSelector } from "react-redux";
import { UserItem } from ".";

function UserList() {
  const users = useSelector((state) => state.users.users);

  if (users.length === 0) return null;

  const sortList = users.sort((a, b) => {
    if (a.email.toLowerCase() < b.email.toLowerCase()) return -1;
    if (a.email.toLowerCase() > b.email.toLowerCase()) return 1;
    return 0;
  });

  return (
    <motion.div variants={varWrapBoth}>
      {sortList.map((item, index) => (
        <UserItem key={index} item={item} />
      ))}
    </motion.div>
  );
}

export default UserList;
