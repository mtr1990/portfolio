import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Fab,
  Grid,
  Icon,
  Button,
  Typography,
  IconButton,
  makeStyles,
  ButtonGroup,
} from "@material-ui/core";
import {
  Add,
  Edit,
  Save,
  Alarm,
  Delete,
  Favorite,
  Navigation,
  CloudUpload,
  PhotoCamera,
  ArrowDownward,
  KeyboardVoice,
  AddShoppingCart,
} from "@material-ui/icons";
import {
  MoreFab,
  MoreBtnText,
  MoreIconButton,
  MoreBtnOutlined,
  MoreBtnContained,
  MoreBtnGroupText,
  MoreBtnGroupOutlined,
  MoreBtnGroupContained,
} from "../theme/@material-ui-custom";
import { GlLayout, GlBlock } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& button,& label,& a": {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    "& .MuiButtonGroup-root": {
      marginBottom: theme.spacing(2),
      "& button,& a": {
        marginRight: 0,
        marginBottom: 0,
      },
    },
  },
}));

const GlButtons = () => {
  const classes = useStyles();
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <GlLayout heading="Buttons">
        <Box className={classes.root}>
          {/********** CONTAINED BUTTONS ***********/}
          <GlBlock>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Contained Buttons
            </Typography>

            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <MoreBtnContained>Default</MoreBtnContained>
            <MoreBtnContained status="info" disabled>
              Info
            </MoreBtnContained>
            <MoreBtnContained status="success">Success</MoreBtnContained>
            <MoreBtnContained status="warning">Warning</MoreBtnContained>
            <MoreBtnContained status="error">Error</MoreBtnContained>

            <Button variant="contained" color="primary" disabled>
              Disabled
            </Button>
            <Button variant="contained" color="primary" href="">
              Link
            </Button>
          </GlBlock>

          {/********** OUTLINED BUTTONS ***********/}
          <GlBlock>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Outlined Buttons
            </Typography>

            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <MoreBtnOutlined>Default</MoreBtnOutlined>
            <MoreBtnOutlined status="info">Info</MoreBtnOutlined>
            <MoreBtnOutlined status="success">Success</MoreBtnOutlined>
            <MoreBtnOutlined status="warning">Warning</MoreBtnOutlined>
            <MoreBtnOutlined status="error">Error</MoreBtnOutlined>
            <Button variant="outlined" color="primary" disabled>
              Disabled
            </Button>
            <Button variant="outlined" color="primary" href="">
              Link
            </Button>
          </GlBlock>

          {/********** TEXT BUTTONS ***********/}
          <GlBlock>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Text Buttons
            </Typography>

            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <MoreBtnText>Default</MoreBtnText>
            <MoreBtnText status="info">Info</MoreBtnText>
            <MoreBtnText status="success">Success</MoreBtnText>
            <MoreBtnText status="warning">Warning</MoreBtnText>
            <MoreBtnText status="error">Error</MoreBtnText>
            <Button color="primary" disabled>
              Disabled
            </Button>
            <Button color="primary" href="">
              Link
            </Button>
          </GlBlock>

          {/********** GROUPED BUTTONS ***********/}
          <GlBlock>
            <Grid container>
              <Grid item xs={12} lg={3}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  Grouped Buttons
                </Typography>

                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="contained primary button group"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup
                  variant="text"
                  color="primary"
                  aria-label="text primary button group"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Grid>

              <Grid item xs={12} lg={3}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  Group sizes and colors
                </Typography>
                <ButtonGroup
                  size="small"
                  color="primary"
                  aria-label="small outlined button group"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup
                  color="secondary"
                  aria-label="outlined secondary button group"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup
                  size="large"
                  color="primary"
                  aria-label="large outlined primary button group"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Grid>

              <Grid item xs={12} lg={3}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  Grouped orientation
                </Typography>

                <ButtonGroup
                  orientation="vertical"
                  color="primary"
                  aria-label="vertical outlined primary button group"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Grid>

              <Grid item xs={12} lg={3}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  Colors
                </Typography>

                <MoreBtnGroupContained aria-label="outlined primary button group">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </MoreBtnGroupContained>
                <br />

                <MoreBtnGroupOutlined
                  status="success"
                  aria-label="outlined primary button group"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </MoreBtnGroupOutlined>
                <br />

                <MoreBtnGroupText
                  status="warning"
                  aria-label="outlined primary button group"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </MoreBtnGroupText>
                <br />
                {/* / */}
              </Grid>
            </Grid>
          </GlBlock>

          {/********** FLOATING ACTION BUTTONS ***********/}
          <GlBlock>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Floating Action Buttons
            </Typography>
            <MoreFab aria-label="add">
              <Add />
            </MoreFab>
            <Fab color="primary" aria-label="add">
              <Add />
            </Fab>
            <Fab color="secondary" aria-label="edit">
              <Edit fontSize="small" />
            </Fab>
            <MoreFab status="info" aria-label="edit">
              <Edit fontSize="small" />
            </MoreFab>
            <MoreFab status="success" aria-label="edit">
              <Edit fontSize="small" />
            </MoreFab>
            <MoreFab status="warning" aria-label="edit">
              <Edit fontSize="small" />
            </MoreFab>
            <MoreFab status="error" aria-label="edit">
              <Edit fontSize="small" />
            </MoreFab>
            <MoreFab variant="extended">
              <Navigation />
              Navigate
            </MoreFab>
            <Fab disabled aria-label="like" color="primary">
              <Favorite />
            </Fab>
          </GlBlock>

          {/********** UPLOAD BUTTON ***********/}
          <GlBlock>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Upload button
            </Typography>

            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="text-button-file"
              multiple
              type="file"
            />
            <label htmlFor="text-button-file">
              <Button color="primary" component="span">
                Upload
              </Button>
            </label>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="outlined-button-file"
              multiple
              type="file"
            />
            <label htmlFor="outlined-button-file">
              <Button color="primary" variant="outlined" component="span">
                Upload
              </Button>
            </label>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </GlBlock>

          {/********** SIZES ***********/}
          <GlBlock>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Sizes
            </Typography>

            <Grid container>
              <Grid item xs={6}>
                <div>
                  <Button color="primary" size="small">
                    Small
                  </Button>
                  <Button color="primary" size="medium">
                    Medium
                  </Button>
                  <Button color="primary" size="large">
                    Large
                  </Button>
                </div>
                <div>
                  <Button variant="outlined" size="small" color="primary">
                    Small
                  </Button>
                  <Button variant="outlined" size="medium" color="primary">
                    Medium
                  </Button>
                  <Button variant="outlined" size="large" color="primary">
                    Large
                  </Button>
                </div>
                <div>
                  <Button variant="contained" size="small" color="primary">
                    Small
                  </Button>
                  <Button variant="contained" size="medium" color="primary">
                    Medium
                  </Button>
                  <Button variant="contained" size="large" color="primary">
                    Large
                  </Button>
                </div>
              </Grid>

              <Grid item xs={6}>
                <div>
                  <Fab size="small" color="secondary" aria-label="add">
                    <Add />
                  </Fab>
                  <Fab size="medium" color="secondary" aria-label="add">
                    <Add />
                  </Fab>
                  <Fab color="secondary" aria-label="add">
                    <Add />
                  </Fab>
                </div>
                <div>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                  >
                    <Navigation />
                    Extended
                  </Fab>
                  <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="add"
                  >
                    <Navigation />
                    Extended
                  </Fab>
                  <Fab variant="extended" color="primary" aria-label="add">
                    <Navigation />
                    Extended
                  </Fab>
                </div>
                <div>
                  <IconButton aria-label="delete" size="small">
                    <ArrowDownward fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <Delete fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <Delete fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <Delete fontSize="large" />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </GlBlock>

          {/********** BUTTONS WITH ICONS AND LABEL ***********/}
          <GlBlock>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Buttons with icons and label
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<Delete fontSize="small" />}
            >
              Delete
            </Button>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
            <Button
              variant="contained"
              color="primary"
              endIcon={<Icon>send</Icon>}
            >
              Send
            </Button>
            <MoreBtnContained startIcon={<CloudUpload />}>
              Upload
            </MoreBtnContained>
            <Button
              variant="contained"
              disabled
              color="secondary"
              startIcon={<KeyboardVoice />}
            >
              Talk
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<Save />}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Save />}
            >
              Save
            </Button>
          </GlBlock>

          {/********** BUTTON ICON ***********/}
          <GlBlock>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Icon Buttons
            </Typography>
            <IconButton aria-label="delete">
              <Delete fontSize="small" />
            </IconButton>
            <IconButton color="primary" aria-label="add an alarm">
              <Alarm />
            </IconButton>
            <IconButton color="secondary" aria-label="add to shopping cart">
              <AddShoppingCart />
            </IconButton>
            <IconButton disabled color="primary" aria-label="add an alarm">
              <Alarm />
            </IconButton>
            <MoreIconButton status="info" aria-label="add to shopping cart">
              <AddShoppingCart />
            </MoreIconButton>
            <MoreIconButton status="success" aria-label="add to shopping cart">
              <AddShoppingCart />
            </MoreIconButton>
            <MoreIconButton status="warning" aria-label="add to shopping cart">
              <AddShoppingCart />
            </MoreIconButton>
            <MoreIconButton status="error" aria-label="add to shopping cart">
              <AddShoppingCart />
            </MoreIconButton>
          </GlBlock>
        </Box>
      </GlLayout>
    </motion.div>
  );
};

export default GlButtons;
