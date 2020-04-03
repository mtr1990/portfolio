import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Logo } from "../../commons";
import {
	Box,
	List,
	ListItem,
	makeStyles,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";
import {
	ColorLens as ColorLensIcon,
	RadioButtonChecked as RadioButtonCheckedIcon,
	VerticalSplit as VerticalSplitIcon,
	TextFormat as TextFormatIcon
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	root: {
		color: theme.palette.text.secondary,
		"& > .MuiListItemIcon-root": {
			color: theme.palette.text.secondary
		}
	},
	selected: {
		backgroundColor: theme.palette.background.block,
		color: theme.palette.primary.main,
		"& > .MuiListItemIcon-root": {
			color: theme.palette.primary.main
		}
	}
}));

const GlMenuList = ({ location: { pathname } }) => {
	const classes = useStyles();
	return (
		<>
			<Box px={2} py={4}>
				<Logo />
			</Box>

			<List>
				{/********** Color Palettes ***********/}
				<ListItem
					classes={{
						root: classes.root,
						selected: classes.selected
					}}
					component={Link}
					to="/guideline"
					selected={"/guideline" === pathname}
				>
					<ListItemIcon>
						<ColorLensIcon />
					</ListItemIcon>
					<ListItemText> Color Palettes</ListItemText>
				</ListItem>

				{/********** Typography ***********/}
				<ListItem
					classes={{
						root: classes.root,
						selected: classes.selected
					}}
					component={Link}
					to="/guideline/typography"
					selected={"/guideline/typography" === pathname}
				>
					<ListItemIcon>
						<TextFormatIcon />
					</ListItemIcon>
					<ListItemText>Typography</ListItemText>
				</ListItem>

				{/********** Buttons ***********/}
				<ListItem
					classes={{
						root: classes.root,
						selected: classes.selected
					}}
					component={Link}
					to="/guideline/buttons"
					selected={"/guideline/buttons" === pathname}
				>
					<ListItemIcon>
						<RadioButtonCheckedIcon />
					</ListItemIcon>
					<ListItemText>Buttons</ListItemText>
				</ListItem>

				{/********** Forms ***********/}
				<ListItem
					classes={{
						root: classes.root,
						selected: classes.selected
					}}
					component={Link}
					to="/guideline/forms"
					selected={"/guideline/forms" === pathname}
				>
					<ListItemIcon>
						<VerticalSplitIcon />
					</ListItemIcon>
					<ListItemText>Forms</ListItemText>
				</ListItem>

				{/********** Toast ***********/}
				<ListItem
					classes={{
						root: classes.root,
						selected: classes.selected
					}}
					component={Link}
					to="/guideline/toast"
					selected={"/guideline/toast" === pathname}
				>
					<ListItemIcon>
						<VerticalSplitIcon />
					</ListItemIcon>
					<ListItemText>Toast</ListItemText>
				</ListItem>

				{/********** Shadows ***********/}
				<ListItem
					classes={{
						root: classes.root,
						selected: classes.selected
					}}
					component={Link}
					to="/guideline/shadows"
					selected={"/guideline/shadows" === pathname}
				>
					<ListItemIcon>
						<VerticalSplitIcon />
					</ListItemIcon>
					<ListItemText>Shadows</ListItemText>
				</ListItem>
			</List>
		</>
	);
};

export default withRouter(GlMenuList);
