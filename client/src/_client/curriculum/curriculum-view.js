import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import {
  Box,
  fade,
  Dialog,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { urlCV } from "../../configs";
import {
  varScaleX,
  varWrapBoth,
  varfadeInUp,
  validationCVForm,
} from "../../utilities";
import { useDispatch } from "react-redux";
import { addEmail } from "../../redux";
import { CurriculumForm } from ".";
import { connectModal } from "redux-modal";

function CurriculumView(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { show, handleHide } = props;

  // FORMIK
  const formik = useFormik({
    initialValues: {
      email: "",
      s_code: "Hello",
      c_code: "",
    },
    validationSchema: validationCVForm,
    onSubmit: (values) => {
      const newEmail = {
        email: values.email,
        date: new Date().toLocaleString(),
      };
      dispatch(addEmail(newEmail, enqueueSnackbar));
      setTimeout(() => {
        window.open(urlCV, "_blank", "noopener noreferrer");
        formik.setSubmitting(false);
        formik.resetForm();
        handleHide();
      }, 1000); // Important setTimeOut < 1000  RESOLVE popup blocked
    },
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div initial="initial" animate="enter" exit="exit">
          <Dialog
            open={show}
            onClose={handleHide}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            classes={{ root: classes.root, container: classes.container }}
            PaperComponent="div"
          >
            <motion.div className={classes.main} variants={varScaleX}>
              <motion.div variants={varWrapBoth}>
                {/********** CLOSE ***********/}
                <Box position="absolute" top={12} right={12}>
                  <IconButton
                    aria-label="close"
                    size="small"
                    onClick={handleHide}
                  >
                    <Close />
                  </IconButton>
                </Box>

                <Box mb={3}>
                  {/********** HEADER ***********/}
                  <motion.div variants={varfadeInUp}>
                    <Typography variant="h2">Hello!</Typography>
                  </motion.div>

                  <motion.div variants={varfadeInUp}>
                    <Typography variant="body1">Get my CV now.</Typography>
                  </motion.div>
                </Box>

                {/********** FORM ***********/}
                <CurriculumForm formik={formik} />
              </motion.div>
            </motion.div>
          </Dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default connectModal({ name: "curriculum", destroyOnHide: false })(
  CurriculumView
);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:
      theme.palette.type === "light"
        ? fade(theme.palette.contrast.higher, 0.88)
        : fade(theme.palette.contrast.lower, 0.88),
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "12%",
      marginRight: "12%",
      alignItems: "flex-start",
      justifyContent: "flex-end",
    },
  },
  main: {
    overflow: "hidden",
    position: "relative",
    padding: theme.spacing(3),
    width: `calc(100% - 32px)`,
    boxShadow: theme.shadows[25].dialog,
    borderRadius: theme.shape.borderRadiusLg,
    backgroundColor: theme.palette.background.card,
    [theme.breakpoints.up("sm")]: {
      width: "480px",
    },
  },
}));
