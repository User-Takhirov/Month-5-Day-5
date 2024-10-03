import React from "react";
import { Header } from "./Header/header";
import { Footer } from "./Footer/footer";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer  />
    </>
  );
};
