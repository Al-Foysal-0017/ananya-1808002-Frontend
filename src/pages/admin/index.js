import React from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./adminPanel.css";
import AdminNavbar from "../../components/adminNavbar";
import { useDispatch } from "react-redux";
import { getPlaces } from "../../store/asyncMethods/Places";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);

  const userRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!place) {
      toast.error("Please select a place.");
      setLoading(false);
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post("/add/place", { place }, config);

      setLoading(false);
      dispatch(getPlaces());
      navigate("/admin/all/places");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <AdminNavbar />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />

      <div className="formContainer">
        <form className="AuthForm" onSubmit={userRegister}>
          <div className="">
            <div className="authTitle">Add Place</div>
          </div>
          <div>
            <div className="group">
              <input
                type="text"
                name="name"
                className="authInput"
                placeholder="Enter place name"
                value={place}
                onChange={(e) => {
                  setPlace(e.target.value);
                }}
              />
            </div>
            <div className="group">
              <input
                type="submit"
                className="authInputSubmit"
                value={loading ? "Loading..." : "Add Place"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
