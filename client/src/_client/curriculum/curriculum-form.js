import React from "react";
import { motion } from "framer-motion";
import { Form, FormikProvider } from "formik";
import { varfadeInUp } from "../../utilities";
import { Box, Button, TextField, CircularProgress } from "@material-ui/core";

function CurriculumForm(props) {
  const {
    values,
    isSubmitting,
    handleChange,
    touched,
    errors,
    handleSubmit,
  } = props.formik;

  return (
    <FormikProvider value={props.formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {/********** CODE ***********/}
        <motion.div variants={varfadeInUp}>
          <Box mb={2}>
            <TextField
              error={touched.c_code && errors.c_code ? true : false}
              fullWidth
              variant="outlined"
              name="c_code"
              onChange={handleChange}
              label={`Enter ${values.s_code}`}
              helperText={touched.c_code ? errors.c_code : ""}
            />
          </Box>
        </motion.div>

        {/********** EMAIL ***********/}
        <motion.div variants={varfadeInUp}>
          <Box mb={2}>
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              onChange={handleChange}
              label="Your Email"
              type="email"
              error={touched.email && errors.email ? true : false}
              helperText={touched.email ? errors.email : ""}
            />
          </Box>
        </motion.div>

        {/********** FOOTER ***********/}
        <motion.div variants={varfadeInUp}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="primary"
            disabled={isSubmitting}
            startIcon={
              isSubmitting ? (
                <CircularProgress size={24} thickness={4} color="inherit" />
              ) : (
                ""
              )
            }
          >
            {isSubmitting ? "Please wait..." : "Get my CV"}
          </Button>
        </motion.div>
      </Form>
    </FormikProvider>
  );
}

export default CurriculumForm;
