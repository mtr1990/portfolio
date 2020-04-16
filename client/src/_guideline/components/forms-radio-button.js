import React from "react";
import { GlBlock } from "..";
import {
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@material-ui/core";
import { MoreRadio } from "../../styles/@material-ui-custom";

const GlRadioButton = () => {
  return (
    <GlBlock>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Radio State
          </Typography>

          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="(Disabled option)"
              />
            </RadioGroup>
            <FormHelperText>labelPlacement start</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Radio Colors
          </Typography>

          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel
                value="RadioInfo"
                control={<MoreRadio status="info" />}
                label="Info"
              />
              <FormControlLabel
                value="RadioSuccess"
                control={<MoreRadio status="success" />}
                label="Success"
              />
              <FormControlLabel
                value="RadioWarning"
                control={<MoreRadio status="warning" />}
                label="Warning"
              />
              <FormControlLabel
                value="RadioError"
                control={<MoreRadio status="error" />}
                label="Error"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </GlBlock>
  );
};

export default GlRadioButton;
