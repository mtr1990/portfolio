import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TextField,
  Box,
  FormControlLabel,
  Switch,
  Typography,
} from "@material-ui/core";
import { varWrapBoth } from "../../utilities";
import { ProjectItem } from "..";

const ProjectList = ({
  stateProject,
  deleteProject,
  stateReverse,
  reverseProject,
}) => {
  const [filter, setFilter] = useState("");

  // FILTER PROJECT
  const filterProject = (e) => {
    setFilter(e.target.value.substr(0, 20));
  };

  const filtered = stateProject.filter((item) => {
    return item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  });

  console.log("projects:", stateProject.length);
  console.log("filtered:", filtered.length);

  if (!stateProject.length) return null;
  return (
    <>
      {/********** CONTROLS ***********/}
      <Box display="flex" my={8}>
        <Box flexGrow={1}>
          <TextField
            fullWidth
            variant="outlined"
            type="search"
            name="search"
            value={filter}
            onChange={filterProject}
            label="Search..."
          />

          <Box mt={2}>
            {filtered.length < stateProject.length ? (
              <Typography variant="subtitle2">
                {filtered.length}{" "}
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
        </Box>

        <Box ml={2}>
          <FormControlLabel
            control={
              <Switch
                checked={stateReverse}
                onChange={reverseProject}
                name="checkedB"
                color="primary"
              />
            }
            label="Sort"
          />
        </Box>
      </Box>

      {/********** LIST ***********/}
      <motion.div variants={varWrapBoth}>
        {filtered.map((item, index) => (
          <ProjectItem
            item={item}
            key={index}
            index={index}
            deleteProject={deleteProject}
          />
        ))}
      </motion.div>
    </>
  );
};

export default ProjectList;
