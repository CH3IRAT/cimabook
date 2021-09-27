import { useEffect, useState } from "react";
import { showMovie } from "../../js/actions/movie";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import "./ListMovie.css";
import { MovieCard } from "../Moviecard/MovieCard";
import { Button } from "semantic-ui-react";
import NavLogout from "../Navbar/NavLogout";
import ModalAdd from "./ModalAdd";
import { Input } from "semantic-ui-react";
import Footer from "../Navbar/Footer";

const ListMovie = () => {
  const dispatch = useDispatch();
  const [text, settext] = useState(false);
  useEffect(() => {
    dispatch(showMovie());
  }, []);

  const [textee, setTextee] = useState("");
  const filterText = (textee) => {
    setTextee(textee);
  };

  const Movies = useSelector((state) => state.movieReducer.movie);
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div style={{ backgroundColor: "rgb(27,28,29)" }}>
      <div>
        <NavLogout />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            placeholder="Search..."
            onChange={(e) => {
              filterText(e.target.value);
            }}
          />
        </div>
        {user && user.isAdmin ? (
          <div style={{ marginLeft: "747px", marginBottom: "20px" }}>
            {" "}
            <ModalAdd />{" "}
          </div>
        ) : (
          <div></div>
        )}

        <Button
          style={{
            height: "50px",
            width: "700px",
            marginLeft: "50px",
            borderRadius: "5%",
          }}
          color="red"
          onClick={() => settext(false)}
        >
          {" "}
          FILM
        </Button>
        <Button
          style={{
            height: "50px",
            width: "700px",
            marginLeft: "10px",
            borderRadius: "5%",
          }}
          onClick={() => settext(true)}
        >
          STREAM
        </Button>

        <div className="movie-list">
          {Movies.length ? (
            Movies.filter((el) => el.isStream == text)
              .filter((el) =>
                el.title.toLowerCase().includes(textee.toLowerCase())
              )
              .map((el) => <MovieCard movie={el} />)
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListMovie;
