import React,{ useEffect, useState }  from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import { logout } from "../../js/actions/user";

import Profil from "./Profil";
import { showMovie } from "../../js/actions/movie";

const NavLogout = () => {
  const dispatch = useDispatch();
  const [text, settext] = useState(false);
  useEffect(() => {
    dispatch(showMovie());
  }, []);

  const Movies = useSelector((state) => state.movieReducer.movie);
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();
  function handleClick() {
    history.push("/movies");
  }
  function abouleClick() {
    history.push("/about");
  }
  const homeClick = () => {
    history.push("/");
  };
  return (
    <div>
      <Menu style={{ backgroundColor: "rgb(27,28,29)", display: "flex" }}>
      <Button
          negative
          onClick={homeClick}
          style={{ backgroundColor: "rgb(27,28,29)", display: "flex" }}
        >
          Home{" "}
        </Button>
        <Button
          negative
          onClick={ function() {handleClick (); settext(false)} }
          style={{ backgroundColor: "rgb(27,28,29)", display: "flex" }}
        >
          Movies
        </Button>
        <Button
          negative
          onClick={ function() {handleClick (); settext(true)} }
          style={{ backgroundColor: "rgb(27,28,29)", display: "flex" }}
        >
          
          IPTV
        </Button>

        <Button
          negative
          onClick={abouleClick}
          style={{ backgroundColor: "rgb(27,28,29)", display: "flex" }}
        >
          ABOUT{" "}
        </Button>
        <Button
          secondary
          onClick={() => {
            dispatch(logout());
            history.push("/");
          }}
          style={{ backgroundColor: "red", display: "flex", marginLeft: "65%" }}
        >
          logout{" "}
        </Button>

        <Profil />
      </Menu>
     
    </div>
  );
};

export default NavLogout;
