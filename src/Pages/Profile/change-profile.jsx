import React from "react";
import style from "./change-profile.module.scss";
import nodata from "../../assets/img/NoData.svg";
export const ChangeProfile = () => {
  return (
    <>
      <div className={style.titleBlock}>
        <img src={nodata} alt="#" />
        <h1 className={style.title}>Same here too </h1>
      </div>
    </>
  );
};
