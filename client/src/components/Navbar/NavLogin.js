import { Button, Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../js/actions/user";

const NavLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  let history = useHistory();
  function handleClick() {
    if (!user) {
      history.push("/login");
    }
    if (user) {
      history.push("/movies");
    }
  }
  function abouleClick() {
    history.push("/about");
  }

  return (
    <div>
      <Menu style={{ backgroundColor: "rgb(27,28,29)" }}>
        <Button
          negative
          onClick={handleClick}
          style={{ backgroundColor: "rgb(27,28,29)", display: "flex" }}
        >
          Movies
        </Button>
        <Button
          negative
          onClick={handleClick}
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

        {user ? (
          <Button
            secondary
            onClick={() => {
              dispatch(logout());
              history.push("/");
            }}
            style={{
              backgroundColor: "red",
              display: "flex",
              marginLeft: "70%",
            }}
          >
            logout{" "}
          </Button>
        ) : (
          <Button
            secondary
            onClick={handleClick}
            style={{
              backgroundColor: "red",
              display: "flex",
              marginLeft: "70%",
            }}
          >
            Sign in{" "}
          </Button>
        )}
      </Menu>
    </div>
  );
};

export default NavLogin;
