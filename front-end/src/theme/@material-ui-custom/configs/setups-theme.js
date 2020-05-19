import React from "react";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import { useSelector } from "react-redux";
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

function pxToRem(value) {
  return `${value / 16}rem`;
}

function ThemeWrap(props) {
  const lightMode = useSelector((state) => state.lightMode.lightMode);
  const breakpoints = createBreakpoints({});
  const spacing = createMuiTheme({
    spacing: 8,
  });

  const ThemeConfig = {
    palette: lightMode ? muiPaletteLight : muiPaletteDark,
    typography: muiTypography,
    breakpoints: muiBreakpoints,
    shadows: lightMode ? muiShadowsLight : muiShadowsDark,
    shape: muiBorderRadius,

    overrides: {
      MuiTypography: {
        h1: {
          [breakpoints.down("xs")]: {
            fontSize: pxToRem(56),
          },
        },
        h2: {
          [breakpoints.down("xs")]: {
            fontSize: pxToRem(32),
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

  if (lightMode) ThemeConfig.palette.type = "light";
  else {
    ThemeConfig.palette.type = "dark";
  }

  const muiTheme = createMuiTheme(ThemeConfig);

  // console.log("common:", JSON.stringify(muiTheme.palette, null, 2));

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <GlobalCss />
      {props.children}
    </ThemeProvider>
  );
}

export default ThemeWrap;
