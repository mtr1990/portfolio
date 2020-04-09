import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Logo } from "../../commons";
import {
  Box,
  List,
  ListItem,
  makeStyles,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  ColorLens,
  RadioButtonChecked,
  VerticalSplit,
  TextFormat,
  BlurOn,
  TabUnselected,
} from "@material-ui/icons";

import { path_GUIDELINE } from "../../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "& > .MuiListItemIcon-root": {
      color: theme.palette.text.secondary,
    },
  },
  selected: {
    backgroundColor: theme.palette.background.card,
    color: theme.palette.primary.main,
    "& > .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
  },
}));

const GlMenuList = ({ location: { pathname } }) => {
  const classes = useStyles();
  return (
    <>
      <Box px={2} py={4}>
        <Link to="/">
          <Logo />
        </Link>
      </Box>

      <List>
        {/********** Color Palettes ***********/}
        <ListItem
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          component={Link}
          to={path_GUIDELINE.root}
          selected={path_GUIDELINE.root === pathname}
        >
          <ListItemIcon>
            <ColorLens />
          </ListItemIcon>
          <ListItemText> Color Palettes</ListItemText>
        </ListItem>

        {/********** Typography ***********/}
        <ListItem
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          component={Link}
          to={path_GUIDELINE.typography}
          selected={path_GUIDELINE.typography === pathname}
        >
          <ListItemIcon>
            <TextFormat />
          </ListItemIcon>
          <ListItemText>Typography</ListItemText>
        </ListItem>

        {/********** Buttons ***********/}
        <ListItem
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          component={Link}
          to={path_GUIDELINE.buttons}
          selected={path_GUIDELINE.buttons === pathname}
        >
          <ListItemIcon>
            <RadioButtonChecked />
          </ListItemIcon>
          <ListItemText>Buttons</ListItemText>
        </ListItem>

        {/********** Forms ***********/}
        <ListItem
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          component={Link}
          to={path_GUIDELINE.forms}
          selected={path_GUIDELINE.forms === pathname}
        >
          <ListItemIcon>
            <VerticalSplit />
          </ListItemIcon>
          <ListItemText>Forms</ListItemText>
        </ListItem>

        {/********** Toast ***********/}
        <ListItem
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          component={Link}
          to={path_GUIDELINE.toast}
          selected={path_GUIDELINE.toast === pathname}
        >
          <ListItemIcon>
            <TabUnselected />
          </ListItemIcon>
          <ListItemText>Toast</ListItemText>
        </ListItem>

        {/********** Shadows ***********/}
        <ListItem
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          component={Link}
          to={path_GUIDELINE.shadows}
          selected={path_GUIDELINE.shadows === pathname}
        >
          <ListItemIcon>
            <BlurOn />
          </ListItemIcon>
          <ListItemText>Shadows</ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default withRouter(GlMenuList);
