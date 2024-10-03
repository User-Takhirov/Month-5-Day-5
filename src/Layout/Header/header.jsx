import React from "react";
import { Link } from "react-router-dom";
import { TopHeader } from "./top_header";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <>
      <TopHeader />
      <hr className={style.hr} />

      <div className="container">
        <div className={style.block}>
          <Link className={style.link}  to={"/home"}>
            Home
          </Link>
          <Link className={style.link} to={"/user"}>
            User
          </Link>
          <Link className={style.link} to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
      <hr className={style.hr} />
    </>
  );
};
