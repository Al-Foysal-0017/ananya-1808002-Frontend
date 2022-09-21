import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);
  // const { transport } = useSelector((state) => state.transports);
  const { places } = useSelector((state) => state.places);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const [responseData, setResponseData] = useState("");
  const [responseError, setResponseError] = useState("");
  console.log(responseError);

  const handleChange = (e) => {
    setSource(e.target.value);
  };

  const handleChangeDestination = (e) => {
    setDestination(e.target.value);
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You are not login now. Please login first.");
    } else {
      if (!destination) {
        toast.error("Please select a destination.");
      }
      if (!source) {
        toast.error("Please select a source.");
      }
    }
    setLoading(true);
    if (user && destination && source) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/find/transport",
          {
            source,
            destination,
          },
          config
        );
        console.log(data);
        setResponseData(data?.response?.transport);
        setResponseError("");
        setLoading(false);
      } catch (error) {
        setResponseError(error?.response?.data?.errors[0]?.msg);
        setResponseData("");
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <Navbar />
      <section>
        <div class="box">
          <nav class="navcon">
            <ul class="navlinks">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#Contact_sec">Contact</a>
              </li>
              <li>
                <a href="#About_sec">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <div class="side-nav" id="side-menu">
        {/* <a href="#" class="btn-close" onclick="closeSlideMenu()">
          <img src="prj_images/x-mark.png" alt="" />
        </a> */}
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#Contact_sec">Contact</a>
        <a href="#About_sec">About</a>
      </div>
      <p class="fpara">
        A plateform where you can find the information of
        <br /> local transport from one place to another in a city{" "}
      </p>
      {/* Service Section */}
      <section className="service">
        <div id="services">
          <h2 className="h-secondary text_align">Our Services</h2>
          <div className="serve_container">
            {/* <div className="box1" id="s_box1">
              <h4 className="h_serv">
                Source
                <img
                  src="https://img.icons8.com/dusk/64/000000/open-source.png"
                  alt=""
                />
              </h4>
              <div className="small_box"></div>
              <h4 className="h_serv">
                Destination
                <img src="prj_images/Destination.png" alt="" />
              </h4>
              <div className="small_box"></div>
              <a href="" className="serv_btn">
                GO
              </a>
            </div> */}
            <form onSubmit={onSubmitHandle}>
              <div
                style={{
                  // border: "1px solid #000",
                  marginTop: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width={104}
                  height={104}
                  src="https://img.icons8.com/dusk/64/000000/open-source.png"
                  alt=""
                />
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
              <div
                style={{
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width={104}
                  height={104}
                  src="prj_images/Destination.png"
                  alt=""
                />
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
              <button className="submitGo" id="submitt" type="submit">
                Go
              </button>
            </form>
          </div>
          {(responseData || responseError) && (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: "#fff",
                  fontSize: "48px",
                  padding: "2rem",
                  borderRadius: "8px",
                  margin: "100px auto 0 auto",
                  left: 0,
                  right: 0,
                  maxWidth: "600px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    color: "gray",
                    marginBottom: "1rem",
                  }}
                >
                  For{" "}
                  <span style={{ color: "green" }}>
                    {source?.toUpperCase()}
                  </span>{" "}
                  to{" "}
                  <span style={{ color: "green" }}>
                    {destination?.toUpperCase()}{" "}
                  </span>
                  you need to these transports-
                </div>
                <div>{responseData && responseData} </div>
                <div>{responseError && responseError} </div>
              </div>
              <div className="box1" id="f_box1">
                <img
                  style={{
                    width: "100vw",
                    height: "600px",
                    objectFit: "cover",
                  }}
                  src="prj_images/img2.jpg"
                  alt="pic"
                />
              </div>
              <div
                className="det"
                style={{
                  position: "absolute",
                  background: "#EA9373",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                  margin: "-100px auto 0 auto",
                  left: 0,
                  right: 0,
                  maxWidth: "600px",
                }}
              >
                <details>
                  <summary>More Info</summary>
                  <p>
                    TO use our website ,at first select your place and then
                    select your destination ,click on go.You will get desired
                    information.
                  </p>
                </details>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* <!--About section--> */}
      <section id="About_sec">
        <div className="container">
          <h2 className="h-secondary text_align">
            <i className="icons fas fa-duotone fa-book-open"></i>About us
            <i className="icons fas fa-duotone fa-book-open"></i>
          </h2>
          <p className="spara">
            Locaport is a plateform which renders the information of different
            local transport available in your desired place in Chattagram. The
            name “Locaport” is the combination two words Local and Transport.
            Our site reduces the difficulties of finding transports such as
            Route Bus, CNG, Leguna, Rickshaw,Tempu etc
          </p>
          <div className="highway bac_opacity"></div>
          <div className="city bac_opacity"></div>
          <div className="car">
            <img src="prj_images/car.png" alt="car" />
          </div>
          <div className="wheel bac_opacity">
            <img src="prj_images/wheel.png" id="f_wheel" alt="cwheel" />
            <img src="prj_images/wheel.png" id="b_wheel" alt="cwheel" />
          </div>
        </div>
      </section>

      {/* <!--Contact section--> */}
      <section id="Contact_sec">
        <h2 className="h-secondary text_align">
          <i className="icons far fa-address-book"></i>Contact Us
          <i className="icons far fa-address-book"></i>
        </h2>
        <div className="contact_links">
          <ul>
            <li>
              <a href="https://www.facebook.com">
                <i className="contact_icons fab fa-facebook"></i>
              </a>
              Facebook
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i className="contact_icons fab fa-instagram"></i>
              </a>
              Instagram
            </li>
            <li>
              <a href="https://www.gmail.com">
                <i className="contact_icons far fa-envelope"></i>
              </a>
              Email
            </li>
          </ul>
        </div>
        <p className="spara">
          <i className="fas fa-share"></i>Share Your feelings using our website.
          <br />
          <i className="far fa-comment"></i> Feel free to contact us for any
          help.
        </p>
      </section>

      <section>
        <footer className="foot">
          <h3>&copy All rights reserved by LOCAPORT.</h3>
        </footer>
      </section>
    </>
  );
};

export default Home;
