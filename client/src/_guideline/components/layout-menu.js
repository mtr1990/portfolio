import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../commons";
import {
  Box,
  List,
  ListItem,
  makeStyles,
  ListItemIcon,
  ListItemText,
  fade,
} from "@material-ui/core";
import {
  ColorLens,
  RadioButtonChecked,
  VerticalSplit,
  TextFormat,
  BlurOn,
  TabUnselected,
} from "@material-ui/icons";

import { path_GUIDELINE } from "../../configs";

const useStyles = makeStyles((theme) => ({
  // MENU
  menu_list: {
    padding: 0,
  },
  menu_item: {
    color: theme.palette.text.secondary,
  },
  menu_icon: {
    marginRight: theme.spacing(1),
    color: "inherit",
  },
  menu_text: {
    "& span": {
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
    },
  },
  menu_selected: {
    color: theme.palette.primary.main,
    backgroundColor: `${fade(theme.palette.primary.main, 0.08)} !important`,
  },
}));

const GlMenuList = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <>
      <Box px={2} py={4}>
        <Link to="/">
          <Logo />
        </Link>
      </Box>

      <List className={classes.menu_list}>
        {/********** COLOR PALETTES ***********/}
        <ListItem
          classes={{
            root: classes.menu_item,
            selected: classes.menu_selected,
          }}
          component={Link}
          to={path_GUIDELINE.root}
          selected={path_GUIDELINE.root === pathname}
        >
          <ListItemIcon className={classes.menu_icon}>
            <ColorLens />
          </ListItemIcon>
          <ListItemText className={classes.menu_text}>
            Color Palettes
          </ListItemText>
        </ListItem>

        {/********** TYPOGRAPHY ***********/}
        <ListItem
          classes={{
            root: classes.menu_item,
            selected: classes.menu_selected,
          }}
          component={Link}
          to={path_GUIDELINE.typography}
          selected={path_GUIDELINE.typography === pathname}
        >
          <ListItemIcon className={classes.menu_icon}>
            <TextFormat />
          </ListItemIcon>
          <ListItemText className={classes.menu_text}>Typography</ListItemText>
        </ListItem>

        {/********** BUTTONS ***********/}
        <ListItem
          classes={{
            root: classes.menu_item,
            selected: classes.menu_selected,
          }}
          component={Link}
          to={path_GUIDELINE.buttons}
          selected={path_GUIDELINE.buttons === pathname}
        >
          <ListItemIcon className={classes.menu_icon}>
            <RadioButtonChecked />
          </ListItemIcon>
          <ListItemText className={classes.menu_text}>Buttons</ListItemText>
        </ListItem>

        {/********** FORMS ***********/}
        <ListItem
          classes={{
            root: classes.menu_item,
            selected: classes.menu_selected,
          }}
          component={Link}
          to={path_GUIDELINE.forms}
          selected={path_GUIDELINE.forms === pathname}
        >
          <ListItemIcon className={classes.menu_icon}>
            <VerticalSplit />
          </ListItemIcon>
          <ListItemText className={classes.menu_text}>Forms</ListItemText>
        </ListItem>

        {/********** TOAST ***********/}
        <ListItem
          classes={{
            root: classes.menu_item,
            selected: classes.menu_selected,
          }}
          component={Link}
          to={path_GUIDELINE.toast}
          selected={path_GUIDELINE.toast === pathname}
        >
          <ListItemIcon className={classes.menu_icon}>
            <TabUnselected />
          </ListItemIcon>
          <ListItemText className={classes.menu_text}>Snackbar</ListItemText>
        </ListItem>

        {/********** SHADOWS ***********/}
        <ListItem
          classes={{
            root: classes.menu_item,
            selected: classes.menu_selected,
          }}
          component={Link}
          to={path_GUIDELINE.shadows}
          selected={path_GUIDELINE.shadows === pathname}
        >
          <ListItemIcon className={classes.menu_icon}>
            <BlurOn />
          </ListItemIcon>
          <ListItemText className={classes.menu_text}>Shadows</ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default GlMenuList;
