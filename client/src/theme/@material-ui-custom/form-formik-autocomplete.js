import React from "react";
import { Autocomplete } from "@material-ui/lab";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { fieldToTextField } from "formik-material-ui";
import {
  useTheme,
  TextField,
  makeStyles,
  InputAdornment,
} from "@material-ui/core";

const MoreAutocomplete = ({ textFieldProps, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    form: { setTouched, setFieldValue },
  } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;
  const { icon, value } = props;

  return (
    <Autocomplete
      {...props}
      {...field}
      value={value || null}
      onChange={(_, value) => setFieldValue(name, value)}
      onBlur={() => setTouched({ [name]: true })}
      classes={{
        paper: classes.paper,
        option: classes.option,
      }}
      // RENDER INPUT
      renderInput={(props) => (
        <TextField
          {...props}
          {...textFieldProps}
          helperText={helperText}
          error={error}
          fullWidth
          InputProps={{
            ...props.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {icon ? icon : ""}
              </InputAdornment>
            ),
          }}
        />
      )}
      // HIGHLIGHTS
      renderOption={(option, { inputValue }) => {
        const matches = match(option, inputValue);
        const parts = parse(option, matches);
        return (
          <>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{
                  fontWeight: part.highlight ? 700 : 400,
                  color: part.highlight
                    ? theme.palette.primary.main
                    : "inherit",
                }}
              >
                {part.text}
              </span>
            ))}
          </>
        );
      }}
      // END - HIGHLIGHTS
    />
  );
};

export default MoreAutocomplete;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: 0,
    boxShadow: theme.shadows[8],
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: "red",
    backgroundColor: theme.palette.background.paper,
  },
  option: {
    paddingTop: theme.spacing(1.2),
    paddingBottom: theme.spacing(1.2),
    '&.MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: "transparent",
    },
    '&.MuiAutocomplete-option[data-focus="true"]': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));
