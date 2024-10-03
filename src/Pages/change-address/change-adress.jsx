import React from "react";
import style from "./change-address.module.scss";
import nodata from "../../assets/img/NoData.svg";
export const ChangeAdress = () => {
  return (
    <div>
      <div className={style.titleBlock}>
        <img src={nodata} alt="" />
        <h1 className={style.title}>Same with Address </h1>
      </div>
    </div>
  );
};
