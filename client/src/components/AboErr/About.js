import React from "react";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";

export const About = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <h1> ABOUUUUUUT </h1>
      <Button
        onClick={handleClick}
        style={{ width: "250", textAlign: "center" }}
      >
        {" "}
        Home{" "}
      </Button>
    </div>
  );
};
