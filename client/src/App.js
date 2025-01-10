import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "./redux/Actions/actionsProduct";
import Signup from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { getCurrent } from "./redux/Actions/actionUser";
import EditProduct from "./pages/EditProduct/EditProduct";
import Addproduct from "./pages/Addproduct/Addproduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./Routes/PrivateRoute";
import Settings from "./pages/Settings/Settings";
import CompanyRoute from "./Routes/CompanyRoute";
import AdminRoute from "./Routes/AdminRoute";
import DashboardAdmin from "./pages/DashboardAdmin/DashboardAdmin";
import PrivateHome from "./pages/PrivateHome/PrivateHome";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getCurrent());
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <PrivateHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profileSettings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="/addproduct"
          element={
            <CompanyRoute>
              <Addproduct />
            </CompanyRoute>
          }
        />
        <Route
          path={"/editproduct/:id"}
          element={
            <CompanyRoute>
              <EditProduct/>
            </CompanyRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <DashboardAdmin />
            </AdminRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
