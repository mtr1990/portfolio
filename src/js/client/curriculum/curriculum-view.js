import React from "react";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";
import { varWrapEnter, varfadeInUp } from "../../utilities";
import { CurriculumHandle } from ".";
import { Box, Typography, IconButton } from "@material-ui/core";
import { ModalSmall } from "../../commons";

const CurriculumView = ({ onShow, onHide }) => (
  <ModalSmall
    open={onShow}
    onClose={onHide}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <motion.div variants={varWrapEnter}>
      <Box mb={2}>
        <motion.div variants={varfadeInUp}>
          <Typography variant="h2">Hello!</Typography>
        </motion.div>

        <motion.div variants={varfadeInUp}>
          <Typography variant="body1">Get my CV now.</Typography>
        </motion.div>
      </Box>

      <CurriculumHandle closeModal={onHide} />

      <Box position="absolute" top={8} right={8}>
        <IconButton aria-label="delete" onClick={onHide}>
          <FeatherIcon icon="x" />
        </IconButton>
      </Box>
    </motion.div>
  </ModalSmall>
);

export default CurriculumView;
