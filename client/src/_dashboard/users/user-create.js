import React, { useState } from "react";
import { Formik } from "formik";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Typography, makeStyles, Box } from "@material-ui/core";
import { API, history, path_DASHBOARD } from "../../configs";
import { validationUserForm } from "../../utilities";
import { HeaderDashboard, CheckLogin } from "../../commons";
import { SnackStatus } from "../../styles/@material-ui-custom";
import { UserFormRegister } from "..";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "640px",
    margin: `0 auto`,
    background: theme.palette.background.card,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[25].card.root,
  },
}));

const UserCreate = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [email] = useState("");
  const [password] = useState("");
  const [userdata, setUserdata] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(null);

  // CREATE USER
  const createUser = async (email, password) => {
    const data = {
      email,
      password,
    };
    await API.post(`users/register`, data)
      .then((res) => {
        if (res.data.errors) {
          return setIsError(res.data);
        } else {
          setUserdata(res.data);
          setIsError(null);
          setSuccess(true);
          SnackStatus(enqueueSnackbar, {
            message: "You are successfully registerated!",
            variant: "success",
          });
          history.push(path_DASHBOARD.users.root);
        }
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Created error!",
          variant: "error",
        });
      });
  };

  console.log("userdata:", userdata);
  console.log("success:", success);

  // SUBMIT
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      createUser(values.email, values.password);
      setSubmitting(false);
    }, 1600);
  };

  return (
    <CheckLogin>
      <motion.div initial="initial" animate="enter" exit="exit">
        <HeaderDashboard />

        <Box className={classes.main}>
          <Typography variant="h4" component="h4">
            Create User
          </Typography>

          <Formik
            initialValues={{
              email,
              password,
            }}
            validationSchema={validationUserForm}
            onSubmit={handleSubmit}
            render={(props) => (
              <>
                <UserFormRegister {...props} isError={isError} />
              </>
            )}
          />
        </Box>
      </motion.div>
    </CheckLogin>
  );
};

export default UserCreate;
