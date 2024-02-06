import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/orders" element={<OrdersPage />} /> //should be private
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
