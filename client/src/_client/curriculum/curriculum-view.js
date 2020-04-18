import React, { useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import {
  Box,
  Typography,
  IconButton,
  makeStyles,
  fade,
  Dialog,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { API, urlCV } from "../../configs";
import {
  varWrapBoth,
  varfadeInUp,
  varScaleX,
  validationCVForm,
} from "../../utilities";
import { SnackStatus } from "../../@material-ui-custom";
import { CurriculumForm } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:
      theme.palette.type === "light"
        ? fade(theme.palette.contrast.higher, 0.88)
        : fade(theme.palette.contrast.lower, 0.88),

    "& .MuiDialog-scrollPaper": {
      [theme.breakpoints.up("sm")]: {
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginTop: "12%",
        marginRight: "12%",
      },
    },
  },
  main: {
    position: "relative",
    overflow: "hidden",
    width: `calc(100% - 32px)`,
    padding: theme.spacing(3),
    boxShadow: theme.shadows[25].dialog,
    backgroundColor: theme.palette.background.card,
    borderRadius: theme.shape.borderRadiusLg,
    [theme.breakpoints.up("sm")]: {
      width: "480px",
    },
  },
}));

const CurriculumView = forwardRef((props, ref) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = useState(false);
  const [email] = useState("");
  const [s_code] = useState("Hello");
  const [c_code] = useState("");

  useImperativeHandle(ref, () => ({
    callbackOpenModal() {
      setOpen(true);
    },

    doAlert() {
      alert("1213");
    },
  }));

  const closeModal = () => {
    setOpen(false);
  };

  // GET CV
  const getCV = async (email) => {
    const data = { email };
    await API.post(`emails/save`, data)
      .then((res) => {
        closeModal();
        SnackStatus(enqueueSnackbar, {
          message: "Send request success!",
          variant: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // SUBMIT
  const handleSubmit = (values, { setSubmitting }) => {
    getCV(values.email);
    setTimeout(() => {
      window.open(urlCV, "_blank", "noopener noreferrer");
      setSubmitting(false);
    }, 1000); // Important setTimeOut < 1000  RESOLVE popup blocked
  };

  const PaperWrap = (props) => {
    return (
      <motion.div className={classes.main} variants={varScaleX}>
        {props.children}
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial="initial" animate="enter" exit="exit">
          <Dialog
            open={open}
            onClose={closeModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.root}
            PaperComponent={PaperWrap}
          >
            <motion.div variants={varWrapBoth}>
              {/********** Close ***********/}
              <Box position="absolute" top={12} right={12}>
                <IconButton
                  aria-label="close"
                  size="small"
                  onClick={closeModal}
                >
                  <Close />
                </IconButton>
              </Box>

              <Box mb={3}>
                {/********** Header ***********/}
                <motion.div variants={varfadeInUp}>
                  <Typography variant="h2">Hello!</Typography>
                </motion.div>

                <motion.div variants={varfadeInUp}>
                  <Typography variant="body1">Get my CV now.</Typography>
                </motion.div>
              </Box>

              {/********** FORMIK ***********/}
              <Formik
                initialValues={{
                  email,
                  s_code,
                  c_code,
                }}
                validationSchema={validationCVForm}
                onSubmit={handleSubmit}
                render={(props) => <CurriculumForm {...props} />}
              />
            </motion.div>
          </Dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default CurriculumView;
