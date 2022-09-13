const { Router } = require("express");
const movieRouter = Router();
const { listMovies, addMovie, deleteMovie, updateMovie } = require("./movieControllers");
const { tokenCheck } = require("../middleware");


movieRouter.get("/movies", listMovies);
movieRouter.post("/movies", tokenCheck ,addMovie);
movieRouter.delete("/movies", tokenCheck ,deleteMovie);
movieRouter.put("/movies", tokenCheck ,updateMovie);


// SHORT HAND VERSION
// movieRouter.route('/movies').post(addMovie).get(listMovies).put(putMovie).delete(deleteMovie);

module.exports = movieRouter;
