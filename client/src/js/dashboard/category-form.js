import React from "react";
import { Form } from "formik";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  FormHelperText,
  FormControl,
  OutlinedInput,
  InputLabel,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { path_CATEGORIES } from "../../config";

const CategoryForm = ({
  values,
  isSubmitting,
  handleChange,
  txtSubmit,
  touched,
  errors,
}) => (
  <Form autoComplete="off" noValidate>
    {/********** Name ***********/}
    <Box mt={3} mb={2}>
      <FormControl
        error={touched.name && errors.name ? true : false}
        fullWidth
        variant="outlined"
      >
        <InputLabel>Name</InputLabel>
        <OutlinedInput
          name="name"
          value={values.name}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <Edit />
            </InputAdornment>
          }
          labelWidth={48}
        />
        <FormHelperText>{touched.name ? errors.name : ""}</FormHelperText>
      </FormControl>
    </Box>

    {/********** Footer ***********/}
    <Box mt={3} textAlign="right" display="flex" justifyContent="flex-end">
      <Box mr={1}>
        <Button color="primary" component={Link} to={path_CATEGORIES.root}>
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
);

export default CategoryForm;
