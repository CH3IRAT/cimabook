import React, { useEffect, useState } from "react";
import {Modal,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {Input} from 'semantic-ui-react'
import {postNew} from "../../js/actions/movie"










const ModalAdd = () => {
  const [movie, setMovie] = useState({ title: "", img: "",isStream: "", rate: "",  genre: "" ,trailler: "" });

  const movieReducer = useSelector((state) => state.movieReducer.movie);

  const dispatch = useDispatch();


  const handleChange = (e) => {
    e.preventDefault();
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };


  const handleMovies = () => {
  
      dispatch(postNew(movie));
  
  };




  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW FILM </Modal.Title>
        </Modal.Header>
        <Modal.Body><Input onChange={handleChange} name="title"  placeholder='title...' /> 
        <Input   value={movie.img}  onChange={handleChange} name="img"  placeholder='img...' />
        <Input   value={movie.src}  onChange={handleChange} name="src" placeholder='src...' />
        <Input  value={movie.genre} onChange={handleChange} name="genre"  placeholder='genre...' />
        <Input   value={movie.rate}  onChange={handleChange} name="rate" placeholder='rate...' />
        <Input  value={movie.isStream}  onChange={handleChange}  name="isStream" placeholder='isStream?...' />
        <Input  value={movie.download}  onChange={handleChange}  name="download" placeholder='download?...' />
        <Input  value={movie.trailler}  onChange={handleChange}  name="trailler" placeholder='trailler?...' />
        <Input  value={movie.description}  onChange={handleChange}  name="description" placeholder='description?...' />
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={()=>{handleMovies();handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

    

export default ModalAdd
