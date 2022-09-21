import React from "react";
import Navbar from "../../components/navbar";
import { useSelector } from "react-redux";
import AdminNavbar from "../../components/adminNavbar";

const AdminAllTransports = () => {
  const { transport } = useSelector((state) => state.transports);
  return (
    <div>
      <Navbar />
      <AdminNavbar />
      <div>
        {transport.map((item, index) => (
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
            <div>
              {" "}
              <div>
                <span style={{ color: "#000" }}>Source: </span>
                {item?.source?.toUpperCase()}
              </div>
              <div>
                <span style={{ color: "#000" }}>Destination: </span>
                {item?.destination?.toUpperCase()}
              </div>
              <div>
                <span style={{ color: "#000" }}>Transport: </span>
                {item?.transport}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAllTransports;
