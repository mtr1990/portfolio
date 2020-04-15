import React from "react";
import { Form } from "formik";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";

const LoginForm = ({
  values,
  isSubmitting,
  handleChange,
  touched,
  errors,
  isError,
}) => {
  console.log(isError);

  return (
    <Form autoComplete="off" noValidate>
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
            type="email"
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
        disabled={isSubmitting}
        startIcon={
          isSubmitting ? (
            <CircularProgress size={24} thickness={4} color="inherit" />
          ) : (
            ""
          )
        }
      >
        {isSubmitting ? "Please wait..." : "Login"}
      </Button>
    </Form>
  );
};

export default LoginForm;
