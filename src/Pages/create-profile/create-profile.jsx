import React from "react";
import style from "./create-profile.module.scss";
import nodata from "../../assets/img/NoData.svg";
export const CreateProfile = () => {
  return (
    <>
      <div className={style.titleBlock}>
        <img src={nodata} alt="#" />
        <h1 className={style.title}>Qwerty</h1>
      </div>
    </>
  );
};
