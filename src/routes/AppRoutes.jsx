import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/EmailLoginPage/LoginPage";
import CodeLoginPage from "../pages/CodeLoginPage/CodeLoginPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="verify" element={<CodeLoginPage />} />
        <Route path="/orders" element={<OrdersPage />} /> //should be private
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
