import React from "react";
import style from "./footer.module.scss";
import playmarket from "../..//assets/img/playmarket.svg";
import { BottomFooter } from "../../components/topFooter";
export const Footer = () => {
  return (
    <>
      <div className={style.mainBlock}>
        <div className="container">
          <div className={style.block}>
            <ul>
              <li className={style.item}>
                <a className={style.link1} href="#">
                  Платформа хақида
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="#">
                  Liber ўзи нима?
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="#">
                  Фойдаланиш шартлари
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="#">
                  Ёрдам
                </a>
              </li>
            </ul>
            <ul>
              <li className={style.item}>
                <a className={style.link1} href="#">
                  Обуна хақида
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="#">
                  Обуна бўлиш
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="#">
                  Қандай тўлаш
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="#">
                  Ёрдам
                </a>
              </li>
            </ul>
            <ul>
              <li className={style.item}>
                <a className={style.link1} href="#">
                  Китоблар
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="#">
                  Аудио китоблар
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="#">
                  Электрон китоблар
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="#">
                  Китоблар
                </a>
              </li>
            </ul>
            <ul>
              <li className={style.item}>
                <a className={style.link1} href="#">
                  Мобил илова
                </a>
              </li>
              <li className={style.playmarket}>
                <a href="#">
                  <img src={playmarket} alt="#" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={playmarket} alt="#" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BottomFooter />
    </>
  );
};
