import React, { useState, forwardRef, useImperativeHandle } from "react";
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

const CurriculumView = forwardRef((props, ref) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [initialState] = useState({
    email: "",
    date: new Date().toLocaleString(),
    s_code: "Hello",
    c_code: "",
  });

  useImperativeHandle(ref, () => ({
    callbackOpenModal() {
      setOpen(true);
    },

    doAlert() {
      console.log("1213");
    },
  }));

  const closeModal = () => {
    setOpen(false);
  };

  // FORMIK
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationCVForm,
    onSubmit: (values) => {
      const newEmail = {
        email: values.email,
        date: values.date,
      };
      dispatch(addEmail(newEmail, enqueueSnackbar));
      setTimeout(() => {
        window.open(urlCV, "_blank", "noopener noreferrer");
        formik.setSubmitting(false);
        formik.resetForm();
        closeModal();
      }, 1000); // Important setTimeOut < 1000  RESOLVE popup blocked
    },
  });

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
            PaperComponent="div"
          >
            <motion.div className={classes.main} variants={varScaleX}>
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
                <CurriculumForm formik={formik} />
              </motion.div>
            </motion.div>
          </Dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default CurriculumView;

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
