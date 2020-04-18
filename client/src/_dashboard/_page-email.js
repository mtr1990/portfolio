import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Container, Box } from "@material-ui/core";
import { API } from "../configs";
import { HeaderDashboard, CheckLogin, PanelDashBoard } from "../commons";
import { SnackStatus } from "../@material-ui-custom";
import { EmailList } from ".";

const EmailPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [emails, setEmails] = useState([]);

  // GET EMAIL
  useEffect(() => {
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
    getEmails();
  }, [enqueueSnackbar]);

  // DELETE EMAIL
  const deleteEmail = async (id) => {
    await API.delete(`emails/${id}`)
      .then((res) => {
        setEmails(emails.filter((item) => item._id !== id));
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
  };

  return (
    <CheckLogin>
      <motion.div initial="initial" animate="enter" exit="exit">
        {/********** COMMONS ***********/}
        <HeaderDashboard />

        <Box mb={20}>
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
            <EmailList stateEmail={emails} deleteEmail={deleteEmail} />
          </Container>
        </Box>
      </motion.div>
    </CheckLogin>
  );
};

export default EmailPage;
