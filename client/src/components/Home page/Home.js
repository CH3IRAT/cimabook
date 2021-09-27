import React from "react";
import "./Home.css";
import video from "./video.mp4";
import { useHistory } from "react-router-dom";
import {
  Button
} from "semantic-ui-react";
import Footer from "../Navbar/Footer";

import NavLogin from "../Navbar/NavLogin";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  let history = useHistory();
  function handleClick() {
    if (! user){
      history.push("/login");
    }
    if (  user) { history.push("/movies")}
    
  }
 
  return (
    <div>
      <NavLogin />

      <div>
        
        <div>
          <header>
            {/* This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS */}
            <div className="overlay" />
            {/* The HTML5 video element that will create the background video on the header */}
            <video
              playsInline="playsinline"
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source src={video} />
            </video>

            {/* The header content */}
            <div className="container h-100">
              <div className="d-flex h-100 text-center align-items-center">
                <div className="w-100 text-white">
                  <h1
                    style={{
                      fontSize: "75px",
                      color: "white",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    welcome to our website{" "}
                  </h1>
                  <Button
                    secondary
                    onClick={handleClick}
                    className="display-3"
                    style={{ backgroundColor: "red" }}
                  >
                    <p style={{ fontSize: "35px", textAlign: "center" }}>
                      WATCH !
                    </p>{" "}
                  </Button>
                </div>
              </div>
            </div>
          </header>
          {/* Page section example for content below the video header */}
          <section className="my-5">
            <div className="container">
              <div className="row">
                <div style={{ textAlign: "center" }}>
                  <p>
                    This website is a streaming service that offers a wide
                    variety of award-winning TV shows
                  </p>
                  <p>
                    , movies, anime, documentaries, and more on thousands of
                    internet-connected devices.
                  </p>
                  <p>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
