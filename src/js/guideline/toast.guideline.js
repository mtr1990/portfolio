import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { GlLayout } from ".";
import {
	MsgDelete,
	MsgInfo,
	MsgSuccess,
	MsgWarning,
	MsgError
} from "../commons";

const GlToast = () => (
	<motion.div initial="initial" animate="enter" exit="exit">
		<GlLayout>
			<Typography variant="h2" color="textSecondary" gutterBottom>
				Toast
			</Typography>

			<MsgInfo txtMsg="Added Success!" />
			<br />
			<MsgSuccess txtMsg="Added Success!" />
			<br />
			<MsgWarning txtMsg="Added Success!" />
			<br />
			<MsgError txtMsg="Added Success!" />
			<br />
			<MsgDelete />
		</GlLayout>
	</motion.div>
);

export default GlToast;
