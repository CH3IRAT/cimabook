import React, { useState } from "react";
import { loginuser, registeruser } from "../../js/actions/user";
import { useDispatch } from "react-redux";
import "./Signup.css";
import { useHistory } from "react-router-dom";
import NavLogin from "../Navbar/NavLogin";
import Footer from "../Navbar/Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  function handleClick() {
    history.push("/movies");
  }
  return (
    <div style={{ backgroundColor: "rgb(27,28,29)" }}>
      <NavLogin />
      <div className="hr" />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="col-md-6 mx-auto p-0">
          <div style={{ width: "20px" }}>
            <div className="login-box">
              <div className="login-snip">
                {" "}
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  defaultChecked
                />
                <label htmlFor="tab-1" className="tab">
                  Login
                </label>{" "}
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                  Sign Up
                </label>
                <div className="login-space">
                  <div className="login">
                    <div className="group">
                      {" "}
                      <label htmlFor="user" className="label">
                        email
                      </label>{" "}
                      <input
                        id="user"
                        type="text"
                        className="input"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Password
                      </label>{" "}
                      <input
                        id="pass"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <input
                        id="check"
                        type="checkbox"
                        className="check"
                        defaultChecked
                      />{" "}
                      <label htmlFor="check">
                        <span className="icon" /> Keep me Signed in
                      </label>{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign In"
                        onClick={() =>
                          dispatch(loginuser({ email, password }, history))
                        }
                      />{" "}
                    </div>
                    <div className="hr" />
                  </div>

                  <div className="sign-up-form">
                    <div className="group">
                      {" "}
                      <label htmlFor="user" className="label">
                        name
                      </label>{" "}
                      <input
                        id="user"
                        type="text"
                        className="input"
                        placeholder="Create your name"
                        onChange={(e) => setName(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        lastname
                      </label>{" "}
                      <input
                        id="pass"
                        type="text"
                        className="input"
                        data-type="text"
                        placeholder="Create your lastname"
                        onChange={(e) => setLastName(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Email Address
                      </label>{" "}
                      <input
                        id="pass"
                        type="text"
                        className="input"
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        {" "}
                        Password
                      </label>{" "}
                      <input
                        id="pass"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="create your password"
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign Up"
                        onClick={() =>
                          dispatch(
                            registeruser(
                              { name, lastname, email, password },
                              history
                            )
                          )
                        }
                      />{" "}
                    </div>
                    <div className="hr" />
                    <div className="foot">
                      {" "}
                      <label htmlFor="tab-1">Already Member?</label>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hr" />
    </div>
  );
};

export default Signup;
