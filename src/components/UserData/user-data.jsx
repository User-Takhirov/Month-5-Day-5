// import React from "react";
// import style from "./user-data.module.scss";
// import { User } from "../../Pages/User";
// import { Link } from "react-router-dom";
// export const UserData = () => {
//   const [data, setData] = React.useState([]);
//   const getData = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       setData(data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   React.useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <>
//       {data.map((item) => (
//         <Link key={item.id} >
//         <h1>{item.name}</h1>
//         </Link>
//       ))}
//     </>
//   );
// };
