import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  List,
  fade,
  ListItem,
  Container,
  makeStyles,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Drafts,
  Category,
  PermMedia,
  SupervisorAccount,
} from "@material-ui/icons";
import { path_DASHBOARD } from "../configs";
import { Logo, BtnLogout, BtnLightMode } from ".";
// import { useSelector, useDispatch } from "react-redux";
// import { getUsers, getProjects, getCategories, getEmails } from "../redux";

function HeaderDashboard(props) {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const { pathname } = useLocation();

  // const projects = useSelector((state) => state.projects.projects);
  // const users = useSelector((state) => state.users.users);
  // const categories = useSelector((state) => state.categories.categories);
  // const emails = useSelector((state) => state.emails.emails);

  // const getProjectsCallback = useCallback(() => {
  //   batch(() => {
  //     dispatch(getProjects());
  //   });
  // }, [dispatch]);

  // const getCategoriesCallback = useCallback(() => {
  //   batch(() => {
  //     dispatch(getCategories());
  //   });
  // }, [dispatch]);

  // const getUsersCallback = useCallback(() => {
  //   batch(() => {
  //     dispatch(getUsers());
  //   });
  // }, [dispatch]);

  // const getEmailsCallback = useCallback(() => {
  //   batch(() => {
  //     dispatch(getEmails());
  //   });
  // }, [dispatch]);

  // GET DATA
  // useEffect(() => {
  //   dispatch(getProjects());
  //   dispatch(getCategories());
  //   dispatch(getUsers());
  //   dispatch(getEmails());
  // }, [dispatch]);

  return (
    <>
      {/********** BTN DARKMODE ***********/}
      <BtnLightMode />

      <Box className={classes.root}>
        <Container>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>
              <Link
                to={path_DASHBOARD.root}
                style={{ display: "inline-block" }}
              >
                <Logo />
              </Link>
            </Box>

            <List className={classes.menu_list}>
              {/********** PROJECTS ***********/}
              <ListItem
                classes={{
                  root: classes.menu_item,
                  selected: classes.menu_selected,
                }}
                component={Link}
                to={path_DASHBOARD.root}
                selected={path_DASHBOARD.root === pathname}
              >
                <ListItemIcon className={classes.menu_icon}>
                  <PermMedia fontSize="small" />
                </ListItemIcon>
                <ListItemText className={classes.menu_text}>
                  {/* Projects({projects.length}) */}
                  Projects
                </ListItemText>
              </ListItem>

              {/********** USERS ***********/}
              <ListItem
                classes={{
                  root: classes.menu_item,
                  selected: classes.menu_selected,
                }}
                component={Link}
                to={path_DASHBOARD.users.root}
                selected={path_DASHBOARD.users.root === pathname}
              >
                <ListItemIcon className={classes.menu_icon}>
                  <SupervisorAccount fontSize="small" />
                </ListItemIcon>
                <ListItemText className={classes.menu_text}>
                  {/* Users({users.length}) */}
                  Users
                </ListItemText>
              </ListItem>

              {/********** CATEGORIES ***********/}
              <ListItem
                classes={{
                  root: classes.menu_item,
                  selected: classes.menu_selected,
                }}
                component={Link}
                to={path_DASHBOARD.categories.root}
                selected={path_DASHBOARD.categories.root === pathname}
              >
                <ListItemIcon className={classes.menu_icon}>
                  <Category fontSize="small" />
                </ListItemIcon>
                <ListItemText className={classes.menu_text}>
                  {/* Categories({categories.length}) */}
                  Categories
                </ListItemText>
              </ListItem>

              {/********** EMAILS ***********/}
              <ListItem
                classes={{
                  root: classes.menu_item,
                  selected: classes.menu_selected,
                }}
                component={Link}
                to={path_DASHBOARD.emails}
                selected={path_DASHBOARD.emails === pathname}
              >
                <ListItemIcon className={classes.menu_icon}>
                  <Drafts fontSize="small" />
                </ListItemIcon>
                <ListItemText className={classes.menu_text}>
                  {/* Emails({emails.length}) */}
                  Emails
                </ListItemText>
              </ListItem>
            </List>

            <BtnLogout />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HeaderDashboard;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(2.5)}px 0`,
    marginBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[25].card.root,
  },
  // MENU
  menu_list: {
    padding: 0,
    display: "flex",
  },
  menu_item: {
    padding: `0 ${theme.spacing(1.5)}px`,
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
  },
  menu_icon: {
    minWidth: 0,
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
