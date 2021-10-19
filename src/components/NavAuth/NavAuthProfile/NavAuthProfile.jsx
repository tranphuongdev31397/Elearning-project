import React from "react";
import Button from "../../../containers/Button/Button";
import "./NavAuthProfile.scss";
export default function NavAuthProfile() {
  const btnLogin = "btn__login";
  const btnSignUp = "btn__signup";

  return (
    <div className="grid grid-cols-2 gap-2">
        {/* styleBtn is props param of Button Component */}
      <Button styleBtn={btnLogin}>Login</Button>
      <Button styleBtn={btnSignUp}>Sign up</Button>
    </div>
  );
}
