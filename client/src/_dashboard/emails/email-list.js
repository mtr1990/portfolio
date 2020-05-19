import React from "react";
import { motion } from "framer-motion";
import { varWrapBoth } from "../../utilities";
import { useSelector } from "react-redux";
import { EmailItem } from ".";

function EmailList() {
  const emails = useSelector((state) => state.emails.emails);
  if (!emails.length) return null;

  return (
    <motion.div variants={varWrapBoth}>
      {emails.map((item) => (
        <EmailItem key={item._id} item={item} />
      ))}
    </motion.div>
  );
}

export default EmailList;
