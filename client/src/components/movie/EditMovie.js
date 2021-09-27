import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import {
  editMovie,
} from "../../js/actions/movie";
import { toggleTrue } from "../../js/actions/edit";
import { Button } from "semantic-ui-react";

const EditMovie = ({ movie }) => {
  const [nmovie, setMovie] = useState(movie);

  const handleChange = (e) => {
    e.preventDefault();
    setMovie({ ...nmovie, [e.target.name]: e.target.value });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const dispatch = useDispatch();
  const handleMovie = () => {
    dispatch(editMovie(movie._id, nmovie));
    dispatch(toggleTrue());
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button inverted color="green" type="submit" onClick={() => handleShow()}>
        update{" "}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> update this film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={nmovie.title}
            name="title"
            placeholder="title..."
            onChange={handleChange}
          />
          <Input
            value={nmovie.img}
            name="img"
            placeholder="img..."
            onChange={handleChange}
          />
          <Input
            value={nmovie.src}
            name="src"
            placeholder="src..."
            onChange={handleChange}
          />
          <Input
            value={nmovie.genre}
            name="genre"
            placeholder="genre..."
            onChange={handleChange}
          />
          <Input
            value={nmovie.rate}
            name="rate"
            placeholder="rate..."
            onChange={handleChange}
          />
          <Input
            value={nmovie.isStream}
            name="isStream"
            placeholder="isStream?..."
            onChange={handleChange}
          />
          <Input
            value={nmovie.description}
            name="description"
            placeholder="description?..."
            onChange={handleChange}
          />
          <Input
            value={nmovie.trailler}
            name="trailler"
            placeholder="trailler?..."
            onChange={handleChange}
          />
          <Input
            value={nmovie.download}
            name="download"
            placeholder="download?..."
            onChange={handleChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleMovie();
              refreshPage();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditMovie;
