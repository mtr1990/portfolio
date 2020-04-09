import { withStyles } from "@material-ui/core";

export const GlobalCss = withStyles((theme) => ({
  "@global": {
    "svg,img,video": {
      display: "block !important",
      "&:focus": {
        outline: "0",
      },
    },
    "img,video ": {
      width: "100%",
    },

    // MuiButton
    ".MuiButtonBase-root": {
      "&:disabled": {
        opacity: "0.48",
      },
    },
    ".MuiButton-root": {
      fontSize: "14px",
      padding: "9px 16px",
    },
    ".MuiButton-sizeSmall": {
      fontSize: "13px",
      padding: "6px 12px",
    },
    ".MuiButton-sizeLarge": {
      fontSize: "15px",
      padding: "15px 20px",
    },

    // MuiButton: Contained & MuiFab
    ".MuiButton-containedPrimary,.MuiFab-primary": {
      "&:disabled": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
      },
    },
    ".MuiButton-containedSecondary,.MuiFab-secondary": {
      "&:disabled": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.main,
      },
    },

    // MuiButton: Outlined
    ".MuiButton-outlinedPrimary": {
      "&:disabled": {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
    ".MuiButton-outlinedSecondary": {
      "&:disabled": {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
    },

    // MuiButton: Text + MuiIconButton
    ".MuiButton-textPrimary,.MuiIconButton-colorPrimary": {
      "&:disabled": {
        color: theme.palette.primary.main,
      },
    },
    ".MuiButton-textSecondary,.MuiIconButton-colorSecondary": {
      "&:disabled": {
        color: theme.palette.secondary.main,
      },
    },

    // MuiSwitch
    ".MuiSwitch-track": {
      backgroundColor: theme.palette.contrast.high,
    },
    ".MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track": {
      backgroundColor: `${theme.palette.contrast.high} !important`,
    },
    ".MuiSwitch-switchBase.Mui-disabled": {
      color: `${theme.palette.contrast.low} !important`,
    },

    // Text Field: OutlinedInput
    ".MuiOutlinedInput-root": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.contrast.low,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.contrast.medium,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}))(() => null);
