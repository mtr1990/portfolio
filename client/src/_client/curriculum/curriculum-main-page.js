import React from "react";
import { Grid, Box, makeStyles, Typography } from "@material-ui/core";
import { ReactSVG } from "react-svg";
import { useWidth } from "../../theme/@material-ui-custom";
import {
  education,
  experience,
  design_icon,
  technical_code,
  technical_icon,
  personal_skills,
  technical_design,
} from ".";
import { iDesign, iTechnical } from "../../assets";

function CurriculumMain() {
  const classes = useStyles();
  const width = useWidth();

  const eduList = (data) => {
    return data.map((item, index) => (
      <Box key={index} className={classes.edu_item}>
        <Box className={classes.edu_date}>
          <Box fontWeight={width === "xs" ? 400 : 500}>{item.date_end}</Box>
          <Box color={width === "xs" ? "text.primary" : "text.secondary"}>
            {item.date_start}
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle1">{item.title}</Typography>
          <Typography color="textSecondary">{item.description}</Typography>
        </Box>
      </Box>
    ));
  };

  const personalList = (
    <Grid container spacing={2}>
      {personal_skills.map((item, index) => {
        return (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box className={classes.skill_box}>{item}</Box>
          </Grid>
        );
      })}
    </Grid>
  );

  const designList = (
    <Grid container>
      <Grid item xs={12} sm={6}>
        {technical_design.slice(0, 3).map((item, index) => {
          return (
            <Box key={index} className={classes.skill_item}>
              <Box>
                <Typography variant="subtitle2">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Grid>

      <Grid item xs={12} sm={6}>
        {technical_design.slice(-2).map((item, index) => {
          return (
            <Box key={index} className={classes.skill_item}>
              <Box>
                <Typography variant="subtitle2">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );

  const codingList = (
    <Grid container>
      <Grid item xs={12} sm={6}>
        {technical_code.slice(0, 3).map((item, index) => {
          return (
            <Box key={index} className={classes.skill_item}>
              <Box>
                <Typography variant="subtitle2">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Grid>

      <Grid item xs={12} sm={6}>
        {technical_code.slice(-3).map((item, index) => {
          return (
            <Box key={index} className={classes.skill_item}>
              <Box>
                <Typography variant="subtitle2">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );

  const skillIcon = (data) => {
    return data.map((item, index) => {
      return (
        <Box key={index} className={classes.skill_icon}>
          <img src={item} alt="item" />
        </Box>
      );
    });
  };

  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Grid container>
          <Grid item xs={12} className={classes.block}>
            <Typography variant="h4" className={classes.heading}>
              Education
            </Typography>
            {eduList(education)}
          </Grid>

          <Grid item xs={12} className={classes.block}>
            <Typography variant="h4" className={classes.heading}>
              Experience
            </Typography>
            {eduList(experience)}
          </Grid>
        </Grid>
      </Grid>

      {/********** SKILS ***********/}
      <Grid item xs={12} lg={6}>
        <Box>
          <Typography variant="h4" className={classes.heading}>
            Skills
          </Typography>

          {/********** PERSONAL ***********/}
          <Box className={classes.block}>
            <Box className={classes.skill_title}>
              <ReactSVG src={iDesign} />
              <Typography variant="subtitle1" color="primary">
                Personal Skills
              </Typography>
            </Box>
            {personalList}
          </Box>

          {/********** TECHNICAL ***********/}
          <Box>
            <Box className={classes.skill_title}>
              <ReactSVG src={iTechnical} />
              <Typography variant="subtitle1" color="primary">
                Technical Skills
              </Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="subtitle1" color="textSecondary">
                Design
              </Typography>
              <Box display="flex" my={2}>
                {skillIcon(design_icon)}
              </Box>

              {designList}
            </Box>

            <Box>
              <Typography variant="subtitle1" color="textSecondary">
                Coding
              </Typography>

              <Box display="flex" my={2}>
                {skillIcon(technical_icon)}
              </Box>

              {codingList}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CurriculumMain;

const useStyles = makeStyles((theme) => ({
  block: {
    whiteSpace: "pre-wrap",
    marginBottom: theme.spacing(8),
  },
  heading: {
    marginBottom: theme.spacing(4),
    "&:first-letter": {
      color: theme.palette.primary.main,
    },
  },
  // EDUCATON
  edu_item: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    "&:last-child": {
      marginBottom: 0,
    },
  },
  edu_date: {
    display: "flex",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      textAlign: "right",
      width: theme.spacing(10),
      marginRight: theme.spacing(2),
      paddingTop: theme.spacing(0.25),
    },
    "& div:first-child": {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${theme.spacing(2)}px)`,
      },
    },
    "& div:last-child": {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${theme.spacing(3)}px)`,
      },
    },

    "&:before": {
      [theme.breakpoints.up("sm")]: {
        right: theme.spacing(2),
        top: theme.spacing(4),
        width: "1px",
        content: "''",
        margin: "auto",
        bottom: "0",
        display: "block",
        position: "absolute",
        backgroundColor: theme.palette.divider,
      },
    },
  },

  // SKILL
  skill_item: {
    display: "flex",
    marginBottom: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
    "&:before": {
      content: "''",
      flexShrink: 0,
      display: "block",
      borderRadius: "50%",
      marginTop: theme.spacing(1),
      width: theme.spacing(1 / 1.5),
      height: theme.spacing(1 / 1.5),
      marginRight: theme.spacing(1.5),
      backgroundColor: theme.palette.primary.main,
    },
  },
  skill_title: {
    display: "flex",
    alignContent: "center",
    marginBottom: theme.spacing(2),
    "& svg": {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: theme.spacing(1),
    },
  },
  skill_box: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    height: theme.spacing(10),
    boxShadow: theme.shadows[10],
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.card,
  },
  skill_icon: {
    overflow: "hidden",
    boxShadow: theme.shadows[8],
    padding: theme.spacing(0.25),
    marginRight: theme.spacing(1),
    borderRadius: theme.shape.borderRadiusXs,
    backgroundColor: theme.palette.background.card,
    "& img": {
      objectFit: "cover",
      width: theme.spacing(2.8),
      height: theme.spacing(2.8),
    },
  },
}));
