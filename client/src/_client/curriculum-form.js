import React from "react";
import { motion } from "framer-motion";
import { Form } from "formik";
import { varfadeInUp } from "../utilities";
import { Box, Button, TextField, CircularProgress } from "@material-ui/core";

const CurriculumForm = ({
  values,
  isSubmitting,
  handleChange,
  touched,
  errors,
}) => {
  return (
    <Form autoComplete="off" noValidate>
      {/********** Code ***********/}
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

      {/********** Email ***********/}
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

      {/********** Submit ***********/}
      <motion.div variants={varfadeInUp}>
        <Button
          fullWidth
          color="primary"
          type="submit"
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
          {isSubmitting ? "Please wait..." : "Unlock"}
        </Button>
      </motion.div>
    </Form>
  );
};

export default CurriculumForm;
