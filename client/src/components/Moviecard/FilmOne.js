import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovie } from "../../js/actions/movie";
import "./filmone.css";
import NavLogout from "../Navbar/NavLogout";
import Footer from "../Navbar/Footer";
import teswira from "./teswira.png";
import { Button } from 'semantic-ui-react'
const FilmOne = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie(params.id));
  }, []);
  const one = useSelector((state) => state.movieReducer.one);
  function scrollWin() {
    window.scrollTo(0, 1300);
  }
  return (
    <div>
      <NavLogout />

      {one ? (
        <div>
          <div className="bodyou" style={{ padding: "100px" }}>
            <div className="cardou">
              <section className="movie_image">
                <img
                  className="movie_poster"
                  src={one.img}
                  alt="As Above So Below"
                />
              </section>
              <section className="center">
                <div className="about_movie">
                  <h1>{one.title}</h1>
                  <div className="movie_info">
                    <p>2014</p>
                    <p>1h 33min</p>
                    <p>Horror, Mystery, Thriller </p>
                  </div>
                  <div className="movie_desc">
                    <p>{one.description}</p>
                  </div>
                  <button
                    className="watch"
                    onClick={() => {
                      scrollWin();
                    }}
                  >
                    {" "}
                    <svg
                      viewBox="0 0 30.051 30.051"
                      style={{ enableBackground: "new 0 0 30.051 30.051" }}
                      xmlSpace="preserve"
                    ></svg>{" "}
                    Watch Now!
                  </button>
                </div>
              </section>
              <svg
                className="wavy"
                viewBox="0 0 500 500"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                  style={{ stroke: "none" }}
                />
              </svg>
            </div>
            <div className="bg">
              <img src={teswira} alt="background" />
            </div>
          </div>
          <div style={{ marginLeft: "500px", marginTop: "100px" }}>
            <h1 style={{ marginLeft: "250px", color: "white" }}>Trailler</h1>
            <iframe
              width="560"
              height="315"
              src={one.trailler}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div style={{ marginLeft: "250px", marginTop: "100px" }}>
            <h1 style={{ marginLeft: "400px", color: "white" }}>Watch Now</h1>
            <iframe
              width="1000"
              height="500"
              src={one.src}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
          <Button secondary  
          style = {{marginLeft : "650px", width : "250px" , height : "100px" , marginTop : "70px"}}
          >
          
            <a href={one.download} style={{color:"white",textDecoration:"none"}}>
             <h1>DOWNLOAD</h1> 
              </a>
            </Button>
        </div>
      ) : (
        <h1>loading.....</h1>
      )}
      <Footer />
    </div>
  );
};

export default FilmOne;
