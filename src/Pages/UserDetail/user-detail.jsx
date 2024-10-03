import React from "react";
import { useParams } from "react-router-dom";
import g1984 from "../../assets/img/george.png";
import style from "./user-detail.module.scss";
export const UserDetail = () => {
  const [data, setdata] = React.useState({});
  const params = useParams();

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className={style.block}>
          <img src={g1984} alt="#" />
          <div>
            <h1 className={style.title}>{data.name}</h1>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className={style.flex}>
                <div>

                <p className={style.innertitle}>email</p>
              <p className={style.street}>{data.email}</p>
                </div>
                <div>
<p className={style.innertitle}>Нашриёт</p>
              <p className={style.street}>Wepress Inc.</p>
                </div>
                <div>
<p className={style.innertitle}>Йил</p>
              <p className={style.street}>1984</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
