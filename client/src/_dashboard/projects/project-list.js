import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, Box } from "@material-ui/core";
import { varWrapBoth } from "../../utilities";
import {
  ProjectItem,
  ProjectControlsSearch,
  ProjectControlsSort,
  ProjectControlsView,
  ProjectFilterByCheckbox,
  ProjectFilterBySelect,
} from "..";

const ProjectList = ({
  stateProject,
  stateView,
  stateSort,
  toogleView,
  toogleSort,
  deleteProject,
  setProjects,
}) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [isAllSelected, setisAllSelected] = useState(false);

  // SEARCH PROJECT
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const data_Search = stateProject.filter((item) => {
    return item.name.toLowerCase().indexOf(search) !== -1;
  });

  // FILLTER OPTION
  const filterOption = stateProject
    .map((e) => e["category"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => stateProject[e])
    .map((e) => stateProject[e]);

  // CHECBOXES FILLTER PROJECT
  const handleChangeChecked = (checkName, checkStatus) => {
    let isAllChecked = checkName === "all" && checkStatus;
    let isAllUnChecked = checkName === "all" && !checkStatus;
    const isChecked = checkStatus;
    const checkList = stateProject.map((item) => {
      if (isAllChecked || item.category === checkName) {
        return Object.assign({}, item, {
          isChecked,
        });
      } else if (isAllUnChecked) {
        return Object.assign({}, item, {
          isChecked: false,
        });
      }
      return item;
    });
    const isAllSelected =
      checkList.findIndex((item) => item.isChecked === false) === -1 ||
      isAllChecked;
    setProjects(checkList);
    setisAllSelected(isAllSelected);
  };
  const dataFilterChecked = stateProject.filter((item) => {
    return item.isChecked;
  });

  // SELECT FILLTER PROJECT
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const handleChangeReset = () => {
    setFilter("");
  };
  // const dataFilterSelected = stateProject.filter((item) => {
  //   return item.category === filter;
  // });

  // LIST
  function List(data) {
    if (stateProject.length === 0) return null;
    return (
      <motion.div variants={varWrapBoth}>
        <Grid container spacing={stateView ? 4 : null}>
          {data.map((item, index) => (
            <ProjectItem
              key={item._id}
              item={item}
              index={index}
              deleteProject={deleteProject}
              stateView={stateView}
            />
          ))}
        </Grid>
      </motion.div>
    );
  }

  return (
    <>
      <Box mt={4} mb={8}>
        {/********** SEARCH ***********/}
        <ProjectControlsSearch
          stateProject={stateProject}
          stateSearch={search}
          data_Search={data_Search}
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

          {/********** FILTER BY CHECKBOX ***********/}
          <Box>
            <ProjectFilterByCheckbox
              stateProject={stateProject}
              filterOption={filterOption}
              isAllSelected={isAllSelected}
              handleChangeChecked={handleChangeChecked}
              dataFilterChecked={dataFilterChecked}
            />
          </Box>

          {/********** FILTER BY SELECT ***********/}
          <Box display="none">
            <ProjectFilterBySelect
              stateFilter={filter}
              filterOption={filterOption}
              handleChangeFilter={handleChangeFilter}
              handleChangeReset={handleChangeReset}
            />
          </Box>
        </Box>
      </Box>
      {/********** SHOW LIST ***********/}
      {/* {List(data_Search)} */}
      {dataFilterChecked.length > 0
        ? List(dataFilterChecked)
        : List(data_Search)}
    </>
  );
};

export default ProjectList;
