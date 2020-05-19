import React from "react";
import { Form, FormikProvider } from "formik";
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
import { path_DASHBOARD } from "../../configs";
import { Link } from "react-router-dom";
import { Person, Lock } from "@material-ui/icons";
import { useSelector } from "react-redux";

function UserFormRegister(props) {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = props.formik;

  const isError = useSelector((state) => state.users.error);

  return (
    <FormikProvider value={props.formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {/********** NAME ***********/}
        <Box mt={3} mb={2}>
          <FormControl
            error={(touched.email && errors.email) || isError ? true : false}
            fullWidth
            variant="outlined"
          >
            <InputLabel>Email or Username</InputLabel>
            <OutlinedInput
              name="email"
              value={values.email}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
              labelWidth={140}
            />
            <FormHelperText>
              <span> {touched.email ? errors.email : ""}</span>
              <span>{isError}</span>
            </FormHelperText>
          </FormControl>
        </Box>

        {/********** PASSWORD ***********/}
        <Box mb={2}>
          <FormControl
            error={touched.password && errors.password ? true : false}
            fullWidth
            variant="outlined"
          >
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              labelWidth={68}
            />
            <FormHelperText>
              {touched.password ? errors.password : ""}
            </FormHelperText>
          </FormControl>
        </Box>

        {/********** FOOTER ***********/}
        <Box mt={3} textAlign="right" display="flex" justifyContent="flex-end">
          <Box mr={2}>
            <Button
              color="primary"
              component={Link}
              to={path_DASHBOARD.users.root}
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
            {isSubmitting ? "Please wait..." : "Create"}
          </Button>
        </Box>
      </Form>
    </FormikProvider>
  );
}

export default UserFormRegister;
