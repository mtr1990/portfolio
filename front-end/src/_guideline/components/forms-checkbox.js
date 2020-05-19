import React from "react";

import {
  Grid,
  Checkbox,
  FormGroup,
  Typography,
  FormControlLabel,
} from "@material-ui/core";
import {
  CheckBox,
  Favorite,
  FavoriteBorder,
  CheckBoxOutlineBlank,
} from "@material-ui/icons";
import { MoreCheckbox } from "../../theme/@material-ui-custom";
import { GlBlock } from ".";

const GlCheckbox = () => (
  <GlBlock>
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Checkbox State
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked value="checkedA" />}
            label="Secondary"
          />
          <FormControlLabel
            control={
              <Checkbox defaultChecked value="checkedB" color="primary" />
            }
            label="Primary"
          />
          <FormControlLabel
            control={<Checkbox value="checkedC" />}
            label="Uncontrolled"
          />
          <FormControlLabel
            disabled
            control={<Checkbox value="checkedD" />}
            label="Disabled"
          />
          <FormControlLabel
            disabled
            control={<Checkbox checked value="checkedE" />}
            label="Disabled"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked value="checkedF" indeterminate />}
            label="Indeterminate"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                value="checkedH"
              />
            }
            label="Custom icon"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlank fontSize="small" />}
                checkedIcon={<CheckBox fontSize="small" />}
                value="checkedI"
              />
            }
            label="Custom size"
          />
        </FormGroup>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Checkbox Colors
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <MoreCheckbox status="info" defaultChecked value="checkedG" />
            }
            label="Info"
          />
          <FormControlLabel
            control={
              <MoreCheckbox status="success" defaultChecked value="checkedG" />
            }
            label="Success"
          />
          <FormControlLabel
            control={
              <MoreCheckbox status="warning" defaultChecked value="checkedG" />
            }
            label="Warning"
          />
          <FormControlLabel
            control={
              <MoreCheckbox status="error" defaultChecked value="checkedG" />
            }
            label="Error"
          />
        </FormGroup>
      </Grid>
    </Grid>
  </GlBlock>
);

export default GlCheckbox;
