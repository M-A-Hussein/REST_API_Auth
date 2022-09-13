const  Movie = require('./movieModel')



exports.addMovie = async (req, res) => {
    try{
        const movie = await Movie.create(req.body);
        res.status(201).send({message:"successfully added movie", movie})
    }catch (error) {
        console.log(error);
        res.status(404).send({ message: error })
    }
}






exports.listMovies = async (req, res) => {
    try{
        const movie = await Movie.find({});
        if (movie.length === 0 ){
            res.status(200).send({ message: "There are no movies in the database"})
        }else {
            res.status(200).send({ message: "success", movie })
        }
        
    }catch (error) {
        console.log(error);
        res.status(500).send({message: error});
    }
};




exports.deleteMovie = async (req, res) => {
    try{
      const info = await Movie.deleteOne({title: req.body.title})
        res.status(201).send({message: "successsfully removed", info})
    }catch (error) {
        console.log(error);
        res.status(500).send({ message: error });
    }
};


exports.updateMovie = async (req, res) => {
    try{
        await Movie.updateOne({title: req.body.title}, {$set: {actors: req.body.actors} });
        res.status(200).send({message: "Successfully updated movie"})
    }catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}