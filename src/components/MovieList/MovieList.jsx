// IMPORT COMPONENTS
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieListItem from '../MovieListItem/MovieListItem.jsx'

// COMPONENT FUNCTION
function MovieList() {

    // Define Import Variables
    const dispatch = useDispatch();

    // Define Redux Store Variables
    const movies = useSelector(store => store.movies);

    // Run Code on Page Load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // Render on the DOM
    return (
        <main>
            <h1>MovieList</h1>
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