import React from "react";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
import "./NavAuthNotLogin.scss";
export default function NavAuthNotLogin() {
  const btnLogin = "btn__login w-100";
  const btnSignUp = "btn__signup w-100";

  return (
    <div className="grid grid-cols-2 gap-2">
      {/* styleBtn is props param of Button Component */}
      <Link className="linkrouter__config" to="/login">
        <Button styleBtn={btnLogin}>Login</Button>
      </Link>
      <Link className="linkrouter__config" to="/signup">
      <Button styleBtn={btnSignUp}>Sign up</Button>

      </Link>


    </div>
  );
}
