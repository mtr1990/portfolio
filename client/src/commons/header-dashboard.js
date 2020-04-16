import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  Box,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  fade,
} from "@material-ui/core";
import {
  Category,
  PermMedia,
  SupervisorAccount,
  Drafts,
} from "@material-ui/icons";
import { API, path_DASHBOARD } from "../configs";
import { Logo, BtnLogout } from ".";

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

const HeaderDashboard = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [emails, setEmails] = useState([]);
  const isCancelled = useRef(false);
  // GET DATA

  useEffect(() => {
    const getData = async () => {
      let URL1 = `projects`;
      let URL2 = `users`;
      let URL3 = `categories`;
      let URL4 = `emails`;
      const promise1 = API.get(URL1);
      const promise2 = API.get(URL2);
      const promise3 = API.get(URL3);
      const promise4 = API.get(URL4);
      Promise.all([promise1, promise2, promise3, promise4]).then((res) => {
        if (!isCancelled.current) {
          setProjects(res[0].data);
          setUsers(res[1].data);
          setCategories(res[2].data);
          setEmails(res[3].data);
        }
      });
    };
    getData();
    return () => {
      isCancelled.current = true;
    };
  }, []);

  return (
    <Box className={classes.root}>
      <Container>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Link to={path_DASHBOARD.root} style={{ display: "inline-block" }}>
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
                Projects({projects.length})
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
                Users({users.length})
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
                Categories({categories.length})
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
                Emails({emails.length})
              </ListItemText>
            </ListItem>
          </List>

          <BtnLogout />
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderDashboard;
