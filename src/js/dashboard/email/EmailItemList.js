import React from "react";
import { motion } from "framer-motion";
import { varfadeInUp } from "../../utils";
import { EmailItem } from "./";

const EmailItemList = ({ staEmail, delEmail }) =>
	staEmail.map(email => (
		<motion.div key={email.id} variants={varfadeInUp}>
			<EmailItem item={email} delItem={() => delEmail(email.id)} />
		</motion.div>
	));

export default EmailItemList;
