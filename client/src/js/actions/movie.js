import {
  LOAD_MOVIE,
  REGISTER_MOVIE,
  FAIL_MOVIE,
  GET_ONE_MOVIE,
  EDIT_MOVIE,EDIT_MOVIE_FAIL

} from "../const/movie";
import axios from "axios";


export const showMovie = () => async (dispatch) => {
  dispatch({ type: LOAD_MOVIE });
  try {
    const result = await axios.get("/movie");
    dispatch({ type: REGISTER_MOVIE, payload: result.data.reponse });
  } catch (error) {
    dispatch({ type: FAIL_MOVIE });
    console.log(error);
  }
};

//get movie by id

export const getMovie = (id) => (dispatch) => {
  axios
    .get(`/movie/${id}`)
    .then((res) => dispatch({ type: GET_ONE_MOVIE, payload: res.data }))
    .catch((err) => console.log(err));
};

// delete movie
export const deleteMovie = (id) => (dispatch) => {
  axios
    .delete(`/movie/${id}`) 
    .then((res) => dispatch(showMovie()))  
    .catch((err) => console.log(err));
};
// post new movie
export const postNew = (movie) => async (dispatch) => {

  try {
    const result = await axios.post("/movie/movie", movie);
    dispatch({type:REGISTER_MOVIE,payload:result.data})
    dispatch(showMovie());
  } catch (error) {
    dispatch({type:FAIL_MOVIE,payload:error})
    console.log(error.response);
  }
};
//edit movie
export const editMovie = (id, movie) => async(dispatch) => {
  await axios
    .put(`/movie/${id}`, movie)
    .then((res) => {
      dispatch({ type: EDIT_MOVIE, payload: res.data.message });
    })
    .then(dispatch(showMovie()))
    .catch((err) => {console.log(err);
    dispatch({type:EDIT_MOVIE_FAIL})});
};