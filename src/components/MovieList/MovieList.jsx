// IMPORT COMPONENTS
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import MovieListItem from '../MovieListItem/MovieListItem.jsx'

// COMPONENT FUNCTION
function MovieList() {

    // Define Import Variables
    const dispatch = useDispatch();
    const history = useHistory();

    // Define Redux Store Variables
    const movies = useSelector(store => store.movies);

    // Run Code on Page Load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function handleAddMovieButton () {
        history.push('/add_movie');
    }

    // Render on the DOM
    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={handleAddMovieButton}>Add Movie</button>
            <section className="movies">
                {movies.map((movie) => (
                    <MovieListItem key={movie.id} movieItem={movie}/>
                ))}
            </section>
        </main>
    );
}

// EXPORT COMPONENT
export default MovieList;