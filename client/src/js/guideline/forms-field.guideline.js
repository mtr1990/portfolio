import React from "react";
import { Visibility } from "@material-ui/icons";
import { GlBlock } from ".";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
} from "@material-ui/core";

const GlField = () => (
  <GlBlock>
    <Grid container spacing={3}>
      <Grid container item xs={12} md={6} lg={4} direction="column">
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Style
        </Typography>

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
        />
        <br />
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <br />
        <FormControl variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
        <br />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Visibility />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <br />
        <TextField
          label="Amount"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="outlined"
        />
      </Grid>

      <Grid container item xs={12} md={6} lg={4} direction="column">
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Text Area & Select
        </Typography>

        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select your currency"
          variant="outlined"
        >
          <MenuItem key={0} value="MenuItem 1">
            Item 1
          </MenuItem>
          <MenuItem key={1} value="MenuItem 2">
            Item 2
          </MenuItem>
          <MenuItem key={2} value="MenuItem 3">
            Item 3
          </MenuItem>
        </TextField>
        <br />
      </Grid>

      <Grid container item xs={12} md={6} lg={4} direction="column">
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          State
        </Typography>

        <TextField
          id="outlined-default"
          label="Default"
          defaultValue="Default"
          variant="outlined"
          helperText="Incorrect entry."
        />
        <br />
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Error"
          variant="outlined"
          helperText="Incorrect entry."
        />
        <br />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select your currency"
          variant="outlined"
          disabled
        >
          <MenuItem key={0} value="MenuItem1">
            Item 1
          </MenuItem>
          <MenuItem key={1} value="MenuItem2">
            Item 2
          </MenuItem>
          <MenuItem key={2} value="MenuItem3">
            Item 3
          </MenuItem>
        </TextField>
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
          disabled
        />
        <br />
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
        />
        <br />
        <TextField
          label="Size"
          id="outlined-size-normal"
          defaultValue="Normal"
          variant="outlined"
        />
      </Grid>
    </Grid>
  </GlBlock>
);

export default GlField;
