import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { Box, Grid, Typography } from "@material-ui/core";
import { varWrapBoth } from "../../utilities";
import { useDispatch, useSelector } from "react-redux";
import { filterProject } from "../../redux";
import {
  ProjectItem,
  ProjectFilterByName,
  ProjectControlsView,
  ProjectControlsSort,
  ProjectFilterCheckList,
  ProjectFilterByCategory,
} from ".";

const ProjectList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    byName: "",
    byCategory: "",
    checkList: [],
  });

  const formik = useFormik({
    initialValues: { checkList: filter.checkList },
  });
  const setCheckList = formik.values.checkList;

  let projects = useSelector((state) => state.projects.projects);
  const filters = useSelector((state) => state.projects.filters);
  const toogleView = useSelector((state) => state.projects.toogleView);
  const toogleSort = useSelector((state) => state.projects.toogleSort);

  useEffect(() => {
    dispatch(filterProject(filter));
  }, [filter, dispatch]);

  useEffect(() => {
    setFilter((prevState) => ({
      ...prevState,
      checkList: setCheckList,
    }));
  }, [setCheckList]);

  const onChangeFilter = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  if (projects.length === 0) return null;

  if (filters.byName !== undefined) {
    projects = projects.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(filters.byName.toLowerCase()) !== -1
      );
    });
  }

  if (filters.byCategory) {
    projects = projects.filter((item) => {
      return item.category === filter.byCategory;
    });
  }

  if (filters.checkList.length > 0) {
    projects = projects.filter((item) => {
      return formik.values.checkList.includes(item.category);
    });
  }

  if (toogleSort) {
    projects = projects.reverse();
  }

  return (
    <Box mt={4} mb={8}>
      {/********** FILTER BY NAME ***********/}
      <ProjectFilterByName value={filter.byName} onChange={onChangeFilter} />

      {/********** FILTER BY CATEGORY ***********/}
      <ProjectFilterByCategory
        value={filter.byCategory}
        onChange={onChangeFilter}
      />

      {/********** FILTER BY CHECKLIST ***********/}
      <ProjectFilterCheckList formik={formik} />

      {/********** FILTER RESULT ***********/}
      <Box mt={2}>
        {filters.byName ||
        filters.byCategory ||
        filters.checkList.length > 0 ? (
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
