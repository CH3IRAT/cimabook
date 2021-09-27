import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dash/Dashboard";
import { PrivateRoute } from "./components/Router/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "./js/actions/user";
import ListMovie from "./components/movie/ListMovie";
import FilmOne from "./components/Moviecard/FilmOne";
import Home from "./components/Home page/Home"
import ListSearch from "./components/movie/Search/ListSearch";
import EditProfil from "./components/Navbar/EditProfil"
import { Notfound } from "./components/AboErr/Notfound";
import {About} from "./components/AboErr/About"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);

  return (
    <div>
     <Switch> 
      <Route exact path="/" component={Home} />


      <Route exact path="/login" component={Signup} />
      <PrivateRoute path="/Dashboard" component={Dashboard} />
      <PrivateRoute path="/movies" component={ListMovie} />
      <PrivateRoute exact path="/film/:id" component={FilmOne} />
      <PrivateRoute path="/search" component={ListSearch} />
      <PrivateRoute path="/EditProfil" component={EditProfil} />
      <Route path="/about"  component={About} />
      <Route path="*"  component={Notfound} />

</Switch>



      
    </div>
  );
}

export default App;
