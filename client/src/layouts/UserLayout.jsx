import React from "react";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="container">
      <NavigationBar />
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default UserLayout;
