import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import "./register.css";
import { postRegister } from "../../store/asyncMethods/AuthMethods";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { loading, registerErrors, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const userRegister = async (e) => {
    e.preventDefault();
    dispatch(postRegister(state));
  };
  useEffect(() => {
    if (registerErrors?.length > 0) {
      registerErrors?.map((error) => toast.error(error.msg));
    }
  }, [registerErrors, user]);
  return (
    <>
      <div className="">
        <div className="backBtn">
          <Link to="/" style={{ color: "#ea9373" }}>
            Back to Home
          </Link>
        </div>
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
              <div className="authTitle">Register</div>
            </div>
            <div>
              <div className="group">
                <input
                  type="text"
                  name="name"
                  className="authInput"
                  placeholder="Enter Name"
                  value={state.name}
                  onChange={handleInputs}
                />
              </div>
              <div className="group">
                <input
                  type="email"
                  name="email"
                  className="authInput"
                  placeholder="Enter Email"
                  value={state.email}
                  onChange={handleInputs}
                />
              </div>
              <div className="group">
                <input
                  type="password"
                  name="password"
                  className="authInput"
                  placeholder="Enter Password"
                  value={state.password}
                  onChange={handleInputs}
                />
              </div>
              <div className="swipPage">
                Already have account?{" "}
                <span>
                  <Link to="/login" style={{ color: "#ea9373" }}>
                    Login
                  </Link>
                </span>{" "}
                here.
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="authInputSubmit"
                  value={loading ? "Loading..." : "Register"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
