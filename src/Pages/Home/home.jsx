import React from "react";
import style from "./home.module.scss";
import reader from "../../assets/img/reader.svg";
import george from "../../assets/img/george.png";
import code8 from "../../assets/img/code8.png";
import richdad from "../../assets/img/richDad.png";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className={style.MainBlock}>
          <div className={style.block}>
            <div className={style.mreaded}>
              <h1 className={style.title}>Кўп ўқилаётганлар</h1>
              <img src={reader} alt="#" />
            </div>
            <ul className={style.list}>
              <li className={style.item}>
                <a href="#">
                  <img src={george} alt="#" />
                </a>
                <a className={style.link} href="#">
                  1984
                </a>
              </li>
              <li className={style.item}>
                <a href="#">
                  <img src={code8} alt="#" />
                </a>
                <a className={style.link} href="#">
                  Code 8
                </a>
              </li>
              <li className={style.item}>
                <a href="#">
                  <img src={richdad} alt="#" />
                </a>
                <a className={style.link} href="#">
                  Rich dad poor dad
                </a>
              </li>
            </ul>
          </div>
          <div className={style.bookblock}>
            <h2 className={style.booktitle}>Китоб ўқишни ёқтирасизми?</h2>
            <p className={style.booktext}>
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <button className={style.btn}>Обуна бўлиш</button>
          </div>
        </div>
      </div>
    </>
  );
};
