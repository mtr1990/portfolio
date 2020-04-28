import React from "react";
import { TextField, Box, Typography } from "@material-ui/core";

const ProjectControlsSearch = ({
  stateSearch,
  stateProject,
  data_Search,
  handleChangeSearch,
}) => {
  return (
    <>
      <TextField
        autoComplete="off"
        fullWidth
        variant="outlined"
        type="search"
        name="search"
        value={stateSearch}
        onChange={handleChangeSearch}
        label="Search..."
      />

      <Box mt={2}>
        {data_Search.length < stateProject.length ? (
          <Typography variant="subtitle2">
            {data_Search.length}{" "}
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
    </>
  );
};

export default ProjectControlsSearch;
