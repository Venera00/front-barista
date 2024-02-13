import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import LoginPage from "../pages/EmailLoginPage/LoginPage";
import CodeLoginPage from "../pages/CodeLoginPage/CodeLoginPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import MenuPage from "../pages/MenuPage/MenuPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateStatus = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="verify"
          element={<CodeLoginPage updateStatus={updateStatus} />}
        />
        <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
