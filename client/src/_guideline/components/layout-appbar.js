import React from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const GlAppBar = ({ handleDrawerToggle, appBar, menuButton }) => (
	<AppBar position="fixed" className={appBar}>
		<Toolbar>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={handleDrawerToggle}
				className={menuButton}
			>
				<MenuIcon />
			</IconButton>
		</Toolbar>
	</AppBar>
);

export default GlAppBar;
