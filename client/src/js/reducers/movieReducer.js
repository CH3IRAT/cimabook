import {
  LOAD_MOVIE,
  REGISTER_MOVIE,
  FAIL_MOVIE,
  GET_ONE_MOVIE,

  EDIT_MOVIE
} from "../const/movie";
const initialState = {
  movie: [],
  loadMovie: false,
  errors: null,
  one: {},
  text:'',
  editMovie: "",
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_MOVIE:
      return { ...state, loadMovie: true };
    case REGISTER_MOVIE:
      return { ...state, loadMovie: false, movie: payload };
    case FAIL_MOVIE:
      return { ...state, loadMovie: false, errors: payload };
    case GET_ONE_MOVIE:
      return { ...state, one: payload.reponse };
  
      case EDIT_MOVIE:
        return { ...state, editMovie: payload };

    default:
      return state;
  }
};
