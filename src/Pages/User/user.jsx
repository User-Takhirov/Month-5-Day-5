import React from "react";
import style from "./user.module.scss";
import { Link } from "react-router-dom";

export const User = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className={style.block}>
          {data.map((item) => (
            <Link key={item.id} to={`/user/detail/${item.id}`}>
              <div className={style.items}>
                <h1 className={style.text1}>{item.name}</h1>
                <p className={style.text2}>{item.email}</p>
                <p className={style.text3}>{item.address.city}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
