const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    const query = `
        SELECT * FROM "movies_genres"
        JOIN "movies" ON "movies_genres"."movie_id"="movies"."id"
        WHERE "movies_genres"."movie_id"=$1
    `;
    const movieId = req.params.id;
    sqlValues = [movieId]

    console.log(query);
    

  pool.query(query, sqlValues)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movie genres', err);
      res.sendStatus(500)
    })
});

module.exports = router;