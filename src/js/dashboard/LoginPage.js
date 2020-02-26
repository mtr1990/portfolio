import React from "react";
import { motion } from "framer-motion";
import { LoginHandle } from "./login";
import { varWrapBoth, varfadeInUp } from "../utils";
import { bgLogin } from "../../assets";
import {
	Container,
	Grid,
	Box,
	Typography,
	makeStyles
} from "@material-ui/core";
import { Header } from "../common";

const useStyles = makeStyles(theme => ({
	root: {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundImage: `
		linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
		url(${bgLogin})`,
		backgroundSize: "cover",
		backgroundPosition: "center center"
	}
}));

const LoginPage = () => {
	const classes = useStyles();
	return (
		<motion.div
			initial="initial"
			animate="enter"
			exit="exit"
			variants={varWrapBoth}
		>
			<Header />
			<Box className={classes.root}>
				<Container>
					<Box mt={-20}>
						<Grid container justify="center">
							<Grid item xs={12} sm={8} md={4}>
								<motion.div variants={varfadeInUp}>
									<Typography
										variant="h1"
										color="inherit"
										gutterBottom
									>
										Login
									</Typography>
								</motion.div>

								{/********** Login Handle ***********/}
								<LoginHandle />
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</motion.div>
	);
};

export default LoginPage;
