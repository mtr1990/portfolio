import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { API, path_DASHBOARD } from "../config";
import { Header } from "../commons";
import { SnackStatus } from "../@material-ui-custom";
import { EmailList } from ".";

const EmailPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [emails, setEmails] = useState([]);

  // Get Email
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

  // Delete Email
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
    <motion.div initial="initial" animate="enter" exit="exit">
      <Header />

      <Container>
        {/********** Panel ***********/}
        <Box mt={24} mb={8}>
          <Button
            to={path_DASHBOARD.root}
            size="small"
            color="primary"
            component={Link}
            startIcon={<ArrowBack />}
          >
            Back
          </Button>

          <Box>
            <Typography variant="h3" component="h1" paragraph>
              Emails
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {emails.length} Email
            </Typography>
          </Box>
        </Box>

        {/********** Email List ***********/}
        <EmailList stateEmail={emails} deleteEmail={deleteEmail} />
        <Box height={160}></Box>
      </Container>
    </motion.div>
  );
};

export default EmailPage;
