import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menu_item: { padding: 0 },
  label: {
    width: "100%",
    margin: 0,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
  },
}));

const ProjectFilterByCheckbox = ({
  isAllSelected,
  handleChangeChecked,
  filterOption,
  dataFilterChecked,
  stateProject,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkLength = dataFilterChecked.length > 0;

  function categoryLength(value) {
    const numb = stateProject.filter((item) => {
      return item.category === value;
    });
    return numb.length;
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        size="small"
        onClick={handleClick}
        color={checkLength ? "primary" : "inherit"}
        variant={checkLength ? "contained" : "text"}
      >
        Filter
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.menu_item}>
          <FormControlLabel
            className={classes.label}
            control={
              <Checkbox
                color="primary"
                name="select-all"
                type="checkbox"
                value="ALL"
                checked={isAllSelected}
                onChange={(e) => handleChangeChecked("all", e.target.checked)}
              />
            }
            label={`All (${stateProject.length})`}
          />
        </MenuItem>

        {filterOption.map((item, index) => {
          return (
            <MenuItem key={index} className={classes.menu_item}>
              <FormControlLabel
                className={classes.label}
                control={
                  <Checkbox
                    color="primary"
                    name={item.name}
                    value={item.category}
                    checked={item.isChecked || false}
                    onChange={(e) =>
                      handleChangeChecked(item.category, e.target.checked)
                    }
                  />
                }
                label={`${item.category} (${categoryLength(item.category)})`}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ProjectFilterByCheckbox;
