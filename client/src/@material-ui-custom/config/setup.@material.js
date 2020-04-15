import React from "react";
import useDarkMode from "use-dark-mode";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import {
  GlobalCss,
  muiBreakpoints,
  muiPaletteLight,
  muiPaletteDark,
  muiTypography,
  muiShadowsLight,
  muiShadowsDark,
  muiBorderRadius,
} from ".";

const ThemeWrap = (props) => {
  const breakpoints = createBreakpoints({});

  function pxToRem(value) {
    return `${value / 16}rem`;
  }

  const spacing = createMuiTheme({
    spacing: 8,
  });

  const { value } = useDarkMode(false, {
    classNameDark: "light-theme",
    classNameLight: "dark-theme",
    storageKey: "lightMode",
  });

  const ThemeConfig = {
    palette: value ? muiPaletteLight : muiPaletteDark,
    typography: muiTypography,
    breakpoints: muiBreakpoints,
    shadows: value ? muiShadowsLight : muiShadowsDark,
    shape: muiBorderRadius,

    overrides: {
      MuiTypography: {
        h1: {
          [breakpoints.down("xs")]: {
            fontSize: pxToRem(56),
          },
        },
        paragraph: {
          marginBottom: spacing.spacing(1), // 8px
        },
        gutterBottom: {
          marginBottom: spacing.spacing(2), // 16px
        },
      },
    },
  };

  if (value) {
    ThemeConfig.palette.type = "light";
  } else {
    ThemeConfig.palette.type = "dark";
  }

  const muiTheme = createMuiTheme(ThemeConfig);

  //   console.log("common:", JSON.stringify(muiTheme.palette, null, 2));

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <GlobalCss />
      {props.children}
    </ThemeProvider>
  );
};

export default ThemeWrap;
