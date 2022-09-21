import React from "react";
import Navbar from "../../components/navbar";
import { useSelector } from "react-redux";
import AdminNavbar from "../../components/adminNavbar";

const AdminAllPlaces = () => {
  const { places } = useSelector((state) => state.places);
  return (
    <div>
      <Navbar />
      <AdminNavbar />
      <div>
        {places.map((item, index) => (
          <div
            style={{
              margin: "10px auto",
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              border: "1px solid gray",
              maxWidth: "600px",
              padding: "10px",
              background: "#EA9373",
              color: "#fff",
            }}
            key={index}
          >
            {item?.place}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAllPlaces;
