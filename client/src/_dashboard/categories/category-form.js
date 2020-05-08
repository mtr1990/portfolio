import React from "react";
import { Form, FormikProvider } from "formik";
import { Link } from "react-router-dom";
import { path_DASHBOARD } from "../../configs";
import {
  Box,
  Button,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  CircularProgress,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";


const CategoryForm = (props) => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = props.formik;

  const { txtSubmit } = props;

  return (
    <FormikProvider value={props.formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {/********** Name ***********/}
        <Box mt={3} mb={2}>
          <FormControl
            error={touched.name && errors.name ? true : false}
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
              id="name"
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Edit fontSize="small" />
                </InputAdornment>
              }
              labelWidth={48}
            />
            <FormHelperText>{touched.name ? errors.name : ""}</FormHelperText>
          </FormControl>
        </Box>

        {/********** Footer ***********/}
        <Box mt={3} textAlign="right" display="flex" justifyContent="flex-end">
          <Box mr={2}>
            <Button
              color="primary"
              component={Link}
              to={path_DASHBOARD.categories.root}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </Box>

          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            startIcon={
              isSubmitting ? (
                <CircularProgress size={24} thickness={4} color="inherit" />
              ) : (
                ""
              )
            }
          >
            {isSubmitting ? "Please wait..." : txtSubmit}
          </Button>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default CategoryForm;
