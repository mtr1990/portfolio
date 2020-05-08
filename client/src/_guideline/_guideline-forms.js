import React from "react";
import {
  GlField,
  GlLayout,
  GlSwitch,
  GlCheckbox,
  GlRadioButton,
} from "./components";
import { motion } from "framer-motion";

const GlForms = () => (
  <motion.div initial="initial" animate="enter" exit="exit">
    <GlLayout heading="Forms">
      {/********** Field ***********/}
      <GlField />

      {/********** Checkbox ***********/}
      <GlCheckbox />

      {/********** Radio Button ***********/}
      <GlRadioButton />

      {/********** Toggle Button ***********/}
      <GlSwitch />
    </GlLayout>
  </motion.div>
);

export default GlForms;
