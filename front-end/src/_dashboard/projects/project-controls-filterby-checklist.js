import React, { useState } from "react";
import { FieldArray, FormikProvider } from "formik";
import {
  Button,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";

function ProjectFilterCheckList(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const projects = useSelector((state) => state.projects.projects);
  const { values } = props.formik;

  const filterOption = projects
    .map((e) => e["category"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => projects[e])
    .map((e) => projects[e]);

  function categoryLength(value) {
    const count = projects.filter((item) => {
      return item.category === value;
    });
    return count.length;
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkListLength = values.filterCheckList.length;

  return (
    <>
      <Button
        aria-controls="openFilter"
        aria-haspopup="true"
        size="small"
        onClick={handleClick}
        color="primary"
        variant={checkListLength > 0 ? "contained" : "text"}
      >
        Filter&nbsp;
        {checkListLength > 0 ? `(${checkListLength})` : null}
      </Button>

      <FormikProvider value={props.formik}>
        <FieldArray
          name="filterCheckList"
          render={(arrayHelpers) => (
            <Menu
              id="openFilter"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              // open
              onClose={handleClose}
            >
              <MenuItem className={classes.menu_item}>
                <FormControlLabel
                  className={classes.menu_label}
                  control={
                    <Checkbox
                      color="primary"
                      name="filterCheckList"
                      value="checkAll"
                      checked={checkListLength === filterOption.length}
                      onChange={(e) => {
                        if (e.target.checked)
                          filterOption.map((item) => {
                            return (
                              values.filterCheckList.indexOf(item.category) ===
                                -1 && arrayHelpers.push(item.category)
                            );
                          });
                        else {
                          filterOption.map((item) => {
                            return arrayHelpers.remove(item.category);
                          });
                        }
                      }}
                    />
                  }
                  label={`All (${projects.length})`}
                />
              </MenuItem>

              {filterOption.map((item) => (
                <MenuItem key={item._id} className={classes.menu_item}>
                  <FormControlLabel
                    className={classes.menu_label}
                    control={
                      <Checkbox
                        color="primary"
                        name="filterCheckList"
                        value={item.category}
                        checked={values.filterCheckList.includes(item.category)}
                        onChange={(e) => {
                          if (e.target.checked)
                            arrayHelpers && arrayHelpers.push(item.category);
                          else {
                            const idx = values.filterCheckList.indexOf(
                              item.category
                            );
                            arrayHelpers.remove(idx);
                          }
                        }}
                      />
                    }
                    label={`${item.category} (${categoryLength(
                      item.category
                    )})`}
                  />
                </MenuItem>
              ))}
            </Menu>
          )}
        />
      </FormikProvider>
    </>
  );
}

export default ProjectFilterCheckList;

const useStyles = makeStyles((theme) => ({
  menu_item: { padding: 0 },
  menu_label: {
    width: "100%",
    margin: 0,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
  },
}));
