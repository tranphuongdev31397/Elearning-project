import React from "react";
import NavAuthProfile from "./NavAuthProfile/NavAuthProfile";
import NavAuthStore from "./NavAuthStore/NavAuthStore";

export default function NavAuth() {
  return (
    <div className="grid grid-cols-3 w-100">
      <div className="col-span-1  m-auto">
        <NavAuthStore />
      </div>
      <div className="col-span-2">
        <NavAuthProfile />
      </div>
    </div>
  );
}
