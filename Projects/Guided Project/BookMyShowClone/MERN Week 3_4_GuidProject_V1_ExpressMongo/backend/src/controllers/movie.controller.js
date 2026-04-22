const movieService = require("../services/movie.service");
//Create Movie
exports.createMovie = async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);
        res.status(201).json({
            success: true,
            message: "Movie created successfully",
            data: movie,
        });
    } catch (error) {
        next(error);
    }
};
//Get movies
exports.getMovies = async (req, res) => {
    try {
        const movies = await movieService.getMovies(req.query);
        res.status(200).json({
            success: true,
            message: "Movie List fetched",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
// update movie
exports.updateMovie = async (req, res) => {
    try {
        const movie = await movieService.updateMovie(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Movie updated successfully",
            data: movie,
        });
    } catch (error) {
        next(error);
    }
};
//Delete Movie
exports.deleteMovie = async (req, res) => {
    try {
        await movieService.deleteMovie(req.params.id);
        res.status(200).json({
            success: true,
            message: "Movie deleted successfully",

        });
    } catch (error) {
        next(error);
    };
};


