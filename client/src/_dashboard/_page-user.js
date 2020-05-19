import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { path_DASHBOARD } from "../configs";
import { Container, Box, Fab } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux";
import { HeaderDashboard, PanelDashBoard } from "../commons";
import { UserList } from "./users";
import { LoginCheck } from "./login";

function UserPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  // GET USERS
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <LoginCheck>
      <motion.div initial="initial" animate="enter" exit="exit">
        {/********** COMMONS ***********/}
        <HeaderDashboard />

        <Box mb={24}>
          <Container>
            {/********** PANEL ***********/}
            <Box mb={8}>
              <PanelDashBoard
                txtHeading="Users"
                txtSubHeading="User"
                numbLength={users.length}
              />
            </Box>

            {/********** USER LIST ***********/}
            <UserList />
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
    </LoginCheck>
  );
}

export default UserPage;
