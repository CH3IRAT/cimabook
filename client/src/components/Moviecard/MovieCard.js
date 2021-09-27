import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useHistory } from "react-router-dom";
import { deleteMovie } from "../../js/actions/movie";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";

import "./MovieCard.css";
import EditMovie from "../movie/EditMovie";
export const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteMovie());
  }, []);

  const Movies = useSelector((state) => state.movieReducer.movie);
  const user = useSelector((state) => state.userReducer.user);

  let history = useHistory();

  return (
    <div style={{ marginLeft: "10px" }}>
      <div class="cardi">
        <div class="overlay">
          <div class="contenu">
            <Link to={`/film/${movie._id}`}>
              {" "}
              <span> {movie.genre} </span>{" "}
            </Link>
            {movie.isStream ? (
              <a href={movie.src}>
                <i className="far fa-play-circle" />
              </a>
            ) : (
              <Link to={`/film/${movie._id}`}>
                <i className="far fa-play-circle" />
              </Link>
            )}
          </div>
        </div>
        <img src={movie.img} alt="fgrgrgÂ²" />
        <h3>{movie.title}</h3>
      </div>
      {movie.isStream ? (
        <div> </div>
      ) : (
        <ReactStars
          count={5}
          value={movie.rate}
          edit={false}
          size={24}
          activeColor="#ffd700"
        />
      )}
      {user && user.isAdmin ? (
        <div>
          {" "}
          <Button
            inverted
            color="red"
            onClick={() => dispatch(deleteMovie(movie._id))}
          >
            Delete
          </Button>
          <EditMovie movie={movie} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
