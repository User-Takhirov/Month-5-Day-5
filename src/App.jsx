import { MainLayout } from "./Layout/main-layout";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { User } from "./Pages/User";
import { Contact } from "./Pages/ProfileP";
import { UserDetail } from "./Pages/UserDetail";
import data from "./assets/img/NoData.png";
import style from "./App.module.scss";
import { ProfileLayout } from "./components/Profile-Layout/Profile-Layout";
import { ChangeAdress } from "./Pages/change-address";
import { CreateProfile } from "./Pages/create-profile";
import { ChangeProfile } from "./Pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Contact />} />
            <Route path="change-address" element={<ChangeAdress />} />
            <Route path="create-profile" element={<CreateProfile />} />
            <Route path="change-profile" element={<ChangeProfile />} />
          </Route>
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
    </>
  );
}

export default App;
