import React from "react";
import { Logo } from "./";
import { Container, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	position: {
		position: "absolute",
		top: theme.spacing(8),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			top: theme.spacing(12)
		}
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<Box className={classes.position}>
			<Container>
				<Logo />
			</Container>
		</Box>
	);
};

export default Header;
