import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { postLogin } from "../../store/asyncMethods/AuthMethods";
import { Link } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  const { loginErrors, loading } = useSelector((state) => state.user);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const userLogin = (e) => {
    e.preventDefault();
    dispatch(postLogin(state));
  };
  useEffect(() => {
    if (loginErrors?.length > 0) {
      loginErrors?.map((error) => toast.error(error.msg));
    }
  }, [loginErrors]);
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
          <form className="AuthForm" onSubmit={userLogin}>
            <div className="">
              <div className="authTitle">Login</div>
            </div>
            <div>
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
                First time in this site?{" "}
                <span>
                  <Link to="/register" style={{ color: "#ea9373" }}>
                    Register
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
export default Login;
