import React from "react";
import { EmailItem } from "..";

const EmailList = ({ stateEmail, deleteEmail }) => {
  if (!stateEmail.length) return null;

  return stateEmail.map((item, index) => (
    <EmailItem key={index} item={item} deleteEmail={deleteEmail} />
  ));
};

export default EmailList;
