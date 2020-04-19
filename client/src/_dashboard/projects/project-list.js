import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, Box } from "@material-ui/core";
import { varWrapBoth } from "../../utilities";
import {
  ProjectItem,
  ProjectControlsSearch,
  ProjectControlsFilter,
  ProjectControlsSort,
  ProjectControlsView,
} from "..";

const ProjectList = ({
  stateProject,
  stateView,
  stateSort,
  toogleView,
  toogleSort,
  deleteProject,
}) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  // SEARCH PROJECT
  const handleChangeSearch = (e) => {
    setSearch(e.target.value.substr(0, 20));
  };
  const resultsSearch = stateProject.filter((item) => {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  // FILLTER PROJECT
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const getUnique = (arr, comp) => {
    const unique = arr
      .map((e) => e[comp].name)
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return unique;
  };
  const resultsFilter = stateProject.filter((item) => {
    return item.category.name === filter;
  });
  const optionFilter = getUnique(stateProject, "category");

  const handleChangeReset = () => {
    setFilter("");
  };

  // LIST
  if (!stateProject.length) return null;

  const FilterList = (
    <motion.div variants={varWrapBoth}>
      <Grid container spacing={stateView ? 3 : null}>
        {resultsFilter.map((item, index) => (
          <ProjectItem
            key={index}
            item={item}
            index={index}
            deleteProject={deleteProject}
            stateView={stateView}
          />
        ))}
      </Grid>
    </motion.div>
  );

  const SearchList = (
    <motion.div variants={varWrapBoth}>
      <Grid container spacing={stateView ? 3 : null}>
        {resultsSearch.map((item, index) => (
          <ProjectItem
            key={index}
            item={item}
            index={index}
            deleteProject={deleteProject}
            stateView={stateView}
          />
        ))}
      </Grid>
    </motion.div>
  );

  return (
    <>
      <Box mt={4} mb={8}>
        {/********** SEARCH ***********/}
        <ProjectControlsSearch
          stateProject={stateProject}
          stateSearch={search}
          resultsSearch={resultsSearch}
          handleChangeSearch={handleChangeSearch}
        />

        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          {/********** TOGGLE VIEW ***********/}
          <ProjectControlsView stateView={stateView} toogleView={toogleView} />

          {/********** TOGGLE SORT ***********/}
          <Box mx={2}>
            <ProjectControlsSort
              stateSort={stateSort}
              toogleSort={toogleSort}
            />
          </Box>

          {/********** FILTER ***********/}
          <ProjectControlsFilter
            stateFilter={filter}
            optionFilter={optionFilter}
            handleChangeFilter={handleChangeFilter}
            handleChangeReset={handleChangeReset}
          />
        </Box>
      </Box>

      {/********** SHOW LIST ***********/}
      {resultsFilter.length > 0 ? FilterList : SearchList}
    </>
  );
};

export default ProjectList;
