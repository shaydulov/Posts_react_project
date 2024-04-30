import { useState } from "react";
import { Login } from "../login/Login";
import { SignUp } from "../signup/SignUp";

export const RegisterPage = () => {
  const [route, setRoute] = useState("login");

  const changeRoute = () => {
    route === "login" ? setRoute("signup") : setRoute("login");

  };

  return (
    <div>
      {route === "login" && <Login changeRoute={changeRoute} />}
      {route === "signup" && <SignUp changeRoute={changeRoute} />}
    </div>
  );
};
