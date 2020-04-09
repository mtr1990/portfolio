import React from "react";
import { motion } from "framer-motion";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import { GlLayout, GlBlock } from ".";

const useStyles = makeStyles((theme) => ({
  color: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(1),
    display: "inline-block",
    borderRadius: theme.shape.borderRadius,
    boxShadow: "inset 0px 0px 4px 0px rgba(0,0,0,0.48)",
    "&:last-child": {
      marginRight: 0,
    },
  },
  space: {
    marginBottom: theme.spacing(4),
  },
  primary_light: { backgroundColor: theme.palette.primary.light },
  primary_main: { backgroundColor: theme.palette.primary.main },
  primary_dark: { backgroundColor: theme.palette.primary.dark },

  secondary_light: { backgroundColor: theme.palette.secondary.light },
  secondary_main: { backgroundColor: theme.palette.secondary.main },
  secondary_dark: { backgroundColor: theme.palette.secondary.dark },

  info_light: { backgroundColor: theme.palette.info.light },
  info_main: { backgroundColor: theme.palette.info.main },
  info_dark: { backgroundColor: theme.palette.info.dark },

  success_light: { backgroundColor: theme.palette.success.light },
  success_main: { backgroundColor: theme.palette.success.main },
  success_dark: { backgroundColor: theme.palette.success.dark },

  warning_light: { backgroundColor: theme.palette.warning.light },
  warning_main: { backgroundColor: theme.palette.warning.main },
  warning_dark: { backgroundColor: theme.palette.warning.dark },

  error_light: { backgroundColor: theme.palette.error.light },
  error_main: { backgroundColor: theme.palette.error.main },
  error_dark: { backgroundColor: theme.palette.error.dark },

  contrast_lower: { backgroundColor: theme.palette.contrast.lower },
  contrast_low: { backgroundColor: theme.palette.contrast.low },
  contrast_medium: { backgroundColor: theme.palette.contrast.medium },
  contrast_high: { backgroundColor: theme.palette.contrast.high },
  contrast_higher: { backgroundColor: theme.palette.contrast.higher },
}));

const GlColorPalettes = () => {
  const classes = useStyles();
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <GlLayout>
        <Typography variant="h2" color="textSecondary" gutterBottom>
          Color Palettes
        </Typography>

        <GlBlock>
          <Grid container>
            {/********** Primary ***********/}
            <Grid item xs={12} sm={6} lg={4}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                Primary
              </Typography>
              <Box className={classes.space}>
                <Box className={classes.space}>
                  <Box
                    className={classes.color}
                    classes={{
                      root: classes.primary_light,
                    }}
                  />
                  <Box
                    className={classes.color}
                    classes={{ root: classes.primary_main }}
                  />
                  <Box
                    className={classes.color}
                    classes={{ root: classes.primary_dark }}
                  />
                </Box>
              </Box>
            </Grid>

            {/********** Accent ***********/}
            <Grid item xs={12} sm={6} lg={4}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                Accent
              </Typography>
              <Box className={classes.space}>
                <Box
                  className={classes.color}
                  classes={{ root: classes.secondary_light }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.secondary_main }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.secondary_dark }}
                />
              </Box>
            </Grid>

            {/********** Info ***********/}
            <Grid item xs={12} sm={6} lg={4}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                Info
              </Typography>
              <Box className={classes.space}>
                <Box
                  className={classes.color}
                  classes={{ root: classes.info_light }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.info_main }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.info_dark }}
                />
              </Box>
            </Grid>

            {/********** Success ***********/}
            <Grid item xs={12} sm={6} lg={4}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                Success
              </Typography>

              <Box className={classes.space}>
                <Box
                  className={classes.color}
                  classes={{ root: classes.success_light }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.success_main }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.success_dark }}
                />
              </Box>
            </Grid>

            {/********** Warning ***********/}
            <Grid item xs={12} sm={6} lg={4}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                Warning
              </Typography>
              <Box className={classes.space}>
                <Box
                  className={classes.color}
                  classes={{ root: classes.warning_light }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.warning_main }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.warning_dark }}
                />
              </Box>
            </Grid>

            {/********** Error ***********/}
            <Grid item xs={12} sm={6} lg={4}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                Error
              </Typography>
              <Box className={classes.space}>
                <Box
                  className={classes.color}
                  classes={{ root: classes.error_light }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.error_main }}
                />
                <Box
                  className={classes.color}
                  classes={{ root: classes.error_dark }}
                />
              </Box>
            </Grid>

            {/********** Contrast ***********/}
            <Grid item xs={12} sm={6} lg={4}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                Contrast
              </Typography>
              <Box className={classes.space}>
                <Box className={`${classes.color} ${classes.contrast_lower}`} />
                <Box className={`${classes.color} ${classes.contrast_low}`} />
                <Box
                  className={`${classes.color} ${classes.contrast_medium}`}
                />
                <Box className={`${classes.color} ${classes.contrast_high}`} />
                <Box
                  className={`${classes.color} ${classes.contrast_higher}`}
                />
              </Box>
            </Grid>
          </Grid>
        </GlBlock>
      </GlLayout>
    </motion.div>
  );
};

export default GlColorPalettes;
