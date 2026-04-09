// Handles request related to movie
const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deletedMovie
} = require("../controllers/movieController");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();
//sends req to get home page
router.get("/",getHome);
//sends req to get all movies
router.get("/movies",getAllMovies);
//sends req to get movies based on id
router.get("/movies/:id",getMovieById);
//sends to create new movie
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
//sends request to update movie details
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
//sends a request to delete movie
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deletedMovie);
module.exports = router;