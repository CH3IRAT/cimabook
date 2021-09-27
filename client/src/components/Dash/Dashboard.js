import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import NavLogout from "../Navbar/NavLogout";
import Footer from "../Navbar/Footer";
import { current } from "../../js/actions/user";

const Dashbord = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  function handleClick() {
    history.push("/movies");
  }
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div style={{ backgroundColor: "rgb(27,28,29)" }}>
      <NavLogout />

      <img
        src="  https://i.ibb.co/s2zXBZn/DAD.png"
        onClick={handleClick}
        width="100%"
      ></img>
      <br></br>
      <img
        src="https://i.ibb.co/GWwJSF2/IPTV.png"
        onClick={handleClick}
        style={{ marginTop: " 20px" }}
      ></img>
      <hr style={{ color: "white" }}></hr>
      <Footer />

      <div></div>
    </div>
  );
};

export default Dashbord;
