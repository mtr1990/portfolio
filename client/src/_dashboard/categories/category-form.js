import React from "react";
import { Form, FormikProvider } from "formik";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
import { Edit, Image } from "@material-ui/icons";
import { UploadFile } from "../../commons";

const CategoryForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = props.formik;

  const { txtSubmit } = props;
  const isLoading = useSelector((state) => state.categories.loading);

  return (
    <FormikProvider value={props.formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {/********** NAME ***********/}
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
              value={values.name}
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

        {/********** IMG COLLECTION ***********/}
        <UploadFile
          multiple
          labelText="imgCollection"
          labelIcon={<Image fontSize="small" />}
          cloudfiles={values.imgCollection}
          cloudfolder="upload_portfolio/categories"
          required={touched.imgCollection ? errors.imgCollection : ""}
          setCloudFiles={(value) => setFieldValue("imgCollection", value)}
        />

        {/********** FOOTER ***********/}
        <Box mt={3} textAlign="right" display="flex" justifyContent="flex-end">
          <Box mr={2}>
            <Button
              color="primary"
              component={Link}
              to={path_DASHBOARD.categories.root}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </Box>

          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={isLoading}
            startIcon={
              isLoading ? (
                <CircularProgress size={24} thickness={4} color="inherit" />
              ) : (
                ""
              )
            }
          >
            {isLoading ? "Please wait..." : txtSubmit}
          </Button>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default CategoryForm;
