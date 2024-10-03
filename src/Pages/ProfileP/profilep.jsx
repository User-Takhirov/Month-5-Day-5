import React from "react";
import style from "./profilep.module.scss";
import nodata from "../../assets/img/NoData.svg";
export const Contact = () => {
  return (
    <>
    <div className={style.titleBlock}>

      <img src={nodata} alt="#" />
      <h1 className={style.title}>You have no account yet </h1>
    </div>
    </>
  );
};
