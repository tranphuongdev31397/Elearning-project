import React from "react";
import { useSelector } from "react-redux";
import NavAuthLogged from "./NavAuthLogged/NavAuthLogged";
import NavAuthNotLogin from "./NavAuthNotLogin/NavAuthNotLogin";
import NavAuthStore from "./NavAuthStore/NavAuthStore";

export default function NavAuth(props) {

  const { currentUser } = useSelector((state) => state.authReducer);

  return (
    <div className="grid grid-cols-3 w-100">
      <div className="col-span-1  m-auto">
        <NavAuthStore />
      </div>
      <div className="col-span-2 clientControl">
        {currentUser ? <NavAuthLogged /> : <NavAuthNotLogin />}
      </div>
    </div>
  );
}
