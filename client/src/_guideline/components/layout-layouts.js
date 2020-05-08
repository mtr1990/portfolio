import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Hidden,
  Drawer,
  makeStyles,
  useTheme,
  Typography,
} from "@material-ui/core";
import { BtnDarkMode } from "../../commons";
import { GlMenuList, GlAppBar } from ".";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(30),
      flexShrink: 0,
    },
  },
  drawerPaper: {
    backgroundColor: theme.palette.background.default,
    borderRight: "none",
    width: theme.spacing(30),
    boxShadow: theme.shadows[25].drawer,
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${theme.spacing(30)}px)`,
      marginLeft: theme.spacing(30),
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  content: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8),
    },
  },
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
    <>
      <Box className={classes.root}>
        {/********** LAYOUT APPBAR ***********/}
        <GlAppBar
          appBar={classes.appBar}
          menuButton={classes.menuButton}
          handleDrawerToggle={handleDrawerToggle}
        />

        {/********** LAYOUT NAV ***********/}
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden mdUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        {/********** LAYOUT CONTENT ***********/}
        <Box className={classes.content}>
          <Box mb={8}>
            <Typography variant="h3" color="textSecondary">
              {props.heading}
            </Typography>
          </Box>
          {props.children}
        </Box>
      </Box>

      {/********** BTN DARKMODE ***********/}
      <BtnDarkMode />
    </>
  );
}

GlLayout.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default GlLayout;
