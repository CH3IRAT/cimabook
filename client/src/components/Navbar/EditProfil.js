import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current, editUser } from "../../js/actions/user";
import { toggleTrue } from "../../js/actions/edit";
import NavLogout from "./NavLogout";
import { useHistory } from "react-router-dom";
import "./EditProfil.css";
import Footer from "./Footer";
const EditProfil = () => {
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    setNuser(user);
  }, [user]);

  const [nuser, setNuser] = useState();
  //  useEffect(() => {

  //       edit ? setNuser(user) : setNuser({user});
  //     }, [user, edit]);

  //onchange
  const handleChange = (e) => {
    e.preventDefault();
    setNuser({ ...nuser, [e.target.name]: e.target.value });
  };
  // handleuser

  const handleuser = (user, nuser) => {
    dispatch(editUser(user._id, nuser));
    dispatch(toggleTrue());
  };
  const history = useHistory();
  function redirect() {
    history.push("/movies");
  }

  return (
    <div style={{ backgroundColor: "rgb(27,28,29)" }}>
      <NavLogout />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {nuser ? (
          <div className="login-space">
            <div className="login">
              <div className="group">
                {" "}
                <label htmlFor="user" className="label">
                  Name
                </label>{" "}
                <input
                  value={nuser.name}
                  name="name"
                  onChange={handleChange}
                  type="text"
                  className="input"
                  placeholder="Enter your name"
                />{" "}
              </div>
              <div className="group">
                {" "}
                <label htmlFor="user" className="label">
                  Lastname
                </label>{" "}
                <input
                  value={nuser.lastname}
                  name="lastname"
                  onChange={handleChange}
                  type="text"
                  className="input"
                  placeholder="Enter your lastname"
                />{" "}
              </div>
              <div className="group">
                {" "}
                <label htmlFor="pass" className="label">
                  Email
                </label>{" "}
                <input
                  value={nuser.email}
                  name="email"
                  onChange={handleChange}
                  type="password"
                  className="input"
                  type="text"
                  placeholder="Enter your email"
                />{" "}
              </div>
              <div className="group">
                {" "}
                <input
                  type="submit"
                  className="button"
                  defaultValue="save"
                  onClick={() => {
                    handleuser(user, nuser);
                    redirect();
                  }}
                />{" "}
              </div>
              <div className="hr" />
            </div>
          </div>
        ) : (
          <h1>loading ...</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EditProfil;
