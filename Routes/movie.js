const express = require("express");
const router = express.Router();
const movie = require("../models/movie");
//Get all movie
router.get("/", async (req, res) => {
  try {
    let result = await movie.find();
    res.send({ reponse: result, message: "getted all movies" });
  } catch (error) {
    res.status(400).send("can not get movies");
  }
});
//post movie
router.post("/movie", async (req, res) => {
  const {
    title,
    img,
    src,
    isStream,
    description,
    rate,
    genre,
    trailler,
    isFilm,
    download,
  } = req.body;
  try {
    const newMovie = new movie({
      title,
      img,
      src,
      isStream,
      description,
      rate,
      genre,
      trailler,
      isFilm,
      download,
    });
    await newMovie.save();

    res.status(200).send({ msg: "Movie is saved" });
  } catch (error) {
    res.status(500).send({ msg: "can not save the Movie" });
  }
});
//delete movie
router.delete("/:id", async (req, res) => {
  try {
    let result = await movie.deleteOne({ _id: req.params.id });
    result.deletedCount
      ? res.status(200).send({ reponse: result, message: "movie deleted" })
      : res.send("there is no movie with this title");
  } catch (error) {
    res.status(500).send("can not deleted movie");
  }
});
//update movie
router.put("/:id", async (req, res) => {
  try {
    let result = await movie.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    result.modifiedCount
      ? res.status(200).send({ message: "movie update" })
      : res.status(200).send({ message: "movie already updated" });
  } catch (error) {
    res.status(500).send("not update");
    console.log(object);
  }
});
// get one movie
router.get("/:id", async (req, res) => {
  try {
    let result = await movie.findOne({ _id: req.params.id });
    res.status(200).send({ reponse: result, message: "getted one movie" });
  } catch (error) {
    res.status(500).send("can not get this movie");
  }
});

module.exports = router;
