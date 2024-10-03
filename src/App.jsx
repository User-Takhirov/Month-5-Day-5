import { MainLayout } from "./Layout/main-layout";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { User } from "./Pages/User";
import { Contact } from "./Pages/Contacts";
import { UserDetail } from "./Pages/UserDetail";
import data from "./assets/img/NoData.png";
import style from "./App.module.scss";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/detail/:id" element={<UserDetail />} />
            <Route
              path="*"
              element={
                <div className={style.data}>
                  <img src={data} alt="#" />
                  <h1>No Data Found</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
