import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register/Register";
import Login from "./pages/login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import AdminPanel from "./pages/admin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPlaces } from "./store/asyncMethods/Places";
import AdminAllPlaces from "./pages/adminAllPlaces";
import AdminAddTransport from "./pages/adminAddTransport";
import { getTransports } from "./store/asyncMethods/Transport";
import AdminAllTransports from "./pages/adminAllTransports";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaces());
    dispatch(getTransports());
  }, [dispatch]);
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login></Login>
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register></Register>
              </PublicRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/all/places"
            element={
              <PrivateRoute>
                <AdminAllPlaces />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/add/transport"
            element={
              <PrivateRoute>
                <AdminAddTransport />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/all/transports"
            element={
              <PrivateRoute>
                <AdminAllTransports />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
