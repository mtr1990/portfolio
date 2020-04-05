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

  const darkMode = useDarkMode(false, {
    classNameDark: "light-mode",
    classNameLight: "dark-mode",
    storageKey: "isLight",
  });

  const ThemeConfig = {
    palette: darkMode.value ? muiPaletteLight : muiPaletteDark,
    typography: muiTypography,
    breakpoints: muiBreakpoints,
    shadows: darkMode.value ? muiShadowsLight : muiShadowsDark,
    shape: muiBorderRadius,
    overrides: {
      MuiTypography: {
        h1: {
          [breakpoints.down("xs")]: {
            fontSize: pxToRem(56),
          },
        },
        gutterBottom: {
          marginBottom: spacing.spacing(2), // 16px
        },
      },
    },
  };

  if (darkMode.value) {
    ThemeConfig.palette.type = "light";
  } else {
    ThemeConfig.palette.type = "dark";
  }

  const muiTheme = createMuiTheme(ThemeConfig);
  // console.log(JSON.stringify(muiTheme.shape, null, 2));

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <GlobalCss />
      {props.children}
    </ThemeProvider>
  );
};

export default ThemeWrap;
