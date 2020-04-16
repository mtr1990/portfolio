import React from "react";
import { useSnackbar } from "notistack";
import { API, history, path_DASHBOARD } from "../configs";
import { SnackStatus, MoreBtnText } from "../styles/@material-ui-custom";
import { ExitToApp } from "@material-ui/icons";

const BtnLogout = () => {
  const { enqueueSnackbar } = useSnackbar();

  // Request Logout
  const requestLogout = async () => {
    await API.get("users/logout")
      .then((res) => {
        history.push(path_DASHBOARD.login);
      })
      .catch(() => {
        SnackStatus(enqueueSnackbar, {
          message: "Cannot connect to the server!",
          variant: "error",
        });
      });
  };

  return (
    <MoreBtnText size="small" endIcon={<ExitToApp />} onClick={requestLogout}>
      logout
    </MoreBtnText>
  );
};

export default BtnLogout;
