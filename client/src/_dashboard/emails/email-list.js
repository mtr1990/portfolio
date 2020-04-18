import React from "react";
import { motion } from "framer-motion";
import { varWrapBoth } from "../../utilities";
import { EmailItem } from "..";

const EmailList = ({ stateEmail, deleteEmail }) => {
  if (!stateEmail.length) return null;

  return (
    <motion.div variants={varWrapBoth}>
      {stateEmail.map((item, index) => (
        <EmailItem key={index} item={item} deleteEmail={deleteEmail} />
      ))}
    </motion.div>
  );
};

export default EmailList;
