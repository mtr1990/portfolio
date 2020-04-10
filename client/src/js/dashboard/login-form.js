import React from "react";
import { Form } from "formik";
import { Box, Button, TextField, CircularProgress } from "@material-ui/core";

const LoginForm = ({ isSubmitting, handleChange, touched, errors }) => {
  return (
    <Form autoComplete="off" noValidate>
      {/********** Password ***********/}
      <div>
        <Box mb={2}>
          <TextField
            fullWidth
            error={touched.c_password && errors.c_password ? true : false}
            label="Enter Password"
            variant="outlined"
            type="password"
            name="c_password"
            onChange={handleChange}
            helperText={touched.c_password ? errors.c_password : ""}
          />
        </Box>
      </div>

      {/********** Submit ***********/}
      <div>
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
      </div>
    </Form>
  );
};

export default LoginForm;
