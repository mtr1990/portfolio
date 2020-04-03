import React from "react";
import PropTypes from "prop-types";
import { Box, Hidden, Drawer, makeStyles, useTheme } from "@material-ui/core";
import { GlMenuList, GlAppBar } from "..";
import { BtnDarkMode } from "../../commons";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	drawer: {
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	drawerPaper: {
		backgroundColor: theme.palette.background.default,
		width: drawerWidth
	},
	appBar: {
		[theme.breakpoints.up("md")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			display: "none"
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	content: {
		paddingTop: theme.spacing(16),
		paddingBottom: theme.spacing(16),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(8)
		}
	}
}));

function GlLayout(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = <GlMenuList />;

	return (
		<div className={classes.root}>
			{/********** Layout AppBar ***********/}
			<GlAppBar
				appBar={classes.appBar}
				menuButton={classes.menuButton}
				handleDrawerToggle={handleDrawerToggle}
			/>

			{/********** Layout Nav ***********/}
			<nav className={classes.drawer} aria-label="mailbox folders">
				<Hidden mdUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>

				<Hidden smDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>

			<BtnDarkMode />

			{/********** Layout Content ***********/}
			<Box className={classes.content}>{props.children}</Box>
		</div>
	);
}

GlLayout.propTypes = {
	container: PropTypes.instanceOf(
		typeof Element === "undefined" ? Object : Element
	)
};

export default GlLayout;
