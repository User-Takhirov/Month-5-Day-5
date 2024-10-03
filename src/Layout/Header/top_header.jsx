import React from "react";
import icon from "../../assets/img/icon.svg";
import cube from "../../assets/img/cube.svg";
import uz from "../../assets/img/uz.svg";
import profile from "../../assets/img/profile.svg";

import style from "./top-header.module.scss";
export const TopHeader = () => {
  return (
    <>
      <div className="container">
        <div className={style.mainBlock}>
          <div>
            <img src={icon} alt="#" />
          </div>
          <div className={style.block}>
            <div className={style.selectBlock}>
              <img src={cube} alt="#" />
              <select className={style.select}>
                <option>Рукнлар</option>
              </select>
            </div>
            <div className={style.inputBlock}>
              <input
                className={style.input}
                type="text"
                placeholder="Қидириш"
              />
            </div>
          </div>
          <div className={style.proMain}>
            <div className={style.langBlock}>
              <img src={uz} alt="#" />
              <select className={style.lang}>
                <option>Ўз</option>
              </select>
            </div>
            <div className={style.profBlock}>
              <img src={profile} alt="#" />
              <a className={style.profile} href="#">
                Кириш
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
