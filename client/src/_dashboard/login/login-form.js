import React from "react";
import { Form, FormikProvider } from "formik";
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
import { Person, Lock } from "@material-ui/icons";
import { useSelector } from "react-redux";

const LoginForm = (props) => {
  const { values, errors, touched, handleChange, handleSubmit } = props.formik;

  const isError = useSelector((state) => state.users.error);
  const isLoading = useSelector((state) => state.users.loading);

  return (
    <FormikProvider value={props.formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {/********** EMAIL ***********/}
        <Box mt={4} mb={2}>
          <FormControl
            error={
              isError === "User does not exist!" ||
              (touched.email && errors.email)
                ? true
                : false
            }
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="email">Email or Username</InputLabel>
            <OutlinedInput
              id="email"
              name="email"
              value={values.email || ""}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
              labelWidth={140}
            />
            <FormHelperText>
              <span>{touched.email && errors.email}</span>
              {isError === "User does not exist!" && <span>{isError}</span>}
            </FormHelperText>
          </FormControl>
        </Box>

        {/********** PASSWORD ***********/}
        <Box mb={2}>
          <FormControl
            error={
              isError === "Wrong password!" ||
              (touched.password && errors.password)
                ? true
                : false
            }
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              labelWidth={72}
            />
            <FormHelperText>
              <span>{touched.password && errors.password}</span>
              {isError === "Wrong password!" && <span>{isError}</span>}
            </FormHelperText>
          </FormControl>
        </Box>

        {/********** SUBMIT ***********/}
        <Button
          fullWidth
          color="primary"
          type="submit"
          variant="contained"
          size="large"
          disabled={isLoading}
          startIcon={
            isLoading ? (
              <CircularProgress size={24} thickness={4} color="inherit" />
            ) : (
              ""
            )
          }
        >
          {isLoading ? "Please wait..." : "Login"}
        </Button>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
