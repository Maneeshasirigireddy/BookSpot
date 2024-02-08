import React from "react";
import NavBar from "../nav-bar/Nav-bar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
