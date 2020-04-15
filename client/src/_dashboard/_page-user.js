import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button, Fab } from "@material-ui/core";
import { ArrowBack, PersonAdd } from "@material-ui/icons";
import { API, path_DASHBOARD } from "../config";
import { SnackStatus } from "../@material-ui-custom";
import { HeaderDashboard, CheckLogin } from "../commons";
import { UserList } from ".";

const UserPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [users, setUsers] = useState([]);

  // GET USERS
  const getUsers = async () => {
    await API.get("users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Cannot connect to the server!",
          variant: "error",
        });
      });
  };

  // DELETE USER
  const deleteUser = async (id) => {
    await API.delete(`users/${id}`)
      .then((res) => {
        getUsers();

        SnackStatus(enqueueSnackbar, {
          message: "Deleted success!",
          variant: "success",
        });
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Deleted error!",
          variant: "error",
        });
      });
    setUsers(users.filter((item) => item._id !== id));
  };

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CheckLogin>
      <motion.div initial="initial" animate="enter" exit="exit">
        <HeaderDashboard />

        <Box mb={20}>
          <Container>
            {/********** Panel ***********/}
            <Box mb={8}>
              <Button
                to={path_DASHBOARD.root}
                size="small"
                color="primary"
                component={Link}
                startIcon={<ArrowBack />}
              >
                Back
              </Button>

              <Typography variant="h3" component="h1" paragraph>
                Users
              </Typography>
              <Typography variant="body1" component="p" color="textSecondary">
                {users.length} user
              </Typography>
            </Box>

            {/********** Email List ***********/}
            <UserList stateUsers={users} deleteUser={deleteUser} />
            <Box height={160}></Box>
          </Container>
        </Box>

        <Box position="fixed" bottom={56} right={56} zIndex="mobileStepper">
          <Fab
            color="primary"
            component={Link}
            to={path_DASHBOARD.users.create}
            aria-label="add user"
          >
            <PersonAdd />
          </Fab>
        </Box>
      </motion.div>
    </CheckLogin>
  );
};

export default UserPage;
