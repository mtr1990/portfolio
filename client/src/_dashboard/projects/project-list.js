import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { Box, Grid, Typography } from "@material-ui/core";
import { varWrapBoth } from "../../utilities";
import { useDispatch, useSelector } from "react-redux";
import { filterProject } from "../../redux";
import {
  ProjectItem,
  ProjectFilters,
  ProjectControlsView,
  ProjectControlsSort,
} from ".";

const ProjectList = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      filterName: "",
      filterCategory: "",
      filterCheckList: [],
    },
  });

  const toogleView = useSelector((state) => state.projects.toogleView);
  const toogleSort = useSelector((state) => state.projects.toogleSort);
  let projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(filterProject(formik.values));
  }, [dispatch, formik.values]);

  if (!projects.length) return null;

  if (formik.values.filterName !== undefined) {
    projects = projects.filter((item) => {
      return (
        item.name
          .toLowerCase()
          .indexOf(formik.values.filterName.toLowerCase()) !== -1
      );
    });
  }

  if (formik.values.filterCategory) {
    projects = projects.filter((item) => {
      return item.category === formik.values.filterCategory;
    });
  }

  if (formik.values.filterCheckList.length > 0) {
    projects = projects.filter((item) => {
      return formik.values.filterCheckList.includes(item.category);
    });
  }

  if (toogleSort) {
    projects = projects.reverse();
  }

  return (
    <Box mt={4} mb={8}>
      {/* <DebugForMik formik={formik} /> */}

      {/********** FILTERS ***********/}
      <ProjectFilters formik={formik} />

      {/********** FILTER RESULT ***********/}
      <Box mt={2}>
        {formik.values.filterName ||
        formik.values.filterCategory ||
        formik.values.filterCheckList.length > 0 ? (
          <Typography variant="subtitle2">
            {projects.length}{" "}
            <Typography
              variant="subtitle2"
              color="textSecondary"
              component="span"
            >
              results found
            </Typography>
          </Typography>
        ) : null}
      </Box>

      {/********** TOGGLE CONTROLS ***********/}
      <Box mt={2} display="flex" justifyContent="flex-end" alignItems="center">
        <ProjectControlsView />

        <Box mx={2}>
          <ProjectControlsSort />
        </Box>
      </Box>

      {/********** DISPLAY LIST ***********/}
      <motion.div variants={varWrapBoth}>
        <Grid container spacing={toogleView ? 4 : null}>
          {projects.map((item, index) => (
            <ProjectItem key={index} item={item} index={index + 1} />
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ProjectList;
