import React from "react";
import style from "./profile.module.scss";
import { Link, Outlet } from "react-router-dom";
export const ProfileLayout = () => {
  return (
    <>
      <div className={style.profilewrap}>
        <div className={style.boxProf}>
          <Link className={style.links} to={"/profile"}>Profile</Link>
          <Link className={style.links} to={"/profile/change-address"}>ChangeAddress</Link>
          <Link className={style.links} to={"/profile/change-profile"}>ChangeProfile</Link>
          <Link className={style.links} to={"/profile/create-profile"}>CreateProfile</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
