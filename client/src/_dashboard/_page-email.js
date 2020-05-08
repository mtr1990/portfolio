import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "../redux";
import { HeaderDashboard, PanelDashBoard } from "../commons";
import { EmailList } from "./emails";
import { LoginCheck } from "./login";

function EmailPage() {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.emails.emails);

  // GET EMAILS
  useEffect(() => {
    dispatch(getEmails());
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
                txtHeading="Emails"
                txtSubHeading="Email"
                numbLength={emails.length}
              />
            </Box>

            {/********** EMAIL LIST ***********/}
            <EmailList />
          </Container>
        </Box>
      </motion.div>
    </LoginCheck>
  );
}

export default EmailPage;
