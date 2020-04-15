import React, { useEffect, useState } from "react";
import { API } from "../config";
import { LoginPage } from "../_dashboard";

const CheckLogin = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  useEffect(() => {
    API.get(`users/isloggedin`).then((res) => {
      if (!res.data) {
        return setIsLoggedin(false);
      }
    });
  }, []);

  if (!isLoggedin) {
    return (
      <>
        <LoginPage
          heading="Please Login"
          description="
This function is only for administrators, if you have an account, please login to use"
        />
      </>
    );
  }

  return <> {props.children}</>;
};

export default CheckLogin;
