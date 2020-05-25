import React, { useEffect, useState } from "react";
import { API } from "../../configs";
import { LoginPage } from "..";

function LoginCheck(props) {
  const [isLoggedin, setIsLoggedin] = useState(true);

  useEffect(() => {
    API.get(`users/isloggedin`).then((res) => {
      if (!res.data) {
        setIsLoggedin(false);
      }
    });
  }, []);

  if (!isLoggedin) {
    return (
      <LoginPage
        heading="Please Login"
        description="
   This function is only for administrators, if you have an account, please login to use"
      />
    );
  }

  return <> {props.children}</>;
}

export default LoginCheck;
