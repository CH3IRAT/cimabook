import { useEffect, useState } from "react";
import { showMovie } from "../../../js/actions/movie";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import "../../movie/ListMovie.css";
import { MovieCard } from "../../Moviecard/MovieCard";
import MovieFiltre from "./MovieFiltre";

const ListSearch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMovie());
  }, []);
  const movie = useSelector((state) => state.movieReducer.movie);
  const one = useSelector((state) => state.movieReducer.one);
  console.log(one.isStream);
  //search
  const [textee, setTextee] = useState("");
  const filterText = (textee) => {
    setTextee(textee);
  };

  return (
    <div>
      <MovieFiltre filterText={filterText} />

      <div className="movie-list">
        {textee
          ? movie
              .filter((el) => el.isStream == false)
              .filter((el) =>
                el.title.toLowerCase().includes(textee.toLowerCase())
              )
              .map((el) => <MovieCard movie={el} />)
          : null}
      </div>
    </div>
  );
};

export default ListSearch;
