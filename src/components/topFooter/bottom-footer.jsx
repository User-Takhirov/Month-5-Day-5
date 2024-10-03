import React from "react";
import style from "./bottom-footer.module.scss";
import instagram from "../../assets/img/instagram.svg";
import uzcard from "../../assets/img/uzcard.svg";
export const BottomFooter = () => {
  return (
    <>
      <div className={style.MainBlock}>
        <div className="container">
          <div className={style.block}>
            <nav>
              <h3 className={style.title}>Ижтимоий тармоқлар</h3>
              <ul className={style.list}>
                <li>
                  <a href="#">
                    <img src={instagram} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="#" />
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <h3 className={style.title}>Боғланиш</h3>
              <div className={style.contact_Block}>
                <div>
                  <a className={style.link} href="tel:+998902537753">
                    +998 90 253 77 53
                  </a>
                </div>
                <div>
                  <a className={style.link} href="mailto:support@liber.uz">
                    support@liber.uz
                  </a>
                </div>
              </div>
            </div>
            <nav>
              <h3 className={style.title}>Биз қабул қиламиз</h3>
              <ul className={style.cardlist}>
                <li>
                  <a href="#">
                    <img src={uzcard} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={uzcard} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={uzcard} alt="#" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
