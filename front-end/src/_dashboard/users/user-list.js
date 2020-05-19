import React from "react";
import { motion } from "framer-motion";
import { varWrapBoth } from "../../utilities";
import { useSelector } from "react-redux";
import { UserItem } from ".";

function UserList() {
  const users = useSelector((state) => state.users.users);

  if (!users.length) return null;

  const List = [...users]
    .sort((a, b) => a.email.localeCompare(b.email))
    .map((item, index) => <UserItem key={index} item={item} />);

  return <motion.div variants={varWrapBoth}>{List}</motion.div>;
}

export default UserList;
