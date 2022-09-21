import React from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./adminPanel.css";
import AdminNavbar from "../../components/adminNavbar";
import { getTransports } from "../../store/asyncMethods/Transport";
import { useNavigate } from "react-router-dom";

const AdminAddTransport = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [transport, settransport] = useState("");
  const [loading, setLoading] = useState(false);
  const { places } = useSelector((state) => state.places);

  console.log(source, destination, transport);

  const handleChange = (e) => {
    setSource(e.target.value);
  };

  const handleChangeDestination = (e) => {
    setDestination(e.target.value);
  };

  const addtransport = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "/add/transport",
        { source, destination, transport },
        config
      );
      dispatch(getTransports());
      setLoading(false);
      navigate("/admin/all/transports");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <AdminNavbar />

      <div className="formContainer">
        <form className="AuthForm" onSubmit={addtransport}>
          <div className="">
            <div className="authTitle">Add Transport</div>
          </div>
          <div>
            <div className="group">
              <select value={source} onChange={handleChange}>
                <option selected hidden value="">
                  Select your place
                </option>
                {places.map((item, index) => (
                  <option key={index} value={item?.place}>
                    {item?.place}
                  </option>
                ))}
              </select>
            </div>
            <div className="group">
              <select value={destination} onChange={handleChangeDestination}>
                <option selected hidden value="">
                  Select your destination
                </option>
                {places.map((item, index) => (
                  <option key={index} value={item?.place}>
                    {item?.place}
                  </option>
                ))}
              </select>
            </div>
            <div className="group">
              <input
                type="text"
                name="name"
                className="authInput"
                placeholder="Transport"
                value={transport}
                onChange={(e) => {
                  settransport(e.target.value);
                }}
              />
            </div>
            <div className="group">
              <input
                type="submit"
                className="authInputSubmit"
                value={loading ? "Loading..." : "Add Transport"}
              />
            </div>
          </div>
        </form>
      </div>
      {/* <div>
        {places.map((item, index) => (
          <div key={index}>{item?.place}</div>
        ))}
      </div> */}
    </div>
  );
};

export default AdminAddTransport;
