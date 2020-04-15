import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { API, path_DASHBOARD } from "../config";
import { HeaderDashboard, CheckLogin } from "../commons";
import { SnackStatus } from "../@material-ui-custom";
import { EmailList } from ".";

const EmailPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [emails, setEmails] = useState([]);

  // GET EMAIL
  const getEmails = async () => {
    await API.get("emails")
      .then((res) => {
        setEmails(res.data);
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Cannot connect to the server!",
          variant: "error",
        });
      });
  };

  // DELETE EMAIL
  const deleteEmail = async (id) => {
    await API.delete(`emails/${id}`)
      .then((res) => {
        getEmails();
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
    setEmails(emails.filter((item) => item._id !== id));
  };

  useEffect(() => {
    getEmails();
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
                Emails
              </Typography>
              <Typography variant="body1" component="p" color="textSecondary">
                {emails.length} Email
              </Typography>
            </Box>

            {/********** Email List ***********/}
            <EmailList stateEmail={emails} deleteEmail={deleteEmail} />
          </Container>
        </Box>
      </motion.div>
    </CheckLogin>
  );
};

export default EmailPage;
